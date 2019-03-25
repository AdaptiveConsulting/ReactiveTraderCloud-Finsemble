/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import * as util from "../../../common/util";
import { System } from "../../../common/system";
import Logger from "../../../clients/logger";

import ConfigClient from "../../../clients/configClient";
import { ConfigUtilInstance as ConfigUtil } from "../../../common/configUtil";
import WorkspaceClient from "../../../clients/workspaceClient";
import RouterClient from "../../../clients/routerClientInstance";
import DistributedStoreClient from "../../../clients/distributedStoreClient";
import { LauncherGroup as LauncherWindowGroup } from "./launcherGroup";
import { FinsembleWindowInternal } from "../WindowAbstractions/FinsembleWindowInternal";
import { CreateSplinterAndInject } from "./createSplinterAndInject";
import LauncherDefaults from "./LauncherDefaults";
import {
	forEach as asyncForEach,
	parallel as asyncParallel,
	series as asyncSeries,
	doUntil as asyncDoUntil,
	some as asyncSome,
} from "async";
import _difference from "lodash.difference";
import merge = require("deepmerge");
import { FinsembleWindow } from "../../../common/window/FinsembleWindow";

// For regression testing
import "./_test";
import { BaseWindow } from "../WindowAbstractions/BaseWindow";
import { IRouterClient } from "../../../clients/IRouterClient";
import { HEARTBEAT_TIMEOUT_CHANNEL } from "../../../common/constants";

const clone = require("lodash.cloneDeep");

/**
 * The internal representation of a Finsemble-controlled window.
 *
 * Daniel H. - 1/16/2019
 * I've done the bare minimum required to provide tight type safety
 * for this file. We really need to figure out which of these interfaces
 * is appropriate and pick that one, rather than this disjointed union.
 *
 * @TODO - Lift into seperate interface file and refactor correctly.
 */
type FSBLWindow = BaseWindow & FinsembleWindow & {
	windowDescriptor: WindowDescriptor;
	/**
	 * The name of the component in this window. E.g "Welcome Component", "StackedWindow", etc.
	 *
	 * Daniel H. - 1/16/2019
	 * This appears to duplicated on the windowDescriptor itself.
 	 * @TODO - Pick one and stick with it.
	*/
	componentType: string;
	lastHeartbeat: number;
	errorSent: boolean;
	warningSent: boolean;
	notRespondingSent: boolean;
	uuid: string;
};

/** Daniel H. - 1/16/2019
 * This is a stand-in for the real type.
 * @TODO - Refactor LauncherGroup to Typescript.
*/
interface ILauncherGroup {
	getWindows(): { [name: string]: FSBLWindow };
	getWindow(name: string): FSBLWindow;
	findAllByComponentType(componentType: string): FSBLWindow[];
	getWindowNames(): string[];
	addWindow(window: FSBLWindow): void;
	removeWindows(windowNames: string[], cb: () => void);
	windows: FSBLWindow[];
};

var activeWindows: ILauncherGroup = new LauncherWindowGroup({
	name: "LauncherService.allWindows",
}) as any;

declare var window: any;
/**
 * Daniel H. 1/2/19
 * Our use of `this` here causes every instance of Launcher
 * overwrite all the others.
 * @TODO Either not use this closure over `self`, or make Launcher an explicit singleton.
*/
declare var self: Launcher;

const NAME_STORAGE_KEY = "finsemble.NameCountData";

/**
 * Used to define the parameters for creating a Window.
 *
 * Daniel H. 1/2/19
 * I've done the bare minimum to get this to compile, but much
 * is missing from this.
 * @TODO Move to a seperate file and complete. */
type WindowDescriptor = {
	name?: string,
	uuid?: string,
	monitorInfo?: any,
	defaultLeft?: number,
	defaultTop?: number,
	defaultWidth?: number,
	defaultHeight?: number;
	/** The name of the component in this window. E.g "Welcome Component", "StackedWindow", etc. */
	componentType?: string;
	customData?: {
		monitorDimensions?: {};
		window?: {
			allowToSpawnOffScreen: boolean;
		};
		// Daniel H. 1/16/19 - This appears to be a duplicate of the top level manifest.
		// @TODO - Pick one and remove the other.
		manifest?: {};
		spawnData?: {};
		component?: {
			type: string;
			spawnOnAllMonitors: boolean;
		};
	};
	claimMonitorSpace?: boolean;
	url?: string;
	// Daniel H. 1/16/19 - This appears to be a duplicate of the .customData.manifest.
	// @TODO - Pick one and remove the other.
	manifest?: {};
	resizable?: boolean;
	/** A unique string that sets a process affinity flag. This allows windows to grouped together under a single process (a.k.a. Application). This flag is only available when running on Electron via e2o. */
	affinity?: string;
	alwaysOnTop?: boolean;
	showTaskbarIcon?: boolean;
	// Daniel H. - 1/16/19 - This apears to be duplicate data with defaultLeft, etc.
	// Same story for .bounds.left, etc.
	// @TODO - Refactor to single source of truth. See other comments from same date in file.
	left?: number;
	top?: number;
	right?: number;
	bottom?: number;
	width?: number;
	height?: number;
	bounds?: {
		left: number;
		top: number;
		right: number;
		bottom: number;
		width: number;
		height: number;
	}
}

/** All the possible window types, including their aliases used in config. */
type WindowTypes =
	"OpenFinWindow" | "openfin"
	| "NativeWindow" | "assimilation" | "assimilated"
	| "native" | "FinsembleNativeWindow"
	| "application" | "OpenFinApplication";

/** The parameters passed to Launcher.Spawn.
 *
 * For properties duplicated between the top-level
 * and `options`, `options` takes precedence.
 */
export type SpawnParams = {
	affinity?: string;
	position?: string;
	groupOnSpawn?: boolean;
	dockOnSpawn?: boolean;
	left?: number
	right?: number;
	top?: number;
	bottom?: number;
	alias?: string;
	env?: any;
	path?: string;
	arguments?: any;
	component?: any;
	url?: string;
	name?: string;
	windowType?: WindowTypes;
	native?: boolean;
	spawnedByWorkspaceService?: boolean;
	monitor?: any;
	addToWorkspace?: boolean;
	staggerPixels?: number;
	launchingWindow?: any;
	options?: {
		name?: string;
		url?: string;
		preloadScripts?: any
		customData?: {
			component?: any;
			previousURL?: string;
			foreign?: {
				clients?: any;
			}
		};
		monitor?: any;
	}
};

var Components = {};
var componentArray = [];

DistributedStoreClient.initialize();

/**
 * The Launcher Service receives calls from the launcherClient, and spawns windows.
 * @TODO, finish spawn (makeRoom, findEmptySpace, position=virtual, add abstraction for 0,0 by monitor, available, claimed)
 * @TODO, clean out old monitor routines from utils
 * @TODO, retrofit all code that appends customData to use "data/spawnData" instead
 * @constructor
 */
export class Launcher {
	/** @alias Launcher# */
	createSplinterAndInject: CreateSplinterAndInject;
	windowGroups: object;
	cssOverride: string;
	lastOpenedMap: object;
	lastAdjustedMap: object;
	persistURL: boolean;
	shuttingDown: boolean;
	monitors: any;
	shutdownList: any;
	RouterClient: IRouterClient;
	groupStore: object;
	windowStore: object;
	finsembleConfig: any;
	appConfig: any;
	pendingWindows: object;
	rawManifest: object;

	constructor(manifest, stackedWindowManager) {
		Logger.system.log("Starting Launcher");

		this.createSplinterAndInject = new CreateSplinterAndInject(manifest, stackedWindowManager);
		this.finsembleConfig = manifest.finsemble;
		this.appConfig = {};
		this.pendingWindows = {}; // Note that pending windows only contains properties that are used, does not contain actual windows.

		self = this;
		//Window groups that are created via the launcher client.
		this.windowGroups = {};
		//todo possibly remove this. We used to inject an overwrites file before we gave people the finsemble.css.
		this.cssOverride = "";
		//Map of info about the last window that was opened.
		this.lastOpenedMap = {};
		this.lastAdjustedMap = {};

		//Whether to persist URL changes on the component.
		this.persistURL = false;
		//When we're shutting down, we ignore spawn requests. This gets set to true.
		this.shuttingDown = false;
		//Local copy of monitors, this will prevent us from having to fetch them everytime
		this.monitors = null;

		/**
		 * Namespace to prevent collisions.
		 */
		this.shutdownList = {};
		/**
		 * This will be populated with the number of components that have told the Launcher whether they will require time to cleanup.
		 */
		this.shutdownList.componentsResponded = [];
		/**
		 * This will be populated with the components who are doing some cleanup.
		 */
		this.shutdownList.waitFor = [];

		this.shutdownList.componentsOpenAtShutdown = 0;

		//@todo remove globals
		window.doingMonitorAdjustments = false;
		window.activeWindows = activeWindows; // make it available for access to rawWindow
		window.pendingWindows = this.pendingWindows;
		window.windowGroups = this.windowGroups;
		window.Launcher = this;

		this.bringWindowsToFront = this.bringWindowsToFront.bind(this);
		this.hyperFocus = this.hyperFocus.bind(this);
		this.minimizeWindows = this.minimizeWindows.bind(this);

		//Removes sequential names queued up last time the app was open. We use local storage to remember how many toolbars we've spawned.
		//todo, why are we using local storage??
		this.clearSequentialNames(); // invoke on startup
	}

	/**
	 * Main function that starts everything up.
	 * @param {*} callback
	 */
	async initialize(callback) {
		Logger.system.debug("Launcher.initialize");

		this.heartbeat();
		util.Monitors.on("monitors-changed", this.doMonitorAdjustments.bind(this));

		await this.createSplinterAndInject.initialize();

		asyncSeries([
			this.getConfig.bind(this),
			this.loadComponents,//req config
			this.getRawManifest,
			this.addPredefinedComponents.bind(this)
		],
			() => {
				Logger.system.debug("Launcher ready");
				callback(); // essentially ready now
				this.getMonitorInfoAll(function getMonitorInfoCallback(err, monitors) {
					Logger.system.debug("Launcher monitors", monitors);
					RouterClient.addPubSubResponder("monitorInfo", monitors); //@TODO, this should be prefixed Launcher.monitorInfo
				});
			});
	}

	/**
	 * This method handles the shutdownList sequence for the Launcher.
	 */
	shutdown(allDone) {
		//bool to prevent new components from being spawned.
		self.shuttingDown = true;
		const smallTimeout = (callback) => {
			//I think I put this timeout in to allow the openfin IPC to catch up. It may not be necessary. Leaving it in until we have time to try pulling it out.
			setTimeout(callback, 1);
		};

		const promiseResolver = (resolve) => {

			asyncSeries([
				self.shutdownComponents.bind(this),
				smallTimeout,
				//'resolve' will resolve the shutdownList, which then calls shutdownComplete in the baseService.
				resolve,
			], (err) => {
				if (err) {
					Logger.system.error("shutdown error", err);
				}
				allDone();
			});
		};
		return new Promise(promiseResolver);
	}

	// returns list of known components
	getComponents() {
		return Components;
	}

	//Adds windows to several groups.
	addWindowsToGroups(params) {
		let err = null;
		let { groupName, windowList } = params;
		if (self.windowGroups[groupName]) {
			let actualWindowList = self.getWindowsFromNamesOrIdentifiers(windowList);
			self.windowGroups[groupName].addWindows(actualWindowList);
			self.sendUpdatesToWindows(actualWindowList);
		} else {
			err = "Group Does Not Exist";
		}
		return err;
	}

	// return list of window names for a give group name
	getWindowsInGroup(groupName) {
		let group = self.windowGroups[groupName];
		let windowList = self.windowGroups[groupName];
		return windowList;
	}

	removeWindowsFromGroup(params) {
		let err = null;
		let { groupName, windowList } = params;
		if (self.windowGroups[groupName]) {
			self.windowGroups[groupName].removeWindows(windowList);
			let actualWindowList = self.getWindowsFromNamesOrIdentifiers(windowList);
			self.sendUpdatesToWindows(actualWindowList);
		} else {
			err = "Group Does Not Exist";
		}
		return err;
	}

	//Adds a window to several groups.
	addWindowToGroups(data) {
		Logger.system.debug("Add Window To Groups", data.groupNames, data.windowIdentifier);
		var win = activeWindows.getWindow(data.windowIdentifier);
		if (win) {
			for (let g in data.groupNames) {
				let groupName = data.groupNames[g];
				let group = self.windowGroups[groupName];
				if (!group) {
					self.windowGroups[groupName] = new LauncherWindowGroup({
						name: groupName,
					});
					group = self.windowGroups[groupName];
				}
				group.addWindow(win);
			}
			self.sendUpdatesToWindows([win]);
		}
	}

