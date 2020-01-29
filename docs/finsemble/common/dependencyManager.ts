import { EventEmitter } from "events";
import RouterClient from "../clients/routerClientInstance";
const STARTUP_TIMEOUT_DURATION = 10000;
import { APPLICATION_STATE_CHANNEL, SERVICES_STATE_CHANNEL, SERVICE_CLOSED_CHANNEL, SERVICE_QUERY_READY_CHANNEL, CLIENT_SERVER_MAPPING } from "./constants";
import SystemManagerClient from "./systemManagerClient";
import Logger from "../clients/logger";

type StartupDependencyParams = {
	callback: Function;
	dependencies: string[];
}
/**
 * Small class to hold on to dependencies and callbacks. Also emits a timeout event that the startupManager is listening for. When it times out, the startupManager catches the event and generates a message that includes all of the offline clients and services. It then causes this class to emit an  err event that the baseService is listening for. This arrangement is set up for a couple of reasons.
 * 1. I can't use the logger in here because the logger uses the startupManager, and there'd be a circular dependency.
 * 2. FSBLDependencyManager is a singleton, and there can be multiple services living in a single window. I didn't want them all to log that they were offline if they weren't (e.g., if I'd put the emitter on the StartupManager instead of this class).
 */
class StartupDependency extends EventEmitter {
	startupTimer: number | null;
	callback: Function;
	dependencies: string[];
	constructor(params: StartupDependencyParams) {
		super();
		this.callback = params.callback;
		this.dependencies = params.dependencies;
		this.startupTimer = null;
		this.setStartupTimer = this.setStartupTimer.bind(this);
		this.clearStartupTimer = this.clearStartupTimer.bind(this);
		this.setStartupTimer();
	}

	/**
	 * Removes the startup timer (because the dependency was resolved within the allotted time);
	 */
	clearStartupTimer() {
		clearTimeout(this.startupTimer);
		delete this.startupTimer;
	}
	/**
	 * If the dependency hasn't resolved within STARTUP_TIMEOUT_DURATION, emit a timeout event that the StartupManager can catch.
	 */
	setStartupTimer() {
		let self = this;
		//+ coerces the result to a number, making typescript happy.
		this.startupTimer = +setTimeout(() => {
			self.emit("timeout");
		}, STARTUP_TIMEOUT_DURATION);
	}
}

/**
 * Used to generate a unique ID for the list of dependencies.
 */
function uuidv4() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
/**
 * @private
 */
class StartupManager {
	onlineClients: string[];
	onlineServices: string[];
	dependencies: object;
	AuthorizationCompleted: boolean;
	startupTimers: object;
	startupTimerFired: boolean;
	servicesAreAllOnline: object = {};
	clientsAreAllOnline: object = {};

	/**
	 * @private
	 */
	constructor() {
		this.onlineClients = [];
		this.dependencies = {};
		this.startupTimers = {};
		this.startupTimerFired = false;
		this.bindCorrectContext();
	}
	/**
	 * This function and `checkDependencies` are the most important parts of this class. This function accepts a FinsembleDependency object and a callback to be invoked when all required dependencies are ready.
	 *
	 * @param {FinsembleDependency} dependencies
	 * @param {any} callback
	 * @memberof StartupManager
	 */
	waitFor(dependencies, callback) {
		let id = uuidv4();

		//Set defaults to an empty array if they aren't passed in.
		if (!dependencies.clients) dependencies.clients = [];
		//The dependency manager can pass in a name to the dependency. If it does, we'll use it. If not, we won't.

		if (dependencies.clients.length) {
			//Lowercase the first letter of the client.
			dependencies.clients = dependencies.clients.map(clientName => {
				return clientName.charAt(0).toLowerCase() + clientName.slice(1);
			});
		}

		let dependency = new StartupDependency({ dependencies, callback });

		//If the dependency times out, throw an error that the baseService can catch. It will then log out why it's not online.
		dependency.on("timeout", () => {
			this.onDependencyTimeout(dependency);
		});

		this.dependencies[id] = dependency;
		this.checkDependencies();
		return dependency;
	}

