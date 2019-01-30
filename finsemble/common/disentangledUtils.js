import { v1 as uuidv1 } from "uuid";
//Class without deep openfin/system dependencies.
export function guuid() {
	return uuidv1(); // return global uuid
}

export function clone(obj) {
	//This has been tested a good amount. Previous to this commit we were using a mix of deepmerge and JSON.parse(JSON.stringify()).
	//Trying lodash.deepclone made my tests take 2-3s.
	//JSON.parse everywhere made them take ~ 1s.
	//Using JSON.parse on arrays and deep merge on objects makes them take 7-900ms.
	if (Array.isArray(obj)) {
		return obj.slice();
	}
	try {
		return JSON.parse(JSON.stringify(obj));
	} catch (e) {
		Logger.system.error("clone error", e);
		return e;
	}
};


class MockLogger {
	constructor({ debug } = { debug: true }) {
		if (debug) {
			this.system = console;
			this.system.debug = console.log;
		} else {
			//Suppress everything but errors for tests
			this.system = {
				warn: Function.prototype,
				debug: Function.prototype,
				log: Function.prototype,
				info: Function.prototype,
				error: console.error
			};
		}

	}
	isLogMessage() { return true; };

	start() { }
};

export const mockLogger = new MockLogger();
