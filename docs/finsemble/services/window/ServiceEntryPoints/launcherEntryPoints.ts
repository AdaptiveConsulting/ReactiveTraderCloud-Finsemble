import {
	WindowCreationParams,
} from "./Interface_BasePrivateWindow";

import {
	Interface_Window,
} from "./Interface_Window";

import RouterClient from "../../../clients/routerClientInstance";
import Logger from "../../../clients/logger";
import { FinsembleWindowInternal } from "../WindowAbstractions/FinsembleWindowInternal";

export class LauncherEntry {
	manifest: any;
	launcher: any;
	moduleReady: boolean = false;

	constructor(manifest, launcher) {
		this.manifest = manifest;
		this.launcher = launcher;
		this.bindAllFunctions();
		this.definePubicInterface();
	}

	async initialize(done) {
		done();
	}

	setReady() {
		this.moduleReady = true;
	}

	bindAllFunctions() {
		let self = this;
		for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(self))) {
			if (self[name] instanceof Function) {
				self[name] = self[name].bind(self); // only bind function properties
			}
		}
	}



	// invoked by serviceEntryPoint shutdown
	shutdown(done) {
		done();
	}

	definePubicInterface() {
		// Note: More Cleanup To Do: better to have all the router message handling done here, with pure calls into to the launcher (i.e. not passing in router message to launcher).
		// So for now using the laucher code close to as-is, although had to do some refactoring for this interface

		Logger.system.debug(`LauncherEntry.definePubicInterface`);

		RouterClient.addPubSubResponder("Launcher.WindowList", []);

		RouterClient.addResponder("LauncherService.addWindowToGroups", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			this.launcher.addWindowToGroups(message.data);
			message.sendQueryResponse(null, "success");
		});

		RouterClient.addResponder("LauncherService.deleteWindowGroup", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			this.launcher.deleteWindowGroup(err, message);
		});

		RouterClient.addResponder("Launcher.componentList", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			let components = this.launcher.getComponents();
			message.sendQueryResponse(err, components);
		});

		RouterClient.addResponder("LauncherService.createWindowGroup", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			this.launcher.createWindowGroup(err, message);
		});

		RouterClient.addResponder("LauncherService.getGroupsForWindow", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			message.sendQueryResponse(null, this.launcher.getGroupsForWindow(message.data));
		});

		RouterClient.addResponder("Launcher.getActiveDescriptors", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			message.sendQueryResponse(null, this.launcher.getActiveDescriptors());
		});

		RouterClient.addResponder("LauncherService.getComponentsThatCanReceiveDataTypes", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			message.sendQueryResponse(null, this.launcher.getComponentsThatCanReceiveDataTypes(message.data.dataTypes));

		});

		RouterClient.addResponder("Launcher.getMonitorInfo", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			Logger.system.debug("LauncherEntry.getMonitorInfo request" + JSON.stringify(message));
			this.launcher.getMonitorInfo(message.data, function (err, response) {
				message.sendQueryResponse(err, response);
			});
		});

		RouterClient.addResponder("Launcher.getMonitorInfoAll", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			Logger.system.debug("LauncherEntry.getMonitorInfoAll request" + JSON.stringify(message));
			this.launcher.getMonitorInfoAll((err, monitors) => {
				message.sendQueryResponse(err, monitors);
			});
		});

		RouterClient.addResponder("Launcher.removeComponent", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			this.launcher.remove(message.data.name);
			message.sendQueryResponse(err, message.data);
		});

		RouterClient.addResponder("Launcher.showWindow", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			//@todo only return after the window is ready...if asked to
			Logger.system.debug("LauncherEntry.showWindow request" + JSON.stringify(message));
			this.launcher.showWindow(message.data.windowIdentifier, message.data, function (err, descriptor) {
				message.sendQueryResponse(err, descriptor);
			});
		});

		RouterClient.addResponder("Launcher.spawn", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);

			// The requester is the window name of whoever requested the spawn.
			// That window is allowed to call executeJavaScript on the wrap.
			if (!message.data.options) message.data.options = {};
			message.data.options.execJSWhitelist = [message.header.origin.replace("RouterClient.", "")];

			this.launcher.spawn(message.data, function (error, descriptor) {
				Logger.system.debug("LauncherEntry.Spawn done", message);
				message.sendQueryResponse(error, descriptor);
			});
		});

		RouterClient.addResponder("Launcher.userDefinedComponentUpdate", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			function respond(error, response) {
				message.sendQueryResponse(error, response);
			}
			if (message.data.type === "add") {
				this.launcher.addUserDefinedComponent(message, respond);
			} else if (message.data.type === "remove") {
				this.launcher.removeUserDefinedComponent(message, respond);
			}
		});

		RouterClient.addResponder("LauncherService.addWindowsToGroup", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			let errString = this.launcher.addWindowsToGroups(message.data);
			if (errString) {
				message.sendQueryResponse(errString);
			} else {
				message.sendQueryResponse(null, "Success");
			}
		});

		RouterClient.addResponder("LauncherService.getWindowsInGroup", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			let windowList = this.launcher.getWindowsInGroup(message.data.groupName);
			message.sendQueryResponse(null, windowList);
		});

		RouterClient.addResponder("LauncherService.removeWindowsFromGroup", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			let errString = this.launcher.removeWindowsFromGroup(message.data);
			if (errString) {
				message.sendQueryResponse(errString);
			} else {
				message.sendQueryResponse(null, "Success");
			}
		});

		RouterClient.addResponder("LauncherService.bringWindowsToFront", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			let errString = this.launcher.bringWindowsToFront(null, message);
			if (errString) {
				message.sendQueryResponse(errString);
			} else {
				message.sendQueryResponse(null, "Success");
			}
		});

		RouterClient.addListener("LauncherService.hyperFocus", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			this.launcher.hyperFocus(err, message);
		});

		RouterClient.addListener("LauncherService.minimizeWindows", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			this.launcher.minimizeWindows(err, message);
		});

		RouterClient.addListener("LauncherService.restart", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			this.launcher.restart(err, message);
		});

		RouterClient.addResponder("LauncherService.registerComponent", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			this.launcher.registerComponent(err, message);
		});

		RouterClient.addResponder("LauncherService.unRegisterComponent", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			this.launcher.unRegisterComponent(err, message);
		});

		RouterClient.addListener("Launcher.resetSpawnStagger", (err, message) => {
			this.moduleReady || Logger.system.error("windowService Launcher invoked before ready", message);
			this.launcher.resetSpawnStagger(message.data);
		});
	}

}