	/**
	 * This method generates a helpful error message giving possible reasons for why the service is offline. After the message is generated, it emits an event on the dependency that's passed in as a parameter. The BaseService is listening for this event, and logs the error message to the central logger.
	 * @param {Dependency} dependency
	 */
	onDependencyTimeout(dependency) {
		const NEW_LINE = "\n",
			TAB = "\u0009",
			BULLET = "\u2022",
			BULLET_POINT = NEW_LINE + TAB + BULLET,
			STORAGE_ADAPTER_ERROR = "The default storage adapter failed to fully initialize, or has a syntax error. Ensure that the default storage adapter is up, connected, and sending/receiving data properly.";


		let offlineClients = this.getOfflineClients();
		let errorMessage = `APPLICATION LIFECYCLE:STARTUP:Dependency not online after ${STARTUP_TIMEOUT_DURATION / 1000} seconds.`;

		if (offlineClients.length) {
			errorMessage += ` Waiting for these clients: ${offlineClients.join(", ")}.`;
		}


		//The BaseService is listening for this event, and will log the errorMessage to the central logger.
		dependency.emit("err", errorMessage);
	}
	/**
	 * This function loops through all of the registered dependencies and checks to see if the conditions have been met. If so, it invokes the callback and removes the reference to the dependency.
	 *
	 * @memberof StartupManager
	 */
	checkDependencies() {
		for (let id in this.dependencies) {
			let dependency = this.dependencies[id];
			let { dependencies, callback } = dependency;

			if (dependencies.clients.length && !this.clientsAreAllOnline[id]) {
				this.clientsAreAllOnline[id] = this.checkClients(dependencies.clients);
				if (!this.clientsAreAllOnline[id]) {
					continue;
				}
			}
			delete this.dependencies[id];
			dependency.clearStartupTimer();
			if (callback) {
				callback();
			}
		}
	}

	getOfflineClients() {
		let offlineClients = [];
		for (let id in this.dependencies) {
			let { dependencies } = this.dependencies[id];
			offlineClients = offlineClients.concat(dependencies.clients.filter((dep) => !this.onlineClients.includes(dep)));
		}
		//return deduped list.
		return offlineClients.filter((client, i) => offlineClients.indexOf(client) === i);
	}

	/**
	 * Iterates through required client list, returns false if any required client is offline.
	 *
	 * @param {any} clientList

	 * @memberof StartupManager
	 */
	checkClients(clientList) {
		return clientList.every(client => this.onlineClients.includes(client));
	}

	/**
	 *
	 *
	 * @param {any} clientName

	 * @memberof StartupManager
	 */
	setClientOnline(clientName) {
		//This check is done because multiple clients of the same type can be on a page.
		if (this.onlineClients.includes(clientName)) {
			return;
		}
		this.onlineClients.push(clientName);
		this.checkDependencies();

		// Note From Mike: Must change or workaround how some client usage triggers this code even though the client's service is NOT ready.
		// This problem happens because some services initialize their clients when the client's service hasn't been created yet, but then don't use the client until later.
		// So although the general code is correct here, the overall result is not (specifically the queries will timeout causing delays, error logging, and potential side effects).
		// Therefore disabling this handshake code for now -- BUT KEEP CODE COMMENTED-OUT CODE UNTIL THIS IS RESOLVED. Just to be clear, nothing breaks without this code, but this
		// code is what generates an error when improperly using a client...so it provides a needed check.
		// let serviceName = CLIENT_SERVER_MAPPING(clientName);
		// if (true /*disabling*/ && serviceName) {
		// 	console.debug("SERVICE_QUERY_READY_CHANNEL querying", clientName, SERVICE_QUERY_READY_CHANNEL(serviceName));
		// 	// before going online make sure this client's service is ready -- it should be until there is a startup problem
		// 	RouterClient.query(SERVICE_QUERY_READY_CHANNEL(serviceName), {}, { timeout: 500 }, (err) => {
		// 		if (err) {
		// 			Logger.system.error(`DependencyManager: server ${serviceName} is not ready for client ${clientName}. ${err}. Make sure dependencies client dependencies are correct.`)
		// 		} else {
		// 			Logger.system.debug(`DependencyManager: server ${serviceName} is ready for client ${clientName} `)
		// 		}
		// 		this.onlineClients.push(clientName);
		// 		this.checkDependencies();
		// 	});
		// } else {
		// 	this.onlineClients.push(clientName);
		// 	this.checkDependencies();
		// }
	}
	/**
	 * Returns the array of online clients.
	 *

	 * @memberof StartupManager
	 */
	getOnlineClients() {
		return this.onlineClients;
	}
	/**
	 * Method to make sure that `this` is correct when the callbacks are invoked.
	 *
	 * @memberof StartupManager
	 */
	bindCorrectContext() {
		this.checkDependencies = this.checkDependencies.bind(this);
		this.checkClients = this.checkClients.bind(this);
		this.getOfflineClients = this.getOfflineClients.bind(this);
		this.onDependencyTimeout = this.onDependencyTimeout.bind(this);
		this.waitFor = this.waitFor.bind(this);
	}
}
/**
 * @private
 */
