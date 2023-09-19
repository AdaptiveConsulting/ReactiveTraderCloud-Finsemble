# Reactive Trader Finsemble Demo

[![CircleCI](https://circleci.com/gh/AdaptiveConsulting/ReactiveTraderCloud-Finsemble/tree/master.svg?style=svg&circle-token=c9a64a94d9b308c65df792b7af0412b0a2310a12)](https://circleci.com/gh/AdaptiveConsulting/ReactiveTraderCloud-Finsemble/tree/master)

## Overview

Reactive Trader Cloud is a real-time FX trading platform demo showcasing reactive programming principles applied across the full application stack.
This demo is built with the Finsemble seed project and integrated with Reactive Trader Cloud.

![image](/assets/img/RTF.png)

# Project structure

Below is a brief outline of what's included in the seed project.

- _assets_ - Contains the CSS and images used to create the SmartDesktop's look and feel.

  - _configs/application_ - Contains all of the base configurations for the Finsemble application. The files in this
    folder are merged together to build the application configuration. This configuration can be changed at run time
    using dynamic configuration. Contains the application manifest used to start up the Finsemble application. The
    default manifest for development is included, and additional configurations can be placed in this folder.

## Developer Prerequisites

- Node v16.x
- Yarn v1.x
- Windows only

## Local Development

- `yarn install`
- `yarn dev:fresh` to build and run the project
- `yarn dev:nolaunch` to build and serve the project without launching Finsemble
- `yarn makeInstaller:dev` to generate a local Electron installer for development

## Production

To do a dry run of a production build for this application please follow these steps:

- `yarn build:prod` to build Finsemble for production
- `yarn makeInstaller:prod` run this when needed to regenerate the production installer

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
