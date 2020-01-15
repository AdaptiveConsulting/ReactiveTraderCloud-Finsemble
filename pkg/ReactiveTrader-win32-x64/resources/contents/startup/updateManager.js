/**
 * This file handles the update for new electron packages.
 * https://electronjs.org/docs/api/auto-updater
 */
const { autoUpdater, dialog } = require('electron');
const logger = require('../../src/logger')();
// How often to look for updates
const CHECK_UPDATE_FREQUENCY = 60000;

class UpdateManager {
	/**
	 * @param {*} feedURL - The server url to look for updates
	 * @param {*} updateTimeout  - How often to look for updates
	 */
	constructor() {
		this.feedURL = null;
		this.updateTimeout = CHECK_UPDATE_FREQUENCY;

		// This function is set by the MainSystem, it accepts a function from auto updater and invokes it to apply the updates, close all the applications, and restart the application.
		this.restartAndInstallUpdates = null;
		this._startUpdater = this._startUpdater.bind(this);
	}

	/**
	 * Set the update URL
	 * @param {*} feedUrl - The server URL to look for updates
	 */
	setFeedUrl(feedUrl) {
		this.feedURL = feedUrl;
	}

	/**
	 * Set how often we should check for updates
	 * @param {*} timeInMs - The frequency we check for updates in milliseconds
	 */
	setUpdateFrequency(timeInMs) {
		this.updateTimeout = timeInMs;
	}

	/**
	 * Set the function to restart the application with the updates
	 * @param {*} restartAndInstallUpdates The function (set by MainSystem.js) to apply the updates and restart the application.
	 */
	setOnRestartAndUpdateRequested(restartAndInstallUpdates) {
        if (typeof restartAndInstallUpdates === 'function') {
            this.restartAndInstallUpdates = restartAndInstallUpdates;
        } else {
            logger.error(`setOnRestartAndUpdateRequested only accepts a function, but is passed in a ${typeof restartAndInstallUpdates}`);
        }
    }

	/**
	 * Restart the application to apply the upates.
	 * @param {*} quitAndInstall The function from (auto updater)[https://github.com/electron/electron/blob/54ef9068327d7ac34af06ec133b4cb4ea7edbc8f/lib/browser/api/auto-updater/auto-updater-win.js]
	 * to restart the app and install the update after it has been downloaded. 
	 */
    requestRestart(quitAndInstall) {
        if (this.restartAndInstallUpdates) {
            this.restartAndInstallUpdates(quitAndInstall);
        } else {
            logger.error('restartAndInstallUpdates function is not set for the UpdateManager');
        }
	}
	
	/**
	 * Check for updates according to the frequency we set on the UpdateManager
	 */
	_startUpdater() {
		this.updateChecker = setTimeout(() => {
			logger.info('Checking for updates');
			autoUpdater.checkForUpdates();
		}, this.updateTimeout);
	}

	/**
	 * Sets up all of the update listeners
	 */
	listenForNewUpdates() {
		if (!this.feedURL) {
			logger.error("FeedURL is not set for the auto updater. Cannot set up listener to listen for updates");
			return;
		}
		autoUpdater.setFeedURL(this.feedURL);
		logger.debug("update url:", this.feedURL);
		autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
			logger.info('update-downloaded');
			// A prompt to notify the user that there is an updated version and ask whether they want to restart now. 
			// If they say yes, the application will shut down and restart with the updated version.
			const dialogOpts = {
				type: 'info',
				buttons: ['Yes', 'No'],
				title: 'Application Update',
				message: process.platform === 'win32' ? releaseNotes : releaseName,
				detail: 'A new version has been downloaded. Do you want to restart the application now to apply the updates?'
			};

			dialog.showMessageBox(dialogOpts, (response) => {
				if (response === 0) {
					try {
						// Do not directly pass autoUpdater.quitAndInstall into this function, the arrow function will give it the correct scope.
						this.requestRestart(() => {autoUpdater.quitAndInstall()});
					} catch (e) {
						dialog.showErrorBox('Error', 'Failed to relaunch application.', e.message);
					}
				}
			});
		});
		autoUpdater.on('update-available', (event) => {
			logger.info('Update available. The update will be downloaded automatically in the background.');
		});
		autoUpdater.on('before-quit-for-update', (event) => {
			logger.debug('before-quit-for-update');
		});
		autoUpdater.on('checking-for-update', (event) => {
			logger.info('Checking for update');
			clearTimeout(this.updateChecker);
		});
		autoUpdater.on('update-not-available', (event) => {
			logger.info('Update not available');
			this._startUpdater();
		});
		autoUpdater.on('error', (message) => {
			logger.error(`There was a problem updating the application ${message}`);
		});
		autoUpdater.checkForUpdates();
	}
}


module.exports = new UpdateManager();
