import { getJobs } from './src/jobs/getJobs'
import { APIGatewayProxyEventV2, Context } from 'aws-lambda'
import lambdaApi from 'lambda-api'

export const handler = async (req: APIGatewayProxyEventV2, context: Context) => {
    const api = lambdaApi({
        base: '/api/v1/',
    })

    // Define a route
    api.get('status', async (req, res) => {
        return { status: 'ok' }
    })

    api.get('jobs', getJobs)

    // Logs routes to console
    api.routes(true)

    // Run the request
    // modifying the request to include 'multiValueHeaders' since I believe Arc is stripping
    // it out. 'lambda-api' checks for this MultiValueHeaders in the request, and if it doesn't
    // exist then it runs into issues with `this.headers[key].split(',') is not a function`. So
    // something between what Arc does to the request is my best guess. Adding this key to the
    // request as an empty object pretty much hoses support for multiValueHeaders, but I don't
    // need them immediately. So this little hackey thing works.
    return await api.run(
        {
            ...req,
            multiValueHeaders: {},
        },
        context
    )
}
