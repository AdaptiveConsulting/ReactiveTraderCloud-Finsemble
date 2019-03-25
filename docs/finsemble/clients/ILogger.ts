/*!
* Copyright 2018 by ChartIQ, Inc.
* All rights reserved.
*/

/** The interface which any logger must implement. This is different from
 * the ICentralLogger interface, which is what any logger compatible with
 * the Central Logging service must implement.*/
export interface ILogger {
	/** Used to log information messages.
	 * 
	 * Note that this excluded from Central Logger by default.
	 * You may turn it on from within the Central Logger UI.*/
	info( ...args: any[] ): void;
	/** Used to log debug messages.
	 * 
	 * Note that this excluded from Central Logger by default.
	 * You may turn it on from within the Central Logger UI.*/
	debug( ...args: any[]): void;
	/** Used to log information messages.
	 * 
	 * Note that this excluded from Central Logger by default.
	 * You may turn it on from within the Central Logger UI.*/
	verbose( ...args: any[] ): void;
	/** Used to log informational messages. */
	log( ...args: any[] ): void;
	/** Indicates a potentially fatal error or problem. */
	error( ...args: any[] ): void;
		/** Indicates a non-fatal error or problem. */
	warn( ...args: any[] ): void;
}
