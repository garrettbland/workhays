import arc from '@architect/functions'
import { HttpResponse } from '@architect/functions/types/http'

/**
 * Catchall endpoint for Workhays API
 */
const main = async (): Promise<HttpResponse> => {
    return {
        status: 404,
        json: {
            message: `404: This resource or endpoint does not exist`,
        },
    }
}

export const handler = arc.http.async(main)
