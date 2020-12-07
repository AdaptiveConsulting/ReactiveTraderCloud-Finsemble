# Reactive Trader Finsemble Demo

[![CircleCI](https://circleci.com/gh/AdaptiveConsulting/ReactiveTraderCloud-Finsemble/tree/master.svg?style=svg&circle-token=c9a64a94d9b308c65df792b7af0412b0a2310a12)](https://circleci.com/gh/AdaptiveConsulting/ReactiveTraderCloud-Finsemble/tree/master)

## Overview

Reactive Trader Cloud is a real-time FX trading platform demo showcasing reactive programming principles applied across the full application stack.
This demo is built with the Finsemble seed project and integrated with Reactive Trader Cloud.

![image](/assets/img/RTF.png)

## Developer Prerequisites

- Please make sure you have the core Finsemble packages associated with your npm username for local development
- You need to run npm login and enter your credentials before installing the core Finsemble packages
- Node v12.13.1
- NPM v6 +
- Windows only

## Local Development

- `npm install` after logging in with your npm credentials
- `npm run dev:fresh` to build and run the project
- `npm run dev:nolaunch` to build and serve the project without launching Finsemble
- `npm run makeInstaller:dev` to generate a local Electron installer for development

## Production

To do a dry run of a production build for this application please follow these steps:

- `npm run build:prod` to build Finsemble for production
- `npm run makeInstaller:prod` run this when needed to regenerate the production installer

## Deployment

We have two environments for the Finsemble demo: UAT and production. The UAT executable connects to the web-uat Reactive Trader application, while the production executable connects to the web-demo application.

To deploy changes:

- Make a PR against master. Every commit runs both a UAT and Production workflow in CircleCI where the respective executables are constructed. You can download the zipped file with the results of the build process from the CircleCI artifacts and verify that the constructed executable works as expected.
- Merge into master. This will trigger the same CircleCI build steps as before with an extra step at the end to deploy to both the UAT and Production Google Cloud Storage buckets. UAT will be deployed to automatically, and the Production workflow will be blocked waiting for an approval to deploy master to production.
- You can verify by downloading the new UAT executable that the changes made to Finsemble work as expected, or that features tested in RT UAT work in Finsemble. Once satisfied, you can approve the workflow to deploy to the production bucket.

## Install the Production Version of Reactive Trader Finsemble

- Run the exe for the production instance installer found [here](https://storage.googleapis.com/reactive-trader-finsemble/pkg/ReactiveTraderFinsemble.exe)

## Install the UAT Version of Reactive Trader Finsemble

- Run the exe for the UAT instance installer found [here](https://storage.googleapis.com/reactive-trader-finsemble-uat/pkg/ReactiveTraderFinsemble.exe)

## Notes

- You can change the `applicationRoot` and `componentRoot` in the manifest-local.json file for local development
- You can update the Reactive Trader Demo workspace that's found in the `/configs/application/workspaces.json` file
- When upgrading to a new version of Finsemble, please upgrade the version number in `configs/other/installer.json`. This number is used in building a history of installers, and allows for automatic update of clients on startup.
