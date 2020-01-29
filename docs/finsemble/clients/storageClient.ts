/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/

import Validate from "../common/validate";

import Logger from "./logger";

import { _BaseClient } from "./baseClient";
import pLimit from "p-limit";
import { promisify } from "../common/disentangledUtils";
const limit = pLimit(1);

import { componentMutateParams } from '../services/window/WindowAbstractions/BaseWindow';

/**
 *
 * @introduction
 * <h2>Storage Client (Finsemble Connect)</h2>
 *
 * The Storage Client handles saving and retrieving data for your smart desktop.
 *
 *
 *See the <a href=tutorial-storingData.html>Storing Data tutorial</a> for an overview of using the Storage Client.
 * @hideconstructor
 *  @todo add clear method
 * @constructor
 */
export class StorageClient extends _BaseClient {
	clientReady: boolean = false;

	/**
	 * Define the user name for storage (i.e., each user has unique storage).
	 * @param {object} params
	 * @param {string} params.user A unique key to store user data under
	 * @param {StandardCallback} cb Callback to be called on success.
	 *
	 * @example
	 * FSBL.Clients.StorageClient.setUser({ user: "JohnDeere"});
	 */
	setUser(params: { user: string }, cb?: StandardCallback) {
		this.clientReady || Logger.system.error("storageClient invoked before ready");
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
	 * Specifies the data store. For normal operation this function doesn't have to be invoked -- the default data store is set in configuration.
	 * @param {Object} params
	 * @param {String} params.topic If specified then data store is set only for topic.
	 * @param {string} params.dataStore Identifies the data store (e.g. "localStorage", "redis").
	 * @param {function} cb Callback to be called on success.
	 *
	 * @example
	 * FSBL.Clients.StorageClient.setStore({topic:"finsemble", dataStore:"redis"})
	 */
	setStore(params: { topic: string, dataStore?: string }, cb?: StandardCallback) {
		this.clientReady || Logger.system.error("storageClient invoked before ready");
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
	 * @param {Object} params
	 * @param {String} params.topic Storage topic for key being stored.
	 * @param {String} params.key The key for the value to be stored under.
	 * @param {any} params.value The value to be stored.
	 * @param {function} cb Callback to be called on success.
	 *
	 * @example
	 * FSBL.Clients.StorageClient.save({topic:"finsemble", key:"testKey", value:"testValue"})
	 */
	save(params: componentMutateParams, cb?: StandardCallback) {
		this.clientReady || Logger.system.error("storageClient invoked before ready");
		if (typeof params.key !== "string" || typeof params.topic !== "string") {
			throw new Error("Values for key and topic must be strings.");
		}
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
	 *
	 * @param params
	 * @private
	 */
	save1(params: { key: string, topic: string, value: any }) {
		return limit(() => this.save(params));
	}

	/**
	 * Get a value from storage.
	 * @param {Object} params
	 * @param {String} params.key The key to get from storage.
	 * @param {String} params.topic The topic that the data is saved under.
	 * @param {function} cb Callback to be called on success.
	 *
	 * @example
	 * FSBL.Clients.StorageClient.get({ topic:"finsemble", key:"testKey" }, function(err, data) {
	 *	var myData = data;
	 * });
	 */

	get<T = any>(params: { key: string, topic: string }, cb?: StandardCallback<string | Error, T>): Promise<T> {
		this.clientReady || Logger.system.error("storageClient invoked before ready");
		if (typeof params.key !== "string" || typeof params.topic !== "string") {
			throw new Error("Values for key and topic must be strings.");
		}

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
	 *
	 * @param params
	 * @param cb
	 * @private
	 */
	get1<T = any>(params: { key: string, topic: string }, cb?: StandardCallback<string | Error, T>): Promise<T> {
		return limit(() => this.get(params));
	}

	/**
	 * Asynchronously updates provided key in storage by first retrieving the key
	 * then running a provided function on the result and re-saving its value.
	 * There’s no guarantees of consistency or atomicity
	 *
	 * @param params {any} Update storage params
	 * @param params.topic {string} The storage topic
	 * @param params.key {string} The storage key
	 * @param params.updateFn {Function} Function to run to determine the value to store
	 * @private
	 */
	async updateStorage(params: { topic: string, key: string, updateFn: (x: any) => any }) {
		const { topic, key, updateFn } = params;
		const result = await this.get({ topic, key });
		return this.save({ topic, key, value: updateFn(result) });
	}

	/**
	 *
	 * @param params
	 * @private
	 */
	updateStorage1(params: { topic: string, key: string, updateFn: (x: any) => any }) {
		return limit(() => this.updateStorage(params));
	}

	/**
	 * Get all keys for the topic.
	 * @param {Object} params
	 * @param {String} params.topic Topic for the keys to return.
	 * @param {String=} params.keyPrefix Filter all keys that don't start with this prefix.
	 * @param {function} cb Callback to be called on success.
	 *
	 * @example
	 * FSBL.Clients.StorageClient.keys({topic:"finsemble", keyPrefix:"test"}, function(err, data){
	 *	var myKeys = data;
	 * });
	 */
	keys(params: { topic: string, keyPrefix?: string }, cb?: StandardCallback) {
		this.clientReady || Logger.system.error("storageClient invoked before ready");
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
	 *
	 * @param params
	 * @private
	 */
	keys1(params: { topic: string, keyPrefix?: string }): Promise<string[]> {
		return limit(() => promisify(this.keys.bind(this))(params));
	}

	/**
	 * Get a multiple values from storage based on regex.(coming soon)
	 * @param {Object} params
	 * @param {function} cb Callback to be called on success.
	 * @private
	 * @todo make this work.
	 * @example
	 * StorageClient.get({key:"testKey"});
	 */
	getMultiple(params, cb?: StandardCallback) {
		this.clientReady || Logger.system.error("storageClient invoked before ready");
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
	 * @param {Object} params
	 * @param {String} params.key The key to get from storage.
	 * @param {String} params.topic The topic that the data is saved under.
	 * @example
	 * FSBL.Clients.StorageClient.remove({ key:"testKey" })
	 */
	remove(params: { key: string, topic: string }, cb?: StandardCallback) {
		this.clientReady || Logger.system.error("storageClient invoked before ready");
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

	/**
	 *
	 * @param params
	 * @private
	 */
	remove1(params: { key: string, topic: string }) {
		return limit(() => this.remove(params));
	}

	//Did this because "delete" is a reserved keyword; for autocomplete the client is exported as a namespace with a bunch of functions and wouldn't work with a function called delete.
	delete = this.remove;

	/**
	 * Clears a storage adapter of all data.
	 * @param {function} cb The callback to be invoked after the method completes successfully.
	 *
	 */
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
	onReady: function (cb: () => void) {
		if (cb) {
			cb();
		}
		storageClient.clientReady = true;
	},
	name: "storageClient"
});

export default storageClient;
