import { APIGatewayProxyEventV2, Context } from 'aws-lambda'
import lambdaApi from 'lambda-api'
import { ROUTES } from './src/routes'

export const handler = async (req: APIGatewayProxyEventV2, context: Context) => {
    /**
     * Global config for `lambda-api`
     * https://github.com/jeremydaly/lambda-api#configuration
     */
    const api = lambdaApi({
        base: '/api/v1/',
        version: '1.0',
    })

    /**
     * Register Routes
     */
    ROUTES.forEach((route) => {
        api.METHOD(route.method, route.path, route.action)
    })

    /**
     * Stringify each header value. The values we get from Arc could be numbers.
     *
     * If 'multiValueHeaders' is not in the request `lambda-api` will simulate this to add
     * support for payload format version "1.0". (We are using payload version "2.0" -
     * APIGatewayProxyEventV2). Not exactly sure why, but before we send the request to `lambda-api`,
     * we need to make sure the header values are back in their original string format. Otherwise
     * `lambda-api` fails when it tries to use "split" on a number.
     *
     * https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html#http-api-develop-integrations-lambda.proxy-format
     */
    const stringifiedHeaderValues = Object.keys(req.headers).reduce((prev, current) => {
        return {
            ...prev,
            [req.headers[current]]: String(req.headers[current]),
        }
    }, {})

    /**
     * Start the API server
     */
    return await api.run(
        {
            ...req,
            headers: stringifiedHeaderValues,
        },
        context
    )
}