class ShutdownManager {
	offlineServices: string[];
	dependencies: object;
	/**
	 * @private
	 */
	constructor() {
		this.offlineServices = [];
		this.dependencies = {};
		this.checkDependencies = this.checkDependencies.bind(this);
	}

	/**
	 * This function and `checkDependencies` are the most important parts of this class. This function accepts a FinsembleDependency object and a callback to be invoked when all required dependencies are ready.
	 *
	 * @param {FinsembleDependency} dependencies
	 * @param {any} callback
	 * @memberof StartupManager
	 */
	waitFor(dependencies, callback) {
		Logger.system.debug(`DependencyManager:waitFor`, dependencies);

		//Set defaults to an empty array if they aren't passed in.
		if (!dependencies.services) {
			dependencies.services = [];
		}

		let id = uuidv4();

		this.dependencies[id] = { dependencies, callback };
	}
	/**
	 * This function loops through all of the registered dependencies and checks to see if the conditions have been met. If so, it invokes the callback and removes the reference to the dependency.
	 *
	 * @memberof ShutdownDependencies
	 */
	checkDependencies() {
		console.debug("checkDependencies", this.dependencies);
		if (Object.keys(this.dependencies)) {
			for (let id in this.dependencies) {
				let { dependencies, callback } = this.dependencies[id];
				Logger.system.debug(`DependencyManager:checkDependency`, dependencies.services, this.offlineServices);

				if (dependencies.services.length) {
					let servicesAreAllOffline = this.checkServices(dependencies.services);
					if (!servicesAreAllOffline) {
						continue;
					}
				}
				console.debug("checkDependencies callback");
				delete this.dependencies[id];
				if (callback) {
					callback();
				}
			}
		}

	}
	/**
	 * Iterates through required service list, returns false if any required service is offline.
	 *
	 * @param {any} serviceList

	 * @memberof ShutdownManager
	 */
	checkServices(serviceList) {
		return serviceList.every(service => this.offlineServices.includes(service));
	}

	setServiceOffline(service) {
		Logger.system.debug("setServiceOffline", service);
		console.debug("setServiceOffline", service);
		this.offlineServices.push(service);
		this.checkDependencies();
	}

}


/**
 * This class handles FSBL client/service dependency management. Given a list of services and/or clients, it will invoke a callback when all dependencies are ready.
 *
 * The constructor is exported for the system mananger's shutDownManager so that class isn't constructed until right time in the starup process.
 * Otherwise, this class is used as a singleton thoughout the rest of the system.
 *
 * @shouldBePublished false
 * @private
 * @class FSBLDependencyManager
 */
