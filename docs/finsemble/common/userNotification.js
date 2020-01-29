/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/

import Logger from "../clients/logger";

import { ConfigUtilInstance as ConfigUtil } from "./configUtil";
import { System } from "../common/system";
import SystemManagerClient from "./systemManagerClient";

var ConfigClient = null;

"use strict";

/**
 * @introduction
 * <h2>Notification Client (Finsemble Workspaces)</h2>
 *
 * Finsemble makes use of pop up (toast) notifications for communicating information to the end user in a gentler way than modal dialogs.
 * Use the Notification API to route messages so that your components can create these notifications.
 *
 *
 * Notifications are called from `FSBL.UserNotification.alert`.
 *
 *
 * See the [Notifications tutorial](tutorial-Notifications.html) for an overview.
 *
 * @hideconstructor
 * @constructor
 */
var UserNotification = function () {
	var alertOnceSinceStartUp = {};
	var alertCurrentCount = {};
	var defaultTemplateURL = null;

	/**
	 * Gets the default template URL from the manifest at finsemble->notificationURL. If that doesn't exist then it falls back to the system template location.
	 * @private
	 */
	this.getDefaultTemplateURL = function (cb) {
		if (defaultTemplateURL) {
			setTimeout(function () { // Ensure async, just like else clause
				cb(defaultTemplateURL);
			}, 0);
		} else {
			// Require configClient here instead of at top of page to avoid a dependency error (Router uses UserNotification before config service is ready).
			if (!ConfigClient) ConfigClient = require("../clients/configClient").default;
			ConfigClient.get({ field: "finsemble" }, function (err, finConfig) {
				defaultTemplateURL = ConfigUtil.getDefault(finConfig, "finsemble.notificationURL", finConfig.moduleRoot + "/components/system/notification/notification.html");
				cb(defaultTemplateURL);
			});
		}
	};


	/**
	 * Conditionally alerts the end user using a desktop notification.
	 *
	 * @param {string} topic Specifies a category for the notification. This parameter is reserved for future use; it is designed to filter notifications (e.g., applying regEx's defined in config to determine which notifications are displayed). Any topic string can be specified; however "system" is the recommended topic for system notifications applicable both to end uses and to developers. "dev" is the recommended topic for notifications applicable only during development (e.g., a notification that <i>config.json</i> has an illegal value).
	 * @param {string} frequency Either "ALWAYS", "ONCE-SINCE-STARTUP", or "MAX-COUNT" to determine if alert should be displayed. Note, the frequencies are based on the number of notifications emitted from a window (as opposed to system wide).
	 * @param {string} identifier Uniquely identifies this specific notification message. Used when "frequency" is set to "ONCE-SINCE-STARTUP" or "MAX-COUNT".
	 * @param {any} message Message to display in the notification. Typically a string. Finsemble's built in templating accepts and object. See <i>../src-built-in/components/notification/notification.html<i>.
	 * @param {object=} params
	 * @param {number} params.maxCount Specifies the max number of notifications to display for specified identifier when frequency="MAX-COUNT" (default is 1).
	 * @param {number} params.duration Time in milliseconds before auto-dismissing the notification (defaults to 24 hours).
	 * @param {number} params.url The URL for for notification HTML. If not provided then the system default will be used. Defaults to Finsemble's built-in version at <i>"../components/system/notification/notification.html"</i>.
	 *
	 * @example
	 * FSBL.UserNotification.alert("system", "ONCE-SINCE-STARTUP", "MANIFEST-Error", message);
	 * FSBL.UserNotification.alert("dev", "ALWAYS", "Config-Error", message, { url: notificationURL, duration: 1000 * 5 });
	 * FSBL.UserNotification.alert("dev", "MAX-COUNT", "Transport-Failure", message, { url: notificationURL, maxCount: 2 });
	*/

	this.alert = function (topic, frequency, identifier, message, params) {
		var self = this;
		// If the url for the template is passed in then don't bother fetching the config
		if (params && params.url) {
			this.alertInternal(topic, frequency, identifier, message, params, params.url);
		} else {
			// If no url, then we need to get the template from config
			this.getDefaultTemplateURL(function (url) {
				self.alertInternal(topic, frequency, identifier, message, params, url);
			});
		}
	};

	/**
	 * @private
	 */
	this.alertInternal = function (topic, frequency, identifier, message, params, url) {
		params = params || {};
		var alertUser = false;
		var key = "UserNotification.alert." + identifier;
		var duration = params.duration || 1000 * 60 * 60 * 24;

		switch (frequency) {
			case "ONCE-SINCE-STARTUP":
				if (key in alertOnceSinceStartUp) {
					alertUser = false;
				} else { // if no key then must be first time
					alertUser = true;
					alertOnceSinceStartUp[key] = true;
				}
				break;
			case "MAX-COUNT":
				let currentCount = 0;
				let maxCount = params.maxCount || 1;
				if (key in alertCurrentCount) {
					currentCount = alertCurrentCount[key];
				}
				alertCurrentCount[key] = ++currentCount; // increment and store
				if (currentCount <= maxCount) {
					alertUser = true;
				}
				break;
			default: // default to "ALWAYS"
				alertUser = true;
		}

		Logger.log("UserNotification.alert", topic, alertUser, frequency, identifier, message, params);
		if (alertUser) {
			var notifyObject = {
				url: url,
				message: message,
				timeout: duration
			};
			SystemManagerClient.systemLog({ notification: true }, "Notification: " + message);
			new System.Notification(notifyObject);
		}
	};
};

export default new UserNotification();