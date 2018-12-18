var thisApp, manifest, finWindow;
/**
 * This file receives SpawnRequests from a master `SplinterAgent`.
 */
import * as RouterClient from "../../../clients/routerClientInstance";
RouterClient.onReady(onRouterReady);
import * as Logger from "../../../clients/logger";
Logger.start();
Logger.system.debug("SpltinerAgentSlave loaded.");
const System = require("../../../common/system");

function onSetTitle(err, message) {
	document.title = message.data.title;
}
function onRouterReady() {

	thisApp = System.Application.getCurrent();
	finWindow = System.Window.getCurrent();
	//Listen for close, unregister from the logger.
	finWindow.addEventListener("close-requested", () => {
		Logger.unregisterClient({ deleteFromPersistence: true });
		finWindow.close(true);
	});
	Logger.system.debug("SpltinerAgentSlave ready.");
	RouterClient.addListener(`${thisApp.uuid}.spawn`, onSpawnRequest);
	RouterClient.addListener(`${thisApp.uuid}.setTitle`, onSetTitle);
	finWindow.getOptions((opts) => {
		manifest = opts.customData.manifest;
		RouterClient.transmit(`${thisApp.window.name}.onSpawned`, {});
	});
	setInterval(function () {
		RouterClient.transmit("Finsemble.heartbeat", { type: "agent", windowName: System.Window.getCurrent().name });
	}, 5000);
}

function onSpawnRequest(err, message) {
	Logger.system.debug("SplinterAgentSlave.onSpawnRequest.", message.data.windowDescriptor);
	let descriptor = message.data.windowDescriptor;

	if (!descriptor) {
		Logger.system.error("SplinterAgentSlave.onSpawnRequest ERROR: No windowDescriptor", message);
		return;
	}
	if (descriptor.customData) {
		manifest.finsemble.FinsembleUUID = descriptor.customData.manifest.finsemble.FinsembleUUID; // copy FinsembleUUID from incoming descriptor to manifest
		descriptor.customData.manifest = manifest;
	} else {
		descriptor.customData = { manifest };
	}
	new System.Window(descriptor, function () {
		Logger.system.debug(`SplinterAgentSlave.onSpawnRequest: Window successfully spawned. WindowName: ${descriptor.name}`, descriptor);
	}, function (err) {
		Logger.system.error("SplinterAgentSlave.onSpawnRequest ERROR", err);
	});
}