	/**
	 * "StackedWindow" is a special built-in component that the launcher uses internally. We need
	 * to make sure that the StackedWindow is *always* in the component list.
	 * @private
	 * @param {Function} cb
	 */
	addPredefinedComponents(cb = Function.prototype) {
		Logger.system.info("Launcher.AddPredefinedComponents");
		Components["StackedWindow"] = {
			window: {
				windowType: "StackedWindow",
				addToWorkspace: true
			},
			foreign: {
				services: {
					dockingService: {
						isArrangeable: true
					}
				},
				components: {
					"App Launcher": {
						launchableByUser: false
					},
					"Window Manager": {
						persistWindowState: true
					}
				}
			},
			component: {
				type: "StackedWindow"
			}
		};
		this.update();
		cb(null);
	}

	addUnclaimedRectToMonitor(monitor) {
		if (!monitor) { return; }
		// Get the claims on space
		var claimsOffset = self.getClaimsOffset(monitor);
		// Now we'll assemble an unclaimedRect in the same format as OF's availableRect
		let availableRect = monitor.availableRect;
		let unclaimedRect = {
			top: availableRect.top + claimsOffset.top,
			bottom: availableRect.bottom - claimsOffset.bottom,
			left: availableRect.left + claimsOffset.left,
			right: availableRect.right - claimsOffset.right,
			width: null,
			height: null
		};
		unclaimedRect.width = unclaimedRect.right - unclaimedRect.left;
		unclaimedRect.height = unclaimedRect.bottom - unclaimedRect.top;

		// Return the complete set of all three monitorRect, availableRect, unclaimedRect back to the client
		monitor.unclaimedRect = unclaimedRect;
	}

	addUserDefinedComponent(message, cb) {
		var name = message.data.name;

		var config = {
			window: {
				url: message.data.url,
				windowType: message.data.windowType
			},
			foreign: {
				services: {
					dockingService: {
						isArrangeable: true
					},
					launcherService: {
						inject: true
					}
				},
				components: {
					"App Launcher": {
						launchableByUser: true
					},
					"Window Manager": {
						persistWindowState: true
					},
					"Toolbar": {
						iconURL: "https://plus.google.com/_/favicon?domain_url=" + message.data.url
					}
				}
			},
			component: {
				type: name,
				isUserDefined: true
			}
		};

		var err = null;
		if (Components[name]) {
			err = "Component of type " + name + " already exists.";
		} else {
			Components[name] = config;
		}
		this.update();
		cb(err, null);
	}

	/**
	 * Brings a list, group, componentType or all windows to front
	 * @param {*} response.data.windowList list of window names or window identifiers.
	 * @param {*} response.data.groupName group name
	 * @param {*} response.data.componentType component type.
	 */
	bringWindowsToFront(err, response, cb = Function.prototype) {
		if (!response) response = {};
		response.functionName = "bringToFront";
		this.executeWindowGroupFunctionByListGroupOrType(response, cb);
	}

	calculateBounds(foundMonitor, windowDescriptor: WindowDescriptor, launcherParams) {
		var position = launcherParams.position;

		var monitors = launcherParams.monitors;
		var previousMonitor = launcherParams.previousMonitor;

		var monitor = previousMonitor;

		// Client can optionally override by picking a monitor
		var commandMonitor = launcherParams.monitor;

		if ((commandMonitor && commandMonitor !== "mine") || commandMonitor === 0) {
			monitor = foundMonitor;
		}

		if (!monitor) monitor = foundMonitor;

		// Set monitorDimensions since other services reference this.
		// @TODO, get rid of this [Terry] Probably not a good idea, since monitor dimensions can change dynamically
		// better for any services to use the util functions on the fly when they need monitorDimensions
		if (!windowDescriptor.customData) { windowDescriptor.customData = {}; } // just in case we don't send an actual windowDescriptor in
		windowDescriptor.customData.monitorDimensions = monitor.availableRect;

		self.addUnclaimedRectToMonitor(monitor);

		/* Now that we know which monitor, set some variables to use in calculations
		var monitorWidth = monitor.unclaimedRect.width, monitorHeight = monitor.unclaimedRect.height;
		var monitorX = monitor.availableRect.left, monitorY = monitor.availableRect.top;*/


		// Set variables for calculations based on the dimensions of the opening window
		var previousWindowBounds = launcherParams.previousWindowBounds;
		var previousX = previousWindowBounds ? launcherParams.previousWindowBounds.left : monitor.availableRect.left;
		var previousY = previousWindowBounds ? launcherParams.previousWindowBounds.top : monitor.availableRect.top;
		var previousWidth = previousWindowBounds ? previousWindowBounds.width : launcherParams.width;
		var previousHeight = previousWindowBounds ? previousWindowBounds.height : launcherParams.height;
		var staggerPixels; //In order we will check the local launcherParams.staggerPixels. If that is undefined, we will
		//check the this.finsembleConfig, if _that_ is undefined, we default to 40. (This magic number was here previously.)
		if (launcherParams.hasOwnProperty("staggerPixels") && Number(launcherParams.staggerPixels) !== NaN) { //eslint-disable-line
			staggerPixels = launcherParams.staggerPixels;
		} else if (this.finsembleConfig.servicesConfig && this.finsembleConfig.servicesConfig.hasOwnProperty("launcher") &&
			this.finsembleConfig.servicesConfig.launcher.hasOwnProperty("staggerPixels")) {
			staggerPixels = this.finsembleConfig.servicesConfig.launcher.staggerPixels;
		} else {
			staggerPixels = 40;
		}

		// The viewport is a box that is identified by coordinates in the virtual space (all monitors)
		// left, right, top, bottom calculations are done in that space
		var viewport;
		if (position === "available") {
			viewport = monitor.availableRect;
		} else if (position === "monitor") {
			viewport = monitor.monitorRect;
		} else if (position === "relative") {
			viewport = {
				left: previousX,
				top: previousY,
				right: previousX + previousWidth,
				bottom: previousY + previousHeight,
				width: previousWidth,
				height: previousHeight
			};
		} else if (position === "virtual") {
			let virtualLeft = 0, virtualTop = 0, virtualWidth = 0, virtualHeight = 0;
			monitors.forEach((monitor) => {
				let dims = monitor.availableRect;
				virtualWidth += Math.abs(dims.right - dims.left);
				virtualHeight += Math.abs(dims.bottom - dims.top);
				if (dims.left < virtualLeft) {
					virtualLeft = dims.left;
				}
				if (dims.top < virtualTop) {
					virtualTop = dims.top;
				}
			});

			viewport = {
				left: virtualLeft,
				top: virtualTop,
				width: virtualWidth,
				height: virtualHeight
			};
		} else {
			viewport = monitor.unclaimedRect;
		}

		// Width & height default to the component defaults, which is set earlier in the stack
		var width = 800, height = 600;

		if (launcherParams.width || launcherParams.width === 0) {
			if (util.isPercentage(launcherParams.width)) {
				width = viewport.width * parseFloat(launcherParams.width) / 100;
			} else {
				width = parseFloat(launcherParams.width);
			}
		}

		if (launcherParams.height || launcherParams.height === 0) {
			if (util.isPercentage(launcherParams.height)) {
				height = viewport.height * parseFloat(launcherParams.height) / 100;
			} else {
				height = parseFloat(launcherParams.height);
			}
		}


		// Various x,y placement commands are possible.
		var leftCommand = launcherParams.left, topCommand = launcherParams.top;
		var rightCommand = launcherParams.right, bottomCommand = launcherParams.bottom;

		// Initialize the lastOpenedMap if not already. First window will open in top left corner of screen. This
		// only gets updated when a window is opened without any specific location. The entire thing resets if the user
		// hasn't opened a window in over a minute.
		let resetStaggerTimer = 1000 * 60;
		let lastOpened = self.lastOpenedMap[monitor.position];
		if (!lastOpened || (Date.now() - lastOpened.then) > resetStaggerTimer) {
			self.resetSpawnStagger({ monitorPosition: monitor.position });
			lastOpened = self.lastOpenedMap[monitor.position];
		}

		// For "adjacent" we want to automatically align the new component (unless specified otherwise by the developer)
		if (leftCommand === "adjacent" || rightCommand === "adjacent") {
			if (!topCommand && topCommand !== 0) {
				topCommand = "aligned";
			}
		} else if (topCommand === "adjacent" || bottomCommand === "adjacent") {
			if (!leftCommand && leftCommand !== 0) {
				leftCommand = "aligned";
			}
		}

		var left, right, top, bottom, updateX, updateY, lastY = lastOpened.y, lastX = lastOpened.x;
		if (leftCommand === "center") {
			let center = viewport.left + (viewport.width / 2);
			left = center - (width / 2);
		} else if (leftCommand === "adjacent") {
			left = previousX + previousWidth;
		} else if (leftCommand === "aligned") {
			left = previousX;
		} else if (leftCommand || leftCommand === 0) {
			if (util.isPercentage(leftCommand)) {
				left = viewport.left + viewport.width * parseFloat(leftCommand) / 100;
			} else {
				left = viewport.left + parseFloat(leftCommand);
			}
		} else if (!rightCommand && rightCommand !== 0) {

			//Make sure last opened window was on our viewport.
			if (!(lastX >= monitor.unclaimedRect.left && lastX <= monitor.unclaimedRect.right)) {
				lastX = monitor.unclaimedRect.left;
				lastY = monitor.unclaimedRect.top;
			}
			if (isNaN(lastX)) { lastX = null; }
			// stagger if neither left nor right commands
			if (launcherParams.relativeWindow) {
				lastOpened.x = previousX;
			} else if (lastX === null) { // start at 0
				lastX = monitor.unclaimedRect.left - staggerPixels;
			}
			left = lastX + staggerPixels;
			// Make sure we don't go off right edge of monitor
			if (left + width > monitor.unclaimedRect.right) {
				left = monitor.unclaimedRect.right - width;
			}
			updateX = true;
		}

		if (rightCommand === "adjacent") {
			left = previousX - width;
		} else if (rightCommand === "aligned") {
			left = previousX + previousWidth - width;
		} else if (rightCommand || rightCommand === 0) {
			if (util.isPercentage(rightCommand)) {
				right = viewport.right - (viewport.width * parseFloat(rightCommand) / 100);
			} else {
				right = viewport.right - parseFloat(rightCommand);
			}
			if (left || left === 0) {
				// If we have a left command and right command, then set the width
				width = right - left;
			} else {
				// If we only have a right command and a width, then we back into the left
				left = right - width;
			}
		}

		if (topCommand === "center") {
			let center = viewport.top + (viewport.height / 2);
			top = center - (height / 2);
		} else if (topCommand === "adjacent") {
			top = previousY + previousHeight;
		} else if (topCommand === "aligned") {
			top = previousY;
		} else if (topCommand || topCommand === 0) {
			if (util.isPercentage(topCommand)) {
				top = viewport.top + viewport.height * parseFloat(topCommand) / 100;
			} else {
				top = viewport.top + parseFloat(topCommand);
			}
		} else if (!bottomCommand && bottomCommand !== 0) {
			//Make sure last opened window was on our viewport.
			if (!(lastY <= monitor.unclaimedRect.bottom && lastY >= monitor.unclaimedRect.top)) {
				lastY = monitor.unclaimedRect.top;
				lastX = monitor.unclaimedRect.left;
			}
			if (isNaN(lastY)) { lastY = null; }
			// stagger
			if (launcherParams.relativeWindow) {
				lastOpened.y = previousY;
			} else if (lastY === null) { // start at 0
				lastY = monitor.unclaimedRect.top - staggerPixels;
			}
			top = lastY + staggerPixels;
			// Make sure we don't go off right edge of monitor
			if (top + height > monitor.unclaimedRect.bottom) {
				top = monitor.unclaimedRect.bottom - height;
			}
			updateY = true;
		}

		if (bottomCommand === "adjacent") {
			top = previousY - height;
		} else if (bottomCommand === "aligned") {
			top = previousY + previousHeight - height;
		} else if (bottomCommand || bottomCommand === 0) {
			if (util.isPercentage(bottomCommand)) {
				bottom = viewport.bottom - (viewport.height * parseFloat(bottomCommand) / 100);
			} else {
				bottom = viewport.bottom - parseFloat(bottomCommand);
			}
			if (top || top === 0) {
				height = bottom - top;
			} else {
				top = bottom - height;
			}
		}

		// Make sure we have a right and a bottom
		if (!right && Number.isFinite(left)) { right = left + width; }
		if (!bottom && Number.isFinite(top)) { bottom = top + height; }

		// Force to be on monitor
		if (launcherParams.forceOntoMonitor) {
			if (right > monitor.unclaimedRect.right) {
				left = left - (right - monitor.unclaimedRect.right);
				right = monitor.unclaimedRect.right;
			}

			if (bottom > monitor.unclaimedRect.bottom) {
				//Before, the bottom of the window being shown would line up with the bottom of the monitor. If this was a menu, this was problematic because the menu would overlap the toolbar. Instead, we line up the bottom of the window with the top of the relative window.
				if (topCommand === "adjacent") {
					bottom = previousY;
				} else {
					top = top - (bottom - monitor.unclaimedRect.bottom);
				}
				top = bottom - height;


			}

			//left after right in case window bigger than viewport
			if (left < monitor.unclaimedRect.left) {
				left = monitor.unclaimedRect.left;
				right = left + width;
			}

			if (top < monitor.unclaimedRect.top) {
				top = monitor.unclaimedRect.top;
				bottom = top + height;
			}
		}

		// Only if both x and y were unassigned do we save the information so that we can stagger again later
		if (updateX && updateY) {
			if (launcherParams.options && typeof launcherParams.options.defaultLeft === "undefined") { // defaultLeft is set when being restored from workspace. We don't want those to affect the stagger algorithm.
				Logger.system.debug("lastOpened.x", left, launcherParams);
				lastOpened.x = left;
				lastOpened.y = top;
			}
			lastOpened.then = Date.now();
		}

		if (left || left === 0) { windowDescriptor.defaultLeft = Math.round(left); }
		if (top || top === 0) { windowDescriptor.defaultTop = Math.round(top); }
		if (width || width === 0) { windowDescriptor.defaultWidth = Math.round(width); }
		if (height || height === 0) { windowDescriptor.defaultHeight = Math.round(height); }
		windowDescriptor.monitorInfo = monitor.position; //only this position is used elsewhere so stop putting the entire object in the windowDescriptor so as not to overload the store

		if (typeof (launcherParams.claimMonitorSpace) !== "undefined") {
			windowDescriptor.claimMonitorSpace = launcherParams.claimMonitorSpace;
		}
		windowDescriptor = this.adjustBoundsToBeOnMonitor(windowDescriptor);
		this.lastOpenedMap[monitor.position] = {
			x: windowDescriptor.defaultLeft,
			y: windowDescriptor.defaultTop
		};
		return Promise.resolve(windowDescriptor);
	}

