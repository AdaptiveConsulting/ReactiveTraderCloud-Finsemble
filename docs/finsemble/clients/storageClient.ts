/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/

import Validate from "../common/validate";

import Logger from "./logger";

import { _BaseClient } from "./baseClient";

/**
 *
 * @introduction
 * <h2>Storage Client</h2>
 * The Storage client handles saving and retrieving data for your application.
 * @hideconstructor
 *  @todo add clear method
 * @constructor
 */
class StorageClient extends _BaseClient {
	/**
	 * Define the username for storage (i.e., each user has unique storage)
	 * @param {Object} params - Params object
	 * @param {String} params.user -  user name
	 * @param {function} cb -  callback to be called on success
	 *
	 * @example
	 * StorageClient.setUser({ user: "JohnDeere"});
	 */
	setUser(params: { user: string }, cb?: StandardCallback) {
		Validate.args(params.user, "string", cb, "function=");
		this.routerClient.query("Storage.setUser", { user: params.user }, function (err, response) {
			const logMethod = err ? Logger.system.error : Logger.system.info;
			logMethod("APPLICATION LIFECYCLE:StorageClient.setUser", params, err, response);
			if (cb) {
				cb(err, response.data);
			}
		});
	};

	/**
	 * Specifies the datastore.  For normal operation this function doesn't have to be invoked -- the default datastore is set in configuration.
	 * @param {Object} params - Params object
	 * @param {String} params.topic -  if specificed then data store is set only for topic
	 * @param {string} params.dataStore -  identifies the data store (e.g. "localStorage", "redis")
	 * @param {function} cb -  callback to be called on success
	 *
	 * @example
	 * StorageClient.setStore({topic:"finsemble", dataStore:"redis"})
	 */
	setStore(params: { topic: string, dataStore?: string }, cb?: StandardCallback) {
		Validate.args(params.topic, "string", params.dataStore, "string=", cb, "function=");
		Logger.system.log("APPLICATION LIFECYCLE:StorageClient.setStore", params, cb);
		this.routerClient.query("Storage.setStore", params, (err, response) => {
			const logMethod = err ? Logger.system.error : Logger.system.info;
			logMethod("Storage.setStore", err, response);
			if (cb) {
				cb(err, response.data);
			}
		});
	};

	/**
	 * Save a key value pair into storage.
	 * @param {Object} params - Params object
	 * @param {String} params.topic -  storage topic for key being stored
	 * @param {String} params.key -  The key to be stored
	 * @param {any} params.value -  The value to be stored
	 * @param {function} cb -  callback to be called on success
	 *
	 * @example
	 * StorageClient.save({topic:"finsemble", key:"testKey", value:"testValue"})
	 */
	save(params: { key: string, topic: string, value: any }, cb?: StandardCallback) {
		const promiseResolver = (resolve, reject) => {
			Validate.args(params.topic, "string", params.key, "string", params.value, "any", cb, "function=");
			this.routerClient.query("Storage.save", params, (err, response) => {
				const logMethod = err ? Logger.system.error : Logger.system.info;
				logMethod("Storage.save", err, response);
				if (cb) {
					cb(err, response.data);
				}
				if (err) {
					reject({ err: err, data: null });
				} else {
					resolve({ err: err, data: response.data });
				}

			});
		};
		return new Promise(promiseResolver);
	};

	/**
	 * Get a value from storage.
	 * @param {Object} params - Params object
	 * @param {String} params.key -  The key to get from storage
	 * @param {function} cb -  callback to be called on success
	 *
	 * @example
	 * StorageClient.get({topic:"finsemble", key:"testKey"}, function(err, data){
	 *	var myData = data;
	 * });
	 */
	get(params: { key: string, topic: string }, cb?: StandardCallback) {
		const promiseResolver = (resolve, reject) => {
			Validate.args(params.topic, "string", params.key, "string", cb, "function=");
			this.routerClient.query("Storage.get", params, (err, response) => {
				if (err) {
					Logger.system.error("Storage.get", err, response);
					cb(err, response ? response.data : null);
					return reject(err, response ? response.data : null);
				}
				Logger.system.info("Storage.get", err, response);
				if (cb) cb(err, response.data);
				resolve(response.data);
			});
		};
		return new Promise(promiseResolver);
	};

	/**
	 * Get all keys for the topic.
	 * @param {Object} params - Params object
	 * @param {String} params.topic -  topic for the keys to return
	 * @param {String=} params.keyPrefix -  filter all keys that don't start with this prefix
	 * @param {function} cb -  callback to be called on success
	 *
	 * @example
	 * StorageClient.keys({topic:"finsemble", keyPrefix:"test"}, function(err, data){
	 *	var myKeys = data;
	 * });
	 */
	keys(params: { topic: string, keyPrefix?: string }, cb?: StandardCallback) {
		Validate.args(params.topic, "string", cb, "function=");
		Logger.system.debug("StorageClient.keys", params, cb);
		this.routerClient.query("Storage.keys", params, function (err, response) {
			const logMethod = err ? Logger.system.error : Logger.system.info;
			logMethod("Storage.keys", err, response);
			if (cb) {
				cb(err, response.data);
			}
		});
	};
	/**
	 * Get a multiple values from storage based on regex.(coming soon)
	 * @param {Object} params - Params object
	 * @param {function} cb -  callback to be called on success
	 * @private
	 * @todo make this work.
	 * @example
	 * StorageClient.get({key:"testKey"});
	 */
	getMultiple(params, cb?: StandardCallback) {
		Logger.system.info("StorageClient.getMultiple", params, cb);
		this.routerClient.query("Storage.getMultiple", params, function (err, response) {
			const logMethod = err ? Logger.system.error : Logger.system.info;
			logMethod("StorageClient.getMultiple:", params, response);
			if (cb) {
				cb(err, response);
			}
		});
	};
	/**
	 * Delete a value from storage.
	 * @param {Object} params - Params object
	 * @param {String} params.key -  The key to get from storage
	 * @example
	 * StorageClient.remove({key:"testKey"})
	 */
	remove(params: { key: string, topic: string }, cb?: StandardCallback) {
		const promiseResolver = (resolve, reject) => {
			Validate.args(params.topic, "string", params.key, "string", cb, "function=");
			this.routerClient.query("Storage.delete", params, function (err, response) {
				const logMethod = err ? Logger.system.error : Logger.system.info;
				logMethod("StorageClient.delete", err, response);
				if (cb) {
					cb(err, response.data);
				}
				if (err) {
					reject({ err: err, data: null });
				} else {
					resolve({ err: err, data: response.data });
				}
			});
		};
		return new Promise(promiseResolver);
	};

	//Did this because "delete" is a reserved keyword; for autocomplete the client is exported as a namespace with a bunch of functions and wouldn't work with a function called delete.
	delete = this.remove;

	clearCache(cb?: StandardCallback) {
		Logger.system.log("StorageClient.clearCache", cb);
		this.routerClient.query("Storage.clearCache", null, function (err, response) {
			const logMethod = err ? Logger.system.error : Logger.system.info;
			logMethod("StorageClient.clearCache", err, response);
			if (cb) {
				cb(err, response.data);
			}
		});
	};
};

var storageClient = new StorageClient({
	startupDependencies: {
		services: ["storageService"]
	},
	onReady: function (cb: () => void) {
		if (cb) {
			cb();
		}
	},
	name: "storageClient"
});

export default storageClient;
