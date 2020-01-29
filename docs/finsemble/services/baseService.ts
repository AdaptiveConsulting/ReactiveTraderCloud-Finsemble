/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { FSBLDependencyManagerSingleton as FSBLDependencyManager } from "../common/dependencyManager";
import RouterClient from "../clients/routerClientInstance";
import Logger from "../clients/logger";
import SystemManagerClient from "../common/systemManagerClient";
import { System } from "../common/system";
import * as Constants from "../common/constants";
import { IRouterClient } from "../clients/IRouterClient";

import {
	series as asyncSeries,
	asyncify as asyncAsyncify,
	each as asyncEach,
	timeout as asyncTimeout
} from "async";

const { SERVICE_INITIALIZING_CHANNEL, SERVICE_READY_CHANNEL, SERVICE_QUERY_READY_CHANNEL, SERVICE_CLOSING_CHANNEL, SERVICE_CLOSED_CHANNEL, SERVICE_STOP_CHANNEL } = Constants;
const defaultBaseServiceParams: ServiceConstructorParams = {
	startupDependencies: {
		services: [],
		clients: []
	},
	shutdownDependencies: {
		services: []
	},
	addOFWrapper: false,
	name: window.name
};
/**
 * @introduction
 * <h2>Base Service</h2>
 *
 * The Base Service is available with any of Finsemble's advanced packages.
 *
 * Creates an instance of the Base Service which all service must inherit. Services are spawned from your <i>service.json</i> file and managed by a helper thread - the <b>Service Manager</b>.
 * Services communicate their status and receive status of other services through the Service Manager.
 * Services have an initial handshake with the Service Manager on load, and then either go online or wait for dependant services to come online.
 * Service initialization is completely asynchronous, which allows all services to load at the same time, as long as their dependencies have been met.
 * @constructor
*/
export class BaseService {
	customData: any;
	initialize: Function;
	listeners: {
		onShutdown?: Function[];
	};
	Logger: any;
	onBaseServiceReadyCB: null | Function;
	name: string;
	parentUuid: string;
	RouterClient: IRouterClient;
	setOnConnectionCompleteCB: null | Function;
	shutdownDependencies: FinsembleDependencyObject;
	start: Function;
	started: boolean;
	startupDependencies: FinsembleDependencyObject
	status: ServiceState;

	constructor(params = defaultBaseServiceParams) {
		fixParams(params);
		this.name = params.name ? params.name : window.name;
		this.startupDependencies = params.startupDependencies;
		this.shutdownDependencies = params.shutdownDependencies;
		this.Logger = Logger;
		this.RouterClient = RouterClient;
		//this.parentUuid = System.Application.getCurrent().uuid;
		this.onBaseServiceReadyCB = null;
		this.setOnConnectionCompleteCB = null;
		this.listeners = {};
		this.start = this.waitForDependencies;
		this.started = false;
		/**
		 * Service status
		 * @type {ServiceState}
		 */
		this.status = "initializing";
		this.setOnline = this.setOnline.bind(this);
		this.onBaseServiceReady = this.onBaseServiceReady.bind(this);
		this.handleShutdown = this.handleShutdown.bind(this);
		this.waitForDependencies();
	}

