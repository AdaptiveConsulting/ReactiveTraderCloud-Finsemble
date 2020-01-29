import RouterClient from "../../../clients/routerClientInstance";
import Logger from "../../../clients/logger";
import { Launcher } from "../Launcher/launcher"

export class WindowCreateEntry {
	finsembleConfig: any;
	manifest: any;
	launcher: Launcher;
	moduleReady: boolean = false;

	constructor(manifest, launcher) {
		this.manifest = manifest;
		this.launcher = launcher;
		this.finsembleConfig = manifest.finsemble;
		this.bindAllFunctions();
		this.definePubicInterface_Window();
	}

	initialize(done) {
		done();
	}

	setReady() {
		this.moduleReady = true;
	}

	windowServiceChannelName(channelTopic) { return `WindowService-Request-${channelTopic}`; }

	bindAllFunctions() {
		let self = this;
		for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(self))) {
			if (self[name] instanceof Function) {
				self[name] = self[name].bind(self); // only bind function properties
			}
		}
	}

	// invoked by serviceEntryPoint shutdown
	shutdown(done) {
		done();
	}

	definePubicInterface_Window() {
		// entry points for public window functions

		// NOTE: createWindow is now internal to launcher (i.e. spawn invokes createWindow directly)
		// NOTE: after more window-service cleanup this file will likely be rolled into another, but for now keeping as is to reduce confusion as we evolve

		RouterClient.addResponder(this.windowServiceChannelName("getWindowIdentifier"), this.getWindowIdentifier);
		RouterClient.addResponder(this.windowServiceChannelName("injectTitleBar"), this.injectTitleBar);
	}

	// probably only a temporary routine -- currently supports public wrapper
	async getWindowIdentifier(queryError, queryMessage) {
		this.moduleReady || Logger.system.error("windowService window creation invoked before ready", queryMessage);
		Logger.system.debug(`WindowService-Request-getWindowIdentifier for ${queryMessage.data.windowName}`, queryMessage.data);
		this.launcher.createSplinterAndInject.getWindowIdentifier(queryMessage.data, (err, data) => {
			queryMessage.sendQueryResponse(err, data);
		});
	}

	// may replace with preload
	async injectTitleBar(queryError, queryMessage) {
		this.moduleReady || Logger.system.error("windowService window creation invoked before ready", queryMessage);
		Logger.system.debug(`"WindowService-Request-injectTitleBar for ${queryMessage.data.config.name}`, queryMessage.data);
		this.launcher.createSplinterAndInject.injectTitleBar(queryMessage.data, (err, data) => {
			queryMessage.sendQueryResponse(err, data);
		});
	}

}
