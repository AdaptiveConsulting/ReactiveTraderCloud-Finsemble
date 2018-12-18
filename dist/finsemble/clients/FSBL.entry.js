/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
const FSBLDependencyManager = require("../common/dependencyManager");
const System = require("../common/system");
var FinsembleWindow = require("../common/window/FinsembleWindow");
var UserNotification = require("../common/userNotification");
const applicationConstants = require("../common/constants");
const { APPLICATION_STATE_CHANNEL } = applicationConstants;
const async = require("async");
var finsembleWindow;

/*
Logic to deal with a duplicate preload injection of FSBL. We assume that the first one that was loaded
will have initialized and called onReady events, so the component will already have a reference to a FSBL
object that has connections to services, internal state, etc.

Webpack however will automatically set window["FSBL"] to whatever this function returns as module.exports.
So we want to ensure that window.FSBL remains pointing to the existing window.FSBL, so that different pieces
of component logic don't end up pointing at two different FSBL objects!
*/
if (window.FSBLAlreadyPreloaded) {
	console.error("window.FSBLAlreadyPreloaded detected. FSBL must already be loaded. Skipping initialization of FSBL.");
	module.exports = window.FSBL; // Tell webpack to point at the existing FSBL object.
}

if ((fin.container === "browser" || window.top === window) && !window.FSBLAlreadyPreloaded) { // @todo - remove when OpenFin Fixes preload
	window.FSBLAlreadyPreloaded = true;
	var Utils = require("../common/util");
	var ConfigUtils = require("../common/configUtil");
	var Validate = require("../common/validate");
	var wrapCallbacks = require("../common/wrapCallbacks");

	// FSBL.initialize() or System.ready() may start first. It's unpredictable. initialize() depends on main()
	// so we use variables to defer running that function if main() hasn't yet run.
	var deferredCallback = Function.prototype;
	var mainHasRun = false;
	var started = false;
	/**
	 * @module FSBL
	 */
	var _FSBL = function () {
		var self = this;
		var clients = [];
		var status = "offline";
		var windowName = "";
		var startTimeoutValue;
		var startTimer;
		this.FinsembleWindow = FinsembleWindow;
		this.System = System;

		this.setWindowName = function (name) {
			windowName = name;
		};

		this.Utils = Utils;
		this.ConfigUtils = ConfigUtils;
		this.Validate = Validate;
		this.UserNotification = UserNotification;

		//This order is _roughly_ as follows: Get everything up that is a dependency of something else, then get those up. The linker and DnD depend on the Store. Workspace depends on Storage and so on. It's not exact, but this was the combination that yielded the best results for me.
		/** @namespace Clients  */
		this.Clients = {
			RouterClient: require("./routerClientInstance"),
			AuthenticationClient: require("./authenticationClient"),
			WindowClient: require("./windowClient"),
			DistributedStoreClient: require("./distributedStoreClient"),
			LauncherClient: require("./launcherClient"),
			DragAndDropClient: require("./dragAndDropClient"),
			LinkerClient: require("./linkerClient"),
			StorageClient: require("./storageClient"),
			WorkspaceClient: require("./workspaceClient"),
			DialogManager: require("./dialogManagerClient"),
			ConfigClient: require("./configClient"),
			BaseClient: require("./baseClient"),
			HotkeyClient: require("./hotkeysClient"),
			SearchClient: require("./searchClient"),
			Logger: require("./logger")
		};

		this.displayStartupTimeoutError = true;

		this.getFSBLInfo = function (cb) {
			return new Promise(function (resolve, reject) {
				if (status === "online") {
					self.Clients.ConfigClient.getValue({ field: "finsemble" }, function (err, config) {
						let FSBLInfo = {
							FSBLVersion: config.system.FSBLVersion,
							gitHash: config.system.gitHash
						};

						if (cb) {
							cb(FSBLInfo);
						}
						resolve(FSBLInfo);
					});
				} else {
					reject("FSBL Not initialized");
				}
			});
		};

		this.addClient = function (name, obj) {
			if (!this.Clients[name]) {
				this.Clients[name] = obj;
			}
		};

		this.useClients = function (clientList) {
			//This array in initialize just looks for this.clients.clientName. Those are uppercase. The clients themselves have a lowercase first letter, which is what the dependency manager depends on. We really need to make this stuff case insensitive.
			clients = clientList.map(clientName => {
				//for some reason all of the names of the clients have a lowercase first name...depManager is case sensitive.
				return clientName.charAt(0).toUpperCase() + clientName.slice(1);
			});

			FSBL.Clients.Logger.system.log("COMPONENT LIFECYCLE:STARTUP:Using a subset of Finsemble clients for startup:", clientList);
			FSBLDependencyManager.startup.waitFor({
				clients: clientList
			}, this.setFSBLOnline);
		};

		this.useAllClients = function () {
			clients = [];
			let clientDependencies = [];
			for (var key in this.Clients) {
				if (clients.indexOf(key) === -1) {
					if (!this.Clients[key].initialize) { continue; }//hack for now
					clients.push(key);
					//for some reason all of the names of the clients have a lowercase first name...depManager is case sensitive.
					key = key.charAt(0).toLowerCase() + key.slice(1);
					clientDependencies.push(key);
				}
			}
			this.dependencyManager = FSBLDependencyManager;
			FSBLDependencyManager.startup.waitFor({
				clients: clientDependencies
			}, this.setFSBLOnline);
		};

		this.isinitialized = false;
		this.initialize = function (cb) {
			console.log("FSBL.initialize called");
			this.Clients.Logger.log(`WINDOW LIFECYCLE:STARTUP: FSBL.initialized invoked in ${finsembleWindow.name}`);

			if (!mainHasRun) {
				deferredCallback = cb || Function.prototype;
				return;
			}
			if (this.isinitialized) {
				if (cb) {
					this.addEventListener("onReady", cb);
				}
				return;
			}

			this.isinitialized = true;
			if (cb) {
				this.addEventListener("onReady", cb);
			}

			for (var i = 0; i < clients.length; i++) {
				this.Clients[clients[i]].windowName = windowName;
				console.log("Initializing", clients[i]);
				this.Clients[clients[i]].initialize();
			}
			//workspaceService checks this to see if the window's initialized. If not, it closes the window during a workspace switch.

		};


		this.setFSBLOnline = function (clientName) {
			console.log("FSBL Online");
			// This is some sanity checking to ensure that we don't call onReady twice.
			if (window.FSBLIsSetOnline) {
				FSBL.Clients.Logger.error("Detected window.FSBLIsSetOnline assertion. Stopping onReady from being fired twice.");
				return;
			}
			window.FSBLIsSetOnline = true;
			this.Clients.DataTransferClient = FSBL.Clients.DragAndDropClient;
			clearTimeout(startTimer);
			status = "online";
			this.isOnline = true;
			this.isInitializing = false;
			document.getElementsByTagName("html")[0].classList.add("finsemble");
			if (this.listeners.onReady) {
				for (var i = 0; i < this.listeners.onReady.length; i++) {
					this.listeners.onReady[i]();
				}
				this.listeners.onReady = [];
			}
			FSBL.Clients.Logger.debug(`WINDOW LIFECYCLE:STARTUP: FSBL Online in ${finsembleWindow.name}`);
			this.Clients.Logger.start();

			if (!windowName) {
				alert("FAILURE: WindowName is null");
			}

			this.Clients.ConfigClient.getValue({ field: "finsemble" }, function (err, config) {
				if (config.system.addFSBLWrappers) {
					// Wrap OF functions that have callbacks to insure all callbacks invoked;
					// since class/constructor, must wrap at prototype level (otherwise prototypes won't be picked up)
					FSBL.Clients.Logger.debug(`WINDOW LIFECYCLE:STARTUP: Wrapping OF Calls in ${finsembleWindow.name}`);
					wrapCallbacks(System.Application);
					wrapCallbacks(System); // not a class so done pass in prototype
				}
			});
			this.Clients.RouterClient.publish("Finsemble." + windowName + ".componentReady", { // signal workspace and launcher service that component is ready
				name: windowName
			});
			window.dispatchEvent(new Event("FSBLReady"));
		};

		this.setFSBLOnline = this.setFSBLOnline.bind(this);
		this.listeners = {};

		this.addEventListener = function (listenerType, callback) {
			Validate.args(listenerType, "string", callback, "function");
			// If we're already online then immediately call the callback. Don't add a listener
			// since we only ever want to call onReady once. Note, asychronizing the callback since
			// that's the expected interface
			if (listenerType === "onReady" && status === "online") {
				setTimeout(callback, 0);
			} else {
				// For any other callback, or if we're not already online, add it to the list of callbacks
				if (!this.listeners[listenerType]) this.listeners[listenerType] = [];
				this.listeners[listenerType].push(callback);
			}
		};

		this.onShutdown = function (cb) {
			this.addEventListener("onShutdown", cb);
		};
		/**
		 * When the application sends out a shutdown message, each service begins cleaning up. Part of the LauncherServices's cleanup is to make sure all components are allowed to cleanup. This method iterates through any registered cleanup methods. When all of them have finished (or 10 seconds elapses), it sends a response to the application saying that it's completed cleanup (`shutdownComplete`, below).
		 */
		this.handleShutdown = function (err, message) {
			var self = this;
			//Removed until OF can get rid of the bug that removes _all_ close handlers.
			// finWindow.removeEventListener("closed", FSBL.windowClose);
			function handleShutdownAction(handler, done) {
				let cleanup = async.asyncify(handler);
				cleanup = async.timeout(cleanup, 2000);
				cleanup(null, done);
			}
			function shutdownComplete(err, data) {
				if (err) {
					self.Clients.Logger.system.error(err);
				}
				self.shutdownComplete();
			}
			if (this.listeners.onShutdown) {
				this.Clients.RouterClient.transmit("LauncherService.shutdownResponse", {
					waitForMe: true,
					name: windowName
				});

				async.each(this.listeners.onShutdown, handleShutdownAction, shutdownComplete);
			} else {
				this.Clients.RouterClient.transmit("LauncherService.shutdownResponse", {
					waitForMe: false,
					name: windowName
				});
				this.shutdownComplete();
			}
		};
		/**
		 * When the component has finished running through its cleanup routine, this method is invoked, and the window is closed.
		 */
		this.shutdownComplete = function () {
			this.Clients.Logger.system.debug("WINDOW LIFECYCLE:Shutdown:Complete");
			this.Clients.RouterClient.transmit("LauncherService.shutdownCompleted", {
				name: windowName
			});
		};
		/**
		 * Listens for the command to shutdown.
		 */
		this.listenForShutdown = function () {
			this.Clients.Logger.system.debug("WINDOW LIFECYCLE:Startup:Listening for the application shutdown request.");
			//this.Clients.RouterClient.addListener("LauncherService.shutdownRequest", this.handleShutdown.bind(this));
		};
		/**
		 * Triggers the application shutdown sequence.
		 */
		this.shutdownApplication = function () {
			self.Clients.RouterClient.transmit("Application.shutdown");
		};
		/**
		 * Triggers the application restart sequence.
		 * @param [params]
		 * @param [params.forceRestart]=false Whether to give components a chance to shutdown. ForceRestart is used during the reset sequence.
		 */
		this.restartApplication = function (params) {
			FSBL.Clients.RouterClient.transmit("Application.restart", params || {});
		};
		/**
		 * Invokes the onClose method of each client.
		 */
		this.windowClose = function () {
			for (var clientKey in self.Clients) {
				let client = self.Clients[clientKey];
				if (client.onClose) {
					client.onClose();
					/*if (clientKey === "WindowClient") {
						//The windowClient's onclose would've triggered the close event - we don't need to close it twice.
						//@todo, test removing this line.
						client.onClose({ closeWindow: false });
					} else {
						client.onClose();
					}*/
				}
			}
			for (let w in _FSBLCache.windows) {
				let wrap = _FSBLCache.windows[w];
				wrap.handleWrapRemoveRequest();
			}
			FSBL.Clients.RouterClient.disconnectAll();
		};
	};
	var FSBL = new _FSBL();
	window.FSBL = FSBL;

	FSBL.Clients.RouterClient.ready(function () {
		if (started) {
			return;
		}
		started = true;
		mainHasRun = true;

		FSBL.listenForShutdown();
		let finWindow = System.Window.getCurrent();
		// TODO: this wrap happens before the splinter agent writes to the Window store. That is a problem that needs to be addressed at some point.
		FSBL.Clients.RouterClient.transmit(finWindow.name + ".onSpawned", { name: finWindow.name });
		// TODO: this wrap happens before the launcher/splinter agent writes to the Window store. That is a problem that needs to be addressed at some point.
		FinsembleWindow.getInstance({ name: finWindow.name, uuid: finWindow.uuid }, (err, win) => {
			// TODO: this err is dropped to cleanup the logging after handling unresolved errors.  We need to fix the errors
			// that exist from using clients in services
			if (err || !win) return;

			window.finsembleWindow = win;
			finsembleWindow = win;
			FSBL.Clients.Logger.debug(`WINDOW LIFECYCLE:STARTUP: RouterReady invoked in ${win.name}`);
			var windowName = win.name;
			FSBL.setWindowName(windowName);

			//todo when moved to ts, make response type ApplicationStateChange.
			let authorizationSubscriber = FSBL.Clients.RouterClient.subscribe(APPLICATION_STATE_CHANNEL, (err, response) => {
				//If we're authenticated, respect the component's wishes (neededClients). If they have no wishes, use all clients.
				if (response.data.state === "authenticated" || response.data.state === "ready") {
					win.getOptions((err, opts) => {
						if (opts &&
							opts.customData &&
							opts.customData.component &&
							opts.customData.component.neededClients) {
							FSBL.useClients(opts.customData.component.neededClients);
						} else {
							FSBL.useAllClients();
						}
						//callback passed in, or just a noop.
						FSBL.initialize(deferredCallback);
					});
				} else {
					//If authorization hasn't happened, only wait on the store and the launcher. This should only occur in authentication components.
					FSBL.useClients(["ConfigClient", "LauncherClient", "DistributedStoreClient"]);
					FSBL.initialize(deferredCallback);
				}
				FSBL.Clients.RouterClient.unsubscribe(authorizationSubscriber);
			});



		});

		// Capture error and log it; define here (as early as possible) to catch early errors
		window.addEventListener("error", function (errorObject) {
			var stack = errorObject.error ? errorObject.error.stack.substring(errorObject.error.stack.search("at ")) : ""; // strip off irrelevant part of stack
			FSBL.Clients.Logger.error(errorObject.message,
				"File: " + errorObject.filename,
				"Line: " + errorObject.lineno,
				"Column: " + errorObject.colno,
				"Error Stack: \n    " + stack
			);
			return false;
		});
		//catch promise errors
		window.addEventListener("unhandledrejection", function (event) {
			FSBL.Clients.Logger.error("Unhandled rejection", "reason", event.reason);
		});
		window.addEventListener("unload", function (event) {
			started = false;
			FSBL.windowClose();
		});
		window.addEventListener("beforeunload", FSBL.windowClose);


	});
	module.exports = FSBL;
}
