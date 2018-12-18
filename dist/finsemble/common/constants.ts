const Constants = {
	WRAPPERS: {
		/*
			TODO: For the time being these are just events our windows fire but not OpenFin (this is used in the OF wrapper. Long term we might have to reverse this)
			TODO: Event naming is inconsistent. Our events should not be camel case to mantain consistency.
		*/
		EVENTS: ["title-changed", "bringToFront", "setBounds", "alwaysOnTop", "setOpacity"]
	},
	APPLICATION_STATE_CHANNEL: "Finsemble.Application.State",
	//These next four channels are used in service => service manager communication. The SM receives these messages and then pushes out state updates to the rest of the system.
	SERVICE_INITIALIZING_CHANNEL: "Finsemble.ServiceManager.serviceInitializing",
	SERVICE_READY_CHANNEL: "Finsemble.ServiceManager.serviceReady",
	SERVICE_CLOSING_CHANNEL: "Finsemble.ServiceManager.serviceClosing",
	SERVICE_CLOSED_CHANNEL: "Finsemble.ServiceManager.serviceClosed",

	//This channel is where the aggregated state of all services is sent out on.
	SERVICES_STATE_CHANNEL: "Finsemble.State.Services",
	WINDOWSTATE: {
		NORMAL: 0,
		MINIMIZED: 1,
		MAXIMIZED: 2,
		HIDDEN: 3
	},
	//These channels are to start and stop services dynamically.
	SERVICE_START_CHANNEL: "Finsemble.Service.Start",
	SERVICE_STOP_CHANNEL: "Finsemble.Service.Stop",

	// These channels are for interrupting events
	EVENT_INTERRUPT_CHANNEL: "Finsemble.Event.Interrupt",
	INTERUPTABBLE_EVENTS: ["close-requested", "closed", "close-complete", "_container-close-handlers"]

};

export = Constants;