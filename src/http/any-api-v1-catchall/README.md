# API v1

Work Hays REST API version 1

### Additional Notes

For some reason, `architect/functions` needs to be at `^5.4.0`. Otherwise Typescript will throw an error `Could not resolve "@aws-sdk/node-http-handler"` from `any-api-v1-catchall/node_modules/@architect/functions/src/tables/dynamo.js`
