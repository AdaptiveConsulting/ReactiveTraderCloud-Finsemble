/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { _BaseClient as BaseClient } from "./baseClient";
import WindowClient from "./windowClient";
import * as util from "../common/util";
import Validate from "../common/validate"; // Finsemble args validator
import { System } from "../common/system";
import Logger from "./logger";
import { FinsembleWindow } from "../common/window/FinsembleWindow";
import { IGlobals } from "../common/Globals";
import { SpawnParams } from "../services/window/Launcher/launcher";
/** The global `window` object. We cast it to a specific interface here to be
 * explicit about what Finsemble-related properties it may have. */
const Globals = window as IGlobals;
interface ShowWindowParams extends SpawnParams {
	/**
	 * If true, then spawns a new window if the requested one cannot be found.
	 * *Note, only works if the windowIdentifier contains a componentType.*
	 */
	spawnIfNotFound?: boolean,
	/**
	 * Whether or not the window should be focused when shown.
	 */
	autoFocus?: boolean
}
/**
 * An object that includes all the potential identifications for a window.
 * For instance, one can try and obtain a reference for a window if some of these values are known.
 *
 * @typedef WindowIdentifier
 * @property {string} [windowName] The name of the physical HTML window, or a reference to a native window that was launched with Assimilation service
 * @property {string} [uuid] Optional uuid of a particular application process
 * @property {string} [componentType] The type of component
 * @property {number|string} [monitor] The number of the monitor. Potentially used to disambiguate multiple components with the same name (for searches only)
 */

/**
 * Finsemble windowDescriptor.
 * The windowDescriptor includes the following values.
 *
 * @typedef WindowDescriptor
 * @property {string} [url] url to load (if HTML5 component).
 * @property {string} [native] The name of the native app (if a native component launched by Assimilation service).
 * @property {string} name The name of the window (sometimes randomly assigned).
 * @property {string} componentType The type of component (from <i>components.json</i>).
 */

// A map of related menus that is kept by handleToggle.
var okayToOpenMenu = {};

/**
 *
 * @introduction
 * <h2>Launcher Client (Finsemble Workspaces)</h2>
 *
 * The Launcher Client handles spawning windows of all kinds.
 * Finsemble provides the architecture to launch, resize, and reposition any component, whether native, modern, or third-party.
 *
 *
 * The Launcher API has capabilities to customize your end user's experience.
 * This includes CSS-like positioning and a fully display-aware positioning that deals with idiosyncrasies such as monitors with different scaling resolutions.
 *
 *
 * CSS provides higher level abstractions that aid in laying out an application that is composed of constituent parts.
 * Finsemble has borrowed CSS’s positioning paradigm and applied it to the task of laying out windows on the desktop.
 * This CSS-style positioning allows windows to be positioned on the `left`, `right`, `top`, or `bottom` of the end user’s screen for instance; we also developed new positions, such as `adjacent`, which allows a child window to spawn adjacent to their parent.
 * Components can be positioned and sized by percentage, relative to the monitor or to each other (nested windows).
 *
 *
 * The Launcher Client frequently uses the parameters <code>windowName</code> and <code>componentType</code>. [Learn more about them here](tutorial-ComponentTypesAndWindowNames.html).
 *
 *
 *
 * @hideconstructor
 * @constructor
 */
class LauncherClient extends BaseClient {
	windowClient;
	constructInstance;
	myWindowIdentifier;
	constructor(params) {
		super(params);
		Validate.args(params, "object=") && params && (Validate as any).args2("params.onReady", params.onReady, "function=");
		this.windowClient = params.clients.windowClient;
	}

	/** @alias LauncherClient# */

	/**
	 * Get a list of registered components (those that were entered into <i>components.json</i>).
	 *
	 * @param {Function} cb Callback returns an object map of components. Each component object
	 * contains the default config for that component.
	 */
	getComponentList(cb: Function = Function.prototype) {
		Validate.args(cb, "function=");
		const promiseResolver = (resolve) => {
			this.routerClient.query("Launcher.componentList", {}, function (err, response) {
				cb(err, response.data);
				resolve({ err, data: response.data });
			});
		};
		return new Promise(promiseResolver);
	}

