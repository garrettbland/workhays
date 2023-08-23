import arc from '@architect/functions'

/** @typedef {import('aws-lambda').APIGatewayEvent} thing*/

/**
 * @typedef {import('aws-lambda').APIGatewayEvent} Event
 * @typedef {import('aws-lambda').Context} Context
 * @typedef {import('aws-lambda').APIGatewayProxyResult} Response
 *
 * @param {Event} event
 * @param {Context} context
 * @returns {Promise<Response>}
 */
export const handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            'content-type': 'application/json',
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        },
        body: JSON.stringify({
            message: 'Your new endpoint',
        }),
    }
}
