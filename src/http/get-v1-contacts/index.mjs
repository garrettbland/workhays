import arc from '@architect/functions'

/**
 * Endpoint for retrieving contact submissions
 *
 * GET /v1/contacts
 *
 * @returns {Promise<import('@architect/functions/types/http').HttpResponse>}
 */
const main = async () => {
    try {
        let client = await arc.tables()
        let workhaysTable = client.workhays

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
