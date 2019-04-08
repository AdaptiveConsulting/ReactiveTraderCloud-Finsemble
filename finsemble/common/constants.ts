
export const WRAPPERS = {
	/*
		TODO: For the time being these are just events our windows fire but not OpenFin (this is used in the OF wrapper. Long term we might have to reverse this)
		TODO: Event naming is inconsistent. Our events should not be camel case to mantain consistency.
	*/
	EVENTS: ["title-changed", "bringToFront", "setBounds", "alwaysOnTop", "setOpacity"]
};
export const APPLICATION_STATE_CHANNEL = "Finsemble.Application.State";
//These next four channels are used in service => service manager communication. The SM receives these messages and then pushes out state updates to the rest of the system.
export const SERVICE_INITIALIZING_CHANNEL = "Finsemble.ServiceManager.serviceInitializing";
export const SERVICE_READY_CHANNEL = "Finsemble.ServiceManager.serviceReady";
export const SERVICE_CLOSING_CHANNEL = "Finsemble.ServiceManager.serviceClosing";
export const SERVICE_CLOSED_CHANNEL = "Finsemble.ServiceManager.serviceClosed";

//This channel is where the aggregated state of all services is sent out on.
export const SERVICES_STATE_CHANNEL = "Finsemble.State.Services";
export const WINDOWSTATE = {
	NORMAL: 0,
	MINIMIZED: 1,
	MAXIMIZED: 2,
	HIDDEN: 3
};
//These channels are to start and stop services dynamically.
export const SERVICE_START_CHANNEL = "Finsemble.Service.Start";
export const SERVICE_STOP_CHANNEL = "Finsemble.Service.Stop";

// These channels are for interrupting events
export const EVENT_INTERRUPT_CHANNEL = "Finsemble.Event.Interrupt";
export const INTERRUPTIBLE_EVENTS = ["close-requested", "closed", "close-complete", "_container-close-handlers"];
export const WORKSPACE = {
	STORAGE_TOPIC: "finsemble.workspace",
	CACHE_STORAGE_TOPIC: "finsemble.workspace.cache",
	API_CHANNELS: {
		SAVE: "Finsemble.Workspace.Save",
		RENAME: "Finsemble.Workspace.Rename",
		SAVE_AS: "Finsemble.Workspace.SaveAs",
		SWITCH_TO: "Finsemble.Workspace.SwitchTo",
		IMPORT: "Finsemble.Workspace.Import",
		EXPORT: "Finsemble.Workspace.Export",
		REMOVE: "Finsemble.Workspace.Remove",
		SAVE_GLOBAL_DATA: "Finsemble.Workspace.SaveGlobalData",
		SAVE_VIEW_DATA: "Finsemble.Workspace.SaveViewData",
		GET_GLOBAL_DATA: "Finsemble.Workspace.GetGlobalData",
		GET_VIEW_DATA: "Finsemble.Workspace.GetViewData",
		GET_WORKSPACES: "Finsemble.Workspace.GetWorkspaces",
		SET_WORKSPACE_ORDER: "Finsemble.Workspace.SetWorkspaceOrder",
		SET_ACTIVEWORKSPACE_DIRTY: "Finsemble.Workspace.SetActiveWorkspaceDirty",
		GET_TEMPLATES: "Finsemble.Workspace.GetTemplates",
		IMPORT_TEMPLATE: "Finsemble.Workspace.ImportTemplate",
		EXPORT_TEMPLATE: "Finsemble.Workspace.ExportTemplate",
		REMOVE_TEMPLATE: "Finsemble.Workspace.RemoveTemplate",
	}
};

// These channels are to publish LifeCycle events on.
// Currently unused but placeholder here for implementation, at least for Workspace.
export const APPLICATION_LIFECYCLE = {

}

export const HEARTBEAT_TIMEOUT_CHANNEL = "Finsemble.WindowService.HeartbeatTimeout";

export const DELIVERY_MECHANISM = {
	PRELOAD: 'preload',
	INJECTION: 'injection',
};