	/**
	 * Get the component config (from <i>components.json</i>) for a specific component.
	 *
	 * @param {String} componentType The type of the component.
	 * @param {Function} cb Callback returns the default config (windowDescriptor) for the requested componentType.
	 *
	 */
	getComponentDefaultConfig(componentType: string, cb: Function = Function.prototype) {
		Validate.args(cb, "function=");
		const promiseResolver = (resolve) => {
			this.routerClient.query("Launcher.componentList", {}, function (err, response) {
				const data = response.data[componentType];
				cb(err, data);
				resolve({ err, data });
			});
		};
		return new Promise(promiseResolver);

	}

	/**
	 * Gets monitor information for a given windowIdentifier or for a specific monitor.
	 * If neither the identifier or monitor are provided then the monitorInfo for the current window is returned.
	 *
	 *
	 * The information returned contains:
	 *
	 * **monitorRect** - The full dimensions for the monitor. <br>
	 * **availableRect** - The dimensions for the available space on the monitor (less the Windows task bar). <br>
	 * **unclaimedRect** - The dimensions for available monitor space less any space claimed by components (such as the Toolbar). <br>
	 * **position** - The position of the monitor, numerically from zero to X. Primary monitor is zero. <br>
	 * **whichMonitor** - Contains the string "primary" if it is the primary monitor. <br>
	 *
	 * The dimensions are supplemented with the following additional members:
	 *
	 * **width** - The width as calculated (right - left). <br>
	 * **height** - The height as calculated (bottom - top). <br>
	 *
	 * @param {object} params
	 * @param  {WindowIdentifier} params.windowIdentifier The windowIdentifier to get the monitorInfo. If undefined, then the current window.
	 * @param  {number|string} params.monitor If passed then a specific monitor is identified. Valid values include:
	 *
	 * <b>"mine"</b> - Place the window on the same monitor as the calling window.
	 *
	 * Integer value from 0-n (0 being the primary monitor).
	 *
	 * <b>"primary"</b> indicates the user's primary monitor.
	 *
	 * <b>"all"</b> - Put a copy of the component on all monitors.
	 * @param  {Function} cb Returns a monitorInfo object containing the monitorRect, availableRect and unclaimedRect.
	 */
	getMonitorInfo(params: {
		windowIdentifier?: WindowIdentifier,
		monitor?: string
	}, cb: Function = Function.prototype) {
		var self = this;
		Validate.args(cb, "function=");
		Logger.system.debug(`MONITOR: launcherClient.getMonitorInfo`);

		const promiseResolver = (resolve) => {
			util.getMyWindowIdentifier(function (myWindowIdentifier) {
				if (!params.windowIdentifier) {
					params.windowIdentifier = myWindowIdentifier;
				}
				self.routerClient.query("Launcher.getMonitorInfo", params, function (err, response) {
					if (cb) {
						cb(err, response.data);
					}
					Logger.system.log(`MONITOR: launcherClient.getMonitorInfo query response data`, response.data);
					resolve({ err, data: response.data });
				});
			});
		};
		return new Promise(promiseResolver);

	}

	/**
	 * Gets monitorInfo (dimensions and position) for all monitors. Returns an array of monitorInfo objects. See <a href="LauncherClient.html#getMonitorInfo">LauncherClient#getMonitorInfo</a> for the format of a monitorInfo object.
	 *
	 *
	 *
	 * @param  {Function} cb Returns an array of monitorInfo objects.
	 */
	getMonitorInfoAll(cb: Function = Function.prototype) {
		Validate.args(cb, "function=");

		const promiseResolver = (resolve, reject) => {
			this.routerClient.query("Launcher.getMonitorInfoAll", {}, function (err, response) {
				if (err) {
					reject({ err });
					cb(err);
				}
				resolve({ err, data: response.data });
				cb(err, response.data);
			});
		};
		return new Promise(promiseResolver);
	}

	/**
	 * Registers a component with the Launcher Service. This method registers a given component in a component manifest, making it available to an app launcher component.
	 *
	 * @param {String} params.componentType The key of the component in the component's config.
	 * @param {object} params.manifest This should be a component manifest, i.e., a component configuration file like <i>components.json</i>.
	 * @param {Function} cb The callback to be invoked after the method completes successfully.
	 */
	registerComponent(params: {
		componentType: string,
		manifest: any
	}, cb: Function = Function.prototype) {

		const promiseResolver = (resolve) => {
			this.routerClient.query("LauncherService.registerComponent", params, function (err, response) {
				if (cb) {
					cb(err, response.data);
				}
				resolve({ err, data: response.data });
			});
		};
		return new Promise(promiseResolver);
	}

