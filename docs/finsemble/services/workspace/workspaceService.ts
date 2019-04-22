/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
/* eslint indent: ["error", "tab", { "SwitchCase": 1 }] */

/**
 * Workspace Manager Service
 */
import FSBLDependencyManager from "../../common/dependencyManager";

import * as async from "async";
import * as merge from "deepmerge";
import LauncherClient from "../../clients/launcherClient";
LauncherClient.initialize();
import { BaseService } from "../baseService";
import StorageClient from "../../clients/storageClient";
StorageClient.initialize();
import * as util from "../../common/util";

// TODO @Sidd - this is just a bad idea: needs to be read from config, instead of from this file:
import DefaultWorkspacesJson = require("../../../configs/other/defaultWorkspaces.json");
import { clone } from "../../common/disentangledUtils";


import ConfigClient from "../../clients/configClient";
ConfigClient.initialize();
import SearchClient from "../../clients/searchClient";
SearchClient.initialize();
import Logger from "../../clients/logger";
// TypeScript assigns values imported as JSON to be read only. Therfore, we need to clone the imported default workspaces.
// @TODO - delete this when DefaultWorkspaces come from config.
let DefaultWorkspaces = clone(DefaultWorkspacesJson, Logger.system.error);
import * as Fuse from "fuse.js";
import { ConfigUtilInstance as ConfigUtil } from "../../common/configUtil";
import UserNotification from "../../common/userNotification";
import { FinsembleWindow } from "../../common/window/FinsembleWindow";

import { Workspace } from "./workspace";
import { WORKSPACE } from "../../common/constants";

/**
 * Finsemble workspace.
 * @typedef {Object} workspaceDescriptor
 * @property {string} name Name of workspace
 * @property {Array} windows Array of window names.
 */

/**
 * Key used to retrieve window data.
 * @typedef {string} windowHash WorkspaceName + windowName concatenated and camelcased.
 */

/**
 * Key used to retrieve container data.
 * @typedef {string} containerHash WorkspaceName + windowName + containerName concatenated and camelcased.
 */


function getRandomName(str) {
	var name = Math.floor(Math.random() * 10000) + "__" + str + "__" + Math.floor(Math.random() * 10000);
	return name;
}

type WorkspaceServiceConfigParams = {
	closeWorkspaceTimeout?: any;
	loadWorkspaceTimeout?: any;
	closeFailureNotificationMessage?: any;
	loadFailureNotificationMessage?: any;
};
/**
 * The workspace service handles all client calls to manage or manipulate application workspaces.
 * @constructor
 */
class WorkspaceService extends BaseService {
	workspaceTemplates = {};
	workspaces: Workspace[] = [];
	componentList = {};
	windowWraps = {};
	configParams: WorkspaceServiceConfigParams = {};
	/**
		* Sets defaults for the workspaceService. These are used when initializing the application.
		* @private
		* @todo , this should be reconfigured for spawn params
		*/
	defaults = {
		components: [],
		workspace: new Workspace({ name: "Default Workspace" })
	};
	isLoading = false;
	storage: {
		save;
		get;
		delete;
	};
	activeWorkspace: Workspace;
	initialWorkspace: string;
	lastUsedWorkspace: string;
	workspaceLoadQueue;
	constructor(params) {
		super(params);
		this.bindAllFunctions();
	}

