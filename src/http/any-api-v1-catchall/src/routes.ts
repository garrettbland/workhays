import { METHODS } from 'lambda-api'
import { getJobs } from './jobs/getJobs'

type Route = {
    method: METHODS
    path: string
    action: (req, res, next) => unknown
}

/**
 * API routes
 */
export const ROUTES: Route[] = [
    {
        method: 'GET',
        path: 'status',
        action: (req, res, next) => {
            return {
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
