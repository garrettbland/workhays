import { useEffect, useState } from 'react'
import { whichEnv } from '../utils/whichEnv'
import ENV from '../constants'
import { Environment, Stages } from '../types'

/**
 * React hook for returning stage object. This will return the environment
 * specific object. Makes it easier to access things like AWS values, development
 * variables, etc.
 * Example usage...
 * ```jsx
 * import { useEnvironment } from './'
 * const stage = useEnvironment() // => { showDevBanner, etc, etc }
 *
 * // Another example specific for Next JS and server rendering
 * const { showDevBanner } = useEnvironment() ?? {}
 * ```
 */
export const useEnvironment = (): Environment[Stages] | null => {
    const [stage, setStage] = useState<Environment[Stages] | null>(null)

    useEffect(() => {
        setStage(ENV[whichEnv()])
    }, [])

    return stage
}