	/**
	 * Unregisters a component with the Launcher Service.
	 *
	 * @param {String} params.componentType The key of the component in the component's config.
	 * @param  {Function} cb
	 */
	unRegisterComponent(params: {
		componentType: string
	}, cb: Function = Function.prototype) {
		if (!params.componentType) return cb("No componentType provided");
		const promiseResolver = (resolve) => {
			this.routerClient.query("LauncherService.unRegisterComponent", params, function (err, response) {
				if (cb) {
					cb(err, response.data);
				}
				resolve({ err, data: response.data });
			});
		};
		return new Promise(promiseResolver);
	}



	/**
	 * A convenience method for dealing with a common use-case, which is toggling the appearance and disappearance of a child window when a button is pressed, aka drop down menus. Simply call this method from the click handler for your element. Your child window will need to close itself on blur events.
	 * @param {HTMLElement|selector} element The DOM element, or selector, clicked by the end user.
	 * @param {windowIdentifier} windowIdentifier Identifies the child window
	 * @param {object} params Parameters to be passed to {@link LauncherClient#showWindow} if the child window is allowed to open
	 */
	toggleWindowOnClick(element: HTMLElement | NodeSelector, windowIdentifier: WindowIdentifier, params: SpawnParams) {
		var self = this;
		var key = windowIdentifier.windowName + ":" + windowIdentifier.uuid;
		if (!windowIdentifier.windowName) key = windowIdentifier.componentType;
		//If the element was clicked while the menu was open then return right away. The menu window will receive a blur event and close. This method is dependent on the fact that blur events are processed before click events. If this turns out to be a problem then put this call inside of a setTimeout().
		if (okayToOpenMenu[key] === false) {
			okayToOpenMenu[key] = true;
			return;
		}
		var onDisplayed = function (showError, showResponse) {
			if (!showResponse) return;
			let finWindow = showResponse.finWindow;
			var onBlur = function (blurResponse) {
				okayToOpenMenu[key] = true;
				self.windowClient.isMouseOverDOMElement(element, function (mouseIsOverElement) {
					okayToOpenMenu[key] = !mouseIsOverElement;
				});
				finWindow.removeEventListener("blurred", onBlur);
			};
			finWindow.addEventListener("blurred", onBlur);
		};
		this.showWindow(windowIdentifier, params, onDisplayed);
	}

	/**
	 * Displays a window and relocates/resizes it according to the values contained in parameters. If the specified window is in a group or tabbed, it will be unsnapped/ungrouped/untabbed from the other windows.
	 * 	 * If invoked on a tabbed window or a window in a group, the window will be removed from the tab/group.
	 *
	 * @param {WindowIdentifier} windowIdentifier A windowIdentifier. This is an object containing windowName and componentType. If windowName is not given, Finsemble will try to find it by componentType.
	 * @param {object} params Parameters. These are the same as {@link LauncherClient#spawn} with the following exceptions:
	 * @param {any} [params.monitor] Same as spawn() except that null or undefined means the window should not be moved to a different monitor.
	 * @param {number | string} [params.left] Same as spawn() except that null or undefined means the window should not be moved from current horizontal location.
	 * @param {number | string} [params.top] Same as spawn() except that null or undefined means the window should not be moved from current vertical location.
	 * @param {boolean} [params.slave] Cannot be set for an existing window. Will only go into effect if the window is spawned.
	 * (In other words, only use this in conjunction with spawnIfNotFound).
	 * @param {Function} cb Callback to be invoked after function is completed. Callback contains an object with the following information:
	 * <b>windowIdentifier</b> - The <a href="tutorial-ComponentTypesAndWindowNames.html">WindowIdentifier</a> for the new window.
	 * <b>windowDescriptor</b> - The <a href="tutorial-ComponentTypesAndWindowNames.html">WindowDescriptor</a> of the new window.
	 * <b>finWindow</b> - A <code>finWindow</code> object referencing the new window.
	 * @example
	 * FSBL.Clients.LauncherClient.showWindow({windowName: "Welcome Component-86-3416-Finsemble", componentType: "Welcome Component"}, {spawnIfNotFound: true});
	 */
	showWindow(windowIdentifier: WindowIdentifier, params: ShowWindowParams, cb: Function = Function.prototype) {
		Validate.args(windowIdentifier, "object", params, "object=", cb, "function=");
		var self = this;
		if (!params) { params = {}; }
		params = util.clone(params);
		if (!params.staggerPixels && params.staggerPixels !== 0) {
			params.staggerPixels = 100;
		}
		params.windowIdentifier = windowIdentifier;

		const promiseResolver = (resolve) => {
			util.getMyWindowIdentifier(function (myWindowIdentifier) {
				if (!params.relativeWindow) {
					params.relativeWindow = myWindowIdentifier;
				}
				self.routerClient.query("Launcher.showWindow", params, async function (err, response) {
					if (err) {
						resolve({ err });
						return cb(err);
					}
					var newWindowIdentifier = response.data.windowIdentifier;
					response.data.windowIdentifier.name = response.data.windowIdentifier.windowName;
					let { wrap } = await FinsembleWindow.getInstance({ name: newWindowIdentifier.windowName });
					response.data.finWindow = wrap;
					resolve({ err, data: response.data });
					cb(err, response.data);
				});
			});
		};
		return new Promise(promiseResolver);

	}

