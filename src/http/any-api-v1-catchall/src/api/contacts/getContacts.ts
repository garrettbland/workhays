import { tables } from '@architect/functions'
import { Request } from 'lambda-api'

export const getContacts = async (request: Request) => {
    console.log('GET REQUEST FOR CONACTS')

    let client = await tables()
    let workhaysTable = client.workhays

    const allContacts = await workhaysTable.query({
        // IndexName: 'GSI1',
        KeyConditionExpression: 'PK = :contactType',
        ExpressionAttributeValues: {
            ':contactType': 'CONTACT',
        },
    })

    return { status: 'SUCCESS', contacts: allContacts }
}
