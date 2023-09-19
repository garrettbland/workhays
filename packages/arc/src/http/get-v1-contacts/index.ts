import arc from '@architect/functions'
import { HttpResponse } from '@architect/functions/types/http'

/**
 * Endpoint for retrieving contact submissions
 *
 * GET /v1/contacts
 */
const main = async (): Promise<HttpResponse> => {
    try {
        const client = await arc.tables()
        const workhaysTable = client.workhays

        const allContacts = await workhaysTable.query({
            KeyConditionExpression: 'PK = :contactType',
            ExpressionAttributeValues: {
                ':contactType': 'CONTACT',
            },
        })

        return {
            json: {
                data: {
                    ...allContacts,
                },
            },
        }
    } catch (err) {
        return {
            json: {
                message: 'Error getting contacts',
                err: String(err),
            },
        }
    }
}

export const handler = arc.http.async(main)
