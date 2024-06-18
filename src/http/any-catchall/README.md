# API v1

Work Hays REST API version 1

### Architecture

This endpoint, `/api/v1/*`, is a single Lambda that handles all API operations. It set's up a API Proxy in AWS and forwards on the request to our code. From there, we use [Lambda API](https://github.com/jeremydaly/lambda-api).

Lambda API is a web framework very similar to Express and Fastify, but very lean. We use this to handle all logic and routing within this directory, rather than creating a ton of entries to our `app.arc` file. That way we can have a single purpose function and support hundreds of routes and not have to worry about CloudFormation limits.

Obviously if this gets that huge, it could start affecting this Lambda performance and it might make sense to break it up in the future.

### Additional Notes

For some reason, `architect/functions` needs to be at `^5.4.0`. Otherwise Typescript will throw an error `Could not resolve "@aws-sdk/node-http-handler"` from `any-api-v1-catchall/node_modules/@architect/functions/src/tables/dynamo.js`
