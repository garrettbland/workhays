# Work Hays

[Work Hays](https://workhays.com) is a free to use website for employers to post their open positions and for local job seekers to find new opportunities in the Hays, Kansas region.

### About this project

This project uses a handful of various technologies to power. Here is a brief breakdown.

-   [Architect](https://arc.codes/) - AWS Provisioning & Management
    -   [Lambda](https://aws.amazon.com/lambda/) - Server Side Functions
    -   [Dynamo DB](https://aws.amazon.com/dynamodb/) - Database
    -   [Cognito](https://aws.amazon.com/cognito/) - Authentication
    -   [SES](https://aws.amazon.com/ses/) - Email Notifications
-   [Jest](https://jestjs.io/) - Testing Framework
-   [Tailwind CSS](https://tailwindcss.com/) - Styling
-   [Next JS](https://nextjs.org/) - Web App & Admin

### Getting Started

To get started developing, you will first need to make sure you have [NodeJS](https://nodejs.org/en) and [nvm](https://github.com/nvm-sh/nvm) installed in your development environemnt. Once complete, you are ready to move on.

```bash
# Step 1 - Clone this repository
$ git clone https://github.com/garrettbland/workhays.git

# Step 2 - Setup node version & install node modules
$ cd workhays && nvm use && npm install

# Step 3 - Start development server
$ npm run dev
```

Once complete, you will have a local version of Work Hays running in your environment. An output with the port will be shown in your terminal. This boots up Arc's sandbox environment as well as any sandbox plugins. This starts the following and will watch for file changes.

-   Arc serverless functions
-   Next JS Server / TailwindCSS
-   Local DynamoDB database (using dynalite) and seeds database with fake data (using Faker)

Live reload is also enabled for both HTTP endpoints and Next JS. The Architect server will be running at port `3333`, while the Next JS web application server will be running on port `3000`. In `next.config.js`, rewrites are configured for the `/api` routes.

It is setup to re-write `localhost:3000/api/*route*` -> `localhost:3333/*route*`. This allows us to make normal fetch calls without having to define the port, and it looks nicer.

### Achitecture

Coming soon...Diagram of arc, next js, auth, ses, ect...

### Project Layout

```js
├── .github/workflows/ // Github Workflows for CI/CD
├── public/ // Public files used by Next JS
├── src/
│   ├── components/ // React JS Components
│   ├── http/ // Arc HTTP endpoints
│   ├── pages/ // Next JS Pages Directory
│   ├── plugins/ // Arc plugins
│       └── cognito/ // AWS Cognito Cloudformation
│       └── next/ // NextJS Server
│       └── seed-database/ // Add's fake data for development
│       └── ses/ // AWS Simple Email Service (SES) Cloudformation
│   ├── shared/ // Automatically gets copied into all Arc endpoints
│   ├── styles/ // CSS Styling (TailwindCSS)
├── templates/ // Resource templates used by Arc
├── '.env' // Defines secrets & environment variables for Arc & Next.js
├── 'app.arc' // Arc config
├── 'prefs.arc' // Defines environment options for Arc
├── 'tailwind.config.js' // TailwindCSS Config
```

### Adding HTTP Endpoints

1. Add `@http` entry to `app.arc`
2. Run `npm run arc-init`
3. Validate that the new directory has been created in `src/http`
4. Update the new `index.js` file with some code
5. Start local sandbox to ensure new endpoint is working with `npm run dev`

### Hydrating

During development (`npm run dev`) Arc will hydrate and make sure all functions
have necessary dependencies installed. `npm run arc-hydrate` will copy all shared
code into @http functions. This can be useful for testing or CI.

[arc hydrate docs](https://arc.codes/docs/en/reference/cli/hydrate)

### Deploying

More coming soon...

### Environment Variables

Create a `preferences.arc` file in the root directory. This file is ignored by git and is not commited. The `@env` pragma is used so we can use different environment variables for different environment. Example below.

```
# preferences.arc

@env
testing
  ARC_APP_SECRET "dsfdfsa012864"

staging
  ARC_APP_SECRET "sdf9023490ds"

production
  ARC_APP_SECRET "dfskdsf02032"
```

### Development

To get startd, clone this repo, run `npm install`, and then `npm run dev`. This will start the local Arc sandbox running a local dynamo database with faked data (see `src/plugins/seed-database` plugin) and local http endpoints. This also starts the web app proceccesses (client side bundle, css files, etc) and will rebuild when there are changes.

### Testing

Coming soon. Stuff about jest testing.
