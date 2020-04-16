# TelemetryJet Website

This repository contains the landing page & main website for the TelemetryJet platform.

The latest website is automatically deployed to https://www.telemetryjet.com/ via Netlify.

## Deploy Status

|Branch|Deploy Status|Target|
|------|-------------|------|
|`develop`|![Netlify Status](https://api.netlify.com/api/v1/badges/f5607e1f-2edd-4b31-bf52-f0972d7c3cb0/deploy-status)|https://www.dev.telemetryjet.com/|
|`master`|![Netlify Status](https://api.netlify.com/api/v1/badges/98de982b-64cc-4ea3-9db4-4cba062fedfc/deploy-status)|https://www.telemetryjet.com/|

## Getting Started

The website is built in Javascript with Next.js and React. The site is compiled to static HTML and served via Netlify.

Development workflow follows typical Node.js tasks; we recommend `yarn` as the package manager of choice.

## Run Development Server

To run a development server, use `yarn start`. This will start the Next.js dev server locally.

## Build Static Site

To build and export the site to static HTML, use `yarn build && yarn export`. This will build the static site to the `out/` directory as HTML. These files should not be uploaded to git; they are ignored and will be built by Netlify when a release is merged into the master branch. 