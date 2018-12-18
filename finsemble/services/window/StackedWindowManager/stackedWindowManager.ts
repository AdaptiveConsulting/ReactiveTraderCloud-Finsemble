/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
// This file contains the service to manage all stacked windows.
// The common/window/stackedWindow wrapper contains the primary interface. Also, common/StackedWindowManager contains interface to createStackedWindow used by Launcher.

import {
	StackedWindowManagement
} from "./Interface.StackedWindowManager";

var RouterClient = require("../../../clients/routerClientInstance");
var WorkspaceClient = require("../../../clients/workspaceClient");
var Logger = require("../../../clients/logger");
var FinsembleWindow = require("../../../common/window/FinsembleWindow");
var FinsembleWindowInternal = require("../WindowAbstractions/FinsembleWindowInternal");
var DistributedStoreClient = require("../../../clients/distributedStoreClient");
var BaseWindow = require("../WindowAbstractions/BaseWindow");
const asyncEach = require("async/each");

const _throttle = require("lodash.throttle");
const constants = require("../../../common/constants");
const { GroupPoolSingleton } = require("../Common/Pools/PoolSingletons");


declare var DistributedStoreClient: any;
declare var window: any;

if (!DistributedStoreClient) {
	window.DistributedStoreClient = require("../../../clients/distributedStoreClient"); // TBD: need to access through wrapper (may have to fix)
	window.DistributedStoreClient.initialize();
}

/**
 * Constructure for stackedWindow record -- this is what's saved in the store
 *
 * @param {any} stackedWindowIdentifier
 * @memberof StackedWindowManager
 * @private
 */
class WindowRecord {
	identifier: any;
	childWindowIdentifiers: any;
	visibleWindowIdentifier: any;
	bounds: any;
	constructor(stackedWindowIdentifier) {
		this.identifier = stackedWindowIdentifier;
		this.childWindowIdentifiers = [];
		this.visibleWindowIdentifier = null;
		this.bounds = null;
	}

}

class StackedWindowManager implements StackedWindowManagement {
	params: any;
	childWindow: any;
	storeCache: any;
	stackedWindowListeners: any;
	stackedWindowWrappers: any;
	eventHandlerFunction: any;
	childNameToSID: any;
	childEventsToHandle: any;
	globalStore: any;

	constructor(params) {
		this.params = params; // keeps any params that ware passed in
		this.childWindow = {}; // holds the wrapper for each child window
		this.storeCache = {}; // maintains a local cache by window name of what what this service keeps in the global store; stays in sync because only this service writes to store
		this.stackedWindowListeners = {}; // saves handles for listeners so can be removed (indexed by stacked window name)
		this.stackedWindowWrappers = {}; // each stacked window has a wrapper so can invoke saveWindowOptions() to save workspace state
		this.eventHandlerFunction = {}; // holds event handlers functions (needed to remove listeners)
		this.childNameToSID = {}; // mapping from child window name to it parent stackedWindowIdentifier

		this.childEventsToHandle = [
			"minimized", "restored", "shown", "hidden", "focused",
			"broughtToFront", "setBounds", "closed", "alwaysOnTop", "setOpacity",
			"title-changed", "bounds-change-request", "bounds-change-end", "bounds-changed"
		];

		this.bindAllFunctions();

		window.StackedWindowManager = this;
	}

	initialize(callback = Function.prototype) {
		// connect to the global window store; again only this service writes to the store for stacked windows
		DistributedStoreClient.onReady(() => {
			DistributedStoreClient.createStore({ store: "Finsemble-Windows", global: true }, (err, store) => {
				Logger.system.debug("StackedWindowManager getStore", err, store);
				this.globalStore = store;
				this.setupStackedWindowServiceListeners();
				this.listenForWorkspaceChanges();
				callback();
			});
		});
	}

