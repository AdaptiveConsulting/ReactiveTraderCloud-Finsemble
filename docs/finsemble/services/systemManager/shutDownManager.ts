// this code was pulled out of old service manager

import Logger from "../../clients/logger";
import { System } from "../../common/system";
import RouterClient from "../../clients/routerClientInstance";
import { series as asyncSeries} from "async";
import * as Constants from "../../common/constants";
import { killOldApplications } from "./common"
import { FSBLDependencyManager } from "../../common/dependencyManager";
import SystemManagerClient from "../../common/systemManagerClient";


/**
 * Manages an orderly shutdown of Finsemble
 */
class Shutdown {
	finUUID: object;
	//Will be set to 'restart' in the restart fork.
	quitType: string = "quit";

	/**
	 * Number of services loaded on startup.
	 */
	servicesLoaded = [];

	/**
	 * Number of services that have responded to the shutdownRequest.
	 */
	servicesResponded = [];

	/**
	 * Which services will need to compelete some kind of cleanup.
	 */
	waitFor = [];

	createdApps = [];
	splinterAgentPool = null;

	finsembleConfig;

	constructor(params) {
		this.finsembleConfig = params.manifest.finsemble;
		this.finUUID = params.finUUID;
		this.forceRestart = this.forceRestart.bind(this);
	}

	/**
	 * Dynamically sets splinter agent pool during boot
	 * @param splinterAgentPool
	 */
	setSplinterAgentPool(splinterAgentPool) {
		this.splinterAgentPool = splinterAgentPool;
	}

	/**
	 * Will check to see if all services have:
	 * 1. responded to the shutdownRequest, and
	 * 2. If they needed to cleanup, whether they've finished.
	 *
	 * If everyone is nice and tidy, the app quits or restarts.
	 */
	attemptQuit() {
		if (this.quitType === "quit") {
			this.shutdownFinsemble();
		} else if (this.quitType === "restart") {
			this.forceRestart();
		}
	}

	forceRestart() {
		function restartApp() {
			System.Application.getCurrent().restart();
		}

		//Check for Electron or OpenFin. We only need to call to closeAllApplications when OpenFin. At this point (for Electron) the windows have already been killed.
		if (System.container !== "Electron") {
			this.closeAllApplications(restartApp);
		} else {
			restartApp();
		}
	}

	closeAllApplications(cb) {
		//no logger messages sent because it'll be down at this point.
		console.info("APPLICATION LIFECYCLE:SHUTDOWN:Closing all applications:start");
		let myUuid = this.finUUID;

		asyncSeries([
			(callback) => {
				if (this.splinterAgentPool) this.splinterAgentPool.shutdown(callback);
				//callback(); //uncomment this line and comment above line to test restart issues
			},
			async (callback) => {
				for (let app of this.createdApps) {
					await System.closeApplication(app);
				}
				callback();
			}
		], cb);

	}

	shutdownFinsemble() {
		this.closeAllApplications(() => {
			System.closeApplication(System.Application.getCurrent());
		});
	}

	/**
	 * When FSBL transmits on the `Application.shutdown` channel, we receive it here. From here, we ask all services to go ahead and compelte any cleanup that they need to take care of.
	 */
	transmitShutdownRequest() {
		let logMessage = "APPLICATION LIFECYCLE:SHUTDOWN:transmitShutdownRequest:Sending out message to shut down.";
		console.info(logMessage);
		Logger.system.log(logMessage);

		const ApplicationState: ApplicationState = {
			state: "closing"
		}
		RouterClient.publish(Constants.APPLICATION_STATE_CHANNEL, ApplicationState);
		let timeout = this.finsembleConfig.shutdownTimeout || 10000;
		setTimeout(async () => {
			if (System.container !== "Electron") await killOldApplications(this.finUUID);
			System.closeApplication(System.Application.getCurrent());
		}, timeout);

		//TODO: Original code had a check for Openfin 8.26 and it called forceKill instead of system.exit
	}