	bindAllFunctions() {
		let self = this;
		for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(self))) {
			let method = self[name];
			// skip constructor
			if (!(method instanceof Function) || method === WorkspaceService) continue;
			self[name] = self[name].bind(self);
		}
	}

	/**
	 * Used in the intiialization function. Just persists the default workspace into whatever storage that the workspaceService was initialized with.
	 * @private
	 */
	persistDefaultWorkspace() {
		Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService No workspaces present in storage. Persisting the default workspaces from config.");

		//saves name/window map.
		//var workspace = this.defaults.workspace;
		DefaultWorkspaces.workspaces.map((workspace) => {
			workspace.components.map((item) => {
				var randomWindowName = getRandomName(item.type);
				item.name = item.name || randomWindowName;
				var storageWindowHash = util.camelCase(workspace.name, item.name);
				workspace.windows.push(item.name);
				item.customData = item.customData || {};
				var customData = merge(item.customData, {
					component: {
						type: item.type,
					}
				});
				var componentData = {
					customData: customData,
					name: item.name
				};
				if (item.options) {
					for (var key in item.options) {
						componentData[key] = item.options[key];
					}
				}
				this.storage.save({
					topic: WORKSPACE.STORAGE_TOPIC,
					key: storageWindowHash,
					value: componentData
				});
			});
			Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:LoadDefaultWorkspace:workspace.name:::" + workspace.name);
			this.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: util.camelCase(workspace.name), value: workspace });
		});
	};

	/**
	 * Returns a list of installed components based off of a search string.
	 * @param {object} params
	 * @param {string} params.text The search text
	 *
	*/
	searchWorkspaces(params, cb) {
		var results = [];
		var options: Fuse.FuseOptions<Workspace> = {
			shouldSort: true,
			includeScore: true,
			includeMatches: true,
			threshold: 0.6,
			location: 0,
			distance: 100,
			maxPatternLength: 32,
			minMatchCharLength: 1,
			keys: [
				"name",
			]
		};

		/** Fuse.js's type definition file is completely wrong - it says it returns an array of the things you search,
		 * but in reality, it's return shape depends on the config you pass it. The way we're using it, this interface
		 * accurately describes the return shape. See https://github.com/krisk/Fuse/issues/265
		 */
		interface FuseResult<T> {
			item: T,
			matches?: any;
			score?: number;
		}
		var fuse = new Fuse(this.workspaces, options);
		/** Based on the incorrect type definition file (see above), TS assumes these two types are incompatible,
		 * so we have to cast to any to stop it's complaining. If we don't like this, the solution is fork
		 * FuseJs and/or submit a PR. */
		var fuseResults = (fuse.search(params.text) as any) as FuseResult<Workspace>[];
		for (var i = 0; i < fuseResults.length; i++) {
			var result = fuseResults[i];
			if (this.activeWorkspace.name === result.item.name) continue;
			results.push({
				name: result.item.name,
				score: result.score,
				matches: result.matches,
				type: "Workspace",
				description: "",
				actions: [{ name: "Switch" }],
				tags: []
			});
		}
		cb(null, results);
	}

	searchActions(params) {
		if (!params.action) return;
		if (!params.item) return;
		if (params.action.name === "Switch") {
			this.switchTo({ name: params.item.name }, null);
		}
	}

	getPreferences() {
		const getPreferencesPromiseResolver = (resolve, reject) => {
			Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:initialize sequence: getPreferences");
			ConfigClient.getPreferences((err, preferences) => {
				if (err) {// I doubt we'd be able to move on here if we had an error....At least we shouldn't
					Logger.system.error("APPLICATION LIFECYCLE:WorkspaceService:getPreferences", err);
				}
				// If preferences has an error this should exist. We may just want to throw an error and kill the app.
				this.initialWorkspace = preferences ? preferences["finsemble.initialWorkspace"] : null;
				Logger.system.debug("getPreferences result", preferences, this.initialWorkspace);
				resolve();
			});
		};
		return new Promise(getPreferencesPromiseResolver);
	}

	getLastUsedWorkspace() {
		const getLastUsedWorkspacePromiseResolver = (resolve, reject) => {
			Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:initialize sequence: getLastUsedWorkspace");
			StorageClient.get(
				{
					topic: "finsemble",
					key: "finsemble.lastUsedWorkspace"
				},
				(err, data) => {
					if (err) {
						resolve();
						return console.error("getLastUsedWorkspace", err);
					}

					this.lastUsedWorkspace = data;
					Logger.system.debug("getLastUsedWorkspace result", data, this.lastUsedWorkspace);
					resolve();
				});
		};
		return new Promise(getLastUsedWorkspacePromiseResolver);
	};

	getEssentialConfig() {
		const getEssentialConfigPromiseResolver = async (resolve, reject) => {
			Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:initialize sequence: getEssentialConfig");
			try {
				let { data: finsemble } = await ConfigClient.getValue({ field: "finsemble" });

				// If we have workspaces in our config they must be the defaults. Store them to this object
				if (finsemble && finsemble.workspaces && (finsemble.workspaces instanceof Array) && finsemble.workspaces.length > 0) {
					DefaultWorkspaces.workspaces = finsemble.workspaces;
				}

				Logger.system.debug("getEssentialConfig component list", finsemble.components);
				// this.alertURL = finsemble.applicationRoot + "/components/notification/notification.html"; // will revisit notifications
				this.componentList = finsemble ? finsemble.components : []; // initialize component list maintained by workspace

				// The amount of time to allow for a wokspace to close (for all the windows to close)
				this.configParams.closeWorkspaceTimeout = ConfigUtil.getDefault(finsemble, "finsemble.servicesConfig.workspace.closeWorkspaceTimeout", 30 * 1000);

				// The amount of time to allow for a workspace to complete loading. Default is no timeout.
				this.configParams.loadWorkspaceTimeout = ConfigUtil.getDefault(finsemble, "finsemble.servicesConfig.workspace.loadWorkspaceTimeout", null);

				// The message to deliver to the end user when closing a workspace fails or times out
				this.configParams.closeFailureNotificationMessage = ConfigUtil.getDefault(finsemble, "finsemble.servicesConfig.workspace.closeFailureNotificationMessage",
					"Problem closing current workspace. Please close any windows remaining on your screen and then select another workspace to open.");

				// The message to deliver to the end user when loading a workspace fails or times out
				this.configParams.loadFailureNotificationMessage = ConfigUtil.getDefault(finsemble, "finsemble.servicesConfig.workspace.loadFailureNotificationMessage",
					"Some workspace components may not have loaded. If you choose to save your workspace, those unloaded components will be permanently removed.");
				resolve();
			} catch (err) {
				reject(new Error(err));
			}
		};
		return new Promise(getEssentialConfigPromiseResolver);
	}

	getAllworkspaces() {
		const getAllworkspacesPromiseResolver = (resolve, reject) => {
			Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:initialize sequence: getAllworkspaces");
			//Get all workspaces
			this.storage.get({ topic: WORKSPACE.STORAGE_TOPIC, key: "fsblWorkspaces" }, (err, response) => {
				if (err) { return reject(new Error(err)); }
				if (!response) { return resolve(); }
				this.workspaces = response;
				Logger.system.debug("getAllworkspaces", this.workspaces);
				resolve();
			});
		};
		return new Promise(getAllworkspacesPromiseResolver);
	}

	getTemplatesFromStorage() {
		const getTemplatesFromStoragePromiseResolver = (resolve, reject) => {
			Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:initialize sequence: getTemplatesFromStorage");
			this.storage.get({ topic: WORKSPACE.STORAGE_TOPIC, key: "workspaceTemplates" }, (err, workspaceTemplatesFromStorage) => {
				this.workspaceTemplates = workspaceTemplatesFromStorage || {};
				Logger.system.debug("getTemplatesFromStorage done", this.workspaceTemplates);
				resolve();
			});
		};
		return new Promise(getTemplatesFromStoragePromiseResolver);
	}

	getTemplatesFromConfig() {
		const getTemplatesFromConfigPromiseResovler = async (resolve, reject) => {
			await this.getTemplatesFromStorage();
			Logger.system.debug(": getTemplatesFromConfig");

			//check to see if the app has specified defaultWorkspaces in finsemble config
			ConfigClient.getValue({ field: "finsemble.workspaceTemplates" }, (err, configWorkspaceTemplates) => {
				configWorkspaceTemplates = configWorkspaceTemplates || {};
				Logger.system.debug("Config getTemplatesFromConfig", configWorkspaceTemplates);
				this.addWorkspaceTemplateDefinition(configWorkspaceTemplates, true, resolve);
			});
		};
		return new Promise(getTemplatesFromConfigPromiseResovler);
	};

	getActiveWorkspaceOnStartup() {
		const getActiveWorkspacePromiseResolver = async (resolve, reject) => {
			var initialTopic = WORKSPACE.CACHE_STORAGE_TOPIC;

			await Promise.all([
				this.getPreferences(),
				this.getLastUsedWorkspace(),
				this.getAllworkspaces()
			]);
			Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:initialize sequence: getActiveWorkspace");

			let workspaceToLoad;
			let workspaceSource;
			if ((this.initialWorkspace && typeof this.initialWorkspace === "string" && this.initialWorkspace.length > 0)) {
				workspaceToLoad = this.initialWorkspace;
				workspaceSource = "initialWorkspace";
			} else if (this.lastUsedWorkspace && typeof this.lastUsedWorkspace === "string" && this.lastUsedWorkspace.length > 0) {
				workspaceToLoad = this.lastUsedWorkspace;
				workspaceSource = "lastUsedWorkspace";
			} else {
				// Check special cases of above if statements
				if (this.initialWorkspace && typeof this.initialWorkspace !== "string") {
					Logger.system.warn(
						`initialWorkspace is defined, but isn't a string. Type: ${typeof this.initialWorkspace}`,
						typeof this.initialWorkspace);
				}

				if (this.lastUsedWorkspace && typeof this.lastUsedWorkspace !== "string") {
					Logger.system.warn(
						`lastUsedWorkspace is defined, but isn't a string. Type: ${typeof this.lastUsedWorkspace}`,
						typeof this.lastUsedWorkspace);
				}
			}

			// clear the lastUsedWorkspace setting (so it can be reset on clean shutdown/restart and clear otherwise
			this.setLastUsedWorkspace(null);

			Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:getInitial", this.initialWorkspace);
			if (workspaceToLoad) {
				// load a default workspace (initialWorkspace) - collect topic and workspace name as initialWorkspace
				let okay = false;
				for (let i = 0; i < this.workspaces.length; i++) {
					// only use name in preferences if it is a valid workspace name
					if (this.workspaces[i].name === workspaceToLoad) {
						Logger.system.debug("startup initialWorkspace (user preference)", this.initialWorkspace);
						this.load({ name: workspaceToLoad }, null);
						okay = true;
						return resolve();
					}
				}

				if (!okay) {
					Logger.system.warn(`getActiveWorkspace: could not use ${workspaceSource} because name wasn't found in known workspaces`, workspaceToLoad, this.workspaces);
				}
			}


			// if nothing got loaded, active workspace is loaded
			this.storage.get({ topic: WORKSPACE.CACHE_STORAGE_TOPIC, key: "activeWorkspace" }, (err, response) => {
				if (err) {
					Logger.system.error("activeWorkspace Data Could not be retrieved", err);
					return reject(new Error(err));
				}
				Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:ReceivedActiveWorkspaceFromStorage", response);
				if (response && response.name && response.name.length > 0) {
					// If someone has put a window in a workspace that doesn't have addToWorkspace: true fix it.
					if (response.components) {
						// TODO: This hack needs some fixing -> while this sets addToWorkspace: true, windowClient uses persistWindowState to add windows to the workspace. That is a bug that needs to be fixed. This also exists later look for merge(new Workspace() ...
						let keys = Object.keys(response.components);
						for (let key of keys) {
							let component = response.components[key];
							if (!component.options) component.options = {};
							component.options.addToWorkspace = true;
						}
					}
					this.activeWorkspace = merge(new Workspace(""), response);
					this.update("workspace:load:dataRetrieved");
					response.storageTopic = initialTopic;
					if (initialTopic === WORKSPACE.CACHE_STORAGE_TOPIC) {
						//LoadActiveWorkspace calls a function that looks at the name of the workspace to get the windows...set it to activeWorkspace if we aren't loading something from storage. If we don't do this, it will try to grab the stored workspace...but it will look under the cache topic. And it will find nothing. And the workspace won't load.
						response.name = "activeWorkspace";
					}
					return this.loadActiveWorkspace(response, resolve);
				}

				// If no active Workspace, load the first workspace in our list of workspaces
				Logger.system.warn("Initial workspace isn't defined", initialTopic, this.initialWorkspace);
				if (this.workspaces.length > 0) {
					this.load({
						name: this.workspaces[0].name
					}, response);
					return resolve();
				}

				//If we have no activeWorkspace and no workspaces defined, load a default workspace:
				if (DefaultWorkspaces.workspaces[0]) {
					let components = DefaultWorkspaces.workspaces[0].components;
					if (components) {
						let keys = Object.keys(components);
						for (let key of keys) {
							let component = components[key];
							if (!component.options) component.options = {};
							component.options.addToWorkspace = true;
						}
					}
					//cloning here so that if we change the activeWorkspace's name (e.g., on a saveAs), it won't be reflected in the this.workspaces object.
					this.activeWorkspace = merge(new Workspace(""), DefaultWorkspaces.workspaces[0]);
					this.update("workspace:load:dataRetrieved");
				}
				this.workspaces = DefaultWorkspaces.workspaces;
				//var windowsRemaining = this.defaults.components.length;
				this.persistDefaultWorkspace();
				this.save();

				DefaultWorkspaces.workspaces[0].components.map((item) => {
					Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:Opening DefaultWorkspace: spawning item", item);
					//merge options and form the object the way the launcher wants it. Also merge any top-level props on our item.
					let spawnParams = {
						options: merge(item.options || {}, {
							name: item.name,
							customData: item.customData || {}
						}),
						addToWorkspace: true
					};
					spawnParams = merge(spawnParams, item);
					this.spawnWindow(item.type, spawnParams.options);
				});

				resolve();
			});
		};
		return new Promise(getActiveWorkspacePromiseResolver);
	}

	registerSearch() {
		const registerSearchPromiseResolver = (resolve, reject) => {
			SearchClient.register({
				name: "Installed Workspaces",
				searchCallback: this.searchWorkspaces,
				itemActionCallback: this.searchActions,
				providerActionCallback: () => { }
			}, () => {
				resolve();
			});

		};
		return new Promise(registerSearchPromiseResolver);
	};

	/**
	 * Initializes the workspace manager.
	 * @param {object} params
	 * @param {Object} params.storage FSBL Storage object.
	 *
	 */
	initialize = async (params: { storage: any }, callback) => {
		this.storage = params.storage;
		var asyncTimeout = setTimeout(() => {
			Logger.system.error("***** APPLICATION LIFECYCLE:WorkspaceService:initialize: Probable failure -- timeout on async.auto completion.");
		}, 5000);

		try {

			await this.getEssentialConfig();
			await this.getTemplatesFromConfig();
			await this.getActiveWorkspaceOnStartup();
			await this.registerSearch();
		} catch (err) {
			Logger.system.error(err);
		}

		clearTimeout(asyncTimeout);

		Logger.system.debug("APPLICATION LIFECYCLE:WorkspaceService:LoadDefaultWorkspace:--all done");
		this.update("workspace:load:finished");
		this.update("workspace:initialization");
		return callback();

	};

	saveWorkspaces() {
		const saveWorkspacesResolver = async (resolve, reject) => {
			Logger.system.debug("saveWorkspaces", this.workspaces);
			try {
				await this.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: "fsblWorkspaces", value: this.workspaces });
				resolve();
			} catch (err) {
				reject(err);
			}
		};
		return new Promise(saveWorkspacesResolver);
	};

	saveActiveWorkspace() {
		const saveActiveWorkspacePromiseResolver = async (resolve, reject) => {
			let workspaceToSave = JSON.parse(JSON.stringify(this.activeWorkspace)); // for some reason util.clone() fails here
			Logger.system.debug("Workspace.finishSave Save saveActiveWorkspace", this.activeWorkspace, workspaceToSave);
			try {
				await this.storage.save({ topic: WORKSPACE.CACHE_STORAGE_TOPIC, key: "activeWorkspace", value: workspaceToSave });
				resolve();
			} catch (err) {
				reject(err);
			}
		};
		return new Promise(saveActiveWorkspacePromiseResolver);
	}

	/**
	 *
	 * Saves active workspace and fsblWorkspaces to storage.
	 */
	save(cb = Function.prototype) {
		const savePromiseResolver = async (resolve, reject) => {
			try {
				await this.saveActiveWorkspace();
				await this.saveWorkspaces();
				resolve();
			} catch (err) {
				reject(err);
			}
		};
		return new Promise(savePromiseResolver);
	};

	/**
	 * Removes window from active workspace.
	 * @param {object} params
	 * @param {string} params.name Name of window to remove.
	 */
	removeWindow(params, cb = Function.prototype) {
		var windowName = params.name;
		var windowHash = util.camelCase("activeWorkspace", windowName);
		/**
		 * Removes the storage entries for this window.
		 * There are currently two storage entries for each window (containerHash and windowHas)
		 * @param {string} err
		 * @param {any} response
		 */
		const removeWindowFromStorage = (err, response) => {
			try {
				if (err || !response) {
					this.update("window:remove");
					return cb();
				}
				var containerHash = util.camelCase("activeWorkspace", windowName, windowName);
				this.storage.delete({ topic: WORKSPACE.CACHE_STORAGE_TOPIC, key: containerHash });
				this.storage.delete({ topic: WORKSPACE.CACHE_STORAGE_TOPIC, key: windowHash });

				if (cb) {
					this.update("window:remove");
					cb();
				}
			} catch (err) {
				let errorMessage = `APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Error in workspaceService.removeWindow.storage.get. windowName=${windowName}`;
				Logger.system.error(errorMessage, err);
				cb();
			}
		};

		try {
			Logger.system.debug(`WORKSPACE LIFECYCLE:Removing Window "${params.name}" from the active workspace.`);
			this.activeWorkspace.isDirty = true;
			let windex = this.activeWorkspace.windows.indexOf(windowName);
			if (windex == -1) {
				//someone tried to remove a window that wasn't in the workspace.ss
				this.update("window:remove");
				if (cb) cb();
				return;
			}
			let finsembleWindow = this.windowWraps[params.name];
			if (finsembleWindow) this.removeWindowListeners(finsembleWindow);
			this.activeWorkspace.windows.splice(windex, 1);

			// Delete storage data for the window by looking up the hash and then calling removeWindowFromStorage with the results
			this.storage.get({ topic: WORKSPACE.CACHE_STORAGE_TOPIC, key: windowHash }, removeWindowFromStorage);
		} catch (err) {
			let errorMessage = `APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Error in workspaceService.removeWindow. windowName=${windowName}`;
			Logger.system.error(errorMessage, err);
			cb();
		}
	}

	/**
	 * Adds a window to the currently active workspace.
	 * @param {object} params
	 * @param {string} params.name Name of window to add.
	 */
	addWindow(params, cb = Function.prototype) {
		Logger.system.debug(`WORKSPACE LIFECYCLE:Adding window ${params.name} to the active workspace.`);
		if (!this.activeWorkspace.windows.includes(params.name)) {
			FinsembleWindow.getInstance({ name: params.name }, (err, finsembleWindow) => {
				this.windowWraps[params.name] = finsembleWindow;
				this.addWindowListeners(finsembleWindow);
				this.activeWorkspace.windows.push(params.name);
				this.activeWorkspace.isDirty = true;
				this.update("window:add");
				cb();
			});
		}
	}

	/**
	 * Helper function to retrieve window data from storage.
	 * @private
	 * @param {windowHash} windowHash
	 * @returns {Promise}
	 */
	getWindowData(windowHash) {
		return new Promise((resolve/*, reject*/) => {
			this.getCacheData(windowHash).then((windowData) => {
				resolve(windowData);
			});
		});
	}

	workspaceExists(workspaceName) {
		let workspaceIndex = this.workspaces.findIndex(workspace => workspace.name === workspaceName);
		return workspaceIndex > -1;
	};

	/**
	 * Saves the active workspace with the provided name.
	 * @param {object} params
	 * @param {string} params.name Name to save the workspace as.
	 * @param {Boolean} [params.force=true] Whether to overwrite a saved workspace.
	 * @param {function} callback Callback
	 */
	async saveAs(params) {
		const saveAsPromiseResolver = async (resolve, reject) => {
			Logger.system.debug("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:SaveAs:Saving the active workspace with the name: " + params.name);
			//@todo, make sure name comes in as a param.
			let workspaceName = params.name;
			let workspaceExists = this.workspaceExists(workspaceName);
			let savedWorkspaceIndex = null;
			let newWorkspace = new Workspace({
				name: workspaceName,
				windows: [],
				groups: this.activeWorkspace.groups
			});

			let self = this;

			//copy activeWorkspace stuff.
			let windowsToSave = this.activeWorkspace.windows;

			if (workspaceExists) {
				savedWorkspaceIndex = this.workspaces.findIndex(workspace => workspace.name === workspaceName);
				let workspaceData: any = await this.getWorkspaceData(this.activeWorkspace.name);
				/**
				 * If a window is closed in the 'activeWorkspace', it isn't removed from the persisted copy of the workspace. The function below iterates through what _was_ saved and what's about to be saved. If any windows have been closed, they are deleted from storage before we write the new version of this workspace to storage.
				 */
				if (workspaceData && workspaceData.windows) {
					let windowsToDelete = workspaceData.windows.filter(windowName => !this.activeWorkspace.windows.includes(windowName));
					for (let windowName of windowsToDelete) {
						let windowHash = util.camelCase(this.activeWorkspace.name, windowName);
						Logger.system.debug("Workspace.finishSave async delete", windowName);
						await this.storage.delete({ topic: WORKSPACE.STORAGE_TOPIC, key: windowHash });
					}
				}
				Logger.system.debug("Workspace.finishSave async delete DONE");
			}

			if (windowsToSave.length) {
				for (let windowName of windowsToSave) {
					Logger.system.debug("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:SaveAs:saving window..", windowName);
					let oldWindowHash = util.camelCase("activeWorkspace", windowName);
					let newWindowHash = util.camelCase(workspaceName, windowName);
					newWorkspace.windows.push(windowName);
					//save after adding window.
					//await this.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: util.camelCase(workspaceName), value: newWorkspace });
					let windowData: any = await this.getWindowData(oldWindowHash);
					if (!windowData) {
						Logger.system.warn("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:SaveAs:No window data found for " + "'" + oldWindowHash + "\"" +
							"; continuing to the next window.");
					} else {
						Logger.system.debug("Workspace.finishSave for each windowName", windowName, newWindowHash, windowData);
						await this.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: newWindowHash, value: windowData });
						let containerName = windowData.name;
						//@todo, refactor to use windowRemaining and containerRemaining like load.
						let oldContainerHash = util.camelCase("activeWorkspace", windowName, containerName);
						let newContainerHash = util.camelCase(workspaceName, windowName, containerName);
						let containerData = await this.getCacheData(oldContainerHash);
						if (containerData) {
							if (containerData.customData) {
								delete containerData.customData.manifest;
							}
							Logger.system.debug("Workspace.finishSave for each containerName", containerName);
							await this.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: newContainerHash, value: containerData });
						}
					}
				}
			}

			self.activeWorkspace.isDirty = false;
			self.activeWorkspace.name = params.name;
			if (!workspaceExists) {
				self.workspaces.push(newWorkspace);
			} else if (savedWorkspaceIndex !== null) {
				self.workspaces[savedWorkspaceIndex] = newWorkspace;
			}
			self.update("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:SaveAs:Workspace:Save As");
			//SaveAs, then persist workspaceObject and activeWorkspace.
			await self.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: util.camelCase(workspaceName), value: newWorkspace });
			await self.save();
			resolve();
			Logger.system.debug("Workspace.finishSave done", workspaceName);

		};
		return new Promise(saveAsPromiseResolver);
	}

	/**
	 * Helper to retrieve a key from default storage topic.
	 * @private
	 * @param {string} key Key to retrieve.
	 * @returns {Promise}
	 */
	getCacheData(key): Promise<any> {
		key = util.camelCase(key);
		return new Promise((resolve/*, reject*/) => {
			this.storage.get({ topic: WORKSPACE.CACHE_STORAGE_TOPIC, key: key }, (err, response) => {
				var data;
				if (response) {
					data = response;
				}
				resolve(data);
			});
		});
	};

	/**
	 * Helper to retrieve a key from workspace storage topic.
	 * @private
	 * @param {string} key Key to retrieve.
	 * @returns {Promise}
	 */
	getWorkspaceData(key) {
		key = util.camelCase(key);
		return new Promise((resolve, reject) => {
			this.storage.get({ topic: WORKSPACE.STORAGE_TOPIC, key: key }, (err, response) => {
				/* @todo
				if (err) {
					Logger.system.warn("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE: getWorkspaceData failed", WORKSPACE.STORAGE_TOPIC, key, response);
					reject(err);
					return;
				}*/
				if (err) {
					Logger.system.warn("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE: getWorkspaceData failed", WORKSPACE.STORAGE_TOPIC, key, err);
				}

				resolve(response);
			});
		});
	}

	getAllWorkspaceWindows(storageTopic, workspace, callback) {
		async.map(workspace.windows, (win, done) => {
			var newWindowHash = util.camelCase(workspace.name, win);
			this.storage.get({ topic: storageTopic, key: newWindowHash }, (err, response) => {
				if (err) { return done(err); }
				if (!response) { return done(); }
				done(null, response);
			});
		}, (err, data) => {
			callback(err, data);
		});
	}

	spawnWindowList(windowList, callback) {

		// ******************************************************************************************************************************
		// TABBING: here need to add code to spawn in two groups: 1) first all the stackedWindows; 2) then the rest of the windows
		//
		// Ideally the workspace manager would only spawn the stacked window, letting the stacked window spawn its children -- this
		// approach would provide for a orderly startup, but it also impacts too much code on first pass. The simple approach used
		// does introduces some startup timing holes, but hopefully won't matter because tabbing related activity should
		// be minimal.  Still, some tweaks for startup might be required.
		// ******************************************************************************************************************************

		const spawnWindow = (win, done) => {
			if (!win || !win.customData || !win.customData.component) { return done(); }
			if (!win.customData.component.inject) { // @todo - remove when OpenFin Fixes preload
				this.spawnWindow(win.customData.component.type, {
					options: win
				})
					.then(done);
			} else {
				done();
			}
		};

		let stacks = windowList.filter((el) => { return el && (el.windowType === "StackedWindow"); }); // prevent bad descriptors from buggering up workspace start
		let notStacks = windowList.filter((el) => { return el && (el.windowType !== "StackedWindow"); });

		const errCallback = (err?: string | Error) => {
			if (err) {
				Logger.system.error(err.toString());
			}
		};

		//Spawn all the windows, but don't wait for them to come online. The windows wait for the workspaceClient to come up. the workspaceClient waits for the workspaceService to come up. If we wait for the windows to spawn before invoking the callback, the windows will never come online.
		async.each(notStacks, spawnWindow, (err) => {
			errCallback(err);
			async.each(stacks, spawnWindow, errCallback);
		});

		callback();


		// @todo - remove when OpenFin Fixes preload
		var timeout = 0;
		const closure = (count) => {
			if (count < windowList.length) {
				let win = windowList[count];
				if (win && win.customData && win.customData.component) {
					//@todo, why was this here?
					// Logger.system.debug(win);
					if (win.customData.component.inject) {
						this.spawnWindow(win.customData.component.type, {
							options: win
						});
					}
				}
				count++;
				setTimeout(() => {
					closure(count);
				}, timeout);
			}
		};
		closure(0);
	}


	/**
	 * Loads a new or previously saved workspace.
	 * @param {object} 		activeWorkspace
	 * @param {windows} 	[activeWorkspace.windows] workspace windows
	 * @param {string} 		[activeWorkspace.name] Workspace Name
	 */
	loadActiveWorkspace(activeWorkspace, callback) {
		if (!activeWorkspace || !activeWorkspace.windows || activeWorkspace.windows.length === 0) {
			this.update("workspace:load:finished");
			callback();
			return;
		}
		Logger.system.debug("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:LoadActiveWorkspace from storage:load activeworkspace", activeWorkspace);
		var tasks = [
			(done) => { //getWindows
				this.getAllWorkspaceWindows(activeWorkspace.storageTopic, activeWorkspace, done);
			},
			this.spawnWindowList
		];
		async.waterfall(tasks, (err) => {
			if (err) {
				Logger.system.error(err);
			}
			this.update("workspace:load:finished");
			callback(err);
		});

		//this.storage.setStore({ topic: WORKSPACE.STORAGE_TOPIC, dataStore: "localStorage" });
		//this.storage.keys({ topic: WORKSPACE.STORAGE_TOPIC, keyPrefix: "active" });
	}

	// We need to remove this at some point. Leaving just in case I missed something
	filterWorkspaceDefinition(workspaceObject) {
		Logger.system.debug("filterWorkspaceDefinition", workspaceObject);
		var i = workspaceObject.windows.length;
		ConfigClient.getValue({ field: "finsemble.components" }, (err, data) => {
			Logger.system.debug("filterWorkspaceDefinition components", data);
			let componentList = data.value;
			while (i--) { // iterate backwards since removing elements in the array
				//let windowName = workspaceObject.windows[i];
				let windowData = workspaceObject.windowData[i];
				if (windowData) {
					let componentType = windowData.customData.component.type;
					if (!(componentType in componentList)) { // if component not defined in current configuration then remove it and notify user
						workspaceObject.windows && workspaceObject.windows.splice(i, 1);
						workspaceObject.components && workspaceObject.components.splice(i, 1);
						workspaceObject.windowData && workspaceObject.windowData.splice(i, 1);
					}
				} else { // assimulation was leaving null value in for windowData, so need to filter those entries
					workspaceObject.windows && workspaceObject.windows.splice(i, 1);
					workspaceObject.components && workspaceObject.components.splice(i, 1);
					workspaceObject.windowData && workspaceObject.windowData.splice(i, 1);
				}
			}
		});
		Logger.system.debug("filterWorkspaceDefinition after", workspaceObject);
	}

	// saves into storage each of the window definitions contained in workspace object ()
	saveWindowsFromDefinition(workspaceName, definition) {
		Logger.system.debug("initializeTemplate", workspaceName, definition);
		for (let i = 0; i < definition.windows.length; i++) {
			let windowName = definition.windows[i];
			let windowData = definition.windowData[i];
			let newWindowHash = util.camelCase(workspaceName, windowName);
			Logger.system.verbose("initializeTemplate window", newWindowHash, windowName, windowData);
			this.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: newWindowHash, value: windowData });
		}
	}

	/**
	 * Loads a new or previously saved workspace.
	 * @param {object} 		params
	 * @param {workspaceDescriptor} 	[params.workspace] Workspace
	 * @param {string} 		[params.name] Workspace Name
	 */
	async load(params, message) {

		try { // Put the entire workspace load in a try/catch in order to gracefully recover from unknown bugs
			var workspaceName = params.name;

			//can send us a workspace object or the name.
			if (params.workspace && !params.name) {
				workspaceName = params.workspace.name;
			}

			Logger.system.debug(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Load:Loading ${workspaceName}`, params);

			this.activeWorkspace = new Workspace(workspaceName);

			/**
			 * Helper function to get the window descriptor from storage.
			 * @private
			 * @param {string} hash workspace + window name, camelcased.
			 * @returns {Promise}
			 */
			const getWindowDescriptor = (hash) => {
				return new Promise((resolve) => {
					this.getWorkspaceData(hash).then((data) => {
						Logger.system.debug(`getWindowDescriptor for hash ${hash}`, data);
						resolve(data);
					});
				});
			};

			/**
			 * Helper function to copy window data to storage under the currently activeWorkspace
			 * @private
			 * @param {WindowDescriptor} windowDescriptor
			 * @returns {Promise}
			 */
			const copyWindowData = (windowDescriptor) => {
				return new Promise((resolve/*, reject*/) => {
					let newWindowHash = util.camelCase("activeWorkspace", windowDescriptor.name);
					this.storage.save({ topic: WORKSPACE.CACHE_STORAGE_TOPIC, key: newWindowHash, value: windowDescriptor }, resolve);
				});
			};

			/**
			 * Helper function that copies the containers in a windowDescriptor to the activeWorkspace in storage
			 * @private
			 * @param {WindowDescriptor} windowDescriptor
			 * @returns {Promise} Promise that resolves with workspaceData.
			 */
			const copyContainers = (windowDescriptor) => {
				let windowName = windowDescriptor.name;
				let containerNames = [windowDescriptor.name];
				return new Promise(async (resolve, reject) => {
					if (!containerNames || !containerNames.length) {
						resolve();
						return;
					}
					let containersRemaining = containerNames.length;

					let copyTimeout = 2000 * containerNames.length;
					let workspaceLoadTimeout = setTimeout(() => {
						//called if it takes too long for the code to complete, in other words if the storage adapter is super slow
						let errorString = "Timeout in WorkspaceService.load => CopyContainers";
						Logger.system.error(errorString);
						reject(errorString);
					}, copyTimeout);

					//@todo, this decrement logic should be converted to a call to async library
					for (let containerName of containerNames) {
						let containerHash = util.camelCase(workspaceName, windowName, containerName);
						let containerData = await this.getWorkspaceData(containerHash);
						// If no containerData then decrement and continue
						if (!containerData) {
							containersRemaining--;
							if (containersRemaining === 0) {
								if (workspaceLoadTimeout) clearTimeout(workspaceLoadTimeout);
								resolve();
							}
							return;
						}
						// Proceed to storage copy if data was returned.
						let newContainerHash = util.camelCase("activeWorkspace", windowName, containerName);
						this.storage.save({ topic: WORKSPACE.CACHE_STORAGE_TOPIC, key: newContainerHash, value: containerData }, () => {
							containersRemaining--;
							if (containersRemaining === 0) {
								if (workspaceLoadTimeout) clearTimeout(workspaceLoadTimeout);
								resolve();
							}
						});
					}
				});
			};

			let workspaceExists = false;
			//used to overwrite.
			//var savedWorkspaceIndex = -1;
			for (let i = 0; i < this.workspaces.length; i++) {
				if (workspaceName === this.workspaces[i].name) {
					workspaceExists = true;
					//savedWorkspaceIndex = i;
					break;
				}
			}
			//Checks to see if we need to load any more windows. If not, we assign the windows to the activeWorkspace and send a response to the query (if it exists);
			const loadComplete = async () => {
				await this.save();
				Logger.system.debug(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:load:loadComplete:All windows loaded for "${workspaceName}"`);
				// @todo, Terry, we're waaaay down the stack at this point. Really, the response bacl to the server should be done all the
				// way back at the top of the stack. The function path switchTo->load->loadComplete should be written as pure JavaScript interfaces,
				// with no knowledge of the router, and using Promises or callbacks to pass data or errors back up to the original caller.
				//
				// Following that pattern will result in more robust software. To give a sense of the risk, search in this file for loadComplete. You'll
				// find 7 instances. As control flow branches proliferate it becomes more likely that cases are missed. For us, a missed
				// case results in a missed response --> a hung query <--, a very common problem for us.
				if (message) {
					this.sendResponse(message, this.activeWorkspace);
				}
				this.update("workspace:load:finished");
				this.isLoading = false;
				this.processWorkspaceLoadQueue();
			};

			// gets the workspace descriptor either from storage or from template
			const getWorkspaceDescriptor = (workspaceName, templateName) => {
				if (!templateName || !this.workspaceTemplates[templateName]) { // if no template continue as normal
					Logger.system.info("load getWorkspaceDefinition", workspaceName, templateName);
					return new Promise((resolve) => {
						resolve(this.getWorkspaceData(workspaceName));
					});
				}
				return new Promise((resolve) => {
					Logger.system.info("getWorkspaceDefinition getTemplate", workspaceName, templateName, this.workspaceTemplates[templateName]);
					let newWorkspaceDefinition = util.clone(this.workspaceTemplates[templateName]);
					newWorkspaceDefinition.name = workspaceName;
					this.filterWorkspaceDefinition(newWorkspaceDefinition);
					this.saveWindowsFromDefinition(workspaceName, newWorkspaceDefinition); // since workspace created from template, save all template windows in storage
					resolve(newWorkspaceDefinition);
				});

			};

			//Update before loading windows. When they come up, the activeWorkspace will be set properly.
			this.update("workspace:load:start");
			let workspaceDescriptor: any = await getWorkspaceDescriptor(workspaceName, params.templateName);
			Logger.system.debug("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:load:got data from storage:-------->DESCRIPTOR", workspaceDescriptor);
			if (!workspaceExists) {
				let activeWorkspaceClone = merge({}, this.activeWorkspace);
				this.workspaces.push(activeWorkspaceClone);
			}
			//update activeWorkspace even if we're loading a workspace with no windows.
			if (!workspaceDescriptor) {
				Logger.system.warn(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:load:No workspaceDescriptor found for "${workspaceName}". Loading blank workspace`);
				return loadComplete();
			}
			workspaceDescriptor.initializedWindows = [];

			let windowsToLoad = workspaceDescriptor.windows;
			if (!windowsToLoad) {
				Logger.system.warn(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:load:No windows found for workspace "${workspaceName}"`);
				return loadComplete();
			}
			//let windowsToLoadForErrors = JSON.parse(JSON.stringify(windowsToLoad)); // Terry, not used?
			//Send out the update before we start spawning windows. This ensures that docking knows about groups before windows come online. Also makes menu states update more quickly.
			//Clone this object so that it can be spliced for proper error messages.
			this.activeWorkspace.windows = windowsToLoad;
			this.activeWorkspace.isDirty = false;
			this.activeWorkspace.groups = workspaceDescriptor.groups;
			this.update("workspace:load:dataRetrieved");
			Logger.system.debug(`"WorkspaceDescriptor found for "${workspaceName}". Need to load ${workspaceDescriptor.windows.length} windows`);

			if (windowsToLoad.length === 0) {
				return loadComplete();
			}

			let loadAllTimer = null; // holds timer for loading all component windows

			// set one overall time for workspace loading -- this case will handle premature exit of the load
			let loadTimeOut = this.configParams.loadWorkspaceTimeout;
			Logger.system.debug(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:load:Loading: timeout is set to ${loadTimeOut} milliseconds`);

			// If a timeout is set (see config items above) then we'll start the timer. If the timer expires then the user will be notified
			// of a workspace failure through a UserNotification and the workspace menu will be unlocked.
			if (loadTimeOut) {
				loadAllTimer = setTimeout(() => {
					let err = `timeout waiting for workspace "${workspaceName}" to load.`;
					this.prematurelyTerminateSwitch("loadingTimeout", params, message, err);
				}, loadTimeOut);
			}

			//windowsToLoad is an array of window names, check to see if the name includes stacked window.
			//todo for cleanup, this should be an array of descriptors. Also we shouldn't have to spawn stacks at a different time.
			let stacks = windowsToLoad.filter((windowName) => { return windowName && (windowName.includes("StackedWindow")); });
			let notStacks = windowsToLoad.filter((windowName) => { return windowName && (!windowName.includes("StackedWindow")); });
			Logger.system.debug("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Loading stacks and nostacks", stacks, notStacks);

			// Use when async.each completes. This clears the load timer and calls loadComplete(), which sends out the router query response
			const loadCompleteWrapper = (err) => {
				Logger.system.debug(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Loading: load complete loadTimeout=${loadTimeOut} windowsToLoad=${windowsToLoad}`);
				if (loadAllTimer) clearTimeout(loadAllTimer);
				loadComplete();
			};

			const loadWindow = async (windowName) => {
				const loadWindowPromiseResolver = async (resolve, reject) => {
					// Set an individual timer for each component that is loaded to the *same* timeout as the workspace overall.
					// Any component that still hasn't loaded by the time the workspace itself times out will be removed from the *activeWorkspace* (not the named workspace)
					// under the assumption that it is a badly behaved component which may cause trouble in the future. This will cause the workspace
					// to become "dirty", which means that the user will be prompted when they leave the workspace whether to save or not. If they save
					// then the timed-out components will be removed from the named workspace.
					let loadComponentTimer = null;
					try {
						if (loadTimeOut) {
							loadComponentTimer = setTimeout(() => {
								this.activeWorkspace.windows = this.activeWorkspace.windows.filter((listWindowName) => { return listWindowName !== windowName; });
								Logger.system.error(`timeout waiting for workspace component "${windowName}" to load. Component removed from active workspace`);
							}, loadTimeOut);
						}

						let windowHash = util.camelCase(workspaceName, windowName);
						Logger.system.debug("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Loading window", workspaceName, windowName, windowHash);
						let windowDescriptor: any = await getWindowDescriptor(windowHash);
						if (!windowDescriptor) {
							// workspace must have gotten into a bad state.
							let errorMessage = `APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:load:Loading: no descriptor for ${windowName}.`;
							Logger.system.error(errorMessage);
							return resolve();
						}
						await copyWindowData(windowDescriptor);
						await copyContainers(windowDescriptor);

						//TODO, spawnWindow should throw a reject. When this happens we can remove the windowName from activeWindows
						// but before we do this we need to clean up (or eliminate) spawnWindowList()
						await this.spawnWindow(windowDescriptor.customData.component.type, { options: windowDescriptor });
						//windowsToLoadForErrors.splice(windowsToLoadForErrors.indexOf(windowName), 1);
						if (loadComponentTimer) clearTimeout(loadComponentTimer);
						Logger.system.debug(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:load:${windowDescriptor.name} spawned.`);
						resolve();
					} catch (err) {
						if (loadComponentTimer) clearTimeout(loadComponentTimer);
						UserNotification.alert("user", "ALWAYS", "FSBL-WorkspaceSwitch-Failure", "Unhandled exception in workspaceService.loadWindow(). Please report this error to support.", {});
						//windowsToLoadForErrors.splice(windowsToLoadForErrors.indexOf(windowName), 1);
						let errorMessage = `APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Error in workspaceService.loadWindow for ${windowName}`;
						Logger.system.error(errorMessage, err);
						resolve();
					}
				};
				return new Promise(loadWindowPromiseResolver);
			};

			async.each(notStacks, loadWindow, () => {
				async.each(stacks, loadWindow, loadCompleteWrapper);
			});


		} catch (err) {
			this.prematurelyTerminateSwitch("loadingError", params, message, err);
		}

	};

	async setActiveWorkspaceDirty() {
		this.activeWorkspace.isDirty = true;
		this.update();
		await this.save();
	};

	// Add/Remove Listeners for Bounds-Change-End, which will cause the active workspace to be dirtied.
	addWindowListeners(finsembleWindow) {
		finsembleWindow.addEventListener("bounds-change-end", this.setActiveWorkspaceDirty);
	};

	removeWindowListeners(finsembleWindow) {
		finsembleWindow.removeEventListener("bounds-change-end", this.setActiveWorkspaceDirty);
	};

	/**
	 * @param {WindowDescriptor} windowDescriptor Object to derive window properties from.
	 * @private
	 * @returns {Promise}
	 */
	spawnWindow(component, windowDescriptor) {
		return new Promise((resolve, reject) => {
			Logger.system.debug("spawning", windowDescriptor.name, component, windowDescriptor);
			windowDescriptor.spawnedByWorkspaceService = true; // [Terry], putting this hack in place so that launcher service knows when to check persistURL logic. Really, the persistURL logic should be done here.
			LauncherClient.spawn(component, windowDescriptor, (err, response) => {
				Logger.system.debug("workspace spawn complete", windowDescriptor.name, component, windowDescriptor);
				if (err) {
					Logger.system.error("Workspace.spawnWindow. Error returned from LauncherClient.spawn: ", err);
					// @todo, this should become a reject once we're able to handle them
					return resolve(err);
				}
				try {
					let windowName = response.windowIdentifier.windowName;
					this.windowWraps[windowName] = response.finWindow;
					this.addWindowListeners(response.finWindow);
					if (this.activeWorkspace.windows.includes(windowName)) {
						this.activeWorkspace.initializedWindows.push(windowName);
					}
					resolve();
				} catch (err) {
					UserNotification.alert("user", "ALWAYS", "FSBL-WorkspaceSwitch-Failure", "Unhandled exception in workspaceService.spawnWindow(). Please report this error to support.", {});
					let errorMessage = `APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Error in workspaceService.spawnWindow. component=${component}`;
					Logger.system.error(errorMessage, err);
					// @todo, this should become a reject once we're able to handle them
					return resolve(errorMessage);
				}
			});
		});
	};

	/**
	 * Broadcasts an updated list of workspaces.
	 */
	update(reason = null) {
		Logger.system.debug("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:WorkspaceService.update", reason);
		this.RouterClient.publish("Finsemble.WorkspaceService.update", {
			workspaces: this.workspaces,
			activeWorkspace: this.activeWorkspace,
			isDirty: this.activeWorkspace.isDirty,
			groups: this.activeWorkspace.groups,
			reason: reason
		});
	};

	/**
	 * Removes a workspace from the manager. Either the workspace object or its name must be provided.
	 * @param {object} 	params Params
	 * @param {Object} 	[params.workspace] Workspace
	 * @param {string} 	[params.name] Workspace Name
	 */
	remove(params, cb = Function.prototype) {
		if (!params.workspace && !params.name) { throw new Error("To remove a workspace, please provide a reference to it, or its name."); }
		var workspaceName = params.name || params.workspace.name;
		var wsIndex = -1, windowsToRemove = 0;
		for (var i = 0; i < this.workspaces.length; i++) {
			var ws = this.workspaces[i];
			if (ws.name === workspaceName) {
				wsIndex = i;
				break;
			}
		}
		Logger.system.debug(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:remove:Removing "${workspaceName}"`);
		if (wsIndex > -1) {
			this.workspaces.splice(wsIndex, 1);
		} else {
			Logger.system.error(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:remove:Workspace "${workspaceName}" not found.`);
			if (cb) {
				this.update("Workspace:remove");
				cb();
			}
			return;
		}
		workspaceName = util.camelCase(workspaceName);
		// @todo, convert to await
		// Remove windows from storage. Super yucky nested stuff. An alternative approach might be to write some utility functions:
		// await this.getKeys(workspaceName).deleteKeys()
		// this.update()
		// resolve()
		this.getWorkspaceData(workspaceName).then((workspaceDescriptor: any) => {
			this.storage.delete({ topic: WORKSPACE.STORAGE_TOPIC, key: workspaceName });

			if (!workspaceDescriptor || !workspaceDescriptor.windows) {
				//This case is when a workspace has no windows.
				if (cb) {
					this.update("Workspace:remove");
					cb();
				}
				return;
			}
			windowsToRemove = workspaceDescriptor.windows.length;

			//forEach window, get its containerMap, and then delete its entry in localstorage.
			workspaceDescriptor.windows.forEach((windowName) => {
				var windowHash = util.camelCase(workspaceName, windowName);
				//getting the WindowDescriptor, which contains an array of its containers.
				this.getWorkspaceData(windowHash).then((windowDescriptor: any) => {
					this.storage.delete({ topic: WORKSPACE.STORAGE_TOPIC, key: windowHash });
					if (!windowDescriptor) {
						decrementWindowCount();
						return;
					}
					let containerHash = util.camelCase(windowHash, windowDescriptor.name);
					this.storage.delete({ topic: WORKSPACE.STORAGE_TOPIC, key: containerHash });
					decrementWindowCount();
				});
			});
		});

		const decrementWindowCount = () => {
			windowsToRemove--;
			Logger.system.debug(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:remove:DECREMENTING WINDOW COUNT ${windowsToRemove} remaining`);
			if (windowsToRemove === 0 && cb) {
				this.update("Workspace:remove");
				cb();
			}
		};
		//remove containers
		this.update("Workspace:remove");
		this.save();
	};

	/**
	 * Renames a workspace.
	 * @param {object} params
	 * @param {string} params.oldName Name of the workspace you'd like to rename.
	 * @param {string} params.newName Name that you want to rename your workspace to.
	 * @param {boolean} [params.removeOldWorkspace=true]  Whether to remove the old workspace after you rename. If not, it essentially acts as a clone.
	 * @param {function} callback Callback
	 */
	rename(params, callback) {
		// stray comment??? --> //Don't bother if someone just clicked the button without changing it.

		if (typeof (params.removeOldWorkspace) === "undefined") {
			params.removeOldWorkspace = true;
		}

		// This block is for the case where someone tries to clone the same workspace twice. It adds (n), where n is the number of duplciate names, to the end of the new name.
		if (params.removeOldWorkspace === false) {
			// @todo, break this out into a utility function and comment all this arcane code
			var duplicateCount = 0;
			var newNameStripped = new String(params.newName).valueOf();
			newNameStripped = newNameStripped.replace(/\s\(\d?.*\)$/, "").trim();
			for (var i = 0; i < this.workspaces.length; i++) {
				var wsNameStripped = new String(this.workspaces[i].name).valueOf();
				wsNameStripped = wsNameStripped.replace(/\s\(\d?.*\)$/, "").trim();

				if (this.workspaces[i].name == params.newName || newNameStripped == wsNameStripped) {
					duplicateCount++;
				}
			}
			if (duplicateCount) {
				params.newName += " (" + duplicateCount + ")";
			}
		}

		Logger.system.debug(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Rename:Renaming "${params.oldName}" to "${params.newName}"`);

		//If we're renaming the currently active workspace, we can just saveAs and remove the old workspace. Otherwise, we need to copy the old workspace to its new place, and delete the old one after that's complete.
		if (params.removeOldWorkspace && this.activeWorkspace.name === params.oldName) {
			return this.remove({
				name: params.oldName
			}, async (/*err, response*/) => {
				await this.saveAs({
					name: params.newName
				});
				this.activeWorkspace.name = params.newName;
				this.update("rename");
				if (callback) {
					callback();
				}
			});
		}

		// If we're renaming a non active workspace then we need to do a lot more work, mostly copying
		// @todo, most of this stuff should be abstracted into utility functions that can be used throughout the workspace service
		const newWorkspace = new Workspace({
			name: params.newName,
			windows: [],
		});

		// Called when all of the copying is completed
		const finishRename = () => {
			var oldWorkspaceIndex = -1;
			var weAreOverwriting = this.workspaceExists(params.newName);

			for (var i = 0; i < this.workspaces.length; i++) {
				if (this.workspaces[i].name === params.oldName) {
					oldWorkspaceIndex = i;
					break;
				}
			}
			//If our rename is overwriting an existing workspace, remove the current workspace before splicing in the new one.
			if (weAreOverwriting) {
				this.remove({
					name: params.newName
				});
			}
			this.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: util.camelCase(params.newName), value: newWorkspace });
			if (params.removeOldWorkspace) {
				this.workspaces.splice(oldWorkspaceIndex, 0, newWorkspace);
				this.remove({
					name: params.oldName
				});
			} else {
				this.workspaces.splice(oldWorkspaceIndex + 1, 0, newWorkspace);
			}

			this.save();
			this.update("rename");
			if (callback) {
				setTimeout(() => {
					callback(null, { newWorkspaceName: params.newName, status: "finished" });
				}, 0);
			}
		};

		this.getWorkspaceData(util.camelCase(params.oldName)).then((workspaceDescriptor: any) => {
			if (!workspaceDescriptor || !workspaceDescriptor.windows) {
				//@todo, this case would be a crucial error. A workspace was saved without windows??? wat.
				Logger.system.error("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Rename:The workspace Descriptor either does not exist or there are no windows.");
				finishRename();
				return;
			}

			// @todo, Terry, copyWindows, copyWindow and copyContainers are dups of similar functions elsewhere. These
			// should be compressed down to generalized utility functions.
			//forEach window, get its containerMap, and then delete its entry in localstorage.
			/**
			 * Helper function that copies a window and its containers to the new workspace.
			 * @private
			 * @param {workspaceDescriptor} workspaceDescriptor
			 * @returns {Promise}
			 */
			const copyWindows = (windows) => {
				var windowsRemaining = windows.length;
				return new Promise((resolve/*, reject*/) => {
					if (windowsRemaining === 0) {
						resolve();
						return;
					}
					windows.forEach((windowName) => {
						var oldWindowHash = util.camelCase(params.oldName, windowName);
						var newWindowHash = util.camelCase(params.newName, windowName);
						//getting the WindowDescriptor, which contains an array of its containers.
						this.getWorkspaceData(oldWindowHash).then((windowDescriptor) => {
							copyWindow({
								oldWindowHash: oldWindowHash,
								newWindowHash: newWindowHash,
								windowDescriptor: windowDescriptor
							});
						}).then(() => {
							windowsRemaining--;
							if (windowsRemaining === 0) {
								resolve();
							}
						});
					});
				});
			};

			const copyWindow = (params) => {
				var oldWindowHash = params.oldWindowHash,
					newWindowHash = params.newWindowHash,
					windowDescriptor = params.windowDescriptor;
				return new Promise((resolve/*, reject*/) => {
					if (!windowDescriptor) {
						resolve();
						return;
					}
					Logger.system.debug("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Rename:newWorkspace.windows", newWorkspace.windows);
					newWorkspace.windows.push(windowDescriptor.name);
					this.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: newWindowHash, value: windowDescriptor });
					copyContainers({
						windowDescriptor: windowDescriptor,
						newWindowHash: newWindowHash,
						oldWindowHash: oldWindowHash
					}).then(() => {
						resolve();
					});
				});
			};

			/**
			 * Helper function that copies a window's containers to the new workspace.
			 * @private
			 * @param {workspaceDescriptor} workspaceDescriptor
			 * @returns {Promise}
			 */
			const copyContainers = (params) => {
				var oldWindowHash = params.oldWindowHash,
					newWindowHash = params.newWindowHash,
					windowDescriptor = params.windowDescriptor,
					containersRemaining = 1;

				return new Promise(async (resolve/*, reject*/) => {
					if (containersRemaining === 0) {
						resolve();
						return;
					}
					let containerName = windowDescriptor.name;
					let oldContainerHash = util.camelCase(oldWindowHash, containerName);
					let newContainerHash = util.camelCase(newWindowHash, containerName);
					let containerData = await this.getWorkspaceData(oldContainerHash);
					containersRemaining--;
					this.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: newContainerHash, value: containerData });
					if (containersRemaining === 0) {
						resolve();
					}

				});
			}

			copyWindows(workspaceDescriptor.windows).then(() => {
				//this is so we can splice the renamed workspace back into the proper order.
				finishRename();
			});
		}).catch((err) => {
			callback(err, null);
		});
	}

	// Remove the below - no more queue. Only one.
	//Only ever have one load in the queue. The last load will be queued.
	queueWorkspaceLoad(params, message) {
		this.workspaceLoadQueue = [{ params, message }];
	}

	processWorkspaceLoadQueue() {
		if (this.workspaceLoadQueue && this.workspaceLoadQueue.length) {
			let queue = merge([], this.workspaceLoadQueue);
			let first = queue.shift();
			this.workspaceLoadQueue = queue;
			this.switchTo(first.params, first.message);
		}
	}


	/**
	 * Once the workspace is in a usable state, we want to listen for window closes.
	 * e.g., right click icon on taskbar, close. Alt+tab, close. Crash, etc.
	 */
	resumeProcessingWindowCloseEvents() {
		this.RouterClient.addListener("LauncherService.WindowClosed", this.onWindowClosed);
	}

	/**
	 * When the workspace is in a frozen state (for instance when the end user has selected another workspace and we're in the process of switching)
	 * we temporarily pause listening for window close events.
	 */
	pauseProcessingWindowCloseEvents() {
		this.RouterClient.removeListener("LauncherService.WindowClosed", this.onWindowClosed);
	}

	/**
	 * When a window is closed, we remove it from the active workspace.
	 * @param {} err
	 * @param {*} message
	 */
	onWindowClosed(err, message) {
		let name = message.data.name;
		if (this.activeWorkspace.windows.includes(name)) {
			this.removeWindow({ name });
		}
	}

	/**
	 * Called when switch (or load) failed.  Cleanup related state.
	 * @param {object} context The context for terminating a workspace switch {"loadingTimeout", "loadingError", "closingTimeout", "switchToError"}
	 * @param {object} params Original params passed into the malfunctioning method
	 * @param {message} message FSBL.Clients.Router message. Will eventually send a callback via the router.
	*/
	prematurelyTerminateSwitch(context, params, message, err) {
		var userMessage;

		// if problem occurs before we've started loading the new workspace then need to cleanup to avoid getting stuck in a bad state
		if (context === "switchToError" || context == "closingTimeout") {
			Logger.system.error("prematurelyTerminateSwitch: clearing workspace", context, err, params);
			this.activeWorkspace = new Workspace("Empty Workspace"); // set to empty to get out of failure state
			this.activeWorkspace.isDirty = false; // we don't want to prompt the user to save since we're artificially setting workspace to empty
			userMessage = this.configParams.closeFailureNotificationMessage;

			// must have already closed successfully so should not be stuck in bad state; therefore, might want to keep whatever state the newly loading workspace reached (without the windows that didn't load)
		} else { // context === "loadingError" || "loadingTimeout"
			Logger.system.error("prematurelyTerminateSwitch: keeping workspace", context, err, params);
			this.activeWorkspace.isDirty = true; // The user will be prompted to save (without the component(s) that didn't load)
			userMessage = this.configParams.loadFailureNotificationMessage;
		}

		// Notify end user of the error. Developers can set the config for the message via finsemble.servicesConfig.workspace.closeFailureNotificationMessage
		// or finsemble.servicesConfig.workspace.loadFailureNotificationMessage. Setting either of these to an empty string will squash delivery of the message.
		if (userMessage !== "") UserNotification.alert("user", "ALWAYS", "FSBL-WorkspaceSwitch-Failure", userMessage, {});

		// cleanup general state
		this.resumeProcessingWindowCloseEvents();
		this.update("workspace:switchTo:terminated");
		this.isLoading = false;

		message.sendQueryResponse(err); // send err response back to client requesting the switch

		this.processWorkspaceLoadQueue();
	}


	async closeWindow(windowName) {
		const closeWindowPromiseResolver = async (resolve, reject) => {
			try {
				//If the workspace has an empty array, we won't have a windowName. Don't want to try to wrap a non-existent window.
				if (!windowName) return resolve();
				Logger.system.log(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:switchTo:Closing window "${windowName}": Before finsembleWindow.`);
				await this.storage.delete({ topic: WORKSPACE.CACHE_STORAGE_TOPIC, key: util.camelCase("activeWorkspace", windowName) });
				//@todo this is for 'containers'. By default they're the same name as the window. This is where component state is stored.
				await this.storage.delete({ topic: WORKSPACE.CACHE_STORAGE_TOPIC, key: util.camelCase("activeWorkspace", windowName, windowName) });

				let finsembleWindow = this.windowWraps[windowName];
				// It's possible that if an exception got thrown from inside loadWindow that the window could be in activeWindows but never
				// actually created and thus never registered with this.windowWraps[]
				if (!finsembleWindow) return resolve();
				Logger.system.log(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:switchTo:Closing window "${windowName}": After finsembleWindow.`);
				delete this.windowWraps[windowName]; // Remove it from the windowWraps so nobody else works on it
				this.removeWindowListeners(finsembleWindow); // Clean up listeners

				// Now attempt to close the window
				// TODO, should this use Sidd's new fancy closeBlahBlah which is more aggressive about closing badly behaved apps?
				// TODO, convert this to await
				// TODO, consider the steps we had to go through with System.closeApplication to ensure that an app died.
				// Is this a concern here with finsembleWindow.close()? Do we need a more aggressive way of terminating apps?
				// TODO, convert this to await
				finsembleWindow.close({ removeFromWorkspace: false, ignoreParent: true }, (err, response) => {
					if (err) {
						Logger.system.error("APPLICATION LIFECYCLE: WORKSPACE LIFECYCLE: switchTo: CLOSE ERROR:", err);
					}
					resolve();
				});
			} catch (err) {
				UserNotification.alert("user", "ALWAYS", "FSBL-WorkspaceSwitch-Failure", "Unhandled exception in workspaceService.closeWindow(). Please report this error to support.", {});
				let errorMessage = `APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:Error in workspaceService.closeWindow. windowName=${windowName}`;
				Logger.system.error(errorMessage, err);
				resolve();
			}
		}
		return new Promise(closeWindowPromiseResolver);
	}

	/**
	 * Switches to a workspace. Shortcut for {@link WorkspaceService#load}.
	 * @param {object} params
	 * @param {string} 	params.name Workspace Name
	 * @param {string=} params.templateName Optional workspace template name to derive new workspace from
	 * @param {message} message FSBL.Clients.Router message. Will eventually send a callback via the router.
	 */
	switchTo(params, message) {

		try {
			this.pauseProcessingWindowCloseEvents();
			Logger.system.debug("switchTo", params);
			if (this.isLoading) {
				Logger.system.debug(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:switchTo: SwitchTo already in progress, ignoring request to switch to workspace ${params.name}`);
				// this.queueWorkspaceLoad(params, message);
				return;
			}

			Logger.system.log(`APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:switchTo: Switching workspace to "${params.name}"`);
			this.isLoading = true;
			// Tell the launcher service to reset the stagger algorithm
			// @todo, change to use WorkspaceService.switch?
			this.RouterClient.transmit("Launcher.resetSpawnStagger", {});
			// aSend out this event for the benefit of anybody who wants to do cleanup associated with a workspace switch, (e.g., stackManagerService will kill its addWindow queue inside of the stack creation).
			this.RouterClient.transmit("WorkspaceService.switch", { state: "starting" });
			var activeWindows = this.activeWorkspace.windows || [];

			let closeTimer = null;
			let closeTimeout = this.configParams.closeWorkspaceTimeout;

			if (closeTimeout) {
				closeTimer = setTimeout(() => {
					let err = "Closing current workspace timed out.";
					this.prematurelyTerminateSwitch("closingTimeout", params, message, err);
				}, closeTimeout);
			}

			async.each(activeWindows, this.closeWindow, (err) => {
				if (closeTimeout) clearTimeout(closeTimer);
				if (err) {
					Logger.system.error("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:switchTo: error ", err);
				} else {
					Logger.system.log("APPLICATION LIFECYCLE:WORKSPACE LIFECYCLE:switchTo: All windows closed successfully.");
				}
				this.resumeProcessingWindowCloseEvents();
				this.load({ name: params.name, templateName: params.templateName }, message);
			});
		} catch (err) {
			this.prematurelyTerminateSwitch("switchToError", params, message, err);
		}
	}



	/**
	 * Returns the list of saved workspaces.
	 * @returns {Array} Array of saved workspaces.
	 */
	getWorkspaces() {
		return this.workspaces;
	};

	//for reordering.
	//@todo, build in something to make sure we didn't destroy the app or something..
	setWorkspaces(workspaces) {
		this.workspaces = workspaces;
		this.update();
		this.save();
	}

	/**
	 * Returns the list of saved workspaces.
	 * @returns {workspaceDescriptor} Currently active workspace.
	 */
	getActiveWorkspace() {
		return this.activeWorkspace;
	};

	/**
	 * Wrapper that sends a queryResponse to any incoming query.
	 * @private
	 * @param {routerMessage} message
	 * @param {object} data
	 */
	sendResponse(message, data = null, err = null) {
		// previously error/data were both sent into data. Keeping backward compatibility.
		if (data instanceof Error) {
			err = data;
			data = null;
		}
		message.sendQueryResponse(err, data);
	}

	// Terry, we shouldn't really have such methods. The way a developer ought to build batch window actions would be:
	//
	// windowSet = await WorkspaceClient.getWindowSet();
	// WindowClient.minimize(windowSet);
	//
	// or (fancier with chaining)
	//
	// WorkspaceClient.getWindowSet().batch(WindowClient.minimize)

	minimizeAllWindows(cb = Function.prototype) {
		LauncherClient.minimizeWindows({ windowList: this.activeWorkspace.windows }, cb);
	}

	/**
	 * Brings all windows on the current monitor to the foreground.
	 */
	bringWindowsToFront(cb = Function.prototype) {
		LauncherClient.bringWindowsToFront({ windowList: this.activeWorkspace.windows }, cb);
	}

	// adds a new workspace definition from workspace JSON
	async addWorkspaceDefinition(workspaceJSONDefinitions, callback) {
		Logger.system.debug("addWorkspaceDefinition", workspaceJSONDefinitions);
		let workspaces = this.workspaces;

		const alreadyDefined = (workspaceName) => {
			var result = false;
			for (let i = 0; i < workspaces.length; i++) {
				if (workspaces[i].name === workspaceName) {
					result = true;
					break;
				}
			}
			return result;
		};

		let workspaceName = Object.keys(workspaceJSONDefinitions)[0];
		let workspaceObject = workspaceJSONDefinitions[workspaceName];

		if (workspaceObject && workspaceObject.workspaceDefinitionFlag) {
			if (!alreadyDefined(workspaceName)) {
				let importedWorkspace = new Workspace(workspaceName);
				await importedWorkspace.import(workspaceObject);
				//this.filterWorkspaceDefinition(workspaceObject);
				//this.saveWindowsFromDefinition(workspaceName, workspaceObject);
				delete workspaceObject.windowData; // window data is only for JSON definition, not workspace service definition
				if (workspaceObject.componentStates) delete workspaceObject.componentStates;
				workspaces.push(workspaceObject); // add new workspace to list of workspaves - TODO: This is not ideal because it will miss any processing done by the import.
				this.update("new workspace");
				await this.saveWorkspaces();
				callback();
			} else {
				Logger.system.debug(`addWorkspaceDefinition skipping workspace ${workspaceName} because it already exists`);
				callback(null, "success");
			}
		} else {
			let errorMessage = `WorkspaceDefinition: illegal workspace definition for ${workspaceObject.name}`;
			Logger.system.debug(errorMessage, workspaceJSONDefinitions);
			callback(errorMessage);
		}
	}

	// saves list of templates in storage
	saveTemplatesToStorage(callback) {
		Logger.system.debug("saveTemplatesToStorage");
		this.storage.save({ topic: WORKSPACE.STORAGE_TOPIC, key: "workspaceTemplates", value: this.workspaceTemplates }, () => {
			Logger.system.debug("saveTemplatesToStorage done");
			callback();
		});
	}

	// removes a template definition from memory and storage
	removeWorkspaceTemplateDefinition(templateName, callback) {
		delete this.workspaceTemplates[templateName];
		this.saveTemplatesToStorage(callback);
	}

	// adds a template definition to memory and storage
	addWorkspaceTemplateDefinition(workspaceTemplateJSONDefinitions, force, callback) {
		Logger.system.debug("addWorkspaceTemplateDefinition", workspaceTemplateJSONDefinitions, force);
		var templateNames = Object.keys(workspaceTemplateJSONDefinitions);
		for (let i = 0; i < templateNames.length; i++) {
			let templateName = templateNames[i];
			if (force || !(templateName in this.workspaceTemplates)) {
				this.workspaceTemplates[templateName] = workspaceTemplateJSONDefinitions[templateName];
			} else {
				Logger.system.debug(`addWorkspaceTemplateDefinition skipping template ${templateName} because it already exists and no force parameter`);
			}
		}
		this.saveTemplatesToStorage(callback);
	};

	// save the name of the current workspace in case we want to reload it on reboot/restart
	setLastUsedWorkspace(workspaceName) {
		StorageClient.save(
			{
				topic: "finsemble",
				key: "finsemble.lastUsedWorkspace",
				value: workspaceName
			},
			(err, data) => {
				if (err) {
					return Logger.system.error(`Error setting finsemble.lastUsedWorkspace to ${workspaceName}`);
				}

				Logger.system.debug(`Set finsemble.lastUsedWorkspace to ${workspaceName}`, data);
			});
	}

	// pulls together all the workspace information into a single object that can be exported
	async packageWorkspaceForExport(workspaceName, callback) {
		Logger.system.debug("packageWorkspaceForExport", workspaceName);

		const findWorkspaceObject = (workspaceName, workspaces) => {
			var result = null;
			for (let i = 0; i < workspaces.length; i++) {
				if (workspaces[i].name === workspaceName) {
					result = workspaces[i];
					break;
				}
			}
			return result;
		};

		let workspaceObject = findWorkspaceObject(workspaceName, this.workspaces);

		if (workspaceObject) {
			let workspace = new Workspace(workspaceObject);
			let exportConfig = await workspace.export();
			callback(null, exportConfig);
		} else {
			callback(`workspace ${workspaceName} is not defined`, null);
		}
	}

	/**
	 * Sets up all of the endpoints for our api.
	 * @private
	 */
	createRouterEndpoints() {
		this.resumeProcessingWindowCloseEvents();
		this.RouterClient.addListener("Launcher.update", (err, response) => {
			Logger.debug("list updated", err, response);
			if (!err) {
				this.componentList = response.data.componentList; // update component list (needed for dynamic config)
				Logger.system.debug("`Launcher.update channel", response.data.componentList);
			}
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.EXPORT, (err, message) => {
			Logger.system.debug("WorkspaceService.getWorkspaceDefinition", message.data);
			this.packageWorkspaceForExport(message.data.workspaceName, (err, packagedWorkspace) => {
				message.sendQueryResponse(err, packagedWorkspace);
			});
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.IMPORT, (err, message) => {
			Logger.system.debug("WorkspaceService.addWorkspaceDefinition", message.data);
			this.addWorkspaceDefinition(message.data.workspaceJSONDefinition, (error) => {
				message.sendQueryResponse(error, {});
			});
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.EXPORT_TEMPLATE, (err, message) => {
			Logger.system.debug("WorkspaceService.exportTemplate", message.data);
			let error = null;
			let templateDefinition = null;
			let templateName = message.data.templateName;
			if (templateName in this.workspaceTemplates) {
				templateDefinition = this.workspaceTemplates[templateName];
			} else {
				error = `undefined template ${templateName}`;
			}
			message.sendQueryResponse(error, templateDefinition);
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.REMOVE_TEMPLATE, (err, message) => {
			Logger.system.debug("WorkspaceService.removeTemplate", message.data);
			let templateName = message.data.workspaceTemplateName;
			this.removeWorkspaceTemplateDefinition(templateName, () => {
				message.sendQueryResponse(null, true);
			});
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.IMPORT_TEMPLATE, (err, message) => {
			Logger.system.debug("WorkspaceService.importTemplate", message.data);
			let force = message.data.params && message.data.params.force;
			let workspaceTemplateDefinition = message.data.workspaceTemplateDefinition;
			this.addWorkspaceTemplateDefinition(workspaceTemplateDefinition, force, () => {
				message.sendQueryResponse(null, true);
			});
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.GET_TEMPLATES, (err, message) => {
			Logger.system.debug("WorkspaceService.getTemplates");
			message.sendQueryResponse(null, this.workspaceTemplates);
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.SAVE, async (err, message) => {
			try {
				await this.save();
				this.sendResponse(message, { status: "success" });
			} catch (err) {
				this.sendResponse(message, null, err);
			}
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.SAVE_AS, async (err, message) => {
			await this.saveAs(message.data);
			this.sendResponse(message, { status: "success" });
		});

		this.RouterClient.addResponder("WorkspaceService.bringWindowsToFront", (err, message) => {
			this.bringWindowsToFront(() => {
				//@todo, handle errors
				this.sendResponse(message, { status: "success" });
			});
		});

		this.RouterClient.addResponder("WorkspaceService.minimizeAll", (err, message) => {
			this.minimizeAllWindows(() => {
				//@todo, handle errors
				this.sendResponse(message, { status: "success" });
			});
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.REMOVE, (err, message) => {
			this.remove(message.data, () => { this.sendResponse(message) });
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.SWITCH_TO, (err, message) => {
			return this.switchTo(message.data, message);
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.SET_WORKSPACE_ORDER, (err, message) => {
			this.setWorkspaces(message.data);
			return this.sendResponse(message, "Success");
		});

		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.GET_WORKSPACES, (err, message) => {
			return this.sendResponse(message, this.getWorkspaces());
		});

		this.RouterClient.addResponder("WorkspaceService.addWindow", async (err, message) => {
			this.addWindow(message.data);
			await this.saveActiveWorkspace();
			this.sendResponse(message, { status: "finished" });
		});

		this.RouterClient.addResponder("WorkspaceService.removeWindow", (err, message) => {
			this.removeWindow(message.data, async () => {
				await this.saveActiveWorkspace();
				this.sendResponse(message, { status: "finished" });
			});
		});
		this.RouterClient.addResponder(WORKSPACE.API_CHANNELS.RENAME, (err, message) => {
			if (!message.data.newName) {
				this.sendResponse(message, new Error("No new name provided for rename"), null);
				return;
			}
			this.rename(message.data, (err, response) => {
				this.sendResponse(message, err, response);
			});
		});

		this.RouterClient.addListener(WORKSPACE.API_CHANNELS.SET_ACTIVEWORKSPACE_DIRTY, (err, message) => {
			if (message.data && message.data.windowName) {
				if (this.activeWorkspace.windows.includes(message.data.windowName)) {
					this.setActiveWorkspaceDirty();
				}
			} else {
				this.setActiveWorkspaceDirty();
			}

		});

		this.RouterClient.subscribe("Finsemble.WorkspaceService.groupUpdate", async (err, message) => {
			if (this.activeWorkspace && message.data.workspaceName === this.activeWorkspace.name) {
				this.activeWorkspace.groups = message.data.groupData;
				await this.saveActiveWorkspace();
			}
		});

		// save the last used workspace on shutdown/restart so we can reload it if no default is set
		// TODO: Make it so it isn't necessary to listen to both shutdown and restart.
		this.RouterClient.addListener("Application.shutdown", () => this.setLastUsedWorkspace(this.activeWorkspace.name));
		this.RouterClient.addListener("Application.restart", () => this.setLastUsedWorkspace(this.activeWorkspace.name));
	}
}

const serviceInstance = new WorkspaceService({
	name: "workspaceService",
	startupDependencies: {
		services: ["preferencesService", "dataStoreService"],
		clients: ["configClient", "storageClient", "searchClient", "launcherClient"]
	},
	shutdownDependencies: {
		services: ["startupLauncherService"]
	}
});

Logger.start();
serviceInstance.onBaseServiceReady((callback) => {
	FSBLDependencyManager.onAuthorizationCompleted(() => {
		async.series([
			(done) => {
				FSBLDependencyManager.startup.waitFor({
					services: ["assimilationService", "windowService"]
				}, () => {
					serviceInstance.initialize({
						storage: StorageClient,
					}, () => {
						serviceInstance.createRouterEndpoints();
						done();
					});
				});
			}
		], callback);
	});
});

serviceInstance.start();

window["LauncherClient"] = LauncherClient;
window["WorkspaceService"] = serviceInstance;

export default serviceInstance;
