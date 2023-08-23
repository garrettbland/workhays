// import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda'
import arc from '@architect/functions'

export const handler = async () => {
    let client = await arc.tables()
    let workhaysTable = client.workhays

    const activeJobs = await workhaysTable.query({
        IndexName: 'GSI1',
        KeyConditionExpression: 'GSI1PK = :activeJob and GSI1SK >= :todaysDate',
        ExpressionAttributeValues: {
            ':activeJob': 'JOB#ACTIVE',
            ':todaysDate': '2',
        },
    })
    return {
        statusCode: 200,
        headers: {
            'content-type': 'application/json',
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        },
        body: JSON.stringify(activeJobs),
    }
}

// export const handler = async (
//     event: APIGatewayEvent,
//     context: Context
// ): Promise<APIGatewayProxyResult> => {
//     let client = await tables()
//     let workhaysTable = client.workhays

//     const activeJobs = await workhaysTable.query({
//         IndexName: 'GSI',
//         KeyConditionExpression: 'GSI1PK = :activeJob and GSI1SK >= :todaysDate',
//         ExpressionAttributeValues: {
//             ':activeJob': 'JOB#ACTIVE',
//             ':todaysDate': '2',
//         },
//     })
//     return {
//         statusCode: 200,
//         headers: {
//             'content-type': 'application/json',
//             'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
//         },
//         body: JSON.stringify(activeJobs),
//     }
// }
