# rtc-finsemble

## Instructions

There are two ways of running this project:

- locally with the component URLs directed at your own RT @ localhost:3000
- or in through an OpenFin launcher (download link below)

### To run the project locally

1. Clone this project at the master branch.
2. Run `npm run start` on ReactiveTraderCloud
3. Run `npm run dev` on this project (this creates a clean build and starts the a server at port 3375)

### To build the project

Run `npm run build` for dev or `npm run build:prod` for prod

### Deployment

In this repo Github Pages is mapped to the `/docs` folder on the master branch. Running `npm run deploy` **after building the project for production** will re-generate the `/docs` folder copying into it:
- the contents of the `/dist` folder output by the build process
- the `/finsemble` folder output by the build process
- the contents of the `/public` folder. Any static files here will be served from the root of the Github Pages site

Then push to master to deploy the changes.

> Make sure the contents of the `/docs` folder are correct before pushing, it will override the production environment!

### Generate installers

TBC