	/**
	* Waits for the dependencies. At the end of this function, it will trigger the child service's initialize function (or onBaseServiceReady).
	* @note This used to be BaseService.start
	* @private
	*/
	waitForDependencies() {
		var self = this;
		//For backwards compat. note Start used to be invoked after the constructor.
		//note do this later

		if (this.started) return;

		this.started = true;
		var service = this;
		Logger.system.debug(`${this.name} starting`);

		function cacheCustomData(done) {
			Logger.system.debug("BaseService.start.setParentUUID");
			System.Window.getCurrent().getOptions((opts) => {
				service.customData = opts.customData;
				service.parentUuid = opts.customData.parentUuid;
				done();
			});
		}

		function onRouterReady(done) {
			RouterClient.onReady(function () {

				// Here is the responder to allow each client to handshake with its service to make sure its ready
				RouterClient.addResponder(SERVICE_QUERY_READY_CHANNEL(self.name), (err, message) => {
					if (self.status = "ready") {
						message.sendQueryResponse(null)
					} else {
						message.sendQueryResponse("service not ready");
					}
				});

				RouterClient.transmit(SERVICE_INITIALIZING_CHANNEL, { name: service.name });
				window.addEventListener("beforeunload", service.RouterClient.disconnectAll);
				Logger.system.debug("APPLICATION LIFECYCLE:STARTUP:SERVICE:BaseService.start.onRouterReady");
				done();
			});
		}

		// supports option to delay the debug based on service config's debugServiceDelay value (passed in through custom data).
		function debugDelay(done) {
			const debugServiceDelay = service.customData.debugServiceDelay || 0;
			Logger.system.debug(`Custom Data: ${service.name} custom data`, service.customData);

			if (!Number.isInteger(debugServiceDelay)) {
				const errorMsg = `debugDelay has an illegal value ("${debugServiceDelay}") for ${service.name}. Value must be an integer.`;
				Logger.system.error(`APPLICATION LIFECYCLE:STARTUP:SERVICE:BaseService.start: ${errorMsg}`);
				SystemManagerClient.systemLog({ error: true }, errorMsg);
			} else if (debugServiceDelay > 0) {
				Logger.system.debug(`APPLICATION LIFECYCLE:STARTUP:SERVICE:BaseService.start.debugDelay: ${service.name} startup will delayed by ${debugServiceDelay} milliseconds for debugging`);
			}

			// invoke done() after optional debug delay
			setTimeout(done, debugServiceDelay);
		}

		function readyToGo(done) {
			Logger.system.debug(`APPLICATION LIFECYCLE:STARTUP:SERVICE:BaseService.start.readyToGo ${service.name}`);
			console.log(performance.now(), "ReadyToGo called");
			console.log("Startup Dependencies for", service.name, service.startupDependencies);
			console.log("Shutdown Dependencies for", service.name, service.shutdownDependencies);
			FSBLDependencyManager.shutdown.waitFor(service.shutdownDependencies, service.handleShutdown);
			Logger.system.debug(`APPLICATION LIFECYCLE:STARTUP:SERVICE:BaseService.start.readyToGo after wait ${service.name}`);

			RouterClient.transmit(`${System.Window.getCurrent().name}.onSpawned`, {});

			//`done` invoked when all dependencies are up
			let dependency = FSBLDependencyManager.startup.waitFor(service.startupDependencies, done);
			dependency.on("err", (err) => {
				Logger.system.error(err);
			});
		}
		function showDeveloperTools(done) {
			const myWindow = System.Window.getCurrent();
			myWindow.isShowing((isShowing) => {
				if (isShowing && service.customData.showDevConsoleOnVisible !== false) {
					System.showDeveloperTools(
						myWindow.uuid,
						myWindow.name,
						done
					);
				} else {
					Logger.system.debug("APPLICATION LIFECYCLE:STARTUP:SERVICE:BaseService.start.delayStartup done");
					done();
				}
			})
		}
		return new Promise((resolve, reject) => {
			asyncSeries([
				onRouterReady,
				cacheCustomData,
				showDeveloperTools,
				debugDelay,
				readyToGo
			], () => {
				resolve();
				this.onDependenciesReady();
			});
		});
	}
	/**
	 * Transmits the serviceOnline message that the rest of the dependency manager objects system are listening for.
	 */
	setOnline() {
		if (this.status !== "ready") {
			console.log("Setting service online", this.name);

			this.RouterClient.addListener(SERVICE_STOP_CHANNEL + "." + this.name, (err, response) => {
				this;
				FSBLDependencyManager.shutdown.checkDependencies();
			});

			this.status = "ready";
			RouterClient.transmit(SERVICE_READY_CHANNEL, { serviceName: this.name }); // notify service manager
			Logger.system.log("APPLICATION LIFECYCLE:STARTUP:SERVICE ONLINE", this.name);
			SystemManagerClient.publishBootStatus(this.name, "services", "completed");
		}
	}
	/**
	 * Invokes a method passed in (or on) the object that inherits from the BaseService. In other words, the service instance will have its initialize function called, unless it's using old code, in which case we will have cached the callback earlier.
	 */
	onDependenciesReady() {
		Logger.system.debug("APPLICATION LIFECYCLE:STARTUP:BaseService onDependenciesReady", this.name);
		this.status = "initializing"; // must change from offline here; otherwise race condition waiting to call this.setOnline
		RouterClient.onReady(() => {
			//These first two blocks are for backward compatibility. The 3rd (initialize) is how it should be done.
			if (this.onBaseServiceReadyCB) {
				// if inheriting service provided a "connection complete" callback, then invoke before sending online
				this.onBaseServiceReadyCB(this.setOnline);
			} else if (this.initialize) {
				this.initialize(this.setOnline);
			} else {
				//otherwise setOnline need sto be called manually.
				setTimeout(() => {
					if (this.status !== "ready" && this.name !== "routerService") {
						console.error("No onBaseServiceReadyCB on initialize function defined on your service. Ensure that service.setOnline is called");
						Logger.system.error("No onBaseServiceReadyCB on initialize function defined on your service. Ensure that service.setOnline is called");
					}
				}, 3000);
			}
		});
	}

