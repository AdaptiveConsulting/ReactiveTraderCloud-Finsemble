import { clone, checkIfBoundsAreEqual } from '../../../common/disentangledUtils';
import { isEqual as deepEqual } from "lodash";
import { adjustBoundsToBeOnMonitor } from "../../../common/util";
import Logger from "../../../clients/logger";
Logger.start();


/**
 * Monitors from the OS do not know about claimed space. Here, we add the unclaimedRect to the monitor.
 */
export function addUnclaimedRectToRawMonitor(newMonitors) {
	let adjustedMonitors = [];
	for (let i = 0; i < newMonitors.length; i++) {
		let newMonitor = newMonitors[i];
		newMonitor.unclaimedRect = clone(newMonitor.availableRect, Logger.system.error);
		adjustedMonitors.push(newMonitor);
	}
	return adjustedMonitors;
}

/**
 * 1. Ask the system where the window is.
 * 2. Make sure that position is on a monitor.
 * 3. If the window has moved, return an object describing the new position for the window. Otherwise return null
 * @param params - Object containing a dockable window and a moveable Group for that window if it exists
 */
export function deriveWindowPosition(params) {
	const { win, movableGroup } = params;
	let retryCount = 0;
	const retryLimit = 3;
	const derivePositionFromBounds = (result) => {
		let derivedPosition;
		let bounds = result.data;
		let oldBounds = win.getBounds();
		//Make sure the new bounds are on a monitor. The OS will normally move a window on monitor, but there are a few cases such as RDP where that doesn't always happen
		let adjustedBounds = adjustBoundsToBeOnMonitor(bounds);

		//if the old position is the same as the new position, the window didn't move, no need to update.
		// Docked windows are an exception as we need to verify they are an an edge to a monitor and are claiming space properly
		if (checkIfBoundsAreEqual(oldBounds, adjustedBounds) && !win.isDocked) return null;

		Logger.system.verbose(`Monitors-changed: window ${win.name} old and new bounds don't match, will update bounds. New bounds: ${JSON.stringify(adjustedBounds)}, old bounds: ${JSON.stringify(oldBounds)}`);

		// If the window is dockable then the width and height should not change.
		// Currently only applies to the toolbar
		if (win.isDockableComponent) {
			derivedPosition = {
				name: win.name,
				isDockable: win.isDockableComponent,
				isDocked: win.isDocked,
				bounds: {
					left: adjustedBounds.left,
					top: adjustedBounds.top,
					height: win.height,
					bottom: adjustedBounds.top + win.height,
					width: win.width
				},
				groupName: null
			}
			Logger.system.verbose(`Monitors-changed: Setting bounds for dockable window, these bounds will get overwritten if the window is docked: ${win.name} Bounds: ${JSON.stringify(derivedPosition.bounds)}`);
		} else {
			// Create a move object with information for each non-dockable window containing: updated bounds from the system, group membership and docking status
			// This object will be used later to move the window
			derivedPosition = {
				name: win.name,
				bounds: { ...adjustedBounds },
				groupName: movableGroup ? movableGroup.name : null,
				isDockable: false,
				isDocked: win.isDocked
			}
			if (derivedPosition.groupName) {
				Logger.system.verbose(`Monitors-changed: group move storing bounds for ${win.name} in group ${movableGroup.name}. ${derivedPosition}`);
			}
		}	
		return derivedPosition;
	};

	// Try to get valid bounds a few times. If valid bounds can't be returned, don't move this window.
	// Native windows will return an error if the bounds are requested when hidden or minimized. No hidden or minimized windows should make it to
	// this point; however, if they do we don't want to move any hidden windows.
	const getBoundsAndRetry = (resolve, reject) => {		
		if (retryCount >= retryLimit) {
			Logger.system.error(`Monitors-changed Failed to get valid bounds for ${win.name} after trying ${retryLimit} times. Window will not be moved`);
			return resolve(null)
		}
		win.win._getBoundsFromSystem()
			.then((response) => {
				if (response.err) {
					retryCount++;
					setTimeout(() => {
						getBoundsAndRetry(resolve, reject);
					}, retryCount * 100);
				} else {
					return resolve(derivePositionFromBounds(response))
				}
			})

	}
	return new Promise((resolve, reject) => {
		getBoundsAndRetry(resolve, reject);
	})
}
/**
 * Given a list of moves, will return an object for groups, and an array for non group moves.
 * These are split out because groups are handled differently, and we want docked windows to
 * be moved last (to prevent claimed space conflicts).
 * @param moveList
 */
export function splitWindowMoves(moveList) {
	const groupMoves = {};
	const nonGroupMoves = [];
	moveList
		// remove any null moves (e.g., windows whose position is unchanged).
		.filter(a => a)
		.forEach(boundsObject => {
			// Docked windows are handled elsewhere
			if (boundsObject.isDocked) { return; }
			const { groupName } = boundsObject;
			if (groupName) {
				// if there are no moves cached for this group, make it an empty array
				if (!groupMoves[groupName]) groupMoves[groupName] = [];
				groupMoves[groupName].push(boundsObject);
			} else {
				nonGroupMoves.push(boundsObject);
			}
		});
	return { groupMoves, nonGroupMoves };
}
