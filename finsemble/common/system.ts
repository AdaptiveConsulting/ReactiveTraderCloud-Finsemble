// passthrough to openfin. In the future we can make this the passthrough to any container.

class SystemWindow {
	constructor(params, cb) {
		return new fin.desktop.Window(params, cb);
	}

	static get getCurrent() {
		return fin.desktop.Window.getCurrent;
	}

	static get wrap() {
		return fin.desktop.Window.wrap;
	}

}

class Application {
	constructor(params, cb) {
		return new fin.desktop.Application(params, cb);
	}

	static get getCurrent() {
		return fin.desktop.Application.getCurrent;
	}

	static get wrap() {
		return fin.desktop.Application.wrap;
	}
}

class SystemNotification {
	constructor(params) {
		new fin.desktop.Notification(params);
	}
}

class System {
	static get Application() {
		return Application;
	}
	static get Window() {
		return SystemWindow;
	}
	static get Notification() {
		return SystemNotification;
	}

	static getMousePosition(cb) {
		fin.desktop.System.getMousePosition((mousePosition) => {
			if (mousePosition.left || mousePosition.left === 0) mousePosition.x = mousePosition.left;
			if (mousePosition.top || mousePosition.top === 0) mousePosition.y = mousePosition.top;
			cb(null, mousePosition);
		}, (err) => { cb(err, null); });
	}

	static getMonitorInfo(cb) {
		fin.desktop.System.getMonitorInfo((info) => {
			cb(info);
		});
	}

	// static get makes this behave like a static variable. so calling system.ready is eqivalent to fin.desktop.main.
	static get ready() {
		return fin.desktop.main;
	}

	static get getHostSpecs() {
		return fin.desktop.System.getHostSpecs;
	}

	static get launchExternalProcess() {
		return fin.desktop.System.launchExternalProcess;
	}

	static get terminateExternalProcess() {
		return fin.desktop.System.terminateExternalProcess;
	}

	static get getAllApplications() {
		return fin.desktop.System.getAllApplications;
	}

	static get exit() {
		return fin.desktop.System.exit;
	}

	static get clearCache() {
		return fin.desktop.System.clearCache;
	}

	static get showDeveloperTools() {
		return fin.desktop.System.showDeveloperTools;
	}

	static get getRuntimeInfo() {
		return fin.desktop.System.getRuntimeInfo || chrome.desktop.getDetails;
	}

	static get addEventListener() {
		/* events we use so far in Finsemble: monitor-info-changed, session-changed */
		return fin.desktop.System.addEventListener;
	}

	static get getVersion() {
		return fin.desktop.System.getVersion;
	}

	static get openUrlWithBrowser() {
		return fin.desktop.System.openUrlWithBrowser;
	}

	static get getAllWindows() {
		return fin.desktop.System.getAllWindows;
	}

	static FinsembleReady(cb) {
		if (FSBL && FSBL.addEventListener) {
			return FSBL.addEventListener("onready", cb);
		}
		return window.addEventListener("FSBLready", cb);
	}

	// This is not overriding or pointing to Openfin. This is the pattern used to close applications.
	static closeApplication(app, cb = Function.prototype) {
		const promiseResolver = (resolve) => {
			let t;
			let timeoutCleared = false;

			// Need to terminate after closing because otherwise applications sit around in OpenFin with isRunning: false.
			let terminateAndResolve = () => {
				if (timeoutCleared) return;
				timeoutCleared = true;
				console.log("terminating ", app.uuid);
				clearTimeout(t);
				app.terminate(() => {
					cb();
					resolve();
				}, () => {
					app.terminate();
				});
			}

			// Sometimes app.close() never calls back (only happens with logger). So after 2 seconds terminate.
			t = setTimeout(terminateAndResolve, 2000);

			console.log("closing ", app.uuid);
			// Try to close normally
			app.close(false, terminateAndResolve, () => {
				if (timeoutCleared) return;
				clearTimeout(t);
				// If closing fails, force close
				console.log("force closing ", app.uuid);
				app.close(true, terminateAndResolve, terminateAndResolve);
			});
		}
		return new Promise(promiseResolver);
	}

}


module.exports = System;
