/** Represents the FSBL properties stored on the global Window object,
 * giving access to them in type-safe manner.
 * 
 * Usage:
 * var x = (window as IFSBLizedGlobalWindow).FSBL;
*/
export interface IGlobals {
	/**
	 * @TODO - Full Docuementation
	 */
	StackedWindowManager?: any;
	/** A singleton instance of the DistributedStoreClient.
	 * @see DistributedStoreClient
	 */
	distributedStoreClient?: any;
	/**
	 * @TODO - Full Docuementation
	 */
	_FSBLCache?: any;
	/**
	 * @TODO - Full Docuementation
	 */
	FSBL?: any;
	/**
	 * @TODO - Full Docuementation
	 */
	FSBLData?: {
		clientIDCounter?: number,
		RouterClients?: object,
	};
	/** A v1 UUID stored on a Finsemble process's global Window object,
	 * and is shared via the ServiceManager with the rest of the system.
	 * */
	FinsembleUUID?: string;
	/**
	 * @TODO - Full Docuementation
	 */
	finsembleWindow?: any;
	/**
	 * @TODO - Full Docuementation
	 */
	FSBLIsSetOnline?: boolean;
	/**
	 * @TODO - Full Docuementation
	 */
	FSBLAlreadyPreloaded?: boolean;
	/**
	 * @TODO - Full Docuementation
	 */
	Keystroke?: any;
	/**
	 * A singleton instance of the ServiceManager.
	 * @see ServiceManager
	 */
	ServiceManager?: any;
}