export class FSBLDependencyManager extends EventEmitter {
	/**
	 * Binds context, and listens for services to come online.
	 * Creates an instance of FSBLDependencyManager.
	 * @private
	 * @memberof FSBLDependencyManager
	 */
	startup: StartupManager;
	shutdown: ShutdownManager;
	AuthorizationCompleted;
	RouterClient;
	name;
	constructor() {
		super();
		this.startup = new StartupManager();
		this.shutdown = new ShutdownManager();
		this.RouterClient = RouterClient;
		this.AuthorizationCompleted = false;
		this.bindCorrectContext();
		this.onAuthorizationCompleted(this.startup.checkDependencies);
		RouterClient.onReady(this.listenForServices);
	}
	/**
 * Method to make sure that `this` is correct when the callbacks are invoked.
 *
 * @memberof StartupManager
 */
	bindCorrectContext() {
		this.listenForServices = this.listenForServices.bind(this);
		this.onAuthorizationCompleted = this.onAuthorizationCompleted.bind(this);
	}

	setClientOnline(client) {
		this.startup.setClientOnline(client);
	}
	/*
	* handler for when a service changes its state. If a service comes online or goes offline, dependencies are checked and callbacks invoked.
	*/
	onServiceStateChange(data) {
		let ServiceNames = Object.keys(data);
		//Iterate through all services. If it was online but isn't anymore, set it offline. If it was offline but now is, set it online.
		ServiceNames.forEach((serviceName: string) => {
			let state: ServiceState = data[serviceName].state;
			if (state === "closed") {
				this.shutdown.setServiceOffline(serviceName);
			}
		});
	}
	/**
	 * Listens on the router for services to come online. The first subscriber gets the activeServices as of object instantiation. The 2nd subscriber listens for services to come online after the object is created. We should consider make this all one subscriber, though I see the advantage of having this setup.
	 *
	 */
	listenForServices() {
		Logger.system.debug(`DependencyManager:listenForServices before wait`);
		var listenForServicesCallback;

		// wait until the essential parts of the microkernel stage is done so pubsub responders are available
		SystemManagerClient.waitForBootStage("kernel", "stageEntered", listenForServicesCallback = () => {
			Logger.system.debug(`DependencyManager:listenForServices after wait`);
			this.RouterClient.subscribe(SERVICES_STATE_CHANNEL, (err, event) => {
				Logger.system.debug(`DependencyManager:listenForServices SERVICES_STATE_CHANNEL`, event.data);
				this.onServiceStateChange(event.data);
			});

			// TODO: The pubsub responder doesnt seem to work here. IT works for the above when not closing.
			this.RouterClient.addListener(SERVICE_CLOSED_CHANNEL, (err, event) => {
				Logger.system.debug(`DependencyManager:listenForServices SERVICE_CLOSED_CHANNEL`, event.data);
				let services = {};
				services[event.data.name] = {
					state: "closed"
				}
				this.onServiceStateChange(services);
			});

			this.RouterClient.subscribe(APPLICATION_STATE_CHANNEL, (err, response: ApplicationStateChange) => {
				switch (response.data.state) {
					//authenticated will only be caught by components/services that are up before auth does its thing. Otherwise, a component/service coming up will have the 'ready' application state. In either case, we need to do the things below. But only once.
					case "authenticated":
					case "ready":
						break;
					case "closing":
						this.shutdown.checkDependencies();
						break;
				}
			});
		});
	}

	onAuthorizationCompleted(callback) {
		if (this.AuthorizationCompleted) {
			callback();
		} else {
			this.addListener("AuthorizationCompleted", callback);
		}
	}

}
/**
 * This class handles FSBL client/service dependency management. Given a list of services and/or clients, it will invoke a callback when all dependencies are ready. This is a singleton.
 * @shouldBePublished false
 * @private
 * @class FSBLDependencyManager
 */
export let FSBLDependencyManagerSingleton: FSBLDependencyManager = new FSBLDependencyManager();
export default FSBLDependencyManagerSingleton;