	/**
	 * Calculate the new bounds of a window if moved onto the monitor by pulling the monitor along the line
	 * between the top-left of the window and the center of the monitor
	 * @param {*} monitor a monitor
	 * @param {*} bounds current window bounds
	 */
	getNewBoundsWhenMovedToMonitor(monitor, bounds) {

		// Depending if the monitor has claimed space, determine rectangle
		let monitorRect = monitor.unclaimedRect || monitor.availableRect || monitor.monitorRect;

		// Placeholder for new bounds
		let newBounds = Object.create(bounds);

		// adjust vertical offset from monitor by moving top down or bottom up
		if (bounds.top < monitorRect.top) {
			newBounds.top = monitorRect.top;
		} else if (bounds.top > monitorRect.bottom - bounds.height) {
			newBounds.top = monitorRect.bottom - bounds.height;
		}

		// Adjust horizontal offset from monitor by moving left-edge rightward or right-edge leftward
		if (bounds.left < monitorRect.left) {
			newBounds.left = monitorRect.left;
		} else if (bounds.left > monitorRect.right - bounds.width) {
			newBounds.left = monitorRect.right - bounds.width;
		}

		// Recalculate bottom / right, based on movement of top / left, maintaining width / height
		newBounds.bottom = newBounds.top + newBounds.height;
		newBounds.right = newBounds.left + newBounds.width;

		// Truncate portions off monitor in case we are downsizing from a maximized window
		if (newBounds.right > monitorRect.right) newBounds.right = monitorRect.right;
		if (newBounds.top < monitorRect.top) newBounds.top = monitorRect.top;
		if (newBounds.left < monitorRect.left) newBounds.left = monitorRect.left;
		if (newBounds.bottom > monitorRect.bottom) newBounds.bottom = monitorRect.bottom;

		// Recalculate width, height in case of truncation to ensure the window fits on the new monitor
		newBounds.height = newBounds.bottom - newBounds.top;
		newBounds.width = newBounds.right - newBounds.left;

		// Calculate distance the window moved
		let distanceMoved = Math.sqrt((bounds.left - newBounds.left) ** 2 + (bounds.top - newBounds.top) ** 2);

		return {
			newBounds: newBounds,
			distanceMoved: distanceMoved,
			monitor: monitor
		};
	}

	/**
	 * Takes the window's bounds and makes sure it's on a monitor. If the window isn't on a monitor, we determine the closest monitor
	 * based on the distance from the top-left corner of the window to the center of the monitor, and then pull the monitor along that line
	 * until the window is on the edge of the monitor
	 * @param {*} windowDescriptor Window descriptor, e.g. from a saved workspace
	 * @param {*} previousWindowBounds not used, unfortunately
	 * @returns windowDescriptor updated window descriptor
	 */
	adjustBoundsToBeOnMonitor(windowDescriptor: WindowDescriptor): WindowDescriptor {
		if (windowDescriptor && windowDescriptor.customData && windowDescriptor.customData.window) {
			if (windowDescriptor.customData.window.allowToSpawnOffScreen) {
				return windowDescriptor;
			}
		}

		let bounds;
		/** Currently our bounds data (top, left, height, width, etc.) is duplicated in up to three places
		 * in the WindowDescriptor object: as top level props (windowDescriptor.left), as top level
		 * props with a "default" prefix (windowDescriptor.defaultLeft), and, in the case of StackedWindows
		 * (and in this case only), within the "bounds" prop (windowDescriptor.bounds.left).
		 *
		 * @TODO Pick a place and stick with it. Refactor all the code touching WindowDescriptors to use
		 * that new place. Either everyone should check "bounds", or no one should.
		 */
		if (windowDescriptor.componentType === "StackedWindow") {
			bounds = {
				left: windowDescriptor.left,
				top: windowDescriptor.top,
				height: windowDescriptor.height,
				width: windowDescriptor.width,
				right: null,
				bottom: null
			}
		} else {
			bounds = {
				left: windowDescriptor.defaultLeft,
				top: windowDescriptor.defaultTop,
				height: windowDescriptor.defaultHeight,
				width: windowDescriptor.defaultWidth,
				right: null,
				bottom: null
			}
		};

		bounds.right = bounds.left + bounds.width;
		bounds.bottom = bounds.top + bounds.height;

		//@note, will be used later.
		let boundsWereAdjusted = false;
		if (windowDescriptor.customData && windowDescriptor.customData.monitorDimensions) {

			// Determine if on a monitor, and if not, pull top-left corner directly toward center of monitor until it completely onscreen
			let isOnAMonitor = util.Monitors.allMonitors.some((monitor) => {

				// use entire monitor rather than relying on unclaimed space
				let monitorRect = monitor.monitorRect;

				// Check to see tf it's to the right of the left side of the monitor,
				// to the left of the right side, etc.basically is it within the monitor's bounds.
				let isOnMonitor = bounds.left >= monitorRect.left && bounds.left <= monitorRect.right
					&& bounds.right >= monitorRect.left && bounds.right <= monitorRect.right
					&& bounds.top >= monitorRect.top && bounds.top <= monitorRect.bottom
					&& bounds.bottom >= monitorRect.top && bounds.bottom <= monitorRect.bottom;

				return isOnMonitor;

			});

			if (!isOnAMonitor) {

				// calculate if the window is on any monitor, and the distance between the top left and the center of the window
				let monitorAdjustments = util.Monitors.allMonitors.map((monitor) => this.getNewBoundsWhenMovedToMonitor(monitor, bounds));

				// Get the closest monitor, the one with minimum distanceMoved
				let monitorAdjustmentClosest = monitorAdjustments.sort((md1, md2) => md1.distanceMoved - md2.distanceMoved)[0];

				// notify the movement
				Logger.system.info("Launcher.adjustBoundsToBeOnMonitor", windowDescriptor.name, bounds, monitorAdjustmentClosest.monitor.name, monitorAdjustmentClosest.newBounds);

				// assign bounds
				bounds = monitorAdjustmentClosest.newBounds;
				boundsWereAdjusted = true;
			}

			// update windowDescriptor
			windowDescriptor.defaultLeft = bounds.left;
			windowDescriptor.defaultTop = bounds.top;
			windowDescriptor.left = bounds.left;
			windowDescriptor.top = bounds.top;
			windowDescriptor.height = bounds.height;
			windowDescriptor.width = bounds.width;
			windowDescriptor.right = bounds.left + bounds.width;
			windowDescriptor.bottom = bounds.top + bounds.height;

			/**
			 * Daniel H. - 1/16/19
			 * Needed in the case that  the windowDescriptor belongs to a StackedWindow.
			 * See coments above.
			 *
			 * @TODO - Refactor this away.
			*/
			if (windowDescriptor.bounds) {
				windowDescriptor.bounds.left = bounds.left;
				windowDescriptor.bounds.top = bounds.top;
				windowDescriptor.bounds.height = bounds.height;
				windowDescriptor.bounds.width = bounds.width;
				windowDescriptor.bounds.right = bounds.left + bounds.width;
				windowDescriptor.bounds.bottom = bounds.top + bounds.height;
			}
		}

		return windowDescriptor;

	}

	// clears counters from local storage -- counters will restart at 1 for new names
	clearSequentialNames() {
		localStorage.removeItem(NAME_STORAGE_KEY);
	}

	/**
	 * @private
	 */
	compileWindowDescriptor(config, params, baseDescriptor: WindowDescriptor, resultFromDeriveBounds): WindowDescriptor {
		var windowDescriptor = baseDescriptor;

		// Pushes affinity option further down callstack for eventual consumption by E2O.
		if (params.affinity) {
			windowDescriptor.affinity = params.affinity;
		}

		// Ephemeral windows, such as dialogs, menus, linker, etc
		if (params.ephemeral) {
			windowDescriptor.resizable = false;
			windowDescriptor.showTaskbarIcon = false;
			windowDescriptor.alwaysOnTop = true;
			// ephemeral objects shouldn't be added to the workspace, unless explicitly set in their config
			// @TODO, this should really look at foreign:services:workspaceService
			if (typeof config.window.addToWorkspace === "undefined") {
				config.window.addToWorkspace = false;
			}
		}

		// Override all settings with any "options" from the config
		if (config.window.options) {
			windowDescriptor = merge(windowDescriptor, config.window.options);
		}

		//Merging first so that any params that the dev passes in overwrite what we calculate.
		windowDescriptor = merge(windowDescriptor, resultFromDeriveBounds);

		// Add the config entries into customData so that it's available to the new window
		windowDescriptor.customData = merge(windowDescriptor.customData, config);
		// Any data passed by argument is added to spawnData so that it's available to the new window
		if (params.data) {
			windowDescriptor.customData.spawnData = params.data;
		}

		// Final override of any "options" that were passed in as an argument
		if (params.options) {
			windowDescriptor = merge(windowDescriptor, params.options);
		}

		windowDescriptor.customData.manifest = this.rawManifest; // pass in custom data so router can use
		Logger.system.debug("Launcher.compileWindowDescriptor", windowDescriptor);
		return windowDescriptor;
	}

	/**
	 * Locates a window based on a componentType
	 * @param {object} windowIdentifier The parameters
	 * @param  {string}   windowIdentifier.componentType	 The type of component
	 * @return {finWindow} Returns a finWindow for the component, or null if not found
	 */
	componentFinder(windowIdentifier) {
		var windowsOfComponentType = activeWindows.findAllByComponentType(windowIdentifier.componentType);
		if (windowsOfComponentType.length) {
			return windowsOfComponentType[0];
		}
		return null;
	}

	/**
	 * Create Window Group
	 */
	createWindowGroup(err, message) {
		Logger.system.debug("Creating Group", message);
		if (!message.data.groupName) {
			return message.sendQueryResponse("No Groupname Specified");
		}
		// Build Window List from window names/identifiers
		var actualWindowList = self.getWindowsFromNamesOrIdentifiers(message.data.windowList, true);
		self.windowGroups[message.data.groupName] = new LauncherWindowGroup({
			name: message.data.groupName,
			windows: actualWindowList
		});

		self.sendUpdatesToWindows(self.getWindowsFromNamesOrIdentifiers(message.data.windowList));

		if (message.sendQueryResponse) message.sendQueryResponse(null, "Success");
	}

