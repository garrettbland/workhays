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

    /**
     * todaysDate will be in format 'YYYY-MM-DD'
     */
    const todaysDate = new Date().toISOString().split('T')[0]

    /**
     * Query database
     *
     * /v1/jobs -> default public jobs
     * /v1/jobs?lastScannedIndex=1234 -> queries next set of jobs (pagination)
     * /v1/jobs?category=technology
     * /v1/jobs?employer=1234 -> gets active jobs by employer
     * /v1/jobs?employer=1234&apiKey=1234 -> gets all jobs by employer (maybe use headers)
     *
     *
     * - Get active jobs that are not expired, sort DESC
     * - Get jobs by employer
     */
    const activeJobs = await workhaysTable.query({
        IndexName: 'GSI1',
        KeyConditionExpression: 'GSI1PK = :activeJob and GSI1SK >= :todaysDate',
        ExpressionAttributeValues: {
            ':activeJob': 'JOB#ACTIVE',
            ':todaysDate': todaysDate,
        },
        Limit: 12,
        ScanIndexForward: false, // true = ascending, false = descending
    })

    return {
        json: {
            data: {
                ...activeJobs,
            },
        },
    }
}

export const handler = arc.http.async(main)