	/**
	 * Asks the Launcher service to spawn a new component. Any parameter below can also be specified in <i>../config/components.json</i>, which will
	 * then operate as the default for that value.
	 *
	 * The launcher parameters mimic CSS window positioning.
	 * For instance, to set a full size window use `left=0`,`top=0`,`right=0`,`bottom=0`.
	 * This is functionally equivalent to: left=0,top=0,width="100%",height="100%".
	 *
	 * @since 2.4.1 Added params.windowType (deprecated params.native), params.path, params.alias, params.argumentsAsQueryString - These are all for launching native apps.
	 * @since 3.7.0 Added "affinity" parameter
	 * @param {function} cb Function invoked after the window is created
	 */
	spawn(component: string, params: SpawnParams, cb: Function = Function.prototype) {
		var self = this;

		Validate.args(component, "string", params, "object=", cb, "function=");
		if (!params) { params = {}; }
		params = util.clone(params);
		params.component = component;
		if (!params.options) {
			params.options = {};
		}
		if (!params.options.customData) {
			params.options.customData = {};
		}

		if (!params.staggerPixels && params.staggerPixels !== 0) {
			params.staggerPixels = 50;
		}
		Logger.system.debug(`Calling Spawn for componentType:${component}`);

		const promiseResolver = (resolve) => {
			util.getMyWindowIdentifier(function (windowIdentifier) {
				params.launchingWindow = windowIdentifier;
				self.callSpawn(params, (err, response) => {
					resolve({ err, response });
					cb(err, response);
				});
			});
		};
		return new Promise(promiseResolver);
	}

	/**
	 * @private
	 */
	callSpawn(params: SpawnParams, cb: Function = Function.prototype) {
		var self = this;
		Validate.args(cb, "function=");
		Logger.perf.debug("CallSpawn", "start", "from spawn to callback", params);
		const promiseResolver = (resolve) => {
			function invokeSpawnCallback(error, data) {
				cb(error, data);
				resolve({ err: error, data });
			}
			self.routerClient.query("Launcher.spawn", params, async function (err, response) {
				Logger.system.debug("CallSpawn", "Initial launcher callback params", err, response);
				Logger.perf.debug("CallSpawn", "Initial launcher callback", response);
				if (err) {
					invokeSpawnCallback(err, result);
					return Logger.system.error("LauncherClient.callSpawn", err);
				}

				response.data.windowIdentifier.name = response.data.windowIdentifier.windowName;
				var result = response.data;

				// Add a wrapped finWindow to the response (this can only be done client side)
				if (result.windowDescriptor.native) return invokeSpawnCallback(err, result);/// This is way too slow for native windows so we just let this pass through and assume the window is ready.
				var newWindowIdentifier = result.windowIdentifier;
				let { wrap } = await FinsembleWindow.getInstance({ name: newWindowIdentifier.windowName }); //TODO - replace with FinsembleWindow
				result.finWindow = wrap;
				let componentOnlineChannel = "Finsemble." + result.windowIdentifier.windowName + ".componentReady";
				let subscriberID = self.routerClient.subscribe(componentOnlineChannel, componentOnlineCallback);

				function componentOnlineCallback(err, response) {
					if (err) return Logger.system.error(err);
					//Ignore the initial "uninitialized" state message delivered by subscribe (a second message will contain the actual data)
					if (response && Object.keys(response.data).length === 0) return;
					if (params.position === "relative" && (params.groupOnSpawn || params.dockOnSpawn)) {
						//If 'params.relativeWindow' is supplied we need to dock to it, otherwise get the parent window (System.Window.getCurrent())
						const windowToGroup = params.relativeWindow ? params.relativeWindow.windowName : System.Window.getCurrent().name;

						const windows = [result.windowIdentifier.windowName, windowToGroup]; //TODO - replace with FinsembleWindow
						self.routerClient.query("DockingService.groupWindows", {
							windows: windows,
							isMovable: true,
						}, function (error, response) {
							Logger.perf.debug("CallSpawn", "stop");
							invokeSpawnCallback(err, result);
						});
					} else {
						Logger.perf.debug("CallSpawn", "stop");
						invokeSpawnCallback(err, result);
					}
					self.routerClient.unsubscribe(subscriberID);
				}
			});

		};

		return new Promise(promiseResolver);

	}