	bindAllFunctions() {
		let self = this;
		for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(self))) {
			let method = self[name];
			// skip constructor
			if (!(method instanceof Function) || method === StackedWindowManager) continue;
			self[name] = self[name].bind(self);
		}
	}

	//When the workspace is changed, we need to create a new queue. Without that, the system will wait until the old queue is complete (when it times out...).
	listenForWorkspaceChanges() {
		// RouterClient.addListener("WorkspaceService.switch", this.onWorkspaceChanging);
	}

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// "Hidden" External Interfaces
	// 		RouterClient.publish(`Finsemble.parentChange.${windowIdentifier.windowName}`, { type: "Added", stackedWindowIdentifier });
	// 		RouterClient.publish(`Finsemble.parentChange.${windowIdentifier.windowName}`, { type: "Remove", stackedWindowIdentifier });
	//
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Utility Functions
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Saves in the global store the data from the storeCache for the specified stacked window
	 *
	 * @param {any} stackedWindowIdentifier
	 * @param {any} closing
	 * @memberof StackedWindowManager
	 * @private
	 */
	saveStore(stackedWindowIdentifier, params: any = {}, cb = Function.prototype) {

		const promiseResolver = (resolve) => {

			var windowName = stackedWindowIdentifier.windowName;
			var thisStackRecord = this.storeCache[windowName];

			if (thisStackRecord) {
				Logger.system.debug("StackedWindowManager saveStore", windowName, thisStackRecord);
				thisStackRecord.customData.spawnData.windowIdentifiers = thisStackRecord.childWindowIdentifiers; // TODO: this is hacky. Lots of duplicate info in the descriptor
				this.globalStore.setValue({ field: windowName, value: { identifier: stackedWindowIdentifier, descriptor: thisStackRecord } }, () => {
					if (!this.stackedWindowWrappers[windowName]) {
						FinsembleWindowInternal.getInstance({ stackedWindowManager: this, name: windowName }, (err, wrappedWindow) => {
							this.stackedWindowWrappers[windowName] = wrappedWindow;
							Logger.system.debug("StackedWindowManager saveStore Saving Window State Stack while wrapping", wrappedWindow.name, thisStackRecord);
							this.saveWindowOptions(params, wrappedWindow, () => {
								resolve();
								cb();
							});
						});
					} else {
						Logger.system.debug("StackedWindowManager saveStore Saving Window State Stack already wrapped", this.stackedWindowWrappers[windowName].name, thisStackRecord);
						this.saveWindowOptions(params, this.stackedWindowWrappers[windowName], () => {
							resolve();
							cb();
						});
					}
				});
			} else {
				this.globalStore.removeValue({ field: stackedWindowIdentifier.windowName });
				resolve();
				cb();
			}

			if (!params.noNotification) {
				Logger.system.debug("StackedWindowManager saveStore notification", windowName, thisStackRecord);
				RouterClient.publish(`Finsemble.StackedWindow.${stackedWindowIdentifier.windowName}`, thisStackRecord);
			} else {
				Logger.system.debug("StackedWindowManager saveStore no notification", windowName, thisStackRecord);
			}
		}
		return new Promise(promiseResolver);
	}

	/**
	 * Return true if the specified window in specified stack is showing
	 *
	 * @param {any} params
	 * @returns
	 * @memberof StackedWindowManager
	 * @private
	 */
	isShowing(params) {
		var { stackedWindowIdentifier, windowIdentifier } = params;
		var thisStackRecord = this.storeCache[stackedWindowIdentifier.windowName];
		//
		return (windowIdentifier && thisStackRecord.visibleWindowIdentifier && windowIdentifier.windowName === thisStackRecord.visibleWindowIdentifier.windowName); // returns true if window is visible in stack
	}

	/**
	 * Return true if the params indication the wrap operation was invoked directly on the window, as opposed to directly on the childWindow
	 *
	 * @param {any} params
	 * @returns
	 * @memberof StackedWindowManager
	 * @private
	 */
	operatingDirectlyOnStackedWindow(params) {
		var result;
		var { stackedWindowIdentifier, windowIdentifier } = params;
		stackedWindowIdentifier = stackedWindowIdentifier || {};
		if ((!windowIdentifier) || (stackedWindowIdentifier.windowName === windowIdentifier.windowName)) {
			result = true; // must be a stacked window
		} else {
			result = false; // must be operating on a child of a stacked window
		}
		return result;
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Setup router listeners to handing incoming service requests and events from child windows
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	eventChannelName(stackedWindowName, channelTopic) { return `StackedWindow-${stackedWindowName}-${channelTopic}`; }

	setupInterfaceListener(methodName, methodFunction) {
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

	setupStackedWindowServiceListeners() {
		// window wrapper entry points
		this.setupInterfaceListener("minimize", this.minimize);
		this.setupInterfaceListener("maximize", this.maximize);
		this.setupInterfaceListener("restore", this.restore);
		this.setupInterfaceListener("focus", this.focus);
		this.setupInterfaceListener("bringToFront", this.bringToFront);
		this.setupInterfaceListener("saveWindowOptions", this.saveWindowStateToStore);
		this.setupInterfaceListener("setBounds", this.setBounds);
		this.setupInterfaceListener("getBounds", this.getBounds);
		this.setupInterfaceListener("startMove", this.startMove);
		this.setupInterfaceListener("stopMove", this.stopMove);
		// this.setupInterfaceListener("updateOptions", this.updateOptions);
		this.setupInterfaceListener("hide", this.hide);
		this.setupInterfaceListener("show", this.show);
		this.setupInterfaceListener("close", this.close);
		this.setupInterfaceListener("reorder", this.reorder);
		this.setupInterfaceListener("alwaysOnTop", this.alwaysOnTop);
		// this.setupInterfaceListener("setOpacity", this.setOpacity);
		RouterClient.addResponder("StackedWindow.setOpacity", (err, queryMessage) => {
			if (err) {
				Logger.system.error(`StackedWindow.setOpacity addResponder failed: ${err}`);
			} else {
				this.setOpacity(queryMessage.data, function (err, response) {
					queryMessage.sendQueryResponse(err, response);
				});
			}
		});
		RouterClient.addResponder("StackedWindow.updateOptions", (err, queryMessage) => {
			if (err) {
				Logger.system.error(`StackedWindow.updateOptions addResponder failed: ${err}`);
			} else {
				this.updateOptions(queryMessage.data, function (err, response) {
					queryMessage.sendQueryResponse(err, response);
				});
			}
		});

		RouterClient.addListener("LauncherService.shutdownRequest", this.onLauncherShutdown);

	}

	onLauncherShutdown() {
		let stacks = Object.keys(this.storeCache);
		//Launcher needs to know that each stack is closed. We don't actually do anything here, because there's no cleanup needed. The individual windows will take care of their own shutdown sequence. So we just immediately tell launcher that we're all good.
		stacks.forEach(async stackName => {
			await this.closeStackedWindow({ stackedWindowIdentifier: stackName, removeFromWorkspace: false });
			RouterClient.transmit("LauncherService.shutdownResponse", { waitForMe: false, name: stackName });
		});
	}

	visibleChildEventHandler(stackedWindowName, stackWrap, eventObject) {
		let event = eventObject.data;
		if (event.eventName === "title-changed") {
			let stackedWindowIdentifier = this.childNameToSID[event.name];
			if (stackedWindowIdentifier) { // might not be set when stacked window is closing -- fix in cleanup but put out warn for now
				let thisStackRecord = this.storeCache[stackedWindowIdentifier.windowName];
				for (let i = 0; i < thisStackRecord.childWindowIdentifiers.length; i++) {
					let childIdentifier = thisStackRecord.childWindowIdentifiers[i];
					if (childIdentifier.windowName == event.name) {
						childIdentifier.title = event.title;
						this.saveStore(stackedWindowIdentifier, { noNotification: true });
						break;
					}
				}
			} else {
				Logger.system.warn("stacked window didn't exist for title-change -- ignoring error for now");
			}
		}
		Logger.system.verbose("StackedWindowManager transmitting event", event.eventName, this.eventChannelName(stackedWindowName, event.eventName), event);

		let doNotForwardToStackedWindowList = ["closed"];
		if (!doNotForwardToStackedWindowList.includes(event.eventName)) {
			stackWrap.eventManager.trigger(event.eventName, event);
		}
	};


	addChildEventListener(stackedWindowName, childName, childWrapper) {
		Logger.system.debug("StackedWindowManagerService.addChildEventListener", stackedWindowName, childName);
		FinsembleWindowInternal.getInstance({ name: stackedWindowName }, (err, stackWrap) => {
			for (let i = 0; i < this.childEventsToHandle.length; i++) {
				let eventName = this.childEventsToHandle[i];
				let eventHandler = (eventObject) => {
					this.visibleChildEventHandler(stackedWindowName, stackWrap, eventObject);
				}

				if (eventName === "bounds-change-request") {
					eventHandler = _throttle(eventHandler, 10);
				}

				if (!this.eventHandlerFunction[stackedWindowName]) this.eventHandlerFunction[stackedWindowName] = {};

				if (this.eventHandlerFunction[stackedWindowName][eventName]) {
					Logger.system.warn("Avoiding Registering the same Listener Twice.");
				} else {
					Logger.system.debug("StackedWindowManager addChildEventListener", eventName, childName);
					this.eventHandlerFunction[stackedWindowName][eventName] = eventHandler;
					childWrapper.addEventListener(eventName, eventHandler);
				}
			}
		});
	}

	removeChildEventListener(stackedWindowName, childName, childWrapper) {
		Logger.system.debug("StackedWindowManager.removeChildEventListener", stackedWindowName, childName);
		//We may try to remove listeners before adding them. If so, don't error out.
		if (!this.eventHandlerFunction[stackedWindowName]) this.eventHandlerFunction[stackedWindowName] = {};
		for (let i = 0; i < this.childEventsToHandle.length; i++) {
			let eventName = this.childEventsToHandle[i];
			let handler = this.eventHandlerFunction[stackedWindowName][eventName];
			if (handler) {
				childWrapper.removeEventListener(eventName, handler);
				delete this.eventHandlerFunction[stackedWindowName][eventName];
			} else {
				Logger.system.debug("StackedWindowManager.removeChildEventListener before the listener was added.");
			}

		}
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// The next section of functions are orinted to managing Stacked Windows throught out the system.
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// returns true if all the groupWindows are in the array of child windows
	groupWindowsContainedInStacked(groupWindows:any, childWindows:any) {
		var matchCount = 0;
		var groupWindowCount = 0;
		var groupWindow: any;
		for (groupWindow in groupWindows) {
			groupWindowCount++; // count the number of group windows
			if (groupWindows.hasOwnProperty(groupWindow)) {
				for (let childWindow of childWindows) {
					if (groupWindow === childWindow.name) {
						matchCount++; // count the matches found in child windows
					}
				}
			}
		}
		return (groupWindowCount === matchCount); // return true if all group windows found in child windows
	}

	// when a new child window is added to the stack, this function determines if the stacked window should join any of the childs groups
	joinGroups(groups, stackedWindowIdentifier) {
		var thisStackRecord = this.storeCache[stackedWindowIdentifier.windowName];
		if (!thisStackRecord) {
			Logger.system.error("stackedWindowManager.joinGroups unidentified stacked window", stackedWindowIdentifier);
		} else {
			if (groups) {
				for (let group of groups) {
					var oneGroup = GroupPoolSingleton.get(group);
					if (!this.groupWindowsContainedInStacked(oneGroup.windows, thisStackRecord.childWindowIdentifiers)) {
						// if the group exists outside the stacked window, then join the group
						RouterClient.transmit("DockingService.joinGroup", { groupName: group, name: stackedWindowIdentifier.windowName });
					}
				}
			}
		}
	}

	getGroups(windowIdentifier) {
		const promiseResolver = async (resolve) => {
			RouterClient.query("DockingService.getGroupsForWindow", { name: windowIdentifier.name }, (err, response) => {
				resolve(response.data);
			});
		}
		return new Promise(promiseResolver);
	}

	/**
	 * Creates a new StackedWindow, returning its stackWindowIdentifier in the callback. Optionally initializes stack with a set of child windows.
	 *
	 * Invoked by Launcher Service when spawning a stacked window (e.g. LauncherClient.spawn()). TODO: this all changed. Update
	 *
	 * @param {object} params Parameters
	 * @param {array=} params.windowIdentifiers array of windowIdentifiers to add to stack on creation.
	 * @param {boolean=} params.new if true then stacked window being defined for first time with no presistent state
	 * @param {function=} callback function(err, stackedWindowIdentifier)
	 * @memberof StackedWindowManager
	 * @private
	 */
	async createStackedWindow(params, callback) {
		Logger.system.debug("StackedWindowManager.createStackedWindow", params);
		if (params.customData) params.customData.manifest = {};
		var stackedWindowIdentifier = { windowType: "StackedWindow", windowName: params.windowName || params.name };
		var thisStackRecord;

		// TABBING TBD: need to finish before callback -- async
		//if (true || params.new) { // being created for the first time (not from workspace with presistent state)
		thisStackRecord = new WindowRecord(stackedWindowIdentifier); // blank initial record
		Object.assign(thisStackRecord, params); // merge windowDescriptor into stackRecord
		thisStackRecord.registeredWithDockingManager = false;
		let windowIdentifiers = thisStackRecord.customData.spawnData.windowIdentifiers;
		thisStackRecord.childWindowIdentifiers = [];
		// below commented out because don't want to save until complete state
		// this.saveStore(stackedWindowIdentifier); // go ahead and save initial information before waiting on children

		Logger.system.debug("StackedWindowManager.createStackedWindow NewRecord", thisStackRecord);

		this.storeCache[stackedWindowIdentifier.windowName] = thisStackRecord; // cache the stacked window data
		if (windowIdentifiers) { // if a list of initial windows provides, then now add them as children
			params.noSave = true; // input to addWindow -- don't save in add because will do it once here after all added
			params.stackedWindowIdentifier = stackedWindowIdentifier;

			let wrapReadyCallback = async (err, response) => {
				if (response.data && response.data.state === "open") {
					RouterClient.unsubscribe(subscribeID); // no longer need subscription

					for (let i = 0; i < windowIdentifiers.length; i++) {
						let p = Object.assign({}, params);
						p.windowIdentifier = windowIdentifiers[i];
						if (i === 0) {
							p.inheritGroups = true;
						}

						let { err } = await this.addWindow(p);

						if (err) {
							Logger.system.error("StackedWindowManager.addWindow", err.toString());
							return callback(err.toString(), stackedWindowIdentifier);
						}
					}

					Logger.system.debug("StackedWindowManager.addWindow all windows added");

					// note the LauncherService will add to the workspace after spawn completes (spawn is the main client of this function)
					this.addWorkspaceListeners(stackedWindowIdentifier); // setup listeners to manager workspace.
					this.saveStore(stackedWindowIdentifier); // save again now children added

					RouterClient.publish("Finsemble." + stackedWindowIdentifier.windowName + ".componentReady", {
						name: stackedWindowIdentifier.windowName
					});
				}
			};

			//wait for the wrap to be available before adding windows.
			let wrapReadyChannel = "Finsemble." + stackedWindowIdentifier.windowName + ".wrapReady";
			var subscribeID = RouterClient.subscribe(wrapReadyChannel, wrapReadyCallback);
			// send notification to LauncherClient that the window has been created (otherwise LauncherClient hangs)

			// if not a newStack (i.e. spawned by workspace) the register here after children are added; otherwise for new stacks must dynamically register in addWindow.  TBD: need better model here
			if (!params.newStack) {
				await this.registerWithDockingManager({ windowIdentifier: stackedWindowIdentifier });
			}

			callback(null, stackedWindowIdentifier);
		}
	}

	/**
	 * Adds window as a child to a stacked window.  Adds to the top of the stack, or if specied to a specific location in the stack;
	 *
	 * @param {object=} params Parameters
	 * @param {object} params.stackedWindowIdentifier stacked window to operate on stacked window to operate on
	 * @param {object} params.windowIdentifier window to add
	 * @param {number=} params.position the location in the stack to push the window.  Location 0 is the bottom of the stack. Defaults to the top of stack.
	 * @param {boolean=} params.noSave if true then don't save the store after updating it (will be saved by caller)
	 * @param {boolean=} params.ignorePreviousState if true then ignore the previous state of the window being added (with in another stack and registered with docking handled elsewere)
	 * @param {boolean=} params.noVisibility if true don't automatically set visibility when first window added to the stack (needed for ordered startup)
	 * @param {function=} callback function(err)
	 * @memberof StackedWindowManager
	 * @private
	 */
	addWindow(params, callback = Function.prototype): any {
		const promiseResolver = (resolve) => {

			Logger.system.debug("StackedWindowManager.addWindow", params);
			let subscribeID = RouterClient.subscribe("Finsemble." + params.windowIdentifier.windowName + ".wrapReady", (err, response) => {
				//@todo failure point - no component ready callback.
				if (!(response.data && response.data.name === params.windowIdentifier.windowName && response.data.state === "open")) {
					Logger.system.debug("StackedWindowManager.addWindow waiting", params.windowIdentifier.windowName);
				} else {
					Logger.system.debug("StackedWindowManager wrapper state", params.windowIdentifier.windowName, response.data.state);
					if (response.data.state === "closed") return;
					RouterClient.unsubscribe(subscribeID);
					Logger.system.debug("StackedWindowManager.addWindow continuing", params.windowIdentifier.windowName);
					var { stackedWindowIdentifier, windowIdentifier, noSave, position } = params;
					var thisStackRecord = this.storeCache[stackedWindowIdentifier.windowName];

					if (thisStackRecord) {
						position = position || thisStackRecord.childWindowIdentifiers.length; // position to add the window
						thisStackRecord.childWindowIdentifiers.splice(position, 0, windowIdentifier); // add to the child array
						this.childNameToSID[windowIdentifier.windowName] = stackedWindowIdentifier; // add mapping to parent stackedWindowIdentifier
						FinsembleWindowInternal.getInstance(windowIdentifier, async (err, wrappedWindow) => {
							//@todo failure point - no wrap callback.

							this.childWindow[windowIdentifier.windowName] = wrappedWindow; // save the wrapper for quick use

							// if stacked window doesn't have a visible window, then make this window being added the visible window
							if (!thisStackRecord.visibleWindowIdentifier) {
								wrappedWindow._getBounds({}, (err, bounds) => { // get the window bounds and save as the stackedWindow bounds
									//@todo failure point - no bounds callback.
									Logger.system.debug("StackedWindowManager.addWindow got bounds", windowIdentifier, bounds);
									this.mergeBounds(thisStackRecord, bounds);
									thisStackRecord.bounds = bounds;
									Object.assign(thisStackRecord, bounds);
									this.setVisibleWindow({ stackedWindowIdentifier, windowIdentifier });
								});

								// if stacked window has a predefined visibleWindow and it matches the window being added, then set this window to the visible window
							} else if (thisStackRecord.visibleWindowIdentifier && thisStackRecord.visibleWindowIdentifier.windowName === windowIdentifier.windowName) {
								this.setVisibleWindow({ stackedWindowIdentifier, windowIdentifier });

								// if stacked window has a predefined visibleWindow and it does not match the window being added, then hide this window
							} else {
								Logger.system.debug("StackedWindowManager.addWindow hiding window", windowIdentifier);
								// hide the window being added and set it bounds
								wrappedWindow._hide({ invokedByParent: true }, () => {
									Logger.system.debug("StackedWindowManager.addWindow setting bounds", windowIdentifier, thisStackRecord.bounds);
									wrappedWindow._setBounds({ bounds: thisStackRecord.bounds, invokedByParent: true });
								});
							}


							if (!params.noRemove) { // if higher level (e.g. presentation components) isn't handling the previous state of the window
								// handling the previous state of the window being added
								let parentWindow = wrappedWindow.parentWindow;
								if (parentWindow && parentWindow.name != thisStackRecord.name) {
									// if the window being added was already in a stackedWindow, remove it from that stacked window (the window is already unregistered with docking)
									Logger.system.debug("StackedWindowManager.addWindow removing from previous parentWindow", parentWindow.identifier);
									await this.removeWindow({
										stackedWindowIdentifier: parentWindow.identifier,
										windowIdentifier: windowIdentifier,
										noDocking: true
									});
								} else {
									// else window is standalone and registered with docking, so deregister with docking (since only stacked window is registered)
									Logger.system.debug("StackedWindowManager.addWindow deregistering from docking (case 1)", windowIdentifier);
									if (params.inheritGroups && params.newStack) {
										await this.registerWithDockingManager({ windowIdentifier: stackedWindowIdentifier });
										let groups = await this.getGroups(windowIdentifier);
										this.joinGroups(groups, stackedWindowIdentifier);
									}
									this.deregisterWithDockingManager({ windowIdentifier }); // docking manager manage the parentWindow stacked window (not the individual children)
								}
							}

							if (!noSave) {
								this.saveStore(stackedWindowIdentifier); // update the cache and the global store
							}

							// Notify interested listeners (e.g. BaseWindow wrappers for added window) that window was added to the stack
							Logger.system.debug("StackedWindowManager publish parent notification", windowIdentifier.windowName);
							RouterClient.publish(`Finsemble.parentChange.${windowIdentifier.windowName}`, { type: "Added", stackedWindowIdentifier });

							callback(err);
							resolve({ err });

						});
					} else {
						err = "StackedWindowManager.addWindow: unknown stackedWindowIdentifier";
						Logger.system.error(err, params);
						callback(err);
						resolve({ err });
					}
				}
			}); // subscription handle
		}
		return new Promise(promiseResolver);
	}

	triggerEvent(params, cb) {
		FinsembleWindowInternal.getInstance({ stackedWindowManager: this, name: params.windowIdentifier.windowName }, (err, wrap) => {
			wrap.eventManager.trigger(params.event);
			cb();
		});
	}

	/**
	 * Closes and deletes a stacked window. If specified (see params) then children will be closed; otherwise children will be signals they are removed from the stacked window.
	 *
	 * @param {object} params Parameters
	 * @param {object} params.stackedWindowIdentifier stacked window to operate on
	 * @param {object=} params.closeChildren if true then also close all children
	 * @param {object=} params.removeFromWorkspace if then remove stacked window and child windows from the workspace
 	 * @param {boolean=} params.waitChildClose if true then wait for child wrapper to close before returned (needed for cleanly switching workspaces)
	 * @param {boolean=} params.noDocking if true then do not register removed window with docking (the workspace is unaffected)
	 * @param {any} callback
	 * @memberof StackedWindowManager
	 */
	closeStackedWindow(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.closeStackedWindow", params.stackedWindowIdentifier.windowName, params);

		const promiseResolver = async (resolve) => {
			var { stackedWindowIdentifier, removeFromWorkspace, closeChildren } = params;
			if (!closeChildren && closeChildren !== false) {
				closeChildren = removeFromWorkspace;
			}
			//this.deregisterWithDockingManager({ windowIdentifier: stackedWindowIdentifier, removeFromWorkspace });
			this.removeWorkspaceListeners(stackedWindowIdentifier);

			var thisStackRecord = this.storeCache[stackedWindowIdentifier.windowName];
			await this.saveStore(stackedWindowIdentifier, { closing: true }); // save the latest state (bounds changes are too frequent to always save)
			Logger.system.debug("StackedWindowManager.closeStackedWindow saveStore done", params.stackedWindowIdentifier.windowName);

			if (!thisStackRecord) {
				let err = "StackedWindowManager.closeStackedWindow: no stacked record";
				Logger.system.error(err, params);
				resolve({ err });
				callback(err);
			} else {
				// clear the pubsub state for the stacked window -- must set to empty (to match LaucherClient check)
				RouterClient.publish("Finsemble." + stackedWindowIdentifier.windowName + ".componentReady", {});

				if (removeFromWorkspace) {

					if (closeChildren) {
						while (thisStackRecord.childWindowIdentifiers.length > 0) {
							// the currently visible window is closed one at a time to support orderly close, which might require UI interaction
							await this.deleteWindow({
								noCloseStack: true, waitChildClose: params.waitChildClose, stackedWindowIdentifier,
								windowIdentifier: thisStackRecord.visibleWindowIdentifier
							});
						}
					} else {
						while (thisStackRecord.childWindowIdentifiers.length > 0) {
							await this.removeWindow({
								noCloseStack: true, waitChildClose: params.waitChildClose, stackedWindowIdentifier,
								windowIdentifier: thisStackRecord.visibleWindowIdentifier
							});
						}
					}
					WorkspaceClient.removeWindow({ name: stackedWindowIdentifier.windowName }); // remove this stacked window from the workspace
					this.deregisterWithDockingManager({ windowIdentifier: stackedWindowIdentifier, removeFromWorkspace });
					delete this.storeCache[stackedWindowIdentifier.windowName]; // remove stacked window from cache
					this.globalStore.removeValue({ field: stackedWindowIdentifier.windowName }); // remove stacked window from window global store
					//this.triggerEvent({ event: "closed", windowIdentifier: stackedWindowIdentifier }, () => {
					resolve(); callback();
					//});
				} else {
					// essentially shouldn't have to do anything but cleanup local state -- workspace is closing children individually
					let visibleChildWrapper = this.childWindow[thisStackRecord.visibleWindowIdentifier.windowName];
					this.removeChildEventListener(stackedWindowIdentifier.windowName, thisStackRecord.visibleWindowIdentifier.windowName, visibleChildWrapper);
					delete this.storeCache[stackedWindowIdentifier.windowName]; // remove stacked window from cache
					this.globalStore.removeValue({ field: stackedWindowIdentifier.windowName }); // remove stacked window from window global store
					//this.triggerEvent({ event: "closed", windowIdentifier: stackedWindowIdentifier }, () => {
					resolve(); callback();
					//});
				}
			}
		};
		return new Promise(promiseResolver);
	}

	/**
	 * Removes a child window from a stacked window.  If removed window was visible, then the bottom child window (position 0) in stack will be made visible.
	 *
	 * @param {object} params Parameters
	 * @param {object} params.stackedWindowIdentifier stacked window to operate on
	 * @param {object} params.windowIdentifier window to remove
	 * @param {boolean=} params.noDocking if true then do not register removed window with docking (the workspace is unaffected)
	 * @param {boolean=} params.waitChildClose if true then wait for child wrapper to close before returned (needed for cleanly switching workspaces)
	 * @param {boolean=false} params.closeWindow
	 * @param {boolean=false} params.noCloseStack  if true don't close the stack window when only one child
	 * @param {function=} callback function(err)
	 * @memberof StackedWindowManager
	 * @returns promise
	 * @private
	 */
	removeWindow(params, callback = Function.prototype) {
		const promiseResolver = (resolve) => {
			var { noCloseStack, stackedWindowIdentifier, windowIdentifier, noDocking } = params;
			var thisStackRecord = this.storeCache[stackedWindowIdentifier.windowName];
			Logger.system.debug("StackedWindowManager.removeWindow", params, thisStackRecord);

			var err = null;

			if (thisStackRecord) {
				thisStackRecord.childWindowIdentifiers = thisStackRecord.childWindowIdentifiers.filter(item => item.windowName !== windowIdentifier.windowName); // remove child window
				let childWrapper = this.childWindow[windowIdentifier.windowName];
				childWrapper.clearParent(); // remove parent setting from child being remove
				delete this.childNameToSID[windowIdentifier.windowName]; // remove child's mapping to parent stackedWindowIdentifier

				if (thisStackRecord.visibleWindowIdentifier && thisStackRecord.visibleWindowIdentifier.windowName === windowIdentifier.windowName) {
					this.removeChildEventListener(thisStackRecord.identifier.windowName, windowIdentifier.windowName, childWrapper);
					thisStackRecord.visibleWindowIdentifier = null;
				}

				if (!noDocking) { // unless specified otherwise, register the remove window with docking
					Logger.system.debug("StackedWindowManager.removeWindow registering with docking", stackedWindowIdentifier, windowIdentifier);
					this.registerWithDockingManager({ windowIdentifier });
				}

				if (!noCloseStack && thisStackRecord.childWindowIdentifiers.length === 1) { // normally if no more child windows then unregister and close the stackedWindow
					RouterClient.query("DockingService.getGroupsForWindow", { name: thisStackRecord.name }, (err, response) => {
						this.registerWithDockingManager({ windowIdentifier: thisStackRecord.childWindowIdentifiers[0] }, async () => {
							let groups = response.data;
							if (groups) {
								for (let group of groups) {
									RouterClient.transmit("DockingService.joinGroup", {
										groupName: group,
										name: thisStackRecord.childWindowIdentifiers[0].windowName
									});
								}
							}
							let childWrapper = this.childWindow[thisStackRecord.childWindowIdentifiers[0].windowName];
							childWrapper._show({ invokedByParent: true });

							let { wrap } = await FinsembleWindow.getInstance(params.stackedWindowIdentifier);
							// for now must call close on public wrapper to have wrapper cleanup happen correctly
							wrap.close({ closeChildren: false, stackedWindowIdentifier, removeFromWorkspace: true, invokedByParent: true, force: false }, (err) => {
								callback(err);
								resolve({ err });
							});
						});
					});
				}

				// go ahead and set visibility even if closing in order to finish this set of stackedWindow updates
				if (thisStackRecord.childWindowIdentifiers.length && !thisStackRecord.visibleWindowIdentifier) {
					this.setVisibleWindow({ stackedWindowIdentifier, windowIdentifier: thisStackRecord.childWindowIdentifiers[0] }); // make the first window visible by default
				}

				this.saveStore(params.stackedWindowIdentifier);

				// Notify interested listeners (e.g. BaseWindow wrappers of the removed window) that window was removed from the stack
				Logger.system.debug("StackedWindowManager remove parent notification", windowIdentifier.windowName);
				RouterClient.publish(`Finsemble.parentChange.${windowIdentifier.windowName}`, { type: "Removed", stackedWindowIdentifier });
				RouterClient.publish(`Finsemble.parentChange.${windowIdentifier.windowName}`, {});

			} else {
				err = "StackedWindowManager.removeWindow unknown stackedWindowIdentifier";
				Logger.system.warn(err, params);
			}

			if (params.waitChildClose) {
				let subscribeID = RouterClient.subscribe("Finsemble." + params.windowIdentifier.windowName + ".wrapReady", (err, response) => {
					if (!(response.data && response.data.name === params.windowIdentifier.windowName && response.data.state === "closed")) {
						Logger.system.debug("StackedWindowManager.removeWindow waiting", params.windowIdentifier.windowName);
					} else {
						Logger.system.debug("StackedWindowManager.removeWindow continuing", params.windowIdentifier.windowName);
						RouterClient.unsubscribe(subscribeID);
						callback(err);
						resolve({ err });
					}
				});
			} else {
				callback(err);
				resolve({ err });
			}
		};
		return new Promise(promiseResolver);
	}

	/**
	 * Removes a window from the stack then closes it.  If removed window was visible, then the bottom child window (position 0) in stack will be made visible.
	 *
	 * @param {object} params Parameters
	.* @param {object} params.stackedWindowIdentifier stacked window to operate on
	 * @param {object} params.windowIdentifier window to delete
	 * @param {function=} callback function(err)
	 * @memberof StackedWindowManager
	 * @private
	 */
	deleteWindow(params, callback = Function.prototype) {
		const promiseResolver = async (resolve) => {
			Logger.system.debug("StackedWindowManager.deleteWindow", params);
			if (params.removeFromWorkspace === false) {
				callback();
				resolve();
			} else {
				params.noDocking = true;
				await this.removeWindow(params);
				let { wrap } = await FinsembleWindow.getInstance(params.windowIdentifier);
				wrap.close({ invokedByParent: true, force: false }, (err) => {
					callback(err);
					resolve({ err });
				});
			}
		};
		return new Promise(promiseResolver);
	}

	/**
	 * Sets the visible window within the stack.  The previously visible window in stack will be automatically hidden.
	 *
	 * @param {object} params Parameters
	 * @param {object} params.stackedWindowIdentifier stacked window to operate on
	 * @param {object} params.windowIdentifier
	 * @param {object} params.force if force is true then reset vistible even if it is already marked as visible in store (this is for startup)
	 * @todo the force param needs to handle the code below around previouslyVisibleWindow. In that case, the previouslyVisible window may exist, but the listeners may not have been added yet.
	 * @param {function=} callback function(err)
	 * @memberof StackedWindowManager
	 * @private
	 */
	setVisibleWindow(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.setVisibleWindow", params);
		var { force, stackedWindowIdentifier, windowIdentifier } = params;
		var thisStackRecord = this.storeCache[stackedWindowIdentifier.windowName];

		var err = null;
		if (thisStackRecord) {
			//if (force || !this.isShowing(params)) { // skip if window is already showing
			let previouslyVisibleWindow;
			if (thisStackRecord.visibleWindowIdentifier) { // if previous visisble window
				previouslyVisibleWindow = this.childWindow[thisStackRecord.visibleWindowIdentifier.windowName]; // will use below to hide previous after setting next
				if (previouslyVisibleWindow) {
					this.removeChildEventListener(stackedWindowIdentifier.windowName, thisStackRecord.visibleWindowIdentifier.windowName, previouslyVisibleWindow);
				}
			}

			thisStackRecord.visibleWindowIdentifier = windowIdentifier;

			this.childWindow[windowIdentifier.windowName]._setBounds({ bounds: thisStackRecord.bounds, invokedByParent: true }); // set bounds on new visible window
			let childWrapper = this.childWindow[windowIdentifier.windowName];
			if (childWrapper.disableFrame) childWrapper.disableFrame();
			this.addChildEventListener(stackedWindowIdentifier.windowName, thisStackRecord.visibleWindowIdentifier.windowName, childWrapper);
			Logger.system.debug("StackedWindowManager.setVisibleWindow showing", windowIdentifier, "Cache equality", this.childWindow[windowIdentifier.windowName] === window._FSBLCache.windows[windowIdentifier.windowName] ? "equal" : "not-equal");
			childWrapper._bringToFront({ invokedByParent: true }); // make sure the window is in front (use case: adding tab to window that isn't in front)
			childWrapper._show({ invokedByParent: true }, () => {  // make the window visisble
				childWrapper._focus({ invokedByParent: true });
				Logger.system.debug("StackedWindowManager.setVisibleWindow shown", windowIdentifier);
				//Doing it this way so that the window in the back is visible when the one in the front hides. This reduces the flickering effect of switching tabs.
				if (previouslyVisibleWindow && previouslyVisibleWindow.windowName !== childWrapper.windowName) {
					Logger.system.debug("StackedWindowManager.setVisibleWindow hiding previous", previouslyVisibleWindow);
					previouslyVisibleWindow._hide({ invokedByParent: true });
				}
			});
			this.saveStore(params.stackedWindowIdentifier);
			//} //else {
			//Logger.system.debug("StackedWindowManager.setVisibleWindow window already showing", params);
			//}
		} else {
			err = "StackedWindowManager.setVisibleWindow unknown stackedWindowIdentifier";
			Logger.system.warn(err, params);
		}

		if (callback) callback(err);
	}

	// temporary code to workaround tabbing/tiling problem that reshows window when tabs are reordered
	hideInactiveChildren(thisStackRecord) {
		Logger.system.debug("StackedWindowManager.hideInactiveChildren");
		thisStackRecord.childWindowIdentifiers.forEach(identifier => {
			// only rehide if not the the visible window
			if (thisStackRecord.visibleWindowIdentifier && identifier.windowName !== thisStackRecord.visibleWindowIdentifier.windowName) {
				let wrap = this.childWindow[identifier.windowName];
				wrap._hide({ invokedByParent: true });
			}
		});
	}

	/**
	 * Reorders the stack, but odes not affect visibility
	 *
	 * @param {object} params Parameters
	 * @param {object} params.stackedWindowIdentifier stacked window to operate on
	 * @param {array} params.windowIdentifiers array of windowIdentifiers which provides the new order
	 * @param {function=} callback function(err)
	 * @memberof StackedWindowManager
	 * @private
	 */
	reorder(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.reorder", params);
		var { stackedWindowIdentifier, windowIdentifiers } = params;
		// TBD: verify list of identifiers are the same and if not generate error
		var thisStackRecord = this.storeCache[stackedWindowIdentifier.windowName];
		var err = null;

		if (thisStackRecord) {
			thisStackRecord.childWindowIdentifiers = windowIdentifiers;
			this.hideInactiveChildren(thisStackRecord); // this is to sidestep a bug in docking/tiling that reshows a moved tab
			this.saveStore(stackedWindowIdentifier);
		} else {
			err = "StackedWindowManager.reorder unknown stackedWindowIdentifier";
			Logger.system.warn(err, params);
		}

		if (callback) callback(err);
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// The next section of functions support stacked-window primitives throughout the system.
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// stacked window minimize (invoked remotely through stacked window wrapper)
	minimize(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.minimize", params);

		// if operating on StackedWindow then operation should apply to the visible window
		if (this.operatingDirectlyOnStackedWindow(params)) {
			var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
			if (thisStackRecord) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			} else {
				Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
				return callback("undefined window");
			}
		}

		if (this.isShowing(params)) {
			var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
			params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
			visibleWindow._minimize(params); // invoke function on active window's wrapper
		} else {
			Logger.system.error(`StackedWindowManager Warning: minimize received for hidden window ${params.windowIdentifier.windowName}`);
		}
		callback(null);
	}

	// stacked window maximize (invoked remotely trhough stacked window wrapper)
	maximize(params, callback = Function.prototype) {
		var self = this;
		Logger.system.debug("StackedWindowManager.maximize", params);

		// if operating on StackedWindow then operation should apply to the visible window
		if (this.operatingDirectlyOnStackedWindow(params)) {
			var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
			if (thisStackRecord) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			} else {
				Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
				return callback("undefined window");
			}
		}

		if (this.isShowing(params)) {
			var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
			var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
			params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
			var self = this;

			RouterClient.query("DockingService.maximizeWindow",
				{
					name: thisStackRecord.name,
					windowIdentifier: params.stackedWindowIdentifier
				}, function (err, response) {
					debugger;
					thisStackRecord.childWindowIdentifiers.map((childIdentifier) => {
						let childWindow = self.childWindow[childIdentifier.windowName];
						if (childWindow) {
							childWindow.saveWindowState(constants.WINDOWSTATE.MAXIMIZED);
							childWindow.eventManager.trigger("maximized");
						}
					});
					callback(null);
				});

			// invoke function on active window's wrapper
		} else {
			callback(null);

			Logger.system.error(`StackedWindowManager Warning: maximize received for hidden window ${params.windowIdentifier.windowName}`);
		}
	}

	// stacked window restore (invoked remotely through stacked window wrapper)
	restore(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.restore", params);
		var err = null;
		var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
		if (thisStackRecord) {
			// if operating on StackedWindow then operation should apply to the visible window
			if (this.operatingDirectlyOnStackedWindow(params)) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			}

			// regarding "true" below.  For now don't check isShowing. Currently multi-window functions (like bringWindowsToFront) operates off all windows causes errors to be logged (not just visbile windows).
			if (true || this.isShowing(params)) {
				var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
				params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
				var self = this;

				FinsembleWindowInternal.getInstance({ stackedWindowManager: this, name: thisStackRecord.name }, (err, wrappedWindow) => {
					if (visibleWindow.windowState === BaseWindow.WINDOWSTATE.MINIMIZED) {
						params.checkMinimize = false;
						visibleWindow._restore(params, callback);
					} else if (visibleWindow.windowState === BaseWindow.WINDOWSTATE.MAXIMIZED) {
						RouterClient.query("DockingService.restoreFromMaximize", {
							name: thisStackRecord.name,
							windowIdentifier: params.stackedWindowIdentifier
						}, function (err, response) {
							thisStackRecord.childWindowIdentifiers.map((childIdentifier) => {
								let childWindow = self.childWindow[childIdentifier.windowName];
								if (childWindow) {
									childWindow.saveWindowState(constants.WINDOWSTATE.NORMAL);
									childWindow.eventManager.trigger("restored");
								}
							});
							callback(err);
						});
					}
				});

			} else {
				Logger.system.error(`StackedWindowManager Warning: restore received for hidden window ${params.windowIdentifier.windowName}`);
			}
		} else { // else must be an outdated request from a closed stacked window
			Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
			err = "undefined window";
		}
		callback(err);
	}

	// stacked window focus (invoked remotely through stacked window wrapper)
	focus(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.focus", params);

		// if operating on StackedWindow then operation should apply to the visible window
		if (this.operatingDirectlyOnStackedWindow(params)) {
			var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
			if (thisStackRecord) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			} else {
				Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
				return callback("undefined window");
			}
		}

		if (this.isShowing(params)) {
			var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
			params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
			visibleWindow._focus(params); // invoke function on active window's wrapper
		} else {
			Logger.system.error(`StackedWindowManager Warning: focus received for hidden window ${params.windowIdentifier.windowName}`);
		}
		callback(null);
	}

	// stacked window bringToFront (invoked remotely through stacked window wrapper)
	bringToFront(params, callback = Function.prototype) {
		params = params || {};
		Logger.system.debug("StackedWindowManager.bringToFront", params);

		// if operating on StackedWindow then operation should apply to the visible window
		if (this.operatingDirectlyOnStackedWindow(params)) {
			var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
			if (thisStackRecord) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			} else {
				Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
				return callback("undefined window");
			}
		}

		if (this.isShowing(params)) {
			var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
			params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
			visibleWindow._bringToFront(params); // invoke function on active window's wrapper
		} else {
			Logger.system.error(`StackedWindowManager Warning: bringToFront received for hidden window ${params.windowIdentifier.windowName}`);
		}
		callback(null);
	}

	saveWindowStateToStore(params, callback = Function.prototype) {
		this.saveStore(params.stackedWindowIdentifier, callback);
	}

	mergeBounds(stackRecord, bounds) {
		bounds.right = bounds.left + bounds.width;

		let newBounds = { left: bounds.left, right: bounds.right, width: bounds.width, top: bounds.top, bottom: bounds.top + bounds.height, height: bounds.height };
		let defaultBounds = { defaultLeft: bounds.left, defaultWidth: bounds.width, defaultTop: bounds.top, defaultHeight: bounds.height };
		Object.assign(stackRecord, newBounds);
		Object.assign(stackRecord, defaultBounds);
		stackRecord.bounds = newBounds;
	}

	// stacked window setBounds (invoked remotely through stacked window wrapper)
	setBounds(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.setBounds", params);
		var err = null;

		var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
		if (!thisStackRecord) {
			Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
			err = "undefined window";
		} else {
			// if operating on StackedWindow then operation should apply to the visible window
			if (this.operatingDirectlyOnStackedWindow(params)) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			}

			if (this.isShowing(params)) {
				var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
				this.mergeBounds(thisStackRecord, params.bounds);
				params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
				visibleWindow._setBounds(params); // invoke function on active window's wrapper
			} else if (params.windowIdentifier) {
				Logger.system.error(`StackedWindowManager Warning: setBounds received for hidden window ${params.windowIdentifier}`);
			}
		}

		callback(err);
	}

	// stacked window getBounds (invoked remotely through stacked window wrapper)
	getBounds(params, callback = Function.prototype) {
		params = params || {};
		Logger.system.debug("StackedWindowManager.getBounds", params);

		// if operating on StackedWindow then operation should apply to the visible window
		if (this.operatingDirectlyOnStackedWindow(params)) {
			var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
			if (thisStackRecord) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
				Logger.system.debug("StackedWindowManager.getBounds", params, thisStackRecord);
			} else {
				Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
				return callback("undefined window");
			}
		}

		if (thisStackRecord.bounds) {
			callback(null, thisStackRecord.bounds);
		} else if (!thisStackRecord.visibleWindowIdentifier) { // since no visible window use empty bounds; this is to handle an intermittant error that sometimes occurred when creating a stack
			let emptyBounds = { left: 0, right:0, width: 10, top: 0, bottom: 0, height: 10 };
			callback(null, emptyBounds);
		} else if (this.isShowing(params)) {
			var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
			if (!visibleWindow) {
				let err = `stackedWindowManager: cannot find child window ${params.windowIdentifier.windowName}`;
				Logger.system.error(err);
				callback(err);
				return;
			}
			params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
			visibleWindow._getBounds(params, (err, bounds) => { // invoke function on active window's wrapper
				if (err) {
					bounds = this.storeCache[params.stackedWindowIdentifier.windowName].bounds;
				}
				callback(err, bounds);
			});
		} else if (!this.operatingDirectlyOnStackedWindow(params)) {
			Logger.system.error(`StackedWindowManager Warning: getBounds received for hidden window ${params.windowIdentifier.windowName}`);
			callback("getbounds on hidden window");
		} else if (thisStackRecord && thisStackRecord.bounds) {
			callback(null, thisStackRecord.bounds);
		} else {
			callback("something went wrong");
		}
	}

	// stacked window updateOptions (invoked remotely through stacked window wrapper)
	updateOptions(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.updateOptions", params);
		var err = null;

		// TABBING TBD: put in a getter function for the stacked records to provide common error checking.  Docking might invoke for non-existent stacked window
		var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
		if (thisStackRecord) {
			// if operating on StackedWindow then operation should apply to the visible window
			if (this.operatingDirectlyOnStackedWindow(params)) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			}

			if (this.isShowing(params)) {
				var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
				params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
				visibleWindow._updateOptions(params); // invoke function on active window's wrapper
				// if (visibleWindow) { // update options is invoked during docking registeration while stacked window is being created, so may not have visisble window
				// 	visibleWindow._updateOptions(params); // invoke function on active window's wrapper
				// }
			} else {
				Logger.system.error(`StackedWindowManager.updateOptions Warning: updateOptions received for hidden window ${params.windowIdentifier.windowName}`);
			}
		} else { // else must be an outdated request from a closed stacked window
			Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
			err = "undefined window";
		}

		callback(err);
	}

	// stacked window hide (invoked remotely through stacked window wrapper)
	hide(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.hide", params);

		// if operating on StackedWindow then operation should apply to the visible window
		if (this.operatingDirectlyOnStackedWindow(params)) {
			var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
			if (thisStackRecord) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			} else {
				Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
				return callback("undefined window");
			}
		}

		if (this.isShowing(params)) {
			var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
			params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
			visibleWindow._hide(params); // invoke function on active window's wrapper
		} else {
			Logger.system.error(`StackedWindowManager Warning: hide received for hidden window ${params.windowIdentifier.windowName}`);
		}
		callback(null);
	}

	// stacked window show (invoked remotely through stacked window wrapper)
	show(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.show", params);

		// if operating on StackedWindow then operation should apply to the visible window
		if (this.operatingDirectlyOnStackedWindow(params)) {
			var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
			if (thisStackRecord) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			} else {
				Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
				return callback("undefined window");
			}
		}

		if (this.isShowing(params)) {
			var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
			params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
			visibleWindow._show(params); // invoke function on active window's wrapper
		} else {
			Logger.system.error(`StackedWindowManager Warning: show received for hidden window ${params.windowIdentifier.windowName}`);
		}
		callback(null);
	}

	// this stacked window close applies to an individual child window (see closeStackedWindow for closing the complete stackedWindow)
	close(params, callback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.close", params);
		// if operating on StackedWindow then operation should apply to the visible window
		if (params.removeFromWorkspace || this.operatingDirectlyOnStackedWindow(params)) {
			this.closeStackedWindow(params, callback);
		} else {
			this.deleteWindow(params, callback);
		}
	}

	// stacked window alwaysOnTop (invoked remotely through stacked window wrapper)
	alwaysOnTop(params, callback) {
		Logger.system.debug("StackedWindowManager.alwaysOnTop", params);

		// if operating on StackedWindow then operation should apply to the visible window
		if (this.operatingDirectlyOnStackedWindow(params)) {
			var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
			if (thisStackRecord) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			} else {
				Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
				return callback("undefined window");
			}
		}

		if (this.isShowing(params)) {
			var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
			params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
			if (visibleWindow._alwaysOnTop) {
				visibleWindow._alwaysOnTop(params); // invoke function on active window's wrapper
			}
		} else {
			Logger.system.error(`StackedWindowManager Warning: alwaysOnTop received for hidden window ${params.windowIdentifier.windowName}`);
		}
		callback(null);
	}

	// stacked window setOpacity (invoked remotely through stacked window wrapper)
	setOpacity(params, callback = Function.prototype) {
		var err = null;
		Logger.system.debug("StackedWindowManager.setOpacity", params);
		var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
		if (thisStackRecord) {
			// if operating on StackedWindow then operation should apply to the visible window
			if (this.operatingDirectlyOnStackedWindow(params)) {
				if (!thisStackRecord.visibleWindowIdentifier) return; //there's no window to set opacity on.
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			}

			if (this.isShowing(params)) {
				var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
				params.invokedByParent = true; // prevents wrapper function from recalling parent (causing a loop)
				visibleWindow._setOpacity(params); // invoke function on active window's wrapper
			} else {
				Logger.system.error(`StackedWindowManager Warning: setOpacity received for hidden window ${params.windowIdentifier.windowName}`);
			}
		} else {
			Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
			err = "undefined window";
		}
		callback(err);
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// General functions support workspace and docking
	// TABBING TBD: NEED GENERAL PARAMETERIZED VERSIONS OF THE FUNCTIONS BELOW PULLED OUT OF THE WINDOW CLIENT AND PUT IN COMMON TO SHARE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// placehold for workspace integration
	saveWindowOptions(params, stackedWindow, maincallback = Function.prototype) {
		Logger.system.debug("StackedWindowManager.setComponentState", stackedWindow.identifier);

		let descriptor = {};

		// Only save required items to cache instead of saving everything.
		let thingsToInclude = ["name", "windowName", "childWindowIdentifiers", "top", "left", "height", "width", "bottom", "right", "windowType", "visibleWindowIdentifier", "customData", "bounds"];

		for (let k of Object.keys(stackedWindow)) {
			//Don't save any function, private thing, or the visible window (which is a wrapped window object)
			if (thingsToInclude.includes(k)) {
				descriptor[k] = stackedWindow[k];
			}
		}

		let thisStackRecord = this.storeCache[stackedWindow.identifier.windowName];
		if (!thisStackRecord) return maincallback("stack record not found");

		for (let k of Object.keys(thisStackRecord)) {
			if (thingsToInclude.includes(k)) {
				descriptor[k] = thisStackRecord[k];
			}
		}

		stackedWindow.saveCompleteWindowState(descriptor, () => {
			var saveChildBounds = (childIdentifier, done) => {
				Logger.system.debug("StackedWindowManager.saveWindowOptions saveCompleteWindowState child", childIdentifier.windowName);
				let bounds = thisStackRecord.bounds;
				bounds.persistBounds = true;

				let wrap = this.childWindow[childIdentifier.windowName];

				if (wrap) {
					wrap._setBounds({ bounds, invokedByParent: true }, done);
				} else {
					FinsembleWindowInternal.getInstance({ name: childIdentifier.windowName }, (err, wrappedWindow) => {
						wrappedWindow._setBounds({ bounds, invokedByParent: true }, done);
					});
				}
			};

			Logger.system.debug("StackedWindowManager.saveWindowOptions saveCompleteWindowState start", stackedWindow.identifier.windowName, descriptor);

			if (!params.closing) {
				asyncEach(thisStackRecord.childWindowIdentifiers, saveChildBounds, () => {
					Logger.system.debug("StackedWindowManager.saveWindowOptions saveCompleteWindowState done");
					maincallback();
				});
			} else {
				Logger.system.debug("StackedWindowManager.saveWindowOptions saveCompleteWindowState skipped");
				maincallback();
			}

		});

	}

	/**
	 * It adds listeners for workspace 'close' (when the workspace is switched), 'bringToFront', 'restore', and 'move' (used in AutoArrange).
	 */
	addWorkspaceListeners(stackedWindowIdentifier) {
		Logger.system.debug("StackedWindowManager.addWorkspaceListeners", stackedWindowIdentifier);
		var subscribeID; // must be saved to unsubsribed later
		var listenerFunction; // must be saved to remove listener later

		// pubsub ensures close command can't be loss in a race condition (e.g. if close is issued while the destinateion window was reloading)
		//subscribeID = RouterClient.subscribe(`WorkspaceService.${stackedWindowIdentifier.windowName}`, (err, response) => {
		// Logger.system.debug("StackedWindowManager Workspace incoming notification", `WorkspaceService.${stackedWindowIdentifier.windowName}`, response.data);
		// if (response.data.state === "start") {
		// 	// do nothing since normal startup
		// } else if (response.data.state === "close") {
		// 	// since going to close, reset this pubsub state back to default state (otherwise would keep closing);
		// 	// note may not see local log of this outgoing publish because window is closing (but publish will go out before close)
		// 	RouterClient.publish(`WorkspaceService.${stackedWindowIdentifier.windowName}`, { "state": "start" });
		// 	this.closeStackedWindow({ stackedWindowIdentifier, removeFromWorkspace: false }); // close the stacked window
		// } else {
		// 	Logger.system.warn("StackedWindowManager incoming notify has unknown state", stackedWindowIdentifier.windowName, response.data);
		// }
		//});

		RouterClient.addListener(`WorkspaceService.${stackedWindowIdentifier.windowName}`, listenerFunction = (err, response) => {
			Logger.system.debug("StackedWindowManager Workspace incoming transmit", `WorkspaceService.${stackedWindowIdentifier.windowName}`, response.data);
			var thisStackRecord = this.storeCache[stackedWindowIdentifier.windowName];
			var visibleWindowWrapper = this.childWindow[thisStackRecord.visibleWindowIdentifier.windowName];
			switch (response.data.command) {
				case "bringToFront":
					visibleWindowWrapper.bringToFront();
					break;
				case "restore":
					visibleWindowWrapper.restore();
					break;
				case "move":
					visibleWindowWrapper.animate({
						transition: {
							position: {
								left: response.data.left,
								top: response.data.top,
								duration: 250
							}
						}, options: {}
					},
						function (err) {
							if (err) {
								Logger.system.error("StackedWindowManager:WorkspaceService: Animate failed: " + err);
							} else {
								RouterClient.transmit("DockingService.updateWindowPositions", {});
								Logger.system.debug("StackedWindowManager:WorkspaceService successfully moved window.");
							}
						});
					break;
			}
		});

		this.stackedWindowListeners[stackedWindowIdentifier.windowName] = { subscribeID, listenerFunction };
	}

	removeWorkspaceListeners(stackedWindowIdentifier) {
		Logger.system.debug("StackedWindowManager.removeWorkspaceListeners", stackedWindowIdentifier);
		var stackedWindowListeners = this.stackedWindowListeners[stackedWindowIdentifier.windowName]; // these handles save with listeners added above
		if (stackedWindowListeners) {
			//RouterClient.unsubscribe(stackedWindowListeners.subscribeID);
			RouterClient.removeListener("WorkspaceService." + stackedWindowIdentifier.windowName, stackedWindowListeners.listenerFunction);
			delete this.stackedWindowListeners[stackedWindowIdentifier.windowName];
		} else {
			Logger.system.debug(`StackedWindowManager.removeWorkspaceListeners. No workspace listeners found for ${stackedWindowIdentifier.windowName}`);
		}

	}

	/**
	 * Register a window with docking. It transmits a message to the LauncherService, which registers it as a dockable window.
	 *
	 * @param {object} params Parameters
	 * @param {string} params.windowIdentifier the window to register (may be stacked window or child window)
	 * @private
	 */
	registerWithDockingManager(params, cb = Function.prototype) {
		const promiseResolver = (resolve) => {
			Logger.system.debug("StackedWindowManager.registerWithDockingManager", params);
			var windowName = params.windowIdentifier.windowName;
			params.windowIdentifier.name = windowName;
			// var thisStackRecord = this.storeCache[windowName];
			// var bounds = thisStackRecord.bounds;

			RouterClient.query("DockingService.registerWindow", Object.assign(params.windowIdentifier, params.windowType), function () {
				Logger.system.debug("StackedWindowManager Docking Registration complete.", params);
				resolve();
				if (cb) {
					cb();
				}
			});
		}
		return new Promise(promiseResolver);
	}

	/**
	 * Unregister a window with docking.
	 *
	 * @param {object} params Parameters
	 * @param {boolean} params.removeFromWorkspace true to remove from workspace
	 * @param {string} params.windowIdentifier window to unregister
	 * @private
	 */
	deregisterWithDockingManager(params) {
		Logger.system.debug("StackedWindowManager.deregisterWithDockingManager", params);
		RouterClient.transmit("DockingService.deregisterWindow", {
			name: params.windowIdentifier.windowName,
			userInitiated: params.removeFromWorkspace
		});
	}

	startMove(params, callback = Function.prototype) {
		// stacked window setBounds (invoked remotely through stacked window wrapper)
		Logger.system.debug("StackedWindowManager.startMove", params);
		var err = null;
		var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
		if (!thisStackRecord) {
			Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
			err = "undefined window";
		} else {
			// if operating on StackedWindow then operation should apply to the visible window
			if (this.operatingDirectlyOnStackedWindow(params)) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			}
			if (this.isShowing(params)) {
				var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
				visibleWindow.startMove(); // invoke function on active window's wrapper
			} else {
				Logger.system.error(`StackedWindowManager Warning: startMove received for hidden window ${params.windowIdentifier}`);
			}
		}

		callback(err);
	}

	stopMove(params, callback = Function.prototype) {
		// stacked window setBounds (invoked remotely through stacked window wrapper)
		Logger.system.debug("StackedWindowManager.stopMove", params);
		var err = null;
		var thisStackRecord = this.storeCache[params.stackedWindowIdentifier.windowName];
		if (!thisStackRecord) {
			Logger.system.warn("ignoring command because StackedWindow undefined (probably okay due to its recent close)", params);
			err = "undefined window";
		} else {
			// if operating on StackedWindow then operation should apply to the visible window
			if (this.operatingDirectlyOnStackedWindow(params)) {
				params.windowIdentifier = thisStackRecord.visibleWindowIdentifier;
			}
			if (this.isShowing(params)) {
				var visibleWindow = this.childWindow[params.windowIdentifier.windowName];
				visibleWindow.stopMove(); // invoke function on active window's wrapper
			} else {
				Logger.system.error(`StackedWindowManager Warning: stopMove received for hidden window ${params.windowIdentifier}`);
			}
		}

		callback(err);
	}
}

var serviceInstance = new StackedWindowManager({});
serviceInstance.initialize();

module.exports = serviceInstance;