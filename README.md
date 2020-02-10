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

- `npm build:prod` to build Finsemble for production
- `npm run deploy` to copy the build assets to the docs folder for Github deployment
- `npm makeInstaller:prod` run this when needed to regenerate the production installer

## Install the Production Version of Reactive Trader Finsemble

- Run the exe for the production instance installer found [here](https://storage.googleapis.com/reactive-trader-finsemble/pkg/ReactiveTraderFinsembleSetup.exe)

## Notes

- You can change the `applicationRoot` and `componentRoot` in the manifest-local.json file for local development
- You can update the Reactive Trader Demo workspace that's found in the `/configs/application/workspaces.json` file