	/**
	 * Convenience function to get a monitor descriptor for a given windowIdentifier, or for the
	 * current window.
	 *
	 * @param {WindowIdentifier} [windowIdentifier] The window to find the monitor for. Current window if undefined.
	 * @param  {Function} cb Returns a monitor descriptor (optional or use returned Promise)
	 * @returns {Promise} A promise that resolves to a monitor descriptor
	 * @TODO this probably is unnecessary since a client can include util and a developer should be using this.getMonitorInfo which has full support for searching by component. Did Ryan need this?
	 * @private
	 */
	getMonitor(windowIdentifier: WindowIdentifier, cb: Function = Function.prototype) {
		Validate.args(cb, "function=");

		const promiseResolver = (resolve) => {
			util.getMonitor(windowIdentifier, (monitor) => {
				cb(monitor);
				resolve(monitor);
			});
		};
		return new Promise(promiseResolver);
	}

	/**
	 * Returns a windowIdentifier for the current window.
	 *
	 * @param {WindowIdentifier} cb Callback function returns windowIdentifier for this window (optional or use the returned Promise)
	 * @returns {Promise} A promise that resolves to a windowIdentifier
	 */
	// @TODO, [Terry] calls to launcherClient.myWindowIdentifier or launcherClient.getMyWindowIdentifier()
	// should be replaced with windowClient.getWindowIdentifier()
	getMyWindowIdentifier(cb: Function = Function.prototype) {
		Validate.args(cb, "function=");

		const promiseResolver = (resolve) => {
			util.getMyWindowIdentifier((wi) => {
				cb(wi);
				resolve(wi);
			});
		};
		return new Promise(promiseResolver);

	}

	/**
	* Gets the windowDescriptor for all open windows.
	*
	* <b>Note:</b> This returns descriptors even if the window is not part of the workspace.
	*
	* @param {StandardCallback} cb Callback returns an array of windowDescriptors.
	*
	*/
	getActiveDescriptors(cb: Function = Function.prototype) {
		Validate.args(cb, "function=");
		const promiseResolver = (resolve) => {
			this.routerClient.query("Launcher.getActiveDescriptors", {}, function (err, response) {
				if (err) {
					return Logger.system.error(err);
				}
				if (response) {
					cb(err, response.data);
					resolve({ err, data: response.data });
				}
			});
		};
		return new Promise(promiseResolver);

	}

	/**
	 * Adds a custom component. Private for now.
	 * @private
	 */
	addUserDefinedComponent(params, cb = Function.prototype) {
		Validate.args(cb, "function=");

		const promiseResolver = (resolve) => {
			this.routerClient.query("Launcher.userDefinedComponentUpdate", {
				type: "add",
				name: params.name,
				url: params.url,
			}, function (err, response) {
				cb(err, response.data);
				resolve({ err, data: response.data });
			});
		};
		return new Promise(promiseResolver);
	}

	/**
	 * Adds a custom component. Private for now.
	 * @private
	 */
	removeUserDefinedComponent(params, cb = Function.prototype) {
		Validate.args(cb, "function=");
		const promiseResolver = (resolve) => {
			this.routerClient.query("Launcher.userDefinedComponentUpdate", {
				type: "remove",
				name: params.name,
				url: params.url,
			}, function (err, response) {
				cb(err, response.data);
				resolve({ err, data: response.data });
			});
		};
		return new Promise(promiseResolver);

	}

