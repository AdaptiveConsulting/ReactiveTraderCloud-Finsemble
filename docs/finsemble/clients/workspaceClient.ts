/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/

import { _BaseClient } from "./baseClient";
import * as Util from "../common/util";
import Validate from "../common/validate";
import Logger from "./logger";
import { WORKSPACE } from "../common/constants";

function escapeRegExp(str) {
	return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}

// validates legal workspace definition
function validWorkspaceDefinition(workspaceJSON) {
	var result = false;
	if (typeof workspaceJSON === "object") {
		var workspaceName = Object.keys(workspaceJSON)[0];
		if (workspaceName && workspaceJSON[workspaceName].workspaceDefinitionFlag) {
			result = true;
		} else {
			Logger.system.error("workspaceClient.workspaceClient.convertWorkspaceDefinitionToTemplate: not legal workspace JSON", workspaceJSON);
		}
	} else {
		Logger.system.error("workspaceClient.workspaceClient.convertWorkspaceDefinitionToTemplate: input is not a legal object", workspaceJSON);
	}
	return result;
}

// constructor for new template given a workspace definition to derive it from
function WorkspaceTemplate(templateName, workspaceJSON) {
	var newTemplate = workspaceJSON;
	var workspaceName = Object.keys(workspaceJSON)[0];
	newTemplate = Util.clone(workspaceJSON);
	newTemplate[templateName] = newTemplate[workspaceName];
	newTemplate[templateName].templateDefinitionFlag = true;
	newTemplate[templateName].name = templateName; // name is also carried in object for use in service
	if (templateName !== workspaceName) { // if using same name then can't delete data associated with name
		delete newTemplate[workspaceName];
	}
	delete newTemplate[templateName].workspaceDefinitionFlag;
	return newTemplate;
}

//Constructor for a new workspace definition. Given a name, it returns an empty workspace. Given some JSON, it'll merge the windows property with the new workspace.
function WorkspaceDefinition(workspaceName, workspaceJSON) {
	var newWorkspace = {
		[workspaceName]: {
			workspaceDefinitionFlag: true,
			windows: [],
			name: workspaceName
		}
	};
	if (workspaceJSON) {
		let workspaceName = Object.keys(workspaceJSON)[0];
		let clonedWorkspace = Util.clone(workspaceJSON);
		if (clonedWorkspace[workspaceName] && clonedWorkspace[workspaceName].windows) {
			clonedWorkspace[workspaceName].windows = clonedWorkspace[workspaceName].windows;
		}

	}
	return newWorkspace;
}


/**
 * @introduction
 * <h2>Workspace Client</h2>
 * ----------
 * The Workspace Client manages all calls to load, save, rename, and delete workspaces. For an overview, please read the [Workspace tutorial](tutorial-Workspaces.html).
 *
 * @hideConstructor true
 * @constructor
 * @summary You don't need to ever invoke the constructor. This is done for you when WindowClient is added to the FSBL object.
 */
class WorkspaceClient extends _BaseClient {
	workspaces: any;
	activeWorkspace: any;
	workspaceIsDirty: boolean;

	constructor(params) {
		super(params);
		Validate.args(params, "object=") && params && (Validate.args2 as any)("params.onReady", params.onReady, "function=");

		/**
		* List of all workspaces within the application.
		* @type {Array.<Object>}
		*/
		this.workspaces = [];

		/**
		* Reference to the activeWorkspace object
		* @type {object}
		*/
		this.activeWorkspace = {};
	}

	// Helper function to handle response from service
	private _serviceResponseHandler(err, response, resolve, reject, cb = Function.prototype) {
		if (err) {
			reject(new Error(err));
			return cb(err);
		}
		if (!response) response = { data: null };
		resolve(response.data);
		cb(null, response.data);
	}

