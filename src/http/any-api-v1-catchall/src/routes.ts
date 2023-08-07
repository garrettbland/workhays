import { METHODS } from 'lambda-api'
import { getJobs } from './api/jobs/getJobs'

type Route = {
    method: METHODS
    path: string
    action: (req, res, next) => unknown
}

/**
 * All custom API routes
 */
export const ROUTES: Route[] = [
    {
        method: 'GET',
        path: 'status',
        action: (req, res, next) => {
            return {
                version: 'v1',
                status: 'all good',
            }
        },
    },
    {
        method: 'GET',
        path: 'jobs',
        action: getJobs,
    },
]
