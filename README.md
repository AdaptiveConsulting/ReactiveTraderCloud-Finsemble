# Reactive Trader Finsemble

## Prerequisites

- Please make sure you have the core Finsemble packages associated with your npm username for local development
- You need to run npm login and enter your credentials before downloading the core Finsemble packages
- Node v13 +
- NPM v6 +
- Windows only

## Local Development

- `npm install` after logging in with your npm credentials
- `npm run dev:fresh` to build and run the project
- `npm run dev:nolaunch` to build and serve the project without launching Finsemble
- `npm run makeInstaller:dev` to generate a local Electron installer for development

## Production

To ready this application for production please follow these steps:

- `npm build:prod` to build Finsemble for production
- `npm run deploy` to copy the build assets to the docs folder for Github deployment
- `npm makeInstaller:prod` run this when needed to regenerate the production installer
- Then push your changes

## Install Reactive Trader Finsemble

- Run the exe found in /pkg for the production instance installer

## Notes

- You can change the `applicationRoot` and `componentRoot` in the manifest-local.json file for local development
- You can update the Reactive Trader Demo workspace that's found in the `/configs/application/workspaces.json` file