	/**
	 * Gets components that can receive specific data types. Returns an object containing componentTypes mapped to a list of dataTypes they can receive. This is based on the "advertiseReceivers" property in a component's config.
	 * @param {Array.<string>} params.dataTypes An array of data types. Looks for components that can receive those data types.
	 * @param {Function} cb The callback to be invoked after the method completes successfully.
	 *
	 * @since 2.0
	 *
	 * @example
	 * FSBL.Client.LauncherClient.getComponentsThatCanReceiveDataTypes({ dataTypes: ['chartiq.chart', 'salesforce.contact']}, function(err, response) {
	 * 	//Response contains: {'chartiq.chart': ['Advanced Chart'], 'salesforce.contact': ['Salesforce Contact']}
	 * })
	 *
	 */
	getComponentsThatCanReceiveDataTypes(params: {
		dataTypes: string[]
	}, cb: Function = Function.prototype) {
		Validate.args(cb, "function=");
		const promiseResolver = (resolve) => {
			if (!params || !params.dataTypes) {
				const err = "Invalid params. Expected: {dataTypes: string[]}";
				cb(err);
				return resolve({ err });
			}
			if (!Array.isArray(params.dataTypes)) {
				params.dataTypes = [params.dataTypes];
			}
			this.routerClient.query("LauncherService.getComponentsThatCanReceiveDataTypes",
				params, (err, response) => {
					cb(err, response.data);
					resolve({ err, data: response.data });
				});
		};
		return new Promise(promiseResolver);
	}

	/**
	 * Brings a windows to front. If no windowList, groupName or componentType is specified, brings all windows to front.
	 * @param params
	 * @param {Array.<string | Object>} [params.windowList] Optional. An array An array of window names or window identifiers. Not to be used with componentType.
	 * @param {string} [params.groupName] Optional. The name of a window group to bring to front.
	 * @param {string} [params.componentType] Optional. The componentType to bring to front. Not to be used with windowList.
	 *
	 * @since TBD
	 *
	 * @example
	 * LauncherClient.bringWindowsToFront({ windowList: ['AdvancedChart-123-123', 'Symphony-Chat-234-234']}, function(err, response) {
	 *
	 * })
	 *
	 * @private
	 */
	bringWindowsToFront(params: {
		windowList?: string[] | WindowIdentifier[],
		groupName?: string,
		componentType?: string
	} = {}, cb: Function = Function.prototype) {
		Validate.args(cb, "function=");
		if (params.windowList && !Array.isArray(params.windowList)) {
			params.windowList = [params.windowList];
		}
		if (params.groupName) {
			Validate.args(params.groupName, "string");
		}
		if (params.componentType) {
			Validate.args(params.componentType, "string");
		}

		//Changed to query to allow for async bring to front and to do something when all windows have been brought to front
		this.routerClient.query("LauncherService.bringWindowsToFront", params, (err, response) => {
			cb(err, response);
		});
		return Promise.resolve();
	}

	/**
	 * @deprecated as of 4.0.0, may be removed in the future
	 *
	 * Minimizes all but a specific list or group of windows. Either groupName or windowList must be specified.
	 * @param params
	 * @param {Array.<string | Object>} [params.windowList] Optional. An array of window names or window identifiers. Not to be used with componentType.
	 * @param {string} [params.groupName] Optional. The name of a window group to hyperFocus.
	 * @param {string} [params.componentType] Optional. The Component Type to hyperFocus. Not to be used with windowList.
	 *
	 * @since TBD
	 * @example
	 * LauncherClient.hyperFocus({ windowList: ['AdvancedChart-123-123', 'Symphony-Chat-234-234']}, function(err, response) {
	 *
	 * })
	 *
	 * @private
	 */
	hyperFocus(params: {
		windowList?: string[] | WindowIdentifier[],
		groupName?: string,
		componentType?: string
	}, cb: Function = Function.prototype) {
		Logger.system.warn("hyperFocus is deprecated as of version 4.0.0. This functionality may be removed in a future release");
		console.warn("hyperFocus is deprecated as of version 4.0.0. This functionality may be removed in a future release");

		Validate.args(cb, "function=");
		if (params.windowList && !Array.isArray(params.windowList)) {
			params.windowList = [params.windowList];
		}
		if (!params.windowList && !params.groupName && !params.componentType) {
			params.windowList = [this.myWindowIdentifier];
		}
		if (params.groupName) {
			Validate.args(params.groupName, "string");
		}
		if (params.componentType) {
			Validate.args(params.componentType, "string");
		}

		this.routerClient.transmit("LauncherService.hyperFocus", params);
		cb();
		return Promise.resolve();

	}