	deleteWindowGroup(err, message) {
		Logger.system.debug("Deleting Group", message.data.groupName);
		if (!message.data.groupName) {
			return message.sendQueryResponse("No Groupname Specified");
		}
		let groupName = message.data.groupName;
		if (self.windowGroups[groupName]) {
			let group = self.windowGroups[groupName];
			let windowList = group.getWindows();
			group.destroy();
			delete self.windowGroups[message.data.groupName];
			self.sendUpdatesToWindows(windowList);
		}
		message.sendQueryResponse(null, "Success");
	}

	/**
	 * Sets the dimensions and placement of the window by translating the launcherParams
	 * to the requires settings for an OpenFin windowDescriptor.
	 *
	 * @params	object	launcherParams Params from spawn()
	 * @returns {Promise} A promise that resolves to a new windowDescriptor that describes the new window.
	 * with defaultLeft, defaultTop, defaultWidth, defaultHeight, and claimMonitorSpace set.
	 */
	deriveBounds(launcherParams: SpawnParams): Promise<WindowDescriptor> {
		let windowDescriptor: WindowDescriptor = {};
		// Default to same monitor of the relativeWindow passed in (usually the window that launched us)

		// Get windowDescriptor for the previous window (the caller or relativeWindow)
		function addPreviousWindow(params) {
			async function promiseResolver(resolve) {
				var whichWindow = params.relativeWindow || params.launchingWindow;
				if (whichWindow) {
					params.previousWindow = activeWindows.getWindow(whichWindow.windowName);
					// TBD Cleanup: this was wrapping windows before they were created -- not clear needed
					// if (!params.previousWindow) {
					// 	Logger.system.debug(":wrap: deriveBounds addPreviousWindow", whichWindow);
					// 	let { wrap } = await FinsembleWindow.getInstance(whichWindow);
					// 	params.previousWindow = wrap;
					// }
				}
				resolve(params);
			}
			return new Promise(promiseResolver);
		}

		// Get all monitors
		function addAllMonitors(params) {
			return new Promise(function (resolve) {
				util.getAllMonitors(function (monitors) {
					params.monitors = monitors;
					resolve(params);
				});
			});
		}

		// Get the monitor descriptor for that previous window
		function addPreviousMonitor(params) {
			return new Promise(function (resolve) {
				if (params.previousWindow) {
					// as is this code on startup tried to get bounds of Workspace Service (i.e. the previousWindow).  This is a flawed way to determine
					// which monitor to start up....for one the Workspace service doesn't have a bounds after wrapper cleanup.  Short-term solution is
					// on error then set monitor[0] as the previousMonitor.
					params.previousWindow._getBounds((err, bounds) => {
						if (!err) {
							params.previousWindowBounds = bounds;
							util.Monitors.getMonitorFromScaledXY(bounds.left, bounds.top, (monitor) => {
								params.previousMonitor = monitor;
								resolve(params);
							});
						} else {
							params.previousMonitor = params.monitors[0];
							resolve(params);
						}
					});
				} else {
					resolve(params);
				}
			});
		}
		//Gets the monitor for the window that we're about to spawn.
		function getWhichMonitor(params) {
			return new Promise(function (resolve/*, reject*/) {
				var getWhichMonitorParams = {
					commandMonitor: params.monitor,
					monitors: params.monitors,
					launchingMonitorPosition: params.position,
					windowIdentifier: params.relativeWindow || params.launchingWindow,
					windowDescriptor: windowDescriptor
				};
				util.getWhichMonitor(getWhichMonitorParams, function (monitor) {
					resolve(monitor);
				});
			});
		}

		//Add information to launcherParams (previous window, monitors, etc).
		//when all is collected, call calculateBounds() to finish the job.
		const promiseResolver = async (resolve) => {
			launcherParams = await addPreviousWindow(launcherParams);
			launcherParams = await addAllMonitors(launcherParams);
			launcherParams = await addPreviousMonitor(launcherParams);
			let monitor = await getWhichMonitor(launcherParams);
			let bounds = await this.calculateBounds(monitor, windowDescriptor, launcherParams);
			resolve(bounds);
		};

		return new Promise(promiseResolver);
	}

	/**
	 * The basic algorithm for handling monitor adjustments is:
	 * 1) Remove any orphaned components. These would be any spawnOnAllMonitor components that are now located
	 * on a different monitor than they started. We simply compare their existing monitor with the one they were
	 * spawned upon, and remove them if they aren't where they belong.
	 *
	 * 2) Add any motherless components. These would be any spawnOnAllMonitor components that are missing from a
	 * particular monitor, presumably because the monitor just got added.
	 *
	 * 3) Adjust component dimensions. Since the monitor size may have changed we need to adjust any components
	 * that had previously made assumptions about monitor size (such as a toolbar that is supposed to stretch across
	 * the top of the screen). We cycle through any components that have made a "claim" on monitor space and then
	 * simply call showWindow() with their original params in order to give them a chance to resettle.
	 */

	doMonitorAdjustments(monitors) {
		// Event fires multiple times for monitor changes - so stop things from happening too many times.
		if (window.doingMonitorAdjustments) return;
		window.doingMonitorAdjustments = true;
		var components = {};
		asyncSeries([
			(done) => {
				this.monitorRemoveOrphans(monitors, components, done);
			},
			(done) => {
				this.monitorAddMotherless(monitors, components, done);
			},
			this.monitorAdjustDimensions
		], function () {
			window.doingMonitorAdjustments = false;
		});
	}

	/**
	 * Convenient way to execute stuff on a group or all windows
	 */
	executeWindowGroupFunctionByListGroupOrType(response, cb = Function.prototype) {
		let windowGroup;
		if (!response.data) response.data = {};
		let { groupName, windowList } = response.data;

		// If we have a groupName, use that otherwise use activeWindows
		if (groupName) {
			windowGroup = self.windowGroups[groupName];
		} else {
			windowGroup = activeWindows;
		}

		let functionToCall = windowGroup[response.functionName].bind(windowGroup);

		// If we've been passed a list or a componentType, filter the group by the list or componentType
		if (windowList) {
			delete response.data.componentType;
		}

		functionToCall(response.data, cb);

	}
	/**
	 * Returns a list of window descriptors that includes each window that the launcher has spawned.
	 */
	getActiveDescriptors() {
		var descriptors: { [k: string]: WindowDescriptor } = {};
		var allActiveWindows = activeWindows.getWindows();
		for (var name in allActiveWindows) {
			descriptors[name] = allActiveWindows[name].windowDescriptor;
		}
		return descriptors;
	}
	/**
		 * Gets offsets to monitor dimensions basedon any space permanently
		 * claimed by othe components such as toolbars.
		 * @param  {object} myMonitor The monitor
		 * @return {object}         An object containing offsets for top, bottom, left & right
		 */
	getClaimsOffset(myMonitor) {
		var claimAdjusted = clone(myMonitor); // error when using util.clone
		var availableRect = claimAdjusted.availableRect;
		var monitorRect = myMonitor.monitorRect || myMonitor.availableRect; // TODO: Sidd - a customer on Win 7 had monitorRect undefined causing showWindow to fail on the non-floating toolbar. Fix that by falling back to avaialbleRect.
		var allActiveWindows = activeWindows.getWindows();
		for (var name in allActiveWindows) {
			var activeWindow = allActiveWindows[name];
			var windowDescriptor = activeWindow.windowDescriptor;
			if (!windowDescriptor || !windowDescriptor.claimMonitorSpace) { continue; }

			// Got a window with claim. Is it on my monitor?
			// @TODO, technically defaultLeft and defaulTop might have changed since when we first
			// created the toolbar, say for instance if we designed toolbars that you could drag to
			// different edges of the monitor, so we should change this code to retrieve these values
			// asynchronously using getWindowDescriptor()
			var x = windowDescriptor.defaultLeft, y = windowDescriptor.defaultTop;
			if (x < monitorRect.left || x >= monitorRect.right || y < monitorRect.top || y >= monitorRect.bottom) { continue; }

			// Yes, then let's adjust our available monitor dimensions
			var h = windowDescriptor.defaultHeight, w = windowDescriptor.defaultWidth;

			// horizontal toolbars
			if (w > h) {
				var bottom = y + h, top = y;
				if (top <= availableRect.top) {
					availableRect.top = bottom;
				} else {
					availableRect.bottom = top;
				}
			} else {
				var left = x, right = x + w;
				if (left <= availableRect.left) {
					availableRect.left = right;
				} else {
					availableRect.right = left;
				}
			}
		}

		var returnObj = {
			top: availableRect.top - myMonitor.availableRect.top,
			bottom: myMonitor.availableRect.bottom - availableRect.bottom,
			left: availableRect.left - myMonitor.availableRect.left,
			right: myMonitor.availableRect.right - availableRect.right
		};
		return returnObj;
	}

	/**
	 * Returns an map of components that can receive specific data types based on "advertiseReceivers" in the component config
	 *
	 * @param {array} dataTypes A list of dataTypes (string)
	 */
	getComponentsThatCanReceiveDataTypes(dataTypes) {
		var componentsThatCanReceiveDataTypes = {};
		for (var c in Components) {
			var component = Components[c];
			var receivers = component.component.advertiseReceivers;
			if (!receivers) { continue; }
			if (!Array.isArray(receivers)) {
				receivers = [receivers];
			}
			var commonDataTypes = receivers.filter(o => dataTypes.includes(o));
			for (var i = 0; i < commonDataTypes.length; i++) {
				var commonType = commonDataTypes[i];
				if (!componentsThatCanReceiveDataTypes[commonType]) {
					componentsThatCanReceiveDataTypes[commonType] = {
						componentTypes: [c],
						activeComponents: []
					};
				} else {
					componentsThatCanReceiveDataTypes[commonType].componentTypes.push(c);
				}
				var allActiveWindows = activeWindows.getWindows();
				var activeComponentNames = Object.keys(allActiveWindows).filter(name => {
					return allActiveWindows[name].componentType === c;
				});
				for (var j of activeComponentNames) { componentsThatCanReceiveDataTypes[commonType].activeComponents.push(j); }
				//componentsThatCanReceiveDataTypes[commonType].activeComponents = [...componentsThatCanReceiveDataTypes[commonType].activeComponents, ...activeComponents];
			}
		}
		for (var dataType of dataTypes) {
			if (!componentsThatCanReceiveDataTypes[dataType]) {
				componentsThatCanReceiveDataTypes[dataType] = {
					componentTypes: [],
					activeComponents: []
				};
			}
		}
		return componentsThatCanReceiveDataTypes;
	}

	/*
	A helper for pulling out the default config for url persistence
	*/
	getGlobalURLPersistence() {
		return this.appConfig.finsemble.servicesConfig && this.appConfig.finsemble.servicesConfig.launcher &&
			this.appConfig.finsemble.servicesConfig.launcher.hasOwnProperty("persistURL") ?
			this.appConfig.finsemble.servicesConfig.launcher.persistURL :
			false;
	}

	getDefaultConfig(componentType) {
		let defaultConfig = Components[componentType];
		return defaultConfig || null;
	}

	getComponentConfig(cb = Function.prototype) {
		const promiseResolver = (resolve) => {
			ConfigClient.getValue({ field: "finsemble.components" }, (err, componentConfig) => {
				//adding the value property to make the input on onComponentListChanged consistent with the listener functionality on the configClient.
				this.onComponentListChanged(null, { value: componentConfig });
				if (cb) cb();
				resolve();
			});
		};
		return new Promise(promiseResolver);
	}

	onComponentListChanged(err, componentConfig) {
		Logger.system.debug("Launcher getconfig finsemble.components", componentConfig);
		this.finsembleConfig.components = componentConfig.value;
		Components = componentConfig.value;

		//Make sure our stackedWindow gets into the Components object!
		this.addPredefinedComponents();
		componentArray = [];
		Object.keys(Components).map(function (component) {
			if (!Components[component].component) Components[component].component = {};
			Components[component].component.type = component;
			componentArray.push(Components[component]);
		});
		RouterClient.transmit("Launcher.update", {
			componentList: Components
		});
	}

	/**
	 * Gets the list of components, listens for changes on the components.
	 * @param {*} cb
	 */
	async getConfig(cb = Function.prototype) {
		Logger.system.debug("LauncherStartup: getConfig");

		//todo, investigate -- see if this is used anymore.
		const onCSSOverridePathChanged = function (err, cssConfig) {
			this.finsembleConfig.cssOverridePath = cssConfig.value;
		};

		ConfigClient.addListener({ field: "finsemble.components" }, this.onComponentListChanged.bind(this));
		ConfigClient.addListener({ field: "finsemble.cssOverridePath" }, onCSSOverridePathChanged);
		let { data: config } = await ConfigClient.getValues(null);
		this.appConfig = config;
		this.finsembleConfig = config.finsemble; // replace manifest version of finsemble with processed version
		this.persistURL = ConfigUtil.getDefault(config.finsemble, "finsemble.servicesConfig.workspace.persistURL", false);
		cb();
	}

