
const asyncEach = require("async/each");
const asyncTimeout = require("async/Timeout");
const RouterClient = require("../../clients/routerClientInstance");
const Logger = require("../../clients/logger");
class WrapManagerSingleton {
	wraps: object;

	constructor() {
		this.wraps = {};
	}

	add(params: { windowIdentifier: WindowIdentifier, windowDescriptor: object }, cb) {
		let { windowIdentifier, windowDescriptor } = params;
		this.wraps[windowIdentifier.windowName] = {
			identifier: windowIdentifier,
			descriptor: windowDescriptor,
			owners: []
		};
		Logger.system.log("WRAP. adding window", windowIdentifier.windowName);
		RouterClient.publish("Finsemble." + windowIdentifier.windowName + ".wrapReady", { name: windowIdentifier.windowName, state: "open" });
	}

	get(params: { windowName: string, requester: string }, cb: Function = Function.prototype) {
		let { windowName, requester } = params;
		let wrap = this.wraps[windowName];
		let err = null;
		Logger.system.log("WRAP. wrap requested from", requester, "for", windowName);
		if (wrap) {
			if (!wrap.owners.includes(requester)) wrap.owners.push(requester);
		} else {
			err = `No wrap found for ${windowName}`;
		}
		cb(err, wrap);
		return Promise.resolve({ err, data: wrap });
	}

	remove(params: { identifier: WindowIdentifier }, cb) {
		let { identifier } = params;
		let wrap = this.wraps[identifier.windowName];
		let requestCleanup = (owner, done) => {
			Logger.system.debug("WRAP. requesting cleanup from", owner, "for", identifier.windowName);
			//shortcut. when a window closes we should remove it from any list where it's an owner.
			//can ignore all that aren' tservices once this work.
			RouterClient.publish("Finsemble." + identifier.windowName + ".wrapReady", { name: identifier.windowName, state: "closed" });

			return RouterClient.query(`${owner}.removeWrap.${identifier.windowName}`, { identifier }, () => {
				Logger.system.debug("WRAP. cleanup confirmed from", owner, "for", identifier.windowName);
				done();
			});
		};
		if (wrap) {
			//timeout exists in case one of the owners closes before the request to cleanup makes it to them. in the future, we should probably only care about services. But this is quick and dirty and it works.
			requestCleanup = asyncTimeout(requestCleanup, 500);
			asyncEach(wrap.owners, requestCleanup, cb);
		} else {
			cb(`No wrap found for ${identifier.windowName}`, null);
		}
	}
}

export let WrapManager: WrapManagerSingleton = new WrapManagerSingleton();