	/**
	 * Minimize windows. If no windowList or groupName is specified, all windows will be minimized.
	 * @param {*} params
	 * @param {Array.<string | Object>} [params.windowList] Optional. An array of window names or window identifiers. Not to be used with componentType.
	 * @param {string} [params.groupName] Optional. The name of a window group to minimize.
	 * @param {string} [params.componentType] Optional. The component type of windows to Minimize. Not to be used with windowList.
	 *
	 * @since TBD
	 * @private
	 */
	minimizeWindows(params: {
		windowList?: string[] | WindowIdentifier[],
		groupName?: string,
		componentType?: string
	}, cb: Function = Function.prototype) {
		Validate.args(cb, "function=");
		if (params.windowList && !Array.isArray(params.windowList)) {
			params.windowList = [params.windowList];
		}
		if (params.groupName) {
			Validate.args(params.groupName, "string");
		}
		if (params.componentType) {
			Validate.args(params.componentType, "string");
		}
		this.routerClient.transmit("LauncherService.minimizeWindows", params);
		cb();
		return Promise.resolve();

	}

	/**
	 * Create Window group
	 * @param {*} params
	 * @param {string} [params.groupName] The name of the window group to create
	 * @param {Array.<string | Object>} [params.windowList] An array of window names or window identifiers to add to the group. Optional.
	 * @param {function} cb callback to be called upon group creation
	 *
	 * @since TBD
	 * @private
	 */
	createWindowGroup(params: {
		windowList?: string[] | WindowIdentifier[],
		groupName?: string
	}, cb: Function = Function.prototype) {
		Validate.args(cb, "function=");
		if (params.windowList && !Array.isArray(params.windowList)) {
			params.windowList = [params.windowList];
			delete params.groupName;
		}
		Validate.args(params.groupName, "string");
		const promiseResolver = (resolve) => {
			if (!params.groupName) {
				let err = "Invalid Parameters";
				resolve({ err });
				cb(err);
				return;
			}
			this.routerClient.query("LauncherService.createWindowGroup", params, function (err, response) {
				cb(err, response);
				resolve({ err, data: response });
			});
		};
		return new Promise(promiseResolver);

	}

	/**
	 * Add Windows to group
	 * @param {*} params
	 * @param {string} [params.groupName] The name of the window group
	 * @param {Array.<string | Object>} [params.windowList] An array of window names or window identifiers to add to the group.
	 * @param {function} cb callback to be called upon group creation
	 *
	 * @since TBD
	 * @private
	 */
	addWindowsToGroup(params: {
		windowList?: string[] | WindowIdentifier[],
		groupName?: string
	}, cb = Function.prototype) {
		Validate.args(cb, "function=");
		const promiseResolver = (resolve) => {
			if (!params.groupName || !params.windowList) {
				let err = "Invalid Parameters";
				resolve({ err });
				cb(err);
				return;
			}
			if (params.windowList && !Array.isArray(params.windowList)) {
				params.windowList = [params.windowList];
			}

			Validate.args(params.groupName, "string");
			this.routerClient.query("LauncherService.addWindowsToGroup", params, function (err, response) {
				cb(err, response);
				resolve({ err, data: response });
			});
		};
		return new Promise(promiseResolver);
	}

	/**
	 * Remove Windows from group
	 * @param {*} params
	 * @param {string} [params.groupName] The name of the window group
	 * @param {Array.<string | Object>} [params.windowList] An array of window names or window identifiers to remove from the group.
	 * @param {function} cb callback to be called upon group creation
	 *
	 * @since TBD
	 * @private
	 */
	removeWindowsFromGroup(params: {
		windowList?: string[] | WindowIdentifier[],
		groupName?: string
	}, cb: Function = Function.prototype) {
		Validate.args(cb, "function=");
		const promiseResolver = (resolve) => {
			if (!params.groupName || !params.windowList) {
				let err = "Invalid Parameters";
				resolve({ err });
				cb(err);
				return;
			}
			if (params.windowList && !Array.isArray(params.windowList)) {
				params.windowList = [params.windowList];
			}
			this.routerClient.query("LauncherService.removeWindowsFromGroup", params, function (err, response) {
				cb(err, response);
				resolve({ err, data: response });
			});
		};
		return new Promise(promiseResolver);

	}

