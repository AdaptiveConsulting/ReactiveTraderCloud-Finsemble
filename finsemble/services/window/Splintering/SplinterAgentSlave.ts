var manifest;

/**
 * This file receives SpawnRequests from a master `SplinterAgent`.
 */
import RouterClient from "../../../clients/routerClientInstance";
import Logger from "../../../clients/logger";

Logger.start();
Logger.system.debug("SpltinerAgentSlave loaded.");
import { System } from "../../../common/system";

function onSetTitle(err, message) {
	document.title = message.data.title;
}
function onRouterReady() {
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

/**
 * Spawns a new window by interfacing with the underlying container (OpenFin or Electron).
 *
 * @param err
 * @param message Object containing the windowDescriptor in its data property.
 * @param manifestToUse Leave undefined in OpenFin environments (i.e, when splintering
 * is turned on). When splintering is short-circuited (i.e in Electron), you must pass in the correct manifest.
 */
export function onSpawnRequest(err, message: { data: { windowDescriptor: any } }, manifestToUse = manifest) {
	Logger.system.debug("SplinterAgentSlave.onSpawnRequest.", message.data.windowDescriptor);
	let descriptor = message.data.windowDescriptor;

	if (!descriptor) {
		Logger.system.error("SplinterAgentSlave.onSpawnRequest ERROR: No windowDescriptor", message);
		return;
	}
	if (descriptor.customData) {
		manifestToUse.finsemble.FinsembleUUID = descriptor.customData.manifest.finsemble.FinsembleUUID; // copy FinsembleUUID from incoming descriptor to manifest
		descriptor.customData.manifest = manifestToUse;
	} else {
		descriptor.customData = { manifest: manifestToUse };
	}
	new System.Window(descriptor, function () {
		Logger.system.debug(`SplinterAgentSlave.onSpawnRequest: Window successfully spawned. WindowName: ${descriptor.name}`, descriptor);
	}, function (err) {
		Logger.system.error("SplinterAgentSlave.onSpawnRequest ERROR", err);
	});
}

const thisApp = System.Application.getCurrent();
const finWindow = System.Window.getCurrent();

/*
	This file is imported into windowService createSplinterAndInject. Without this shielding, we get spurious onspawned transmits from onRouterReady.
	Those cause errors to show up in the Central Logger from the listener in the SplinterAgentPool.
	We should only transmit anything here in the actual SplinteragentSlave window.
*/
if (finWindow.name === thisApp.window.name) RouterClient.onReady(onRouterReady);