	/**
	 * When FSBL transmits on the `Application.shutdown` channel, we receive it here. From here, we ask all services to go ahead and compelte any cleanup that they need to take care of.
	 */
	transmitRestartRequest(err, response) {
		/*if (response.data && response.data.forceRestart) { // Force restart without proper close breaks because we dont kill everything anymore
			return this.forceRestart();
		}*/
		let logMessage = "APPLICATION LIFECYCLE:SHUTDOWN:transmitShutdownRequest:Sending out message to shut down.";
		console.info(logMessage);
		Logger.system.log(logMessage);
		Logger.system.debug("shutdownManager.transmitRestartRequest");
		this.quitType = "restart";
		const ApplicationState: ApplicationState = {
			state: "closing"
		}
		RouterClient.publish(Constants.APPLICATION_STATE_CHANNEL, ApplicationState);

		let timeout = this.finsembleConfig.shutdownTimeout || 10000;
		setTimeout(this.forceRestart, timeout);
	}
}


export class ShutdownManager {
	shutdown: Shutdown;
	manifest: object;
	finsembleConfig: any;
	restartg: object;
	shutdownList: object[];

	constructor(params) {
		Logger.system.log("shutdownManager", params);
		this.manifest = params.manifest;
		this.finsembleConfig = params.manifest.finsemble; // enough to get started -- later will replace will complete processed config;
		this.shutdown = new Shutdown({ finUUID: params.finUUID, manifest: params.manifest });
		this.shutdownList = [];
		this.restart = this.restart.bind(this);
	}

	/**
	 * Dynamically sets splinter agent pool during boot
	 * @param splinterAgentPool
	 */
	public setSplinterAgentPool(splinterAgentPool) {
		this.shutdown.setSplinterAgentPool(splinterAgentPool);
	}

	public addAppToShutdownList(app) {
		this.shutdownList.push(app);
	}

	// this function is not invoked until after all the boot stages have completed, so all startup services have been spawned.
	public setupShutdownListeners(activeServices: string[]) {
		/***
		 * We filter the routerService because of a complex series of race conditions unique to the router service.
		 * The routerService does not use the base service, but it does use the dependency manager.
		 * The dependency manager uses the routerClient to communicate with the ServiceManager to figure out when services come online and when they go offline.
		 * The dependency manager has logic in it to set services offline if it previously knew that the service was online.
		 * Because the dependency manager inside of the routerService does not get the initial list of
		 * online services, it's unable to use the dependency manager to defer action on shutdown.
		 * What this means practically is that the routerService times out after 10 seconds, because it's waiting for the LoggerService to shut down. The Logger will never shut down as far as the
		 * routerService is concerned.
		 *
		 * Fixing that race condition involved changes across 4 or 5 files. After discussion with the Ian, Mike, and Sidd, we decided that filtering out the routerService was the simpler solution.
		 */
		const servicesToWaitFor = activeServices.filter(name => name !== "routerService");

		Logger.system.debug("shutdownManager.setupShutdownListeners Will wait for the following services at shutdown", servicesToWaitFor);
		console.log("Will wait for the following services at shutdown", servicesToWaitFor);

		// it's now okay to constructure the dependency manager
		let dependencyManager = new FSBLDependencyManager();

		dependencyManager.shutdown.waitFor({ services: servicesToWaitFor }, this.shutdown.attemptQuit.bind(this.shutdown));

		/**
		 * Adds listeners for an application quit, and for two other messages:
		 * 1. Listens for a response to the shutdownRequest, and
		 * 2. Listens for a "Hey I'm finished" on `Finsemble.serviceOffline`.
		 */
		RouterClient.addListener("Application.shutdown", this.shutdown.transmitShutdownRequest.bind(this.shutdown));
		RouterClient.addListener("Application.restart", this.shutdown.transmitRestartRequest.bind(this.shutdown));
	}

	restart(err, response) {
		this.shutdown.transmitRestartRequest(err, response);
	}

}