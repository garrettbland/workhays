import arc from '@architect/functions'
import { HttpRequest, HttpResponse } from '@architect/functions/types/http'

/**
 * Retrieves Jobs
 *
 * GET /v1/jobs
 *
 * Available query params (in progress...)
 * - active
 * - inactive
 * - etc
 */
export const main = async (req: HttpRequest): Promise<HttpResponse> => {
    const client = await arc.tables()
    const workhaysTable = client.workhays

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
