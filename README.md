# Work Hays

[Work Hays](https://workhays.com) is a free to use website for employers to post their open positions and for local job seekers to find new opportunities in the Hays, Kansas region.

### About this project

This project uses a handful of various technologies to power. Here is a brief breakdown.

-   [Next JS](https://nextjs.org/) - React SSR Framework
-   [Tailwind CSS](https://tailwindcss.com/) - Styling
-   [Architect](https://arc.codes/) - AWS Provisioning & Management
    -   [Dynamo DB](https://aws.amazon.com/dynamodb/) - Database
    -   [Cognito](https://aws.amazon.com/cognito/) - Authentication
-   [Vercel](https://vercel.com/) - Hosting
-   [Vitest](https://vitest.dev/) - Testing Framework

### Getting Started

To get started developing, you will first need to make sure you have [NodeJS](https://nodejs.org/en) and [nvm](https://github.com/nvm-sh/nvm) installed in your development environemnt. Once complete, you are ready to move on.

```bash
# Step 1 - Clone this repository
git clone https://github.com/garrettbland/workhays.git

# Step 2 - Setup node version & install node modules
cd workhays && nvm use && npm install

# Step 3 - Start development server
npm run dev
```

Once complete, you should have a local version of Work Hays running in your environment. An output with the port will be shown in your terminal.

This will also start a sandbox environment running a seeded DynamoDB database, provided by architect. Everything Architect/AWS related can be found under `./arc/**/*`

### Project Layout

```js
├── public/ // Public files that are copied to s3 bucket
├── src/
│   ├── http/ // Arc HTTP endpoints
│       └── get-catchall/ // React SSR
│   ├── types/ // Typings for project
│   ├── plugins/ // Arc local plugins
│       └── seed-database/ // Add's fake data for development
├── '.gitignore' // Ignore files from SCM
├── 'app.arc' // Architect config
├── 'jest.config.js' // Jest testing config
├── 'package-lock.json' // Dependency locking
├── 'package.json' // Project dependencies, scripts, etc
├── 'preferences.arc' // *Ignored from git, defines secrets
├── 'README.md' // This file
├── 'tsconfig.json' // Project Typescript config
└── 'typings.d.ts' // Project declaration file
```

### Adding HTTP Endpoints

1. Add `@http` entry to `app.arc`
2. Run `npx arc init`
    1. Validate that the new directory has been created in `src/http`
    2. From inside the new directory, run `echo "{}" > package.json && touch index.ts`
3. Update new `index.ts` file with some code
4. Start local sandbox to ensure new endpoint is working with `npm run dev`

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
