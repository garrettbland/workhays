import arc from '@architect/functions'
import { HttpResponse, HttpRequest } from '@architect/functions/types/http'

/**
 * HTTP Endpoint
 */
const main = async (req: HttpRequest): Promise<HttpResponse> => {
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
