import arc from '@architect/functions'

/**
 * HTTP Endpoint
 *
 * @param {import('@architect/functions/types/http').HttpRequest} req
 * @returns {Promise<import('@architect/functions/types/http').HttpResponse>}
 */
const main = async (req) => {
    try {
        return {
            json: {
                message: 'Your new HTTP endpoint',
                body: req.body,
            },
        }
    } catch (err) {
        return {
            json: {
                message: 'Error with HTTP endpoint',
                error: String(err),
            },
        }
    }
}

export const handler = arc.http.async(main)
