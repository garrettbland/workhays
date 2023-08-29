import arc from '@architect/functions'

/**
 * Retrieves Jobs
 *
 * GET /v1/jobs
 *
 * Available query params (in progress...)
 * - active
 * - inactive
 * - etc
 *
 * @param {import('@architect/functions/types/http').HttpRequest} req
 * @returns {Promise<import('@architect/functions/types/http').HttpResponse>}
 */
export const main = async () => {
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
        json: {
            activeJobs,
        },
    }
}

export const handler = arc.http.async(main)
