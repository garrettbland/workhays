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
