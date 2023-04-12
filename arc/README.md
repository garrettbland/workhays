# Architect

[https://arc.codes/](https://arc.codes/)

Architect provides a super easy way to setup services in AWS without manually writing Cloudformation.

### Database Seeding

When `npx arc sandbox` is called, a custom plugin will seed a local running database. This plugin is located at `./src/plugins/seed-database`.

Currently this plugin uses `@faker-js` to create random jobs, employers, etc.

### Deployment

Deploying is done during CI on pull requests for staging, and production on integration pipelines. The commands can be found in the projects root `package.json`.

### Useful Commands

-   Run `npx arc init` after creating new services in `app.arc`
