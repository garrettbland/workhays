import { Stages } from '../types'

/**
 * Returns stage based on url
 * Example usage
 * ```jsx
 * import { whichEnv } from './'
 * const stage = whichEnv('https://localhost:3000') // => development
 * const stage = whichEnv('https://staging.workhays.com') // => staging
 *
 * // By default will use window.location.origin
 * // Example below, the user is on "http://workhays.com"
 * const stage = whichEnv() // => production
 * ```
 */
export const whichEnv = (url: string = window.location.origin): Stages => {
    if (url === 'https://workhays.com') {
        return 'production'
    }

    if (url === 'https://staging.workhays.com') {
        return 'staging'
    }

    /**
     * By default, return development for everything else
     */
    return 'development'
}