	/**
	 *
	 * @param {*} params
	 * @param {string} params.windowIdentifier
	 *
	 */
	getGroupsForWindow(params) {
		Logger.system.debug("Get Groups Window is in", params.windowIdentifier);
		var groups = [];
		for (let g of Object.keys(self.windowGroups)) {
			if (self.windowGroups[g].getWindow(params.windowIdentifier)) {
				groups.push(g);
			}
		}
		return groups;
	}

	/**
	 * Gets the proper monitor for a config.
	 * @param {string|number} params.monitor Monitor description, eg, "0" or "primary" or "mine".
	 * @param {*} cb
	 */
	async getMonitorInfo(params, cb) {
		// Collect some asynchronous information we need to make our calculations. First all monitors.
		function addMonitors() {
			return new Promise(function (resolve) {
				util.getAllMonitors(function (monitors) {
					params.monitors = monitors;
					resolve();
				});
			});
		}
		// Next figure out which monitor is associated with the windowIdentifier that was passed in
		function addWIMonitorInfo() {
			return new Promise(function (resolve) {
				util.getMonitor(params.windowIdentifier, null).then(function (monitorInfo) {
					Logger.system.debug("add monitor info", params.windowIdentifier.windowName, monitorInfo);
					params.wiMonitorInfo = monitorInfo;
					resolve();
				});
			});
		}

		await addMonitors();
		await addWIMonitorInfo();

		// based on params.monitor and our wiMonitor, figure out which monitor we really want
		let getWhichMonitorParams = {
			commandMonitor: params.monitor,
			monitors: params.monitors,
			launchingMonitorPosition: params.wiMonitorInfo.position,
			windowIdentifier: params.windowIdentifier
		};
		util.getWhichMonitor(getWhichMonitorParams, function (myMonitor) {
			self.addUnclaimedRectToMonitor(myMonitor);
			cb(null, myMonitor);
		});
	}

	/**
	 * Gets all monitors.
	 * @param {*} cb
	 */
	getMonitorInfoAll(cb = Function.prototype) {
		var self = this;
		RouterClient.query("DockingService.getMonitorsFromDocking", {}, function (err, message) {
			if (err) return cb(err);
			let { monitors } = message.data;
			self.monitors = monitors;
			cb(null, self.monitors);
		});
	}

	// get a unique random name
	getRandomName(name) {
		var newName = util.getUniqueName(name) + "-" + this.appConfig.startup_app.uuid;
		return newName;
	}

	/**
	 * Gets the manifest that's stashed on the window's customData.
	 * @param {*} cb
	 */
	getRawManifest(cb = Function.prototype) {
		const getOptionsSuccess = (opts) => {
			if (opts.customData && opts.customData.manifest) {
				self.rawManifest = opts.customData.manifest;
			} else {
				Logger.system.error("getRawManifest cannot find manifest in custom data");
			}
			cb(null);
		};
		const getOptionsError = function (err) {
			Logger.system.error("getRawManifest getOptions Error", err);
			cb(err);
		};
		System.Window.getCurrent()
			.getOptions(getOptionsSuccess, getOptionsError);
	}

	// get a new name based on sequentail counter for base name (repeatable on restart)
	getSequentialName(name) {
		var keyData = localStorage.getItem(NAME_STORAGE_KEY);
		var storageData = {};
		if (keyData) {
			storageData = JSON.parse(keyData);
		}
		if (storageData[name] !== undefined) {
			storageData[name]++;
		} else {
			storageData[name] = 1;
		}
		localStorage.setItem(NAME_STORAGE_KEY, JSON.stringify(storageData));

		var newName = name + "-" + storageData[name] + "-" + this.appConfig.startup_app.uuid;;
		Logger.system.debug("getSequentialName", name, newName);
		return newName;
	}

	/**
	 * convert a list of window names or identifiers to a list of window objects
	 */
	getWindowsFromNamesOrIdentifiers(windowList, outputAsObject = false) {
		if (!Array.isArray(windowList)) windowList = [windowList];
		let actualWindowList;
		if (outputAsObject) {
			actualWindowList = {};
		} else {
			actualWindowList = [];
		}
		for (let i = 0; i < windowList.length; i++) {
			let w = activeWindows.getWindow(windowList[i]);
			if (w) {
				if (outputAsObject) {
					actualWindowList[w.name] = w;
				} else {
					actualWindowList.push(w);
				}
			}
		}
		return actualWindowList;
	}

	/**
	 * When each component finishes shutting down, it reports back to the Launcher via this channel.
	 */
	handleShutdownCompleted(err, response) {
		if (this.shutdownList.waitFor.includes(response.data.name)) {
			this.shutdownList.waitFor.splice(this.shutdownList.waitFor.indexOf(response.data.name), 1);
		}

		let STATUS_MESSAGE = "Component shutdownList completed, waiting on the following components to respond to the launcher:" +
			_difference(this.shutdownList.componentsOpenAtShutdown, this.shutdownList.componentsResponded).join(",") +
			". Waiting for the following components to complete shutdownActions" + this.shutdownList.waitFor;
		Logger.system.debug(STATUS_MESSAGE);
		console.debug(STATUS_MESSAGE);
	}

	/**
	 * After being notified that it needs to shutdown, the component will respond to the launcher. This message will tell the Launcher whether it should wait for the component to do some cleanup methods.
	 */
	handleShutdownResponse(err, response) {
		Logger.system.debug("handleShutdownResponse", response.data.name);
		this.shutdownList.componentsResponded.push(response.data.name);
		if (response.data.waitForMe) {
			Logger.system.debug("handleShutdownResponse push to wait", response.data.name);
			this.shutdownList.waitFor.push(response.data.name);
			return;
		}
	}
	/**
	 * Sends a heartbeat to all open windows to see if anything died.
	 */
	heartbeat() {
		const internalHeartbeatConfig =
			this.finsembleConfig.services.windowService.config.heartbeatResponseTimeoutDefaults
		const config = ConfigUtil.getDefault(
			this.finsembleConfig,
			"serviceConfig.window.heartbeatResponseTimeoutDefaults",
			{}
		);

		RouterClient.addListener("Finsemble.heartbeat", self.heartbeatListener);

		const fitInRange = (x, min = internalHeartbeatConfig.min, max = internalHeartbeatConfig.max) => {
			if (x < min) {
				console.warn(`Heartbeat timeout interval must be above the minimum value ${min}. Using ${min}.`);
				return min;
			}
			if (x > max) {
				console.warn(`Heartbeat timeout interval must be below the maximum value ${min}. Using ${min}.`);
				return max;
			}
			return x;
		}

		const crashed = fitInRange(config.crashed || internalHeartbeatConfig.crashed);
		const possiblyCrashed = fitInRange(config.possiblyCrashed || internalHeartbeatConfig.possiblyCrashed);
		const notResponding = fitInRange(config.notResponding || internalHeartbeatConfig.notResponding);

		const handleTransmit = (name: string, type: string) => RouterClient.transmit(HEARTBEAT_TIMEOUT_CHANNEL, { type, window: name });
		setInterval(() => {
			var date = Date.now();
			for (let name of activeWindows.getWindowNames()) {
				var activeWindow = activeWindows.getWindow(name);
				// Stacked windows do not send heartbeats.
				if (activeWindow && activeWindow.windowType !== "StackedWindow") {
					if (!activeWindow.lastHeartbeat) {
						activeWindow.lastHeartbeat = Date.now();
						continue;
					}
					/**
					 * None of this should be hard coded. Clients should be able to set what
					 * ever intervals they want.
					 *
					 * @TODO Refactor this to read the props from config and just iterate
					 * through them.. */

					const crashedState = (date - activeWindow.lastHeartbeat) > crashed && !activeWindow.errorSent;
					const possiblyCrashedState = (date - activeWindow.lastHeartbeat) > possiblyCrashed && !activeWindow.warningSent;
					const notRespondingState = date - activeWindow.lastHeartbeat > notResponding && !activeWindow.notRespondingSent;
					const nowRespondingState = date - activeWindow.lastHeartbeat <= notResponding && (activeWindow.errorSent || activeWindow.warningSent || activeWindow.notRespondingSent);

					if (crashedState === true) {
						activeWindow.errorSent = true;
						handleTransmit(name, "crashed");
						Logger.system.error("Crashed Window", name);
					} else if (possiblyCrashedState === true) {
						activeWindow.warningSent = true;
						handleTransmit(name, "possiblyCrashed");
						Logger.system.warn("Possibly Crashed Window", name);
					} else if (notRespondingState === true) {
						activeWindow.notRespondingSent = true;
						handleTransmit(name, "notResponding");
						Logger.system.warn("Unresponsive Window", name);
					} else if (nowRespondingState === true) {
						Logger.system.info("Window has returned to a responsive state", name);
						handleTransmit(name, "nowResponding");

						//set all state variables to false now that the window is responding
						activeWindow.warningSent = false;
						activeWindow.errorSent = false;
						activeWindow.notRespondingSent = false;
					}
				}
			}
		}, 1000)
	}

	heartbeatListener(err, response) {
		if (response.data.type == "component") {
			var activeWindow = activeWindows.getWindow(response.data.windowName);
			if (activeWindow) {
				activeWindow.lastHeartbeat = Date.now();
			}
		}
	}


	/**
	 * Hyperfocuses a list, group, componentType or all windows
	 * @param {*} response.data.windowList list of window names or window identifiers
	 * @param {*} response.data.groupName group name
	 * @param {*} response.data.componentType component type
	 */
	hyperFocus(err, response) {
		let windowGroup;
		if (response.data && response.data.groupName) {
			windowGroup = self.windowGroups[response.data.groupName];
			delete response.data.groupName;
		} else {
			windowGroup = activeWindows;
		}

		if (response.data && response.data.componentType) {
			response.data.windowList = windowGroup.findAllByComponentType(response.data.componentType);
			delete response.data.componentType;
		} else if (!response.data.windowList) {
			response.data.windowList = windowGroup.getWindowNames();
		}
		response.functionName = "hyperFocus";
		this.executeWindowGroupFunctionByListGroupOrType(response);
	}

	// returns turn if window name is already in use by either active or pending-active window
	isWindowNameAlreadyUsed(windowName) {
		var result1 = activeWindows.getWindow(windowName) ? true : false;
		var result2 = this.pendingWindows.hasOwnProperty(windowName);
		Logger.system.debug("isWindowNameAlreadyUsed", windowName, "Result1", result1, "Result2", result2, "Pending", this.pendingWindows);
		return result1 || result2; // if active window or pending window
	}

	/**
	 * Retrieves a list of components from the configService.
	 * @param {function} cb callback.
	 * @private
	 */
	loadComponents(cb = Function.prototype) {
		Logger.system.log("LauncherStartup: loadComponents finsemble config", self.finsembleConfig);
		Components = {};
		// Mode allows us to optionally include a set of components. Normally, any component with component.mode set
		// in its config will be skipped. If the generalConfig.mode matches however then we allow it through.
		var mode = self.finsembleConfig.mode;
		if (!Array.isArray(mode)) {
			mode = [mode];
		}

		Object.keys(self.finsembleConfig.components).forEach((componentType) => {
			var config = self.finsembleConfig.components[componentType];
			//var componentMode = config.component ? config.component.mode : "";

			// If the component doesn't have a mode then it's safe, always allow in our list
			/*if (componentMode && componentMode !== "") {
				// component.mode can either be a string or an array of strings. So rationalize it to an array.
				if (componentMode.constructor !== Array) {
					componentMode = [componentMode];
				}

				commonModes = componentMode.filter(function (n) {
					return mode.indexOf(n) !== -1;
				});


				// If the current mode isn't in the list of modes for the component then don't include it in our list
				if (!commonModes.length) {
					return;
				}
			}*/
			var validUrl;
			Logger.system.debug("config.window.url", config);
			try {
				validUrl = new URL(config.window.url);
				config.window.url = validUrl.href;
			} catch (e) {
				if (config.window.url) {
					try {
						validUrl = new URL(self.finsembleConfig.moduleRoot + "/" + config.window.url);
						config.window.url = validUrl.href;
					} catch (e) {
						Logger.system.error("Invalid URL", config.window.url);
					}
				}
			}
			if (!config.foreign) {
				config.foreign = {};
			}
			if (!config.component) {
				config.component = {};
			}
			config.component.type = componentType;
			componentArray.push(config);
			Components[componentType] = config;
		});
		cb(null, Components);
		return Components;
	}

