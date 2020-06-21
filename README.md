# TelemetryJet Website

This repository contains the landing page & main website for the TelemetryJet platform.

The latest website is automatically deployed to https://www.telemetryjet.com/ via Netlify.

The repository also includes a python and shell script which regenerate the release pages when a new release is
created and uploaded to S3. This job is run periodically via Jenkins.

## Deploy Status

|Branch|Deploy Status|Target|
|------|-------------|------|
|`develop`|![Netlify Status](https://api.netlify.com/api/v1/badges/f5607e1f-2edd-4b31-bf52-f0972d7c3cb0/deploy-status)|https://www.dev.telemetryjet.com/|
|`master`|![Netlify Status](https://api.netlify.com/api/v1/badges/98de982b-64cc-4ea3-9db4-4cba062fedfc/deploy-status)|https://www.telemetryjet.com/|

## Getting Started

The website is built with Hugo. The site is compiled to static HTML and served via Netlify.

Development workflow follows typical Hugo tasks.

## Run Development Server

To run a development server, use `hugo serve`. This will start the Hugo dev server locally.

## Build Static Site

To build and export the site to static HTML, use `hugo`. This will build the static site to the `public/` directory as HTML. These files should not be uploaded to git; they are ignored and will be built by Netlify when a release is merged into the master branch. 

## Updating Release Index

To update the release index markdown files, run `./generateReleaseIndex.sh`. This will overwrite files in the `content/releases/` directory. The script has several dependencies:

- Python3
- boto3 AWS SDK for Python3
- AWS CLI