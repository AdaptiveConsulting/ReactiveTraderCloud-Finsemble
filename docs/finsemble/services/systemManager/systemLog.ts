
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ***NOTE***: This file contains a temporary and rough syslog solution until a real/polished version is written
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { System } from "../../common/system";
import Logger from "../../clients/logger";
import { SHOW_SYSLOG_CHANNEL } from "./_constants"

interface LogParams {
	leadingBlankLine?: boolean;
	indent?: boolean;
	doubleIndent?: boolean;
}

/**
 * System log, manages syslog window and control output to it
 */
export class SystemLog {
	onErrorMakeSystemManagerVisible: boolean = true; // will be set from config, but make true in case initial config can't be read

	/**
	 * Initializes system log and window
	 * @param onErrorMakeSystemManagerVisible if true then will make syslog visible on error
	 */
	public initialize(onErrorMakeSystemManagerVisible: boolean) {
		// delay time in milliseconds before bringing logger window to front
		const BRING_LOG_TO_FRONT_DELAY = 15000;
		// delay time in milliseconds to wait before using router (to avoid warnings)
		const WAIT_FOR_ROUTER = 2000;

		this.onErrorMakeSystemManagerVisible = onErrorMakeSystemManagerVisible;

		let mainWindow = System.Window.getCurrent();

		// Not required but timer gives time for Router to come up so no warnings (router will work either way).
		setTimeout(() => {
			let RouterClient = require("../../clients/RouterClientInstance").default;
			RouterClient.addListener(SHOW_SYSLOG_CHANNEL, () => {
				this.showSystemLog();
			});

		}, WAIT_FOR_ROUTER);

		// Not required but timer gives time for most of workspace to come up then bring system log to front (if it is configured to be visible)
		setTimeout(() => {
			mainWindow.bringToFront();
		}, BRING_LOG_TO_FRONT_DELAY);

		// if system log is closed by user, hide the window (closing it by default will kill this process)
		mainWindow.addEventListener("close-requested", () => {
			this.hideSystemLog();
		});
	}

	public log(params: LogParams, message: string, other = "") {
		Logger.system.debug("SystemLog.log", params, message, other);
		let indent = "";
		console.log("SYSTEM LOG", message, other);

		var logger = document.getElementById('log');

		if (params.leadingBlankLine) {
			logger.innerHTML += '<br />';
		}
		if (params.indent) {
			indent = ' &nbsp &nbsp &nbsp &nbsp';
		} else if (params.doubleIndent) {
			indent = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';
		}

		logger.innerHTML += "<span style='color: black;'>" + indent + message + '<br />' + '</span>';
		if (other != "") {
			logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(other) : other) + '<br />';
		}
	}

	public warn(params: LogParams, message: string, other?) {
		Logger.system.debug("SystemLog.warn", params, message, other);
		let indent = "";
		if (this.onErrorMakeSystemManagerVisible) {
			this.showSystemLog();
		}

		other = other || "";
		console.error("SYSTEM LOG ERROR", message, other);

		var logger = document.getElementById('log');

		if (params.leadingBlankLine) {
			logger.innerHTML += '<br />';
		}
		if (params.indent) {
			indent = ' &nbsp &nbsp &nbsp &nbsp';
		} else if (params.doubleIndent) {
			indent = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';
		}

		logger.innerHTML += "<span style='color: CHOCOLATE;'>" + indent + message + '<br />' + '</span>';
		if (other != "") {
			logger.innerHTML += "<span style='color: CHOCOLATE;'>" + indent + (JSON && JSON.stringify ? JSON.stringify(other) : other) + '<br />' + '</span>';
		}
	}

	public error(params: LogParams, message: string, other?) {
		Logger.system.debug("SystemLog.error", params, message, other);
		let indent = "";
		if (this.onErrorMakeSystemManagerVisible) {
			this.showSystemLog();
		}

		other = other || "";
		console.error("SYSTEM LOG ERROR", message, other);

		var logger = document.getElementById('log');

		if (params.leadingBlankLine) {
			logger.innerHTML += '<br />';
		}
		if (params.indent) {
			indent = ' &nbsp &nbsp &nbsp &nbsp';
		} else if (params.doubleIndent) {
			indent = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';
		}

		logger.innerHTML += "<span style='color: red;'>" + indent + message + '<br />' + '</span>';
		if (other != "") {
			logger.innerHTML += "<span style='color: red;'>" + indent + (JSON && JSON.stringify ? JSON.stringify(other) : other) + '<br />' + '</span>';
		}
	}

	public notification(params: LogParams, message: string, other?) {
		Logger.system.debug("SystemLog.notification", params, message, other);
		let indent = "";

		other = other || "";
		console.error("SYSTEM LOG NOTIFICATION", message, other);

		var logger = document.getElementById('notification');

		if (params.leadingBlankLine) {
			logger.innerHTML += '<br />';
		}
		if (params.indent) {
			indent = ' &nbsp &nbsp &nbsp &nbsp';
		} else if (params.doubleIndent) {
			indent = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';
		}

		logger.innerHTML += "<span style='color: blue;'>" + indent + message + '<br />' + '</span>';
		if (other != "") {
			logger.innerHTML += "<span style='color: blue;'>" + indent + (JSON && JSON.stringify ? JSON.stringify(other) : other) + '<br />' + '</span>';
		}
	}

	public showSystemLog() {
		let finWindow = System.Window.getCurrent();
		finWindow.show();
		finWindow.bringToFront();
	};

	public hideSystemLog() {
		let finWindow = System.Window.getCurrent();
		finWindow.hide();
	};

};

let systemLog = new SystemLog();

export default systemLog;
