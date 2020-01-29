/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/

import Logger from "../../../clients/logger";
import { BootTaskCallbackInterface } from "../_types";
import { ShutdownManager } from "../shutDownManager";
import ConfigClient from "../../../clients/configClient";
import WorkspaceClient from "../../../clients/workspaceClient";

let SCHEDULED_RESTART_TIMEOUT = 60000;

/**
 * Boot task that sets up the "Finsemble" wildcard pubsub for use throughout Finsemble.
 * @private
 */
export class CheckForScheduledRestartTask {
	shutdownManager: ShutdownManager;
	dialogManager: any;

	constructor(params) {
		this.shutdownManager = params.shutdownManager;
	}

	public start(doneCallback: BootTaskCallbackInterface) {
		Logger.system.debug("checkForScheduledRestartTask start");
		this.checkForScheduledRestart();

		// DialogManagerClient imports the window client.  The window client automatically kicks off initialization that fails when it is imported/required to early,
		// so delay pulling in windowClient until now, when start() is called
		this.dialogManager = require("../../../clients/dialogManagerClient").default;
		this.dialogManager.initialize(); // typically just used once so can initialize here

		doneCallback("checkForScheduledRestartTask", "bootTasks", "completed")
	}

	/**
	 * Checks config for a scheduledRestart property. If it isn't falsy, it will be an object of format:
	 * {
	 * hour: 16,
	 * minute:30,
	 * dialogTimeout:10000
	 * }
	 * If it exists, we set a timeout that will fire at that time.
	 */
	private checkForScheduledRestart() {
		let scheduledRestart = null;
		//Handles
		let scheduleRestart = (err, cfg) => {
			Logger.system.log("checkForScheduledRestart scheduleRestart.", err, cfg);
			console.log("Scheduling restart.", cfg);

			//If we already had a restart scheduled, clear it. There's a new sheriff in town.
			if (scheduledRestart) {
				clearTimeout(scheduledRestart);
			}
			//They may just disable the restart. If so, don't do anything.
			if (!cfg.value) return;
			let time = cfg.value;
			let timestamp: Date = new Date();
			timestamp.setHours(time.hour);
			timestamp.setMinutes(time.minute);

			//Difference between when the timer will fire and what the time is right now.
			//+timestamp converts the date object into a number, making typescript happy.
			let diff = +timestamp - Date.now();
			//If we start at noon but we're scheduled to restart at 6AM, set the timer to fire in 18 hours.
			let isTomorrow = false;

			//If the diff is negative or 0, the time has passed for today, so we set it for tomorrow and recalculate the diff.
			if (diff <= 0) {
				isTomorrow = true;
				timestamp.setDate(timestamp.getDate() + 1);
				diff = +timestamp - Date.now();
			}

			Logger.system.log("checkForScheduledRestart scheduleRestart.", err, cfg);

			Logger.system.log(`APPLICATION LIFECYCLE:SCHEDULED RESTART FOR ${isTomorrow ? "TOMORROW" : "TODAY"}:`, cfg.value, "diff", diff);
			scheduledRestart = setTimeout(() => {
				Logger.system.log("Scheduling restart");
				this.dialogManager.onReady(() => {
					Logger.system.log("Scheduling restart: after onReady");
					this.dialogManager.open("yesNo",
						{
							monitor: "primary",
							title: "Automatic Restart",
							question: "The application will restart in one minute. Your workspace will be saved.",
							showTimer: true,
							timerDuration: SCHEDULED_RESTART_TIMEOUT,
							showNegativeButton: false,
							affirmativeResponseLabel: "Restart Now"
						}, async (err, response) => {
							if (response.choice === "cancel") {
								//This code will set the scheduled restart to what it's currently set in.
								//When the scheduled restart is set to a time that's in the past, the application will schedule the restart for the next day.
								ConfigClient.getValue({ field: "finsemble.scheduledRestart" }, (err, val) => {
									ConfigClient.setPreference({ field: "finsemble.scheduledRestart", value: val });
								});
							} else {
								await WorkspaceClient.save();
								//If we get here, they clicked "Restart Now", so we obey the user.
								this.shutdownManager.restart(err, response);
							}
						});
				});
			}, diff);
		}

		// See if the user has set a pref for a scheduled restart. Or the dev. The dev could set it too.
		ConfigClient.getValue({ field: "finsemble.scheduledRestart" }, (err, config) => {
			//Allow the timeout for the restart dialog to be driven by config. See checkForScheduledRestart comments for format.

			//If the dialogTimeout property exists and is a number, override our default.
			if (config && !isNaN(config.dialogTimeout)) {
				SCHEDULED_RESTART_TIMEOUT = config.dialogTimeout;
			}

			Logger.system.log("scheduledRestart initial config", config);

			//create an object for the 2nd arg so that the scheduleRestart function doesn't have to change.
			scheduleRestart(err, { value: config });
		});

		//If the user changes it via the preferences API, we catch the change here, log it out, and schedule the restart.
		ConfigClient.addListener({ field: "finsemble.scheduledRestart" }, (err, config) => {
			Logger.system.log("scheduledRestart new config", config);
			if (config.value) {
				Logger.system.log("APPLICATION LIFECYCLE:SCHEDULED RESTART TIME CHANGED. NEW TIME:", config.value);
			} else {
				Logger.system.log("APPLICATION LIFECYCLE:SCHEDULED RESTART DISABLED.");
			}

			scheduleRestart(err, config);
		});
	};
}