	/**
	 *
	 * @private
	 */
	async finishSpawn(defaultComponentConfig, windowDescriptor, params, objectReceivedOnSpawn) {
		let component = defaultComponentConfig.component.type;
		if (params.slave) {
			util.getFinWindow(windowDescriptor, (finWindow) => {
				self.makeSlave(finWindow, {
					windowName: params.previousWindow.name,
					uuid: params.previousWindow.uuid
				});
			});
		}

		windowDescriptor.uuid = windowDescriptor.uuid || util.guuid(); // Temp fix for stackedWindow (whole section needs rework)

		let result = {
			windowIdentifier: {
				windowName: windowDescriptor.name,
				uuid: windowDescriptor.uuid,
				componentType: component,
				monitor: windowDescriptor.monitorInfo,
				windowType: windowDescriptor.windowType
			},
			windowDescriptor: windowDescriptor
		};

		// Add to the workspace *if* the caller wants it added (for instance from the app launcher)
		// but *also* if the defaultComponentConfig for the component allows it to be added to workspaces (defaults to true)
		if (params.addToWorkspace && defaultComponentConfig.window.addToWorkspace !== false) {
			WorkspaceClient.addWindow({ name: result.windowIdentifier.windowName });
		}

		//Deprecated value: this.windowOptions.customData.component.canMinimize. New value: this.windowOptions.customData.foreign.services.windowService.allowMinimize
		let service = windowDescriptor.customData.foreign.services && windowDescriptor.customData.foreign.services.windowService !== undefined ? "windowService" : "dockingService";

		//Look first in the new location.
		let canMinimize = windowDescriptor.customData.foreign.services[service].allowMinimize;
		let canMaximize = windowDescriptor.customData.foreign.services[service].allowMinimize;

		//If the new location isn't found, fall back to deprecated version
		if (canMinimize === undefined) {
			canMinimize = windowDescriptor.customData.component.canMinimize;
		}
		if (canMaximize === undefined) {
			canMaximize = windowDescriptor.customData.component.canMaximize;
		}

		// Store references to the actual window we've created. Clients can use LauncherClient.getRawWindow()
		// to get direct references for (god forbid) direct DOM manipulation
		var activeWindowParams = {
			name: windowDescriptor.name,
			uuid: windowDescriptor.uuid,
			canMinimize: canMinimize !== false,
			canMaximize: canMaximize !== false,
			windowIdentifier: result.windowIdentifier,
			windowDescriptor: windowDescriptor,
			params: params,
			windowType: windowDescriptor.windowType
		};

		if (windowDescriptor.windowType == "FinsembleNativeWindow" || windowDescriptor.windowType == "StackedWindow") { // Since objectReceivedOnSpawn is the only thing that dospawn gets to send to finishSpawn, this is where everything that the wrap needs resides
			//@note objectReceivedOnSpawn used to be 'finWindow
			//@todo figure out why the hell we need this information to wrap the thing...should just need the name??
			activeWindowParams = merge(objectReceivedOnSpawn, activeWindowParams);
		}

		Logger.system.debug(":wrap: finishSpawn", activeWindowParams);
		let { wrap: activeWindow } = await FinsembleWindowInternal.getInstance(activeWindowParams);
		activeWindow.wrapReady();
		activeWindow.addEventListener("closed", self.remove);
		activeWindow.windowDescriptor = windowDescriptor; // background note: the windowDescriptor was on the public instance, but not the private, so adding it here.  Required elsewhere (e.g. getActiveDescritors)
		activeWindows.addWindow(activeWindow);

		delete this.pendingWindows[windowDescriptor.name]; // active now so no long pending...can remove

		// Add window to a group if needed
		if (params.groupName) {
			if (!this.windowGroups[params.groupName]) {
				this.createWindowGroup(null, {
					data: {
						groupName: params.groupName,
						windowList: [result.windowIdentifier]
					}
				});
			} else {
				let actualWindow = this.getWindowsFromNamesOrIdentifiers([result.windowIdentifier]);
				this.windowGroups[params.groupName].addWindows(actualWindow);
				this.sendUpdatesToWindows(actualWindow);
			}
		}

		Logger.perf.debug("Spawn", "stop", component, "from finishSpawn");

		return Promise.resolve({ err: null, data: result });
	}

	/**
	 * Makes a slave window which will automatically close when the master closes.
	 * @param  {finwindow} slave  An OpenFin window
	 * @param  {LauncherClient~windowIdentifier} master The window identifier of the master
	 */
	makeSlave(slave, master) {
		util.getFinWindow(master, function (masterWindow) {
			if (masterWindow) {
				masterWindow.addEventListener("closed", function () {
					Logger.system.debug("makeSlave close", slave.name);
					slave.close();
				});
				//@TODO, add more. Linker blurs when you do anything
				//but other windows might want to reposition themselves
				//on move, maximize, minimize, etc
			}
		});
	}

	/**
	 * Minimizes a list, group or all windows
	 * @param {*} response.data.windowList list of window names or window identifiers
	 * @param {*} response.data.groupName group name
	 * @param {*} response.data.componentType component type
	 */
	minimizeWindows(err, response) {
		if (!response) response = {};
		response.functionName = "minimize";
		this.executeWindowGroupFunctionByListGroupOrType(response);
	}

	/**
	 * See doMonitorAdjustments()
	 * Adds any motherless components. These would be any spawnOnAllMonitor components that are missing from a
	 * particular monitor, presumably because the monitor just got added.
	 */
	monitorAddMotherless(monitors, components, done) {
		let howMany = 0;
		for (let i = 0; i < monitors.length; i++) {
			for (let c in components) {
				let component = components[c];
				howMany++;
				if (!component[i]) {
					self.spawn({ component: c, monitor: i }, function (err, result) {
						result.windowDescriptor.spawnOnAllMonitors = true; // WHY WHY WHY DO WE NOT DO THIS BEFORE HAND
						howMany--;
						if (!howMany) {
							done();
						}
					});
				} else {
					setTimeout(function () { //prevent multiple events and showWindow stuff is handled by adjustMonitorDimensions
						howMany--;
						if (!howMany) {
							done();
						}
					}, 50);
				}
			}
		}
		if (!howMany) {
			done();
		}
	}

	/**
	 * See doMonitorAdjustments()
	 * Adjust component dimensions. Since the monitor size may have changed we need to adjust any components
	 * that had previously made assumptions about monitor size (such as a toolbar that is supposed to stretch across
	 * the top of the screen). We cycle through any components that have made a "claim" on monitor space and then
	 * simply call showWindow() with their original params in order to give them a chance to resettle.
	 */
	monitorAdjustDimensions(done) {
		Logger.system.debug("monitorAdjustDimensions");
		var claims = {};
		var allActiveWindows = activeWindows.getWindows();
		for (let windowName in allActiveWindows) {
			let entry = allActiveWindows[windowName];
			var w = entry.windowDescriptor;
			if (!w) continue;
			// Create a stash of all claims, and then unclaim them to set our
			// algorithm back to square
			if (w.claimMonitorSpace) {
				claims[windowName] = entry;
				delete w.claimMonitorSpace;
			}
		}

		// Now we simply call showWindow for each item in our stash with the original
		// params. This will reset it back, and should cause it to adjust accordingly
		// to the monitor it is now sitting on.
		for (let claimedName in claims) {
			let entry = claims[claimedName];
			self.showWindow(entry.windowIdentifier, entry.params, function () {
				entry.windowDescriptor.claimMonitorSpace = true;
			});
		}

		done();
	}

	/**
	 * see doMonitorAdjustments()
	 * Removes any orphaned components. These would be any spawnOnAllMonitor components that are now located
	 * on a different monitor than they started. We simply compare their existing monitor with the one they were
	 * spawned upon, and remove them if they aren't where they belong.
	 */
	monitorRemoveOrphans(monitors, components, done) { // All this stuff only works for OF Windows
		let allActiveWindows = activeWindows.getWindows();
		let howMany = 0;
		for (let w in allActiveWindows) {
			let win = allActiveWindows[w];
			let windowDescriptor = win.windowDescriptor;
			if (windowDescriptor.customData.component.spawnOnAllMonitors) {
				let componentType = windowDescriptor.customData.component.type;
				if (!components[componentType]) {
					components[componentType] = [];
				}
				let componentMonitor = windowDescriptor.monitorInfo;
				if (!monitors[componentMonitor]) { // remove window if no monitor - do we want to remove the window? might be better for performance if we let it stick around.
					howMany++;
					win.close(null, function () {
						howMany--;
						if (!howMany) {
							done();
						}
					});
				}
				else components[componentType][windowDescriptor.monitorInfo] = win;
			}
		}
		if (!howMany) {
			done();
		}
	}

	/**
	 * Removes a component. This is called when a window receives a closed event.
	 * If the window is still open then it is closed.
	 *
	 * @param  {string}   windowName Name of window that was closed
	 */
	remove(event) {
		let windowName;
		if (event.data) { // The stack close triggers a wrapper event. However, Openfin Close does not. Need to investigate.
			windowName = event.data.name;
		} else {
			windowName = event;
		}

		if (!windowName) return;
		Logger.system.info("remove windowName", windowName);
		//this block is for legacy support. all calls to remove in the Launcher pass in the windowDescriptor. The old functionality was to pass in a window name.
		if (typeof windowName !== "string") {
			let descriptor = JSON.parse(JSON.stringify(windowName));
			windowName = descriptor.name;
		}
		var activeWindow = activeWindows.getWindow(windowName);

		if (!activeWindow) {
			Logger.system.warn("Active Window not found", windowName);
			return;
		}
		//This is the only place in the application where we remove close listeners. In versions of 8.X, Openfin had a bug where if you remove one closed listener, all closed listeners would be removed.
		activeWindow.removeEventListener("closed", self.remove);
		Logger.system.debug("this.remove", activeWindow);

		if (activeWindow.windowDescriptor && activeWindow.windowDescriptor.claimMonitorSpace) { // stacked windows will have these properties
			self.getMonitorInfoAll(function (monitors) {
				RouterClient.publish("monitorInfo", monitors);
			});
		}

		//remove the window from all groups
		if (self.windowGroups) {
			for (let g of Object.keys(self.windowGroups)) {
				let group = self.windowGroups[g];
				group.removeWindows([windowName]);
				//if group is empty delete it
				if (!Object.keys(group.getWindows()).length) {
					group.destroy();
					delete self.windowGroups[g];
				}
			}
		}
		activeWindows.removeWindows([windowName], () => {
			Logger.system.debug("launcher.remove wrappers for window", windowName);
			//MyWrapManager.remove({ identifier: { windowName: windowName } }, () => {
			//This is to prevent workspaces/stackmanager from catching this event and removing the window. Might be better for the launcher to send out a note to everyone who cares "Hey guys, I'm shutting down, go ahead and remove any listeners that you don't want to accidentally fire when these windows start closing". This is the expedient fix. That would probably be better, but require more architectural changes and testing.
			if (self.shuttingDown) {
				Logger.system.log("Component removed.", windowName, "Not transmitting the windowClosed event because the application is shutting down");
				return;
			}
			//Given the context above, we use the router to transmit out an event instead of relying on openfin window events. The WorkspaceService is currently the only thing listening for this message, so it can know when to load the next workspace.
			RouterClient.transmit("LauncherService.WindowClosed", { uuid: activeWindow.uuid, name: windowName });
			//});
		});
	}

	removeUserDefinedComponent(message, cb) {
		var err = null;
		if (Components[message.data.name]) {
			delete Components[message.data.name];
		} else {
			err = "Could not find component of type " + message.data.name;
		}
		this.update();
		cb(err, null);
	}

	/**
	 * Will reset the spawn stagger.
	 * @param {object} [params]
	 * @param {number} [params.monitorPosition] position of monitor to reset the stagger for
	 * @callback {function} [cb] optional callback.
	 */
	resetSpawnStagger(params, cb = Function.prototype) {
		const EMPTY_STAGGER = { x: null, y: null };
		if (typeof params === "function") {
			cb = merge({}, params);
			params = null;
		}

		if (params && typeof params.monitorPosition !== "undefined") {
			this.lastOpenedMap[params.monitorPosition] = EMPTY_STAGGER;
			this.lastAdjustedMap[params.monitorPosition] = EMPTY_STAGGER;

		} else {
			for (var monitorPosition in this.lastOpenedMap) {
				this.lastOpenedMap[monitorPosition] = EMPTY_STAGGER;
				this.lastAdjustedMap[monitorPosition] = EMPTY_STAGGER;

			}
		}

		cb();

	}