	/// CORE SAVE API - Currently Private. Eventually these will handle all saves. Workspace will just be a data provider.
	/**
	 * Saves Data Globally to the Active Workspace (e.g. ComponentState, WindowList etc.)
	 * @param {object} params
	 * @param {string} params.field
	 * @param {object} params.value
	 * @param {FinsembleCallbackFunction} cb
	 */
	private saveGlobalData(params, cb) {
		Logger.system.debug("WorkspaceClient.saveGlobalData", params);
		const saveGlobalDataPromiseResolver = (resolve, reject) => {
			this.routerClient.query(WORKSPACE.API_CHANNELS.SAVE_GLOBAL_DATA, params, (err, response) => {
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(saveGlobalDataPromiseResolver);
	}

	/**
	 * Saves View Specific Data (e.g. ComponentState, WindowList etc.) to the Currently Active Workspace View or all Views
	 * When a window state changes, on
	 * @param {object} params
	 * @param {string} params.field
	 * @param {object} params.value
	 * @param {boolean} params.saveToAllViews
	 * @param {FinsembleCallbackFunction} cb
	 */
	private saveViewData(params, cb) {
		Logger.system.debug("WorkspaceClient.saveViewData", params);
		const saveViewDataPromiseResolver = (resolve, reject) => {
			this.routerClient.query(WORKSPACE.API_CHANNELS.SAVE_VIEW_DATA, params, (err, response) => {
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(saveViewDataPromiseResolver);
	}

	// This is unnecessary. Window Service should call SaveGlobalData, saveViewData
	/**
	 * Adds window to active workspace.
	 * @private
	 * @param {object} params
	 * @param {string} params.name Window name
	 * @param {function} cb Callback
	 */
	addWindow(params: {
		name: string
	}, cb = Function.prototype) {
		Validate.args(params, "object", cb, "function=") && params && (Validate.args2 as any)("params.name", params.name, "string");
		this.routerClient.query("WorkspaceService.addWindow", params, (err, response) => {
			Logger.system.log(`WORKSPACE LIFECYCLE: Window added:WorkspaceClient.addWindow: Name (${params.name})`);
			cb(err, response);
		});
	}

	/**
	 * Removes window from active workspace.
	 * @private
	 * @param {object} params
	 * @param {string} params.name Window name
	 * @param {function} cb Callback
	 * @example <caption>This method removes a window from a workspace. It is rarely called by the developer. It is called when a window that is using the window manager is closed. That way, the next time the app is loaded, that window is not spawned.</caption>
	 * FSBL.Clients.WorkspaceClient.removeWindow({name:windowName}, function(err, response){
	 * 	//do something after removing the window.
	 * });
	 */
	removeWindow(params: {
		name: string
	}, cb = Function.prototype) {
		Validate.args(params, "object", cb, "function=") && (Validate.args2 as any)("params.name", params.name, "string");
		this.routerClient.query("WorkspaceService.removeWindow", params,
			(err, response) => {
				if (err) {
					return Logger.system.error(err);
				}
				Logger.system.log(`WORKSPACE LIFECYCLE:WorkspaceClient.removeWindow:Window removed: Name (${params.name})`);
				if (response) {
					cb(err, response.data);
				} else {
					cb(err, null);
				}
			});
	}

	// Window Related Workspace Functions. Eventually these need to move to the Window Service
	/**
	 * AutoArranges windows.
	 * @param {object} params Parameters
	 * @param {string} params.monitor Same options as {@link LauncherClient#showWindow}. Default is monitor of calling window.
	 * @param {function} cb Callback
	 * @example
	 * FSBL.Clients.WorkspaceClient.autoArrange(function(err, response){
	 * 		//do something after the autoarrange, maybe make all of the windows flash or notify the user that their monitor is now tidy.
	 * });
	 */
	autoArrange(params: {
		monitor?: string,
		monitorDimensions?: any
	}, cb = Function.prototype) {
		Validate.args(params, "object", cb, "function=");
		params = params ? params : {};
		Util.getMyWindowIdentifier((myWindowIdentifier) => {
			FSBL.Clients.LauncherClient.getMonitorInfo({
				windowIdentifier: myWindowIdentifier
			}, (err, dimensions) => {
				params.monitorDimensions = dimensions.unclaimedRect;
				params.monitorDimensions.name = dimensions.name;
				this.routerClient.query("DockingService.autoArrange", params, cb);
			});
		});
	}

	/**
	 * Minimizes all windows.
	 * @param {object} params
	 * @param {string} 	[params.monitor="all"] Same options as {@link LauncherClient#showWindow} except that "all" will work for all monitors. Defaults to all.
	 * @param {function} cb Callback.
	 * @example
	 * FSBL.Clients.WorkspaceClient.bringWindowsToFront();
	 */
	minimizeAll(params?: {
		monitor: string,
		windowIdentifier?: any
	}, cb = Function.prototype) {
		Validate.args(params, "object", cb, "function=");
		params = params ? params : { monitor: "all" };
		Util.getMyWindowIdentifier((myWindowIdentifier) => {
			if (!params.windowIdentifier) {
				params.windowIdentifier = myWindowIdentifier;
			}
			this.routerClient.query("WorkspaceService.minimizeAll", params, cb);
		});
	}

	/**
	 * Brings all windows to the front.
	 * @param {object} params
	 * @param {string} 	params.monitor Same options as {@link LauncherClient#showWindow} except that "all" will work for all monitors. Defaults to the monitor for the current window.
	 * @param {function} cb Callback.
	 * @example
	 * FSBL.Clients.WorkspaceClient.bringWindowsToFront();
	 */
	bringWindowsToFront(params?: {
		monitor: string,
		windowIdentifier?: any
	}, cb = Function.prototype) {
		Validate.args(params, "object", cb, "function=");
		params = params ? params : { monitor: "all" };
		Util.getMyWindowIdentifier((myWindowIdentifier) => {
			if (!params.windowIdentifier) {
				params.windowIdentifier = myWindowIdentifier;
			}
			this.routerClient.query("WorkspaceService.bringWindowsToFront", params, cb);
		});
	}

	/**
	 * Gets the currently active workspace.
	 * @param {function} cb Callback
	 * @example <caption>This function is useful for setting the initial state of a menu or dialog. It is used in the toolbar component to set the initial state.</caption>
	 *
	 * FSBL.Clients.WorkspaceClient.getActiveWorkspace((err, response) => {
	 * 	//setState is a React component method.
	 * 	self.setState({
	 * 		workspaces: response
	 * 	});
	 * });
	 */
	getActiveWorkspace(cb) {
		Validate.args(cb, "function");
		Logger.system.debug("WorkspaceClient.getActiveWorkspace");
		const getActiveWorkspacePromiseResolver = (resolve, reject) => {
			let err = null;
			if (!this.activeWorkspace) err = "No Active Workspace is Set";
			let response = { data: this.activeWorkspace };
			this._serviceResponseHandler(err, response, resolve, reject, cb);
		}
		return new Promise(getActiveWorkspacePromiseResolver);
	}

	/**
	 * Returns the list of saved workspaces.
	 * @param {function} cb Callback
	 * @example <caption>This function is useful for setting the initial state of a menu or dialog.</caption>
	 *
	 * FSBL.Clients.WorkspaceClient.getActiveWorkspace((err, response) => {
	 * 	//setState is a React component method.
	 * 	self.setState({
	 * 		workspaces: response
	 * 	});
	 * });
	 */
	getWorkspaces(cb) {
		Validate.args(cb, "function");
		Logger.system.debug("WorkspaceClient.getWorkspaces");
		const getWorkspacesPromiseResolver = (resolve, reject) => {
			this.routerClient.query(WORKSPACE.API_CHANNELS.GET_WORKSPACES, {}, (err, response) => {
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(getWorkspacesPromiseResolver);
	}

	/**
	 * @private
	 *
	 * @param {*} params
	 * @param {*} cb
	 * @returns
	 * @memberof WorkspaceClient
	 */
	setWorkspaceOrder(params, cb) {
		let { workspaces } = params;
		Validate.args(cb, "function");
		Logger.system.debug("WorkspaceClient.setWorkspaceOrder", params);
		const setWorkspaceOrderPromiseResolver = (resolve, reject) => {
			this.routerClient.query(WORKSPACE.API_CHANNELS.SET_WORKSPACE_ORDER, params.workspaces || params, (err, response) => {
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(setWorkspaceOrderPromiseResolver);
	}
	//Backward Compatibility
	setWorkspaces = this.setWorkspaceOrder;

	/**
	 * Removes a workspace. Either the workspace object or its name must be provided.
	 * @param {object} params
	 * @param {Object} 	params.workspace Workspace
	 * @param {string} 	params.name Workspace Name
	 * @param {function} cb Callback to fire after 'Finsemble.WorkspaceService.update' is transmitted.
	 * @example <caption>This function removes 'My Workspace' from the main menu and the default storage tied to the applicaton.</caption>
	 * FSBL.Clients.WorkspaceClient.remove({
	 * 	name: 'My Workspace'
	 * }, function(err, response) {
	 * 	//You typically won't do anything here. If you'd like to do something when a workspace change happens, we suggest listening on the `Finsemble.WorkspaceService.update` channel.
	 * });
	 */
	remove(params: {
		workspace?: { name: string },
		name?: string
	}, cb = Function.prototype) {
		Validate.args(params, "object", cb, "function=") && !(params.name || params.workspace) && (Validate.args2 as any)("params.name", params.name, "string");
		Logger.system.debug("WorkspaceClient.remove", params);
		const removePromiseResolver = (resolve, reject) => {
			if (!params.name) {
				params.name = params.workspace.name;
				// we dont need to send workspace objects over the router if not needed.
				delete params.workspace;
			}
			// Cannot remove active workspace.
			if (params.name === this.activeWorkspace.name) {
				Logger.system.error("APPLICATION LIFECYCLE:  Cannot remove active workspace: WorkspaceClient.remove:attempt to remove active workspace name:" + this.activeWorkspace.name);
				let err = "Cannot remove active workspace";
				return this._serviceResponseHandler(err, null, resolve, reject, cb);
			}
			this.routerClient.query(WORKSPACE.API_CHANNELS.REMOVE, params, (err, response) => {
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(removePromiseResolver);
	}

	/**
	 * Renames the workspace with the provided name. Also removes all references in storage to the old workspace's name.
	 * @param {object} params
	 * @param {string} params.oldName Name of workspace to rename.
	 * @param {string} params.newName What to rename the workspace to.
	 * @param {boolean} params.removeOldWorkspace Whether to remove references to old workspace after renaming.
	 * @param {boolean} params.overwriteExisting Whether to overwrite an existing workspace.
	 * @param {function} cb Callback
	 * @example <caption>This method is used to rename workspaces. It is used in the main Menu component.</caption>
	 * FSBL.Clients.WorkspaceClient.rename({
	 * 	oldName: 'My Workspace',
	 * 	newName: 'The best workspace',
	 * 	removeOldWorkspace: true,
	 * }, function(err, response){
	 * 	//Do something.
	 * });
	 */
	rename(params: {
		oldName: string,
		newName: string,
		removeOldWorkspace?: boolean,
		overwriteExisting?: boolean
	}, cb = Function.prototype) {
		Validate.args(params, "object", cb, "function=") && (Validate.args2 as any)("params.oldName", params.oldName, "string", "params.newName", params.newName, "string");
		Logger.system.debug("WorkspaceClient.rename", params);
		const renamePromiseResolver = (resolve, reject) => {
			if (!params.overwriteExisting && this.workspaceExists(params.newName)) {
				let err = "Workspace Already Exists";
				return this._serviceResponseHandler(err, null, resolve, reject, cb);
			}

			this.routerClient.query(WORKSPACE.API_CHANNELS.RENAME, params, (err, response) => {
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(renamePromiseResolver);
	}

	/**
	 * Makes a clone (i.e. copy) of the workspace.  The active workspace is not affected.
	 * @private
	 * @param {object} params
	 * @param {string} params.name Name of workspace to clone.
	 * @param {string} params.newName Name of workspace to clone.
	 * @param {function} cb cb(err,response) with response set to the name of the cloned workspace if no error
	 * @example <caption>This method is used to clone workspaces. </caption>
	 * FSBL.Clients.WorkspaceClient.clone({
	 * 	name: 'The best workspace'
	 * }, function(err, response){
	 * 	//Do something.
	 * });
	 */
	// Keeping for backward compatibility
	clone(params: {
		name: string,
		newName: string,
		removeOldWorkspace?: boolean
	}, cb: Function = Function.prototype) {
		Validate.args(params, "object", cb, "function=") && (Validate.args2 as any)("params.name", params.name, "string");
		delete params.name;
		if (!params.newName) { params.newName = params.name + "_clone"; }
		params.removeOldWorkspace = false;
		return this.rename({
			removeOldWorkspace: false,
			newName: params.newName,
			oldName: params.name
		}, cb);
	};

	/**
	 * Saves the currently active workspace. It does not overwrite the saved instance of the workspace. It simply overwrites the <code>activeWorkspace</code> key in storage.
	 * @param {function} cb Callback
	 * @example <caption>This function persists the currently active workspace.</caption>
	 * FSBL.Clients.WorkspaceClient.save(function(err, response){
	 * 	//Do something.
	 * });
	 */
	save(cb = Function.prototype) {
		Logger.system.debug("WorkspaceClient.save");
		const savePromiseResolver = (resolve, reject) => {
			this.routerClient.query(WORKSPACE.API_CHANNELS.SAVE, {}, (err, response) => {
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(savePromiseResolver);
	}

	/**
	 * Helper that tells us whether a workspace with this name exists.
	 * @private
	 */
	workspaceExists(workspaceName) {
		Validate.args(workspaceName, "string");
		for (var i = 0; i < this.workspaces.length; i++) {
			if (workspaceName === this.workspaces[i].name) {
				return true;
			}
		}
		return false;
	}

	/**
	 *
	 * Saves the currently active workspace with the provided name.
	 * @param {object} params
	 * @param {string} params.name new name to save workspace under.
	 * @param {string} params.force Whether to overwrite a workspace already saved with the provided name.
	 * @param {function} cb Callback
	 * @example <caption>This function persists the currently active workspace with the provided name.</caption>
	 * FSBL.Clients.WorkspaceClient.saveAs({
	 * 	name: 'My Workspace',
	 * }, function(err, response){
	 * 	//Do something.
	 * });
	 */
	saveAs(params: {
		name?: string,
		force: boolean
	}, cb = Function.prototype) {
		Validate.args(params, "object", cb, "function=") && (Validate.args2 as any)("params.name", params.name, "string");
		Logger.system.debug("WorkspaceClient.saveAs", params);
		const saveAsPromiseResolver = (resolve, reject) => {
			if (!params.force && this.workspaceExists(params.name)) {
				return this._serviceResponseHandler("Workspace Already Exists", null, resolve, reject, cb);
			}
			this.routerClient.query(WORKSPACE.API_CHANNELS.SAVE_AS, params, (err, response) => {
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(saveAsPromiseResolver);
	}

	/**
	 * Switches to a workspace.
	 * @param {object} params
	 * @param {string} 	params.name Workspace Name
	 * @param {function} cb Callback
	 * @example <caption>This function loads the workspace 'My Workspace' from the storage tied to the application.</caption>
	 * FSBL.Clients.WorkspaceClient.switchTo({
	 * 	name: 'My Workspace',
	 * }, function(err, response){
	 * 	//Do something.
	 * });
	 */
	switchTo(params: {
		name: string,
		templateName?: string
	}, cb = Function.prototype) {
		//Logger.system.log("APPLICATION LIFECYLE:Loading Workspace:WorkspaceClient.switchTo:" + params.name); This should be in the service.
		Validate.args(params, "object", cb, "function") && (Validate.args2 as any)("params.name", params.name, "string");
		Logger.system.debug("WorkspaceClient.switchTo");
		const switchToPromiseResolver = (resolve, reject) => {
			this.routerClient.query(WORKSPACE.API_CHANNELS.SWITCH_TO, params, (err, response) => {
				if (response && response.data) {
					this.activeWorkspace = response.data;
				}
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(switchToPromiseResolver);
		// TODO the previous version of this logged a bunch of lifecycle events. Those should be logged from the service instead.
	}

	/**
	 * Checks to see if the workspace is dirty. If it's already dirty, the window doesn't need to compare its state to the saved state.
	 * @param {Function} Callback cb(err,response) with response set to true if dirty and false otherwise (when no error)
	 * @example <caption>This function will let you know if the activeWorkspace is dirty.</caption>
	 * FSBL.Clients.WorkspaceClient.isWorkspaceDirty(function(err, response){
	 * 		//Do something like prompt the user if they'd like to save the currently loaded workspace before switching.
	 * });
	 */
	isWorkspaceDirty(cb) {
		Validate.args(cb, "function");
		Logger.system.debug("WorkspaceClient.isWorkspaceDirty");
		const isWorkspaceDirtyPromiseResolver = (resolve, reject) => {
			this._serviceResponseHandler(null, this.activeWorkspace.isDirty, resolve, reject, cb);
		}
		return new Promise(isWorkspaceDirtyPromiseResolver);
	}


	/**
	 * If more than one copy of the workspaceName has been saved, this function returns the next number in the sequence. See the example section for more. This is an internal helper.
	 * @private
	 * @param {string} workspaceName
	 * @example
	 * workspaceList = "apple banna ketchup"
	 * getWorkspaceName("mayo") returns "mayo".
	 *
	 * workspaceList = "apple banna ketchup ketchup (1)"
	 * getWorkspaceName("ketchup") returns "ketchup (2)".
	 *
	 * workspaceList = "apple banna ketchup ketchup (1) ketchup (2) ketchup (7)";
	 * getWorkspaceName("ketchup") returns "ketchup (8)".
	 *
	 */
	getWorkspaceName(workspaceName: string) {
		var workspaces = FSBL.Clients.WorkspaceClient.workspaces;
		let workspaceNames = workspaces.map((workspace) => workspace.name);
		let escapedName = escapeRegExp(workspaceName);
		//match "name" or "name (143)" or "name (2)"

		//Number of modifiers already on the name.
		let existingModifiers = workspaceName.match(/\(\d+\)/g);
		let numModifiers = existingModifiers === null ? "{1}" : `{${existingModifiers.length++}}`;
		let matchString = `\\b(${escapedName})(\\s\\(\\d+\\)${numModifiers})?\\,`;
		let regex = new RegExp(matchString, "g");
		let matches = workspaceNames.sort().join(",").match(regex);

		if (matches && matches.length) {
			let lastMatch = matches.pop();
			//Find the last modifier at the end (NUMBER), and get rid of parens.
			let highestModifier = lastMatch.match(/\(\d+\)\,/g);
			// console.log(existingModifiers ? existingModifiers.length : 0, modifier ? modifier.length : 0);
			//If we're trying to create something stupid like "workspace (1) (1)", and workspace (1) (1) already exists, they'll spit out workspace (1) (1) (2).
			if (existingModifiers && existingModifiers.length != highestModifier.length) {
				workspaceName = lastMatch.replace(",", "") + " (1)";
			} else {
				if (highestModifier && highestModifier.length) {
					highestModifier = highestModifier[highestModifier.length - 1];
					highestModifier = highestModifier.replace(/\D/g, "");
					highestModifier = parseInt(highestModifier);
					highestModifier++;
					workspaceName = lastMatch.replace(/\(\d+\)\,/g, `(${highestModifier})`);
				} else {
					highestModifier = 1;
					workspaceName += " (" + highestModifier + ")";
				}
			}
		}
		return workspaceName;
	}

	/**
	 * Creates a new workspace. After creation the new workspace becomes the active workspace.
	 * @param {String} workspaceName Name for new workspace.
	 * @param {Object} params Optional params
	 * @param {string} params.templateName Name of template to use when creating workspace; if no template then empty workspace will be created.
	 * @param {boolean} params.switchAfterCreation Whether to switch to the new workspace after creating it.
	 * @param {Function} cb cb(err,response) With response, set to new workspace object if no error.
	 * @example <caption>This function creates the workspace 'My Workspace'.</caption>
	 * FSBL.Clients.WorkspaceClient.createWorkspace(function(err, response){
	 *		if (!err) {}
	 *			//Do something like notify the user that the workspace has been created.
	 *		}
	 * });
	 */
	createWorkspace(workspaceName, params: {
		templateName?: string,
		switchAfterCreation?: boolean
	}, cb: Function = Function.prototype) {
		if (arguments.length === 2) { // if no params then second argument must be the cb
			if (typeof params === "function") {
				cb = params;
			}
			params = {};
		}

		var templateName = null;
		if (params && params.templateName) {
			templateName = params.templateName;
		}
		Validate.args(workspaceName, "string", params, "object=", cb, "function=");

		Logger.system.log(`APPLICATION LIFECYCLE:Create New Workspace:Workspacelient.createNewWorkspace: Name (${workspaceName})`);

		//makse sure we don't duplicate an existing workspace.
		workspaceName = this.getWorkspaceName(workspaceName);
		//Default behavior is to switch after creating workspace.
		if (params.switchAfterCreation !== false) {
			Logger.system.log(`APPLICATION LIFECYCLE:Create New Workspace:Workspacelient.createNewWorkspace: Name (${workspaceName})`);
			this.switchTo({ name: workspaceName, templateName }, cb);
		} else {
			let workspace = WorkspaceDefinition(workspaceName, null);
			this.addWorkspaceDefinition({
				workspaceJSONDefinition: workspace
			}, cb);
		}
	}
	/**
	 * @private
	 */
	createNewWorkspace = this.createWorkspace; //Backward Compatiblity

	/**
	 * Gets a workspace definition in JSON form.
	 *
	 * @param {object} params
	 * @param {string} params.workspaceName the workspace name
	 * @param {function} cb callback(error,workspaceDefinition)
	 */
	export(params: {
		workspaceName: string
	}, cb) {
		Validate.args(params, "object", cb, "function") && (Validate.args2 as any)("params.workspaceName", params.workspaceName, "string");
		Logger.system.debug("WorkspaceClient.export", params);
		const exportPromiseResolver = (resolve, reject) => {
			this.routerClient.query(WORKSPACE.API_CHANNELS.EXPORT, params, (err, response) => {
				let workspaceExport = {};
				workspaceExport[params.workspaceName] = response.data;
				this._serviceResponseHandler(err, { data: workspaceExport }, resolve, reject, cb);
			});
		}
		return new Promise(exportPromiseResolver);
	}
	getWorkspaceDefinition = this.export; //Backward Compatibility

	/**
	 * Adds a workspace definition to the list of available workspaces.
	 *
	 * @param {object} params
	 * @param {object} params.workspaceJSONDefinition JSON for workspace definition
	 * @param {function=} cb cb(err) where the operation was successful if !err; otherwise, err carries diagnostics
	 *
	 */
	import(params: {
		workspaceJSONDefinition: any
	}, cb) {
		Validate.args(params, "object", cb, "function=") && (Validate.args2 as any)("params.workspaceJSONDefinition", params.workspaceJSONDefinition, "object");
		Logger.system.debug("WorkspaceClient.import", params);
		const importPromiseResolver = (resolve, reject) => {
			// TODO: all this logic should be in the service.
			let workspaceDefinition = params.workspaceJSONDefinition;
			let workspaceName = Object.keys(workspaceDefinition)[0];

			// if workspace already exists, make a new name and replace with that name
			let viableWorkspaceName = this.getWorkspaceName(workspaceName);
			if (workspaceName !== viableWorkspaceName) {
				workspaceDefinition[viableWorkspaceName] = workspaceDefinition[workspaceName];
				delete workspaceDefinition[workspaceName];
				workspaceDefinition[viableWorkspaceName].name = viableWorkspaceName;
			}

			this.routerClient.query(WORKSPACE.API_CHANNELS.IMPORT, { workspaceJSONDefinition: workspaceDefinition }, (err, response) => {
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(importPromiseResolver);
	}
	addWorkspaceDefinition = this.import; //Backward Compatiblity

	/**
	 * Convert a workspace JSON definition to a template JSON definition
	 * @param {object} params
 	 * @param {string} params.newTemplateName template name for the new converted definition
	 * @param {object} params.workspaceDefinition a workspace JSON definition return from getWorkspaceDefinition()
	 * @returns the new template definition. If null then an error occurred because workspaceDefinition wasn't a legal JSON definition for a workspace
	 */
	convertWorkspaceDefinitionToTemplate(params: {
		newTemplateName: string,
		workspaceDefinition: any
	}) {
		Logger.system.info("WorkspaceClient.convertWorkspaceDefinitionToTemplate", params);
		Validate.args(params, "object") && (Validate.args2 as any)("params.newTemplateName", params.newTemplateName, "string",
			"params.workspaceDefinition", params.workspaceDefinition, "object");
		var templateJSON = null;
		if (validWorkspaceDefinition(params.workspaceDefinition)) {
			templateJSON = WorkspaceTemplate(params.newTemplateName, params.workspaceDefinition);
		}
		return templateJSON;
	};

	/**
	 * Get a template definition in JSON format.
	 *
	 * @param {object} params
	 * @param {string} params.templateName name of template
	 * @param {function} cb
	 * @private
	 */
	exportTemplate(params: {
		templateName: string
	}, cb) {
		Validate.args(params, "object", cb, "function") && (Validate.args2 as any)("params.newTemplateName", params.templateName, "string");
		Logger.system.debug("WorkspaceClient.exportTemplate", params);
		const exportTemplatePromiseResolver = (resolve, reject) => {
			this.routerClient.query(WORKSPACE.API_CHANNELS.EXPORT_TEMPLATE, { templateName: params.templateName }, (err, response) => {
				let exportFormat = {
					[params.templateName]: response.data
				};
				this._serviceResponseHandler(err, { data: exportFormat }, resolve, reject, cb);
			});
		}
		return new Promise(exportTemplatePromiseResolver);
	}
	getWorkspaceTemplateDefinition = this.exportTemplate; //Backward Compatibility

	/**
	 * Adds a template definition.  This adds to the template choices available when creating a new workspace.  The definition will persistent until removed with removeWorkspaceTemplateDefinition().
	 *
	 * @param {object} params
	 * @param {object} params.workspaceTemplateDefinition JSON template definition typically from getWorkspaceTemplateDefinition() or convertWorkspaceDefinitionToTemplate()
	 * @param {boolean} params.force if true an existing template with the same name will be overwritten
	 * @param {function} cb
	 * @private
	 */
	importTemplate(params: {
		workspaceTemplateDefinition: any,
		force: boolean
	}, cb) {
		Validate.args(params, "object", cb, "function=") && (Validate.args2 as any)("params.workspaceTemplateJSONDefinition", params.workspaceTemplateDefinition, "object");
		Logger.system.debug("WorkspaceClient.importTemplate", params);
		const savePromiseResolver = (resolve, reject) => {
			let workspaceTemplateDefinition = params.workspaceTemplateDefinition;
			let error, result;

			Logger.system.debug("workspaceClient.addWorkspaceTemplateDefinition workspaceTemplateDefinition", workspaceTemplateDefinition);
			if ("workspaceTemplates" in workspaceTemplateDefinition) { // if JSON object has wrapper used for config then remove it
				let workspaceTemplates = workspaceTemplateDefinition.workspaceTemplates;
				workspaceTemplateDefinition = workspaceTemplates;
				Logger.system.debug("workspaceClient.addWorkspaceTemplateDefinition modified workspaceTemplateDefinition", workspaceTemplateDefinition);
			}

			if (typeof workspaceTemplateDefinition === "object") {
				var templateName = Object.keys(workspaceTemplateDefinition)[0];
				Logger.system.debug("workspaceClient.addWorkspaceTemplateDefinition templateName", templateName);
				if (templateName && workspaceTemplateDefinition[templateName].templateDefinitionFlag) {
					this.routerClient.query(WORKSPACE.API_CHANNELS.IMPORT_TEMPLATE, { workspaceTemplateDefinition, params }, (err, response) => {
						this._serviceResponseHandler(err, response, resolve, reject, cb);
					});
				} else {
					this._serviceResponseHandler("workspaceClient.addWorkspaceTemplateDefinition: illegal template JSON", null, resolve, reject, cb);
				}
			} else {
				this._serviceResponseHandler("workspaceClient.addWorkspaceTemplateDefinition: input is not a legal object", null, resolve, reject, cb);
			}
		}
		return new Promise(savePromiseResolver);
	}
	addWorkspaceTemplateDefinition = this.importTemplate; //Backward Compatibility

	/**
	 * Removes template definition (keep in mind if the template is defined in config then it will automatically be recreated on each startup)
	 *
	 * @param {object} params
	 * @param {string} params.workspaceTemplateName
	 * @param {function} cb callback(err) is invoked on completion. If !err then the operation was successful; otherwise, err carries diagnostics
	 * @private
	 */
	removeTemplate(params: {
		workspaceTemplateName: string
	}, cb) {
		Validate.args(params, "object", cb, "function=") && (Validate.args2 as any)("params.workspaceTemplateName", params.workspaceTemplateName, "string");
		Logger.system.debug("WorkspaceClient.removeTemplate");
		const removeTemplatePromiseResolver = (resolve, reject) => {
			this.routerClient.query(WORKSPACE.API_CHANNELS.REMOVE_TEMPLATE, { workspaceTemplateName: params.workspaceTemplateName }, (err, response) => {
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(removeTemplatePromiseResolver);
	}
	removeWorkspaceTemplateDefinition = this.removeTemplate; // Backward Compatibilty

	/**
	 * Saves one mor more template defintions in a selected file. Note the end user is prompted to identify file location during this save operation.  The file can optionally be imported during config initialization (see importConfig) although this requires administration support on the configuration/server side. The file can also be read using readWorkspaceTemplateFromConfigFile();
	 *
	 * @param {object} params
	 * @param {object} params.workspaceTemplateDefinition legal template definition returned by either getWorkspaceTemplateDefinition() or convertWorkspaceDefinitionToTemplate()
	 * @private
	 */
	exportToFile(params: {
		workspaceTemplateDefinition: any
	}) {
		// TODO: Make it possible to export both workspaces and templates.
		Logger.system.info("workspaceClient.saveWorkspaceTemplateToConfigFile", params);
		Validate.args(params, "object") && (Validate.args2 as any)("params.workspaceTemplateDefinition", params.workspaceTemplateDefinition, "object");
		var workspaceTemplateDefinition = params.workspaceTemplateDefinition;
		if (typeof workspaceTemplateDefinition === "object") {
			var templateName = Object.keys(workspaceTemplateDefinition)[0];
			if (templateName && workspaceTemplateDefinition[templateName].templateDefinitionFlag) { // confirm the object is a template definition
				var exportConfig = { workspaceTemplates: workspaceTemplateDefinition };
				FSBL.ConfigUtils.promptAndSaveJSONToLocalFile("workspaceConfig-" + templateName, exportConfig);
			} else {
				Logger.system.error("workspaceClient.saveWorkspaceTemplateToConfigFile. Input is not a legal template");
			}
		} else {
			Logger.system.error("workspaceClient.saveWorkspaceTemplateToConfigFile: Input is not a legal object");
		}
	}
	saveWorkspaceTemplateToConfigFile = this.exportToFile;

	/**
	 * Gets all workspace template definitions from workspace service.
	 *
	 * @param {function} cb callback(templateDefinitions) where templateDefinitions is an object containing all known template definitions; each property in templateDefinitions is a template
     * @private
 	 */
	getTemplates(cb) {
		Validate.args(cb, "function");
		Logger.system.debug("WorkspaceClient.getTemplates");
		const getTemplatesPromiseResolver = (resolve, reject) => {
			this.routerClient.query(WORKSPACE.API_CHANNELS.GET_TEMPLATES, {}, (err, response) => {
				let templateDefinitions = {};
				if (!err) {
					templateDefinitions = response.data;
				}
				this._serviceResponseHandler(err, response, resolve, reject, cb);
			});
		}
		return new Promise(getTemplatesPromiseResolver);
	};

	/**
	 * Initializes listeners and sets default data on the WorkspaceClient object.
	 * @private
	 */
	start(cb) {
		/**
		 * Initializes the workspace's state.
		 */

		this.routerClient.subscribe("Finsemble.WorkspaceService.update", (err, response) => {
			Logger.system.debug("workspaceClient init subscribe response", err, response);
			if (response.data && response.data.activeWorkspace) {
				this.workspaceIsDirty = response.data.activeWorkspace.isDirty;
				this.workspaces = response.data.workspaces;
				this.activeWorkspace = response.data.activeWorkspace;
			}

			this.getActiveWorkspace((err, response) => {
				this.activeWorkspace = response;
				this.getWorkspaces((err, response2) => {
					this.workspaces = response2;
					if (cb) {
						cb();
					}
				});
			});

		});
	}
}

var workspaceClient = new WorkspaceClient({
	startupDependencies: {
		services: ["workspaceService"],
		clients: []
	},
	onReady: (cb) => {
		workspaceClient.start(cb);
	},
	name: "workspaceClient"
});

export default workspaceClient;
