/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
// This file contains the service to manage all stacked windows.
// The common/window/stackedWindow wrapper contains the primary interface. Also, common/Tabbing contains interface to createStackedWindow used by Launcher.

var RouterClient = require("../../../clients/routerClientInstance");
var Logger = require("../../../clients/logger");

class Tabbing {
	stackedWindowManager: any;

	constructor(stackedWindowManager) {
		this.stackedWindowManager = stackedWindowManager;
		this.bindAllFunctions();
	}

	async initialize(done) {
		Logger.system.debug("Tabbing.initialize");
		console.debug("Tabbing.initialize");
		this.setupStackedWindowManagerListeners();
		done();
	}

	shutdown() {
	}

	bindAllFunctions() {
		let self = this;
		for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(self))) {
			let method = self[name];
			// skip constructor
			if (!(method instanceof Function) || method === Tabbing) continue;
			self[name] = self[name].bind(self);
		}
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Setup router listeners to handing incoming service requests and events from child windows
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	setupInterfaceListener(methodName, methodFunction) {
		Logger.system.debug(`Tabbing.setupInterfaceListener for ${methodName}`);
		RouterClient.addResponder(`StackedWindow.${methodName}`, function (err, queryMessage) {
			if (err) {
				Logger.system.error(`StackedWindow.${methodName} addResponder failed: ${err}`);
			} else {
				//@todo BAD BAD BAD. WE NEED TO BE CONSISTENT. //But it needs to work.
				if (queryMessage.data.windowIdentifier) {
					if (queryMessage.data.windowIdentifier.windowName) {
						queryMessage.data.windowIdentifier.name = queryMessage.data.windowIdentifier.windowName;
					} else if (queryMessage.data.windowIdentifier.name) {
						queryMessage.data.windowIdentifier.windowName = queryMessage.data.windowIdentifier.name;
					}
				}
				let callback = function (err, response) {
					queryMessage.sendQueryResponse(err, response);
				};

				methodFunction(queryMessage.data, callback);
			}
		});
	}

	setupStackedWindowManagerListeners() {
		this.setupInterfaceListener("addWindow", this.stackedWindowManager.addWindow);
		this.setupInterfaceListener("removeWindow", this.stackedWindowManager.removeWindow);
		this.setupInterfaceListener("deleteWindow", this.stackedWindowManager.deleteWindow);
		this.setupInterfaceListener("setVisibleWindow", this.stackedWindowManager.setVisibleWindow);
	}

}

module.exports = Tabbing;