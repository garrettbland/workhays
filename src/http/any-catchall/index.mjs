import arc from '@architect/functions'

/**
 * Catchall endpoint for Workhays API
 *
 * @returns {Promise<import('@architect/functions/types/http').HttpResponse>}
 */
const main = async () => {
    return {
        status: 404,
        json: {
            message: `404: This resource or endpoint does not exist`,
        },
    }
}

export const handler = arc.http.async(main)
