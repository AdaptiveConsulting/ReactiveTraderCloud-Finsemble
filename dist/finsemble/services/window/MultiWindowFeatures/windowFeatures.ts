
// placeholder file showing the interfaces hooks for implementing features

import {
	Interface_Window,
	FeatureParams,
} from "../ServiceEntryPoints/Interface_Window";

function stub() {
	return new Promise((resolve) => {
		let result = { err: null, data: null };
		resolve(result)
	});
}
class WindowFeatures implements Interface_Window.WindowFeatures {
	constructor() {
	}
	closeWindows(params: FeatureParams) { return stub(); }
	autoArrange(params: FeatureParams) { return stub(); }
	bringToFrontWindows(params: FeatureParams) { return stub(); }
	minimizeWindows(params: FeatureParams) { return stub(); }
	hyperFocusWindows(params: FeatureParams) { return stub(); }
}