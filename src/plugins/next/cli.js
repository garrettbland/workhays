const { spawn } = require('child_process')
const terminate = require('terminate/promise')

/**
 * Process that starts Next JS server. Returns an objet
 * to stop process
 * @param { () => void } updater - Arc's "updater" function from "@architect/utils"
 * @returns { Promise<{ stop: () => Promise<void>}> } Object with stop function to kill Next JS process
 */
const start = (updater) => {
    let hasInitialized = false
    const watcherProcess = spawn('npx', ['next', 'dev'])

    /**
     * Returns a new promise
     */
    return new Promise((resolve) => {
        /**
         * Log any errors or warning from Next JS
         */
        watcherProcess.stderr.on('data', (data) => {
            updater.status(String(data).trim())
        })

        /**
         * Log general logs from Next JS such as rebuilding or bundling.
         */
        watcherProcess.stdout.on('data', (data) => {
            updater.status(String(data).trim())
            if (!hasInitialized) {
                hasInitialized = true
                resolve({
                    stop: () => terminate(watcherProcess.pid),
                })
            }
        })
    })
}

module.exports = {
    startNextJSServer: start,
}