	/**
	 * Whenver windows are added/removed from groups, send updates to existing windows with their group memberships.
	 * @param {} windowList
	 */
	sendUpdatesToWindows(windowList) {
		Logger.system.debug("List of Updated Windows", windowList);
		if (!windowList) return;
		if (!Array.isArray(windowList)) {
			windowList = [windowList];
		}
		for (let w in windowList) {
			let win = windowList[w];
			let groups = self.getGroupsForWindow({ windowIdentifier: win.windowIdentifier });
			if (!Array.isArray(groups)) groups = [];
			if (win) RouterClient.publish("Finsemble.LauncherService.updateGroups." + win.name, groups);
		}
	}

	/**
	 * Given some bounds, returns the monitor that the window is on.
	 * @param {} bounds
	 */
	getMonitorByBounds(bounds) {
		return util.Monitors.getMonitorFromScaledXY(bounds.left, bounds.top);
	}

	/**
	 * Shows and/or relocates a native window. Not implemented yet!
	 * @param  {LauncherClient~windowIdentifier} windowIdentifier The window to show/move
	 * @param	object params	Parameters, see spawn()
	 * @param function cb Callback
	 */

	showNativeWindow(windowIdentifier, params, cb) {
		self.deriveBounds(params).then(function (newWindowDescriptor) {
			// send newWindowDescriptor to assimilation service
			let result = {
				windowIdentifier: {
					windowName: newWindowDescriptor.name,
					uuid: newWindowDescriptor.uuid,
					componentType: windowIdentifier.componentType,
					monitor: newWindowDescriptor.monitorInfo
				},
				windowDescriptor: newWindowDescriptor
			};
			cb(null, result);
		});
	}

	/**
	 * Shows and/or relocates a component window
	 * @param  {LauncherClient~windowIdentifier} windowIdentifier The window to show/move
	 * @param	object params	Parameters, see spawn()
	 * @param function cb Callback
	 */
	async showWindow(windowIdentifier, params, cb) {
		Logger.system.info("Launcher.ShowWindow.showAt Start", windowIdentifier, params);
		// do we have a windowname?
		let activeWindow;
		if (windowIdentifier.windowName) {
			activeWindow = activeWindows.getWindow(windowIdentifier.windowName);
		} else if (windowIdentifier.componentType) {
			activeWindow = self.componentFinder(windowIdentifier);
		}

		if (activeWindow) { //window was found
			let { data: bounds } = await activeWindow._getBounds();
			windowIdentifier = activeWindow.windowIdentifier;
			//By default, return the first monitor. This method will be overwritten if the call requires a specific monitor.
			let monitorFinder = () => {
				const promiseResolver = (resolve) => {
					util.getAllMonitors(function (monitors) {
						return resolve(monitors[0]);
					});
				};
				return new Promise(promiseResolver);
			};
			var specificMonitorFinder = function () {
				const promiseResolver = (resolve) => {
					util.getAllMonitors(function (monitors) {
						for (var i = 0; i < monitors.length; i++) {
							if (monitors[i].position == params.monitor) {
								return resolve(monitors[i]);
							}
						}
						resolve(null);
					});
				};
				return new Promise(promiseResolver);
			};

			var relativeMonitorFinder = function () {
				let relativeWindow = activeWindows.getWindow(params.relativeWindow.windowName);
				const promiseResolver = (resolve) => {
					relativeWindow._getBounds({}, async (err, relativeBounds) => {
						if (!err) {
							util.Monitors.getMonitorFromScaledXY(relativeBounds.left, relativeBounds.top, (monitor) => {
								//let monitor = window.DockingMain.getMonitorForWindow(window.DockingMain.getWindow(relativeWindow.name));
								// Once we get the monitor, overwrite 'mine' with its position to avoid further calls
								util.getAllMonitors(function (monitors) {
									for (var i = 0; i < monitors.length; i++) {
										if (monitors[i].name == monitor.name) {
											params.monitor = monitors[i].position;
											break;
										}
									}
									resolve(monitor);
								});
							});
						} else {
							util.getAllMonitors(function (monitors) {
								return resolve(monitors[0]);
							});
						}
					});
				};
				return new Promise(promiseResolver);
			};

			// When asking for relative positioning, we're implicitly wanting to use the same monitor as the relativeWindow
			if (!params.monitor && params.position === "relative") {
				monitorFinder = relativeMonitorFinder;
			}
			// If params.monitor is specified, try to get and use that monitor.
			if (typeof params.monitor !== "undefined") {
				if (params.monitor.unclaimedRect) { //have whichMonitor and not a monitor object
					monitorFinder = function () {
						return Promise.resolve(params.monitor);
					};
				} else if (params.monitor == "primary" || Number.isInteger(params.monitor)) { // asked to spawn on specific monitor
					monitorFinder = specificMonitorFinder;
				} else if (params.monitor == "mine") { // asked to spawn on same monitor as parent
					monitorFinder = relativeMonitorFinder;
				}
			}

			let monitor: any = await monitorFinder();
			// Adjust parameters to what deriveBounds expects
			// default to the monitor that the window already lives on

			var viewport = monitor ? monitor.unclaimedRect : null;

			self.addUnclaimedRectToMonitor(monitor);
			if (!params.monitor && params.monitor !== 0) {
				params.monitor = monitor.position;
			} else {
				if (params.monitor.unclaimedRect) {
					viewport = params.monitor.unclaimedRect;
				}
			}

			if (params.position === "monitor") {
				viewport = monitor ? monitor.monitorRect : null;
			} else if (params.position === "available") {
				viewport = monitor ? monitor.availableRect : null;
			}
			// A developer can call showWindow with a combination of left, right or width (top, bottom or height).
			// This essentially means that a developer can be setting both position and dimension, just position, or just dimension.
			// Furthermore, they might set one or other position (left or right, top or bottom). The following logic is meant
			// to maintain the dimension or position where not overridden by the developer. This is done by rationalizing
			// the window location to just top,left,width,height.
			var leftAndRight = (params.left || params.left === 0) && (params.right || params.right === 0);
			var calculateWidth = params.width || params.width === 0;
			calculateWidth = calculateWidth || leftAndRight;
			if (!calculateWidth) {
				params.width = bounds.width;
			} else if (calculateWidth === true) {
				if (viewport) params.width = (viewport.right - params.right) - (params.left - viewport.left);
			}

			var topAndBottom = (params.top || params.top === 0) && (params.bottom || params.bottom === 0);
			var calculateHeight = params.height || params.height === 0;
			calculateHeight = calculateHeight || topAndBottom;
			if (!calculateHeight) {
				params.height = bounds.height;
			} else if (calculateHeight === true) {
				// TODO fix this in case people have a vertical toolbar or something. this has issues as is.
				if (viewport) params.height = (viewport.bottom - params.bottom) - (params.top - viewport.top);
			}

			// If right but no left, calculate the left position of the window relative to the viewport.
			if (params.position !== "relative" && (params.right || params.right === 0) && !params.left && params.left !== 0 && viewport) {
				params.left = (viewport.right - params.right) - params.width - viewport.left;
			}

			// If bottom but no top
			if (params.position !== "relative" && (params.bottom || params.bottom === 0) && !params.top && params.top !== 0 && viewport) {
				params.top = (viewport.bottom - params.bottom) - params.height - viewport.top;
			}

			// If neither left nor right are set then maintain it's left position
			if (!params.left && params.left !== 0 && !params.right && params.right !== 0 && params.top !== "adjacent" && params.bottom !== "adjacent") {
				params.left = bounds.left - (viewport ? viewport.left : 0);
			}

			// If neither top nor right are set then maintain it's top position
			if (!params.top && params.top !== 0 && !params.bottom && params.bottom !== 0 && params.left !== "adjacent" && params.right !== "adjacent") {
				params.top = bounds.top - (viewport ? viewport.top : 0) - viewport.top;
			}

			// Since we've already calculated the absolute position, we need to make sure deriveBounds respects those coordinates
			if (!["relative", "unclaimed"].includes(params.position)) params.position = "monitor";
			//params.bottom = null;
			//params.right = null;
			function showIt() {
				let result = {
					windowIdentifier: {
						windowName: activeWindow.name,
						uuid: activeWindow.uuid,
						componentType: windowIdentifier.componentType,
						monitor: newWindowDescriptor.monitorInfo
					},
					windowDescriptor: newWindowDescriptor
				};
				activeWindow._show({},
					function () {
						Logger.system.info("Launcher.ShowWindow.showAt finished", activeWindow.name);
						let dockingDescriptor = {
							left: newWindowDescriptor.defaultLeft,
							top: newWindowDescriptor.defaultTop,
							right: newWindowDescriptor.defaultLeft + newWindowDescriptor.defaultWidth,
							bottom: newWindowDescriptor.defaultTop + newWindowDescriptor.defaultHeight,
							width: newWindowDescriptor.defaultWidth,
							height: newWindowDescriptor.defaultHeight,
							name: activeWindow.name,
							changeType: 1
						};

						//If the show call doesn't prohibit autofocus, focus it. Search does this when showing search results.
						if (params.autoFocus !== false) {
							//This is so that any click elsewhere will hide the window.
							activeWindow.focus();
						}

						//@todo, when docking is rewritten and the window wraps get more love, put this functionality into a the wrappers. Right now they don't have the router and I'm unsure how things are working with multiple routers in the same window.
						RouterClient.transmit("DockingService.updateWindowLocation", { windowName: windowIdentifier.windowName, location: dockingDescriptor });
						if (cb) {
							cb(null, result);
						}
					});
			}

			let newWindowDescriptor = await self.deriveBounds(params);
			let newBounds = {
				left: newWindowDescriptor.defaultLeft,
				right: newWindowDescriptor.defaultLeft + newWindowDescriptor.defaultWidth,
				bottom: newWindowDescriptor.defaultTop + newWindowDescriptor.defaultHeight,
				top: newWindowDescriptor.defaultTop,
				width: newWindowDescriptor.defaultWidth,
				height: newWindowDescriptor.defaultHeight
			};
			activeWindow._setBounds({ bounds: newBounds }, showIt);

		} else { //window not found
			if (params.spawnIfNotFound && windowIdentifier.componentType) {
				if (windowIdentifier.windowName) {
					params.name = windowIdentifier.windowName;
				}
				params.component = windowIdentifier.componentType;
				Logger.system.debug("Launcher.ShowWindow.show spawn", windowIdentifier);
				self.spawn(params, (err, data) => {
					Logger.system.debug("Launcher.ShowWindow.show spawn complete", windowIdentifier);
					cb(err, data);
				});
			} else {
				cb("RouterService:showWindow. Requested window not found.");
			}
		}
	}

	/**
	 * Rewrite of shutdownComponents to call close on components.
	 * @param {function} done
	 */
	shutdownComponents(done) {
		// assume done if everybody doesn't close within alloted time so dependencies can close and shutdownList can continue.
		var myTimeout = setTimeout(() => {
			done();
		}, (this.finsembleConfig.shutdownTimeout || 10000) - 2000);

		asyncForEach(activeWindows.windows, (win, callback) => {
			(win as BaseWindow)._close({ removeFromWorkspace: false, ignoreParent: true }, callback);
		}, () => {
			// make sure done doesn't get called back twice
			clearTimeout(myTimeout);
			done();
		});
	}