	/**
	 * Get Window Groups that a window belongs to. If no windowIdentifier is specified, gets  the groups of the current window.
	 * @param {*} params
	 * @param {WindowIdentifier} [params.windowIdentifier] Optional. If not specified uses current window
	 * @param {*} cb callback with a list of groups
	 *
	 * @since TBD
	 * @private
	 */
	getGroupsForWindow(params: {
		windowIdentifier: WindowIdentifier
	}, cb: Function = Function.prototype) {
		Validate.args(cb, "function=");
		if (typeof params === "function") {
			cb = params;
			params = null;
		}
		const promiseResolver = (resolve) => {
			if (!params || !params.windowIdentifier) {
				this.windowClient.getComponentState({ field: "finsemble:windowGroups" }, function (err, groups) {
					resolve({ err, data: groups });
					cb(err, groups);
				});
				return;
			}
			this.routerClient.query("LauncherService.getGroupsForWindow", params, function (err, response) {
				resolve({ err, data: response.data });
				cb(err, response.data);
			});
		};
		return new Promise(promiseResolver);
	}

	/**
	 * @private
	 * @param {*} params
	 * @param {WindowIdentifier} [params.windowIdentifier] Optional. Current window is assumed if not specified.
	 * @param {Array.<string>} [params.groupNames] List of group names to add window to. Groups will be created if they do not exist.
	 * @param {*} cb
	 */
	addToGroups(params: {
		windowIdentifier?: WindowIdentifier,
		groupNames?: string[]
	}, cb: Function = Function.prototype) {
		Validate.args(cb, "function=");
		Validate.args(params.groupNames, "array");
		if (!params.windowIdentifier) {
			params.windowIdentifier = this.myWindowIdentifier;
		}
		const promiseResolver = (resolve) => {
			this.routerClient.query("LauncherService.addWindowToGroups", params, (err, response) => {
				cb(err, response);
				resolve({ err, data: response });
			});
		};
		return new Promise(promiseResolver);

	}

	/**
	 * _createWrap allows us to create a wrap without spawning a window
	 *
	 * @param {Object} params
	 * @param {String} params.name
	 * @param {Function} cb
	 * @memberof LauncherClient
	 * @private
	 */
	_createWrap(params: {
		name: string
	}, cb: Function) {
		this.routerClient.query("LauncherService.createWrap", params, cb);
	}

	/**
	 * @private
	 *
	 * @param {*} cb
	 * @memberof LauncherClient
	 */
	start(cb) {
		var self = this;
		// Get Group Updates (only if we are not in a service)
		if (typeof Globals.FSBL !== "undefined") {
			// Get Groups from Component State on Load
			function subscribeToGroupUpdates() {
				self.routerClient.subscribe("Finsemble.LauncherService.updateGroups." + self.windowName, function (err, response) {
					if (!Array.isArray(response.data)) return; //dont attempt to save the initial responder state.
					self.windowClient.setComponentState({ field: "finsemble:windowGroups", value: response.data });
				});
			}
			// cannot add a windowClient dependency here so explicitly wait for windowClient ready (ideally dependency manage could fully handle but maybe later)
			Globals.FSBL.addEventListener("onReady", function () {
				self.windowClient.onReady(() => {
					self.windowClient.getComponentState({ field: "finsemble:windowGroups" }, function (err, groups) {
						if (!err && groups) {
							return self.addToGroups({
								groupNames: groups,
							}, subscribeToGroupUpdates);
						}
						subscribeToGroupUpdates();
					});
				});
			});
		}

		setInterval(function () {
			self.routerClient.transmit("Finsemble.heartbeat", { type: "component", windowName: self.windowName, componentType: "finsemble" });
		}, 1000);

		// @TODO, [Terry] remove in favor of calls to windowClient.getMyIdentifier()
		this.getMyWindowIdentifier((identifier) => {
			self.myWindowIdentifier = identifier;
			if (cb) {
				cb();
			}
		});
	}
}

function constructInstance(params?) {
	params = params ? params : {};
	if (!params.windowClient) params.windowClient = WindowClient;
	return new LauncherClient({
		clients: params,
		onReady: function (cb) {
			Logger.system.debug("launcherClient ready", window.name);
			Logger.perf.debug("LauncherClientReadyTime", "stop");

			launcherClient.start(cb);
		},
		name: "launcherClient",
	});
}

var launcherClient = constructInstance();
launcherClient.constructInstance = constructInstance;

export default launcherClient;
