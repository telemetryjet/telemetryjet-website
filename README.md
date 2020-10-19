![Telemetryjet Landing Page & Marketing Website](/site-image.png)

This is the source code that runs the [TelemetryJet landing page & marketing website](https://www.telemetryjet.com/). If you are looking for the repository for the TelemetryJet server, then head over to [telemetryjet/telemetryjet](https://github.com/telemetryjet/telemetryjet). Otherwise feel free to look around and use this is as inspiration for your own site.

---

## Developer's Guide

This repository uses Hugo to generate a static site from markdown files. The project also includes a custom theme, specifically designed for the site landing page. The theme sets up sidebar menus, headers and footers,
and the landing page content.

The site is deployed using Netlify; The `master` branch is deployed to the production site and the `develop`
branch is deployed to the development site.

### Deploy Status

|Branch|Deploy Status|Target|
|------|-------------|------|
|`develop`|![Netlify Status](https://api.netlify.com/api/v1/badges/f5607e1f-2edd-4b31-bf52-f0972d7c3cb0/deploy-status)|https://www.dev.telemetryjet.com/|
|`master`|![Netlify Status](https://api.netlify.com/api/v1/badges/98de982b-64cc-4ea3-9db4-4cba062fedfc/deploy-status)|https://www.telemetryjet.com/|

### Development

Please install [Hugo](https://gohugo.io/).

To run a development server, use: 
```
hugo serve
```

To build and export the site to static HTML, use:
```
hugo
````

This will build the static site to the `public/` directory as HTML. These files should not be uploaded to git; they are ignored and will be built by Netlify during the automated deployment.