	/**
	* Launches a component.
	* @param {object} params See LauncherClient
	* @param {function} cb Callback
	*/
	async spawn(params: SpawnParams, cb: StandardCallBack) {
		let errorString: any = null;
		let descriptor: any = null;

		let component = params.component;
		// This fixes a bug in our workspace save. We save everything and preload scripts in here overwrites what we actually want to use.
		//Loop through any preload scripts and remove FSBL
		if (params.options && params.options.preloadScripts) {
			if (Array.isArray(params.options.preloadScripts)) {
				for (let i = 0; i < params.options.preloadScripts.length; i++) {
					let preloadItem = params.options.preloadScripts[i];
					if (preloadItem && preloadItem.url) {
						if (preloadItem.url.indexOf(".FSBL.js")) {
							delete params.options.preloadScripts[i];
						}
					}
				}
			}
		}

		Logger.system.debug("Launcher.spawn", component, params);
		//If the Launcher is shutting down, don't allow new components to come online. If the dev wants components to come up, they should spawn them prior to transmitting the shutdownList request.
		if (this.shuttingDown) {
			Logger.system.log("Dropping spawn request. Application is shutting down", component, params);
			return;
		}
		Logger.perf.debug("Spawn", "start", component, params);

		// if component is not a string then we are trying to spawn multiple components (this is still experimental and not yet used - it is planned so that group launches get easier via pins etc.)
		if (component && !(typeof component == "string" || component instanceof String)) {
			this.spawnGroup(component, params, cb);
			return;
		}
		// @todo Terry, cleanup, the following code is not robust. It should be rewritten to ensure that config is set by
		// default, and then overridden by params.options.customData. I think that when this is restructured
		// to the point that we no longer need the isAdhoc flag then we'll know it's robust.
		let isAdhoc = false;
		var config = this.getDefaultConfig(component);
		//@todo adhoc components should use preferences to save themselves, and then this block of code would be unnecessary.
		Logger.system.debug("Launcher.spawn 2", component, params);
		if (!config) {
			if (params.options && params.options.customData &&
				params.options.customData.component && params.options.customData.component.isUserDefined) {// If our component is an adhoc component set the flag.
				isAdhoc = true;
				config = params.options.customData;
			} else if (params.url) {
				// No config, but has as URL. Treat as an adhoc component. This path is hit when using using window.open
				// from nativeOverrides.js
				isAdhoc = true;

				// If a name is passed in, use that, otherwise use the URL.
				component = params.name ? params.name : params.url;
				config = {
					window: {},
					component: {}
				};
			}
			if (!isAdhoc) {
				// Use a config to drive what component is shown if we can't find one in our list
				let unknownComponent = this.appConfig.finsemble.servicesConfig && this.appConfig.finsemble.servicesConfig.launcher &&
					this.appConfig.finsemble.servicesConfig.launcher.hasOwnProperty("unknownComponent") ?
					this.appConfig.finsemble.servicesConfig.launcher.unknownComponent :
					null;
				if (unknownComponent) {
					config = this.getDefaultConfig(unknownComponent);
				}
				if (!config) {// If we still don't have a config, use our default. This will at least keep the system running.
					unknownComponent = "404";
					config = new LauncherDefaults().componentDescriptor;
					config.window.url = "about:blank";// We should change this to something else. Our biggest issue is that we can't guarantee a component will exist.
				}
				if (!params.options) params.options = { customData: {} };// Make sure we have this in there so we can pass info on to our component
				if (!params.options.customData) config.customData = {};// If our object doesn't have custom data, add it

				params.options.customData.previousURL = params.options && params.options.url ? params.options.url : "";// Make sure we have a url to pass in

				// Create errorString before replacing with the unknownComponent.
				errorString = `LauncherService:spawn(): Can't find component ${component}`;

				//Just update the options to be safe.
				component = unknownComponent;

				params.options ? params.options.url = config.window.url : null;// we need to change what component is being hit and keep the options passed in.
				params.component = component;
				Logger.error(errorString, "Component List", Components);
			}
		}

		// singleton windows - TODO - test this
		Logger.system.debug("Launcher.spawn 3", component, params);
		if (component && config.component.singleton) {
			var existingWindows = activeWindows.findAllByComponentType(component);
			if (existingWindows.length) {
				// Bring existing window(s) to front
				existingWindows.forEach(window => window.bringToFront());
				return cb(`A window for this singleton component already exists: ${existingWindows[0].name}`);
			}
			for (let p in this.pendingWindows) {
				let pendingWindow = this.pendingWindows[p];
				if (pendingWindow.componentType == component) {
					return cb("A window for this singleton component is in the process of being spawned: " + p);
				}
			}
		}

		var requestedPositioning = {
			left: params.left,
			right: params.right,
			top: params.top,
			bottom: params.bottom
		};

		// window config from json is the default. params argument overrides.
		params = merge(config.window, params);

		if (requestedPositioning.left || requestedPositioning.right || requestedPositioning.top || requestedPositioning.bottom) {
			params.left = requestedPositioning.left;
			params.right = requestedPositioning.right;
			params.top = requestedPositioning.top;
			params.bottom = requestedPositioning.bottom;
		}

		// If we're set to spawnOnAllMonitors then we're going to call spawn() recursively, but
		// setting the monitor for each one. Note that since this is re-entrant, we need to make
		// sure we don't create an infinite loop! If params.monitor is set to anything other than "all"
		// then we bypass this.
		if (params.monitor === "all" || (config.component.spawnOnAllMonitors && (typeof (params.monitor) === "undefined"))) {
			this.spawnOnAllMonitors(component, params, cb);
			return;
		}

		//get default OpenFin config.
		var baseDescriptor = new LauncherDefaults().windowDescriptor;
		if (params.options) {
			baseDescriptor = merge(baseDescriptor, params.options);
		}

		if (params.options && params.options.name) params.name = params.options.name;
		let descriptorName;

		if (params.addToWorkspace) {
			descriptorName = params.name ? params.name : this.getRandomName(component);
		} else {
			descriptorName = params.name ? params.name : this.getSequentialName(component);
		}


		baseDescriptor.name = descriptorName;
		//Logger.system.debug("ComponentName", baseDescriptor.name);
		baseDescriptor.componentType = component; //@TODO, remove?
		baseDescriptor.customData.component.type = component;
		baseDescriptor.customData.cssOverride = self.cssOverride;

		let retryAttempt = 0;
		Logger.system.debug("Launcher.spawn 4", component, params);

		let interval = setInterval(function () {
			retryAttempt++;
			//if not in pending and not in active then the window was closed.
			if (this.pendingWindows[baseDescriptor.name] && !activeWindows.getWindow(baseDescriptor.name)) {
				//console.warn("Failed To Launch " + baseDescriptor.name + " " + retryAttempt);
				if (retryAttempt > 2) {
					// This is where failed windows used to be force closed and a respawn attempted but on some systems windows take a long time to load and force closing them or retyring spawning was causing problems. For now, just warn if things are taking too long.
					// Attempting to wrap the window while loading here was also taking a really long time. Just letting things take their course seems to eventually work.
					console.warn("Window Taking Really Long to Load:", baseDescriptor.name);
					clearInterval(interval);
				}
			} else {
				clearInterval(interval);
			}
		}, 5000);

		if (this.finsembleConfig.system.finsembleLibraryPath) {
			baseDescriptor.preloadScripts = [{ url: this.finsembleConfig.system.finsembleLibraryPath }];
		} else {
			baseDescriptor.preloadScripts = [];
		}

		if (config.component.preload) {
			let inject = config.component.preload;
			if (!Array.isArray(inject)) {
				inject = [inject];
			}
			for (var i = 0; i < inject.length; i++) {
				try {
					var injectURL = new URL(inject[i]);
					inject[i] = injectURL.href;
				} catch (e) {
					inject[i] = this.finsembleConfig.applicationRoot + "/components/mindcontrol/" + inject[i];
				}
				baseDescriptor.preloadScripts.push({ url: inject[i] });
			}
		}
		baseDescriptor.preload = baseDescriptor.preloadScripts;// For backwards  compatibility. prelod hasn't been used since OF 7
		// url overrides the default component url (and can also be used to simply spawn a url). Ignore if spawned by workspace otherwise it will overwrite the url from workspace. This is dealth with at a later point with a check for the persistURL config item.
		if (params.url && !params.spawnedByWorkspaceService) {
			baseDescriptor.url = params.url;
		}

		if (params.windowType == "openfin") params.windowType = "OpenFinWindow"; // Config friendly naming
		if (params.windowType == "assimilation") params.windowType = "NativeWindow"; // Config friendly naming
		if (params.windowType == "assimilated") params.windowType = "NativeWindow"; // Config friendly naming
		if (params.windowType == "native") params.windowType = "FinsembleNativeWindow"; // Config friendly naming
		if (params.windowType == "application") params.windowType = "OpenFinApplication"; // Config friendly naming
		if (params.native) params.windowType = "NativeWindow"; //Backward Compatibility
		if (baseDescriptor.type === "openfinApplication") params.windowType = "OpenFinApplication"; //Backward Compatibility
		if (!params.windowType) params.windowType = "OpenFinWindow";
		baseDescriptor.windowType = params.windowType;

		Logger.system.debug("Launcher.spawn 5", component, params);

		if (["NativeWindow", "FinsembleNativeWindow"].includes(params.windowType)) {
			//baseDescriptor.native = params.native;
			baseDescriptor.alias = params.alias;
			baseDescriptor.path = params.path;
			baseDescriptor.env = params.env;
			baseDescriptor.arguments = params.arguments;
		}
		let newWindowDescriptor = await this.deriveBounds(params);
		let windowDescriptor = self.compileWindowDescriptor(config, params, baseDescriptor, newWindowDescriptor);
		windowDescriptor = this.adjustBoundsToBeOnMonitor(windowDescriptor);

		// TODO, [Terry] persistURL logic should be in the workspace-service, not in launcher service.
		//[Ryan] the logic should sit in the workspace client( although I think we actually do it in the window client right now)
		if (params.spawnedByWorkspaceService) {
			let persistURL = ConfigUtil.getDefault(config.foreign, "foreign.services.workspace.persistURL", this.persistURL);
			if (!persistURL && config.window) {//revert the url to what is passed in from components.
				windowDescriptor.url = config.window.url;
			}
		}
		if (self.isWindowNameAlreadyUsed(windowDescriptor.name)) {
			errorString = `Cannot spawn new window: windowDescriptor.name ${windowDescriptor.name} already used`;
		} else {
			// save window properties of pending windows that are used later (e.g. to check dupes or for singleton windows) (will be removed in finishSpawn)
			this.pendingWindows[windowDescriptor.name] = {
				uuid: windowDescriptor.uuid || System.Application.getCurrent().uuid,
				componentType: baseDescriptor.componentType
			};
			let spawnResult = await self.doSpawn(windowDescriptor);
			let { err, data: objectReceivedOnSpawn } = spawnResult;
			Logger.system.info(windowDescriptor.name, "Inside LauncherService.spawn(), before ");
			if (err) {
				errorString = err;
			} else {
				let { err, data } = await self.finishSpawn(config, windowDescriptor, params, objectReceivedOnSpawn);
				if (err) {
					errorString = err;
				} else {
					descriptor = data;
				}
				Logger.system.info(windowDescriptor.name, "Inside LauncherService.spawn(), after ");
			}
		}

		if (errorString) {
			Logger.system.error(errorString);
		}

		cb(errorString, descriptor);
	}
	getUnknownComponentName() {
		return this.appConfig.finsemble.servicesConfig && this.appConfig.finsemble.servicesConfig.launcher &&
			this.appConfig.finsemble.servicesConfig.launcher.hasOwnProperty("unknownComponent") ?
			this.appConfig.finsemble.servicesConfig.launcher.unknownComponent :
			null;
	}
	/**
	* Launches a copy of the requested component on each of a user's monitors.
	* @param {string} component The type of the component to launch
	* @param {object} params See spawn.
	* @param {function} cb Callback
	* @todo use asyncLib for spawning here. Get rid of the `remaining` var.
	*/
	async spawnOnAllMonitors(component, params, cb) {
		//Gets all monitors and pushes a spawn call for each monitor to an array of async functions.
		this.getMonitorInfoAll((err, monitors) => {
			let tasks = [];
			monitors.forEach((monitor) => {
				tasks.push((done) => {
					var paramCopy = JSON.parse(JSON.stringify(params));
					paramCopy.monitor = monitor.position;
					paramCopy.component = component;
					self.spawn(paramCopy, function (err, result) {
						if (!err) {
							result.windowDescriptor.spawnOnAllMonitors = true;
						}
					});
				});
			});
			asyncParallel(tasks, (err) => {
				cb(err);
			});
		});
	}

	/**
	 * Spawns an OF window, or sends a request to the native service to spawn a native window.
	 * Callback returns a handle to the new window
	* @param {LauncherClient~windowDescriptor} windowDescriptor The descriptor to launch
	* @param {function} cb Callback
	*/
	doSpawn(windowDescriptor: WindowDescriptor, cb = Function.prototype): Promise<{ err: any, data: any }> {
		const promiseResolver = (resolve) => {
			this.createSplinterAndInject.createWindow({ windowDescriptor }, (err, windowIdentifier) => {
				Logger.system.debug("doSpawn createWindow", err, windowIdentifier, windowDescriptor);
				cb({ err, data: windowIdentifier });
				resolve({ err, data: windowIdentifier });
			});
		};
		return new Promise(promiseResolver);
	}


	/**
	 * Given an object where the keys are component names and the values are component configs, it spawns the list of components.
	 * @private */
	spawnGroup(components, params, cb) {
		let errors, responses = [];
		let componentList = Object.keys(components);
		const spawnComponent = (componentType, done) => {
			let cloneParams = Object.assign({}, params);
			if (components[componentType].params) {
				cloneParams = Object.assign(params, components[componentType].params);
			}
			cloneParams.component = componentType;
			self.spawn(cloneParams, function (err, response) {
				if (err) {
					errors.push(err);
				} else {
					responses.push(response);
				}
				done(err);
			});
		};
		asyncForEach(componentList, spawnComponent, function () {
			cb(errors, responses);
		});
	}

	/**
	 * Splintering.
	 */
	update() {
		// @TODO, this should probably be pubsub (see startPubSubs below)
		RouterClient.transmit("Launcher.update", {
			componentList: Components
		});
	}
}
Logger.start();
