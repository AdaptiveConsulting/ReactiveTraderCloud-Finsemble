/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/
import { ServiceLauncher } from "../serviceLauncher";
import configClient from "../../../clients/configClient";
import { BootTaskCallbackInterface } from "../_types";

/**
 * Boot task that gets finsemble configs and passes them
 * down to ServiceLauncher.updateConfig. The purpose of this task
 * is to make sure ServiceLauncher has an up to date finsembleConfigs
 * which includes SecurityPolicies object.
 * 
 * @private
 */
export class UpdateServiceLauncherConfigTask {
	serviceLauncher: ServiceLauncher;
	constructor(params) {
		this.serviceLauncher = params.serviceLauncher;
	}
	public async start(doneCallback: BootTaskCallbackInterface) {
        const response = await configClient.getValue({field: 'finsemble'});
        this.serviceLauncher.updateConfig(response.data);
		doneCallback("updateServiceLauncherConfigTask", "bootTasks", "completed");
	}
}