	/**
	 * Conduct operations when the base service becomes ready.
	 *
	 * @param {function} func Any function of code desired to execute when ready.
	 */
	onBaseServiceReady(func) { // used by the inheriting service to know where baseService init is complete
		if (this.status === "initializing") {
			//onBaseServiceReady is backwards-compatibility stuff.
			this.onBaseServiceReadyCB = () => {
				func(this.setOnline);
			};
		} else {
			func(this.setOnline);
		}
	}
	/**
	 * Really only for shutdown right now. Simple array that gets looped through on shutdown.
	 * @param {string} listenerType Any event identifier the service provides to operate with.
	 * @param {function} callback The callback to be invoked after the method completes successfully.
	 */
	addEventListener(listenerType, callback) {
		if (!this.listeners[listenerType]) {
			this.listeners[listenerType] = [];
		}
		this.listeners[listenerType].push(callback);
	}

	/**
	 * When the application sends out a shutdown message, this function is invoked. It iterates through any registered cleanup methods. When all of them have finished, it sends a response to the application saying that it's completed cleanup (`shutdownComplete`, below).
	 * @private
	*/
	onShutdown(cb) {
		this.addEventListener("onShutdown", cb);

	}

	/**
	 * When the application sends out a shutdown message, this function is invoked. It iterates through any registered cleanup methods. When all of them have finished, it sends a response to the application saying that it's completed cleanup (`shutdownComplete`, below).
	 * @private
	*/
	handleShutdown(err, message) {
		Logger.system.debug("BaseService.handleShutdown")

		var self = this;
		function handleShutdownAction(handler, done) {
			let cleanup = asyncAsyncify(handler);
			cleanup(null, done);
		}
		function shutdownComplete(err?, data?) {
			if (err) {
				Logger.system.error(err);
			}
			self.shutdownComplete();
		}
		if (this.listeners.onShutdown) {
			RouterClient.transmit(SERVICE_CLOSING_CHANNEL, {
				waitForMe: true,
				name: this.name
			});
			asyncEach(this.listeners.onShutdown, handleShutdownAction, shutdownComplete);
		} else {
			RouterClient.transmit(SERVICE_CLOSING_CHANNEL, {
				waitForMe: false,
				name: this.name
			});
			self.shutdownComplete();
		}
	}
	/**
	 * Fired when all cleanup methods have been finished.
	 * @private
	*/
	shutdownComplete() {
		Logger.system.info(`"APPLICATION LIFECYCLE:SHUTDOWN:SERVICE SHUTDOWN: ${this.name}`);
		RouterClient.transmit(SERVICE_CLOSED_CHANNEL, {
			name: this.name,
			uuid: System.Application.getCurrent().uuid
		});
	}
}

// ensures all service errors will be caught
window.addEventListener("error", function (errorObject) {
	var stack = errorObject.error ? errorObject.error.stack.substring(errorObject.error.stack.search("at ")) : ""; // strip off irrelevant part of stack
	Logger.error(errorObject.message,
		"File: " + errorObject.filename,
		"Line: " + errorObject.lineno,
		"Column: " + errorObject.colno,
		"Error Stack: \n    " + stack
	);
	return false;
});
//catch promise errors
window.addEventListener("unhandledrejection", function (event: any) {
	if (event.reason == "Cannot Wrap Service Manager or Services") {
		Logger.warn("A service tried To wrap itself. This is a side effect of using Clients in services.")
	} else {
		Logger.error("Unhandled rejection", "reason", event.reason)
	}
});
/**
 *
 * @private
 */
function fixParams(params) {
	if (params.startupDependencies) {
		if (!params.startupDependencies.services) params.startupDependencies.services = defaultBaseServiceParams.startupDependencies.services;
		if (!params.startupDependencies.clients) params.startupDependencies.clients = defaultBaseServiceParams.startupDependencies.clients;
	} else {
		params.startupDependencies = defaultBaseServiceParams.startupDependencies;
	}
	if (params.shutdownDependencies) {
		if (!params.shutdownDependencies.services) params.shutdownDependencies.services = defaultBaseServiceParams.shutdownDependencies.services;
	} else {
		params.shutdownDependencies = defaultBaseServiceParams.shutdownDependencies;
	}
}
