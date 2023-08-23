const { updater } = require('@architect/utils')
const { startNextJSServer } = require('./cli')

/**
 * Next JS Plugin
 *
 * Starts Next JS in sandbox mode only. Next JS is currently not
 * deployed via Arc serverless, so deploy stages are omitted.
 */

/**
 * Create Arc "updater"
 * https://github.com/architect/utils#utilsupdatername-params
 */
const update = updater('NextJS')

/**
 * Set variable to hold next js server process
 */
let nextJSProcess

module.exports = {
    sandbox: {
        start: async () => {
            update.start('Starting server...')
            try {
                nextJSProcess = await startNextJSServer(update)
                update.done('Started server...')
            } catch (err) {
                update.error('Error starting server...')
                update.raw(err)
            }
        },
        end: async () => {
            update.start('Stopping...')
            try {
                await nextJSProcess.stop()
                update.done('Stopped server successfully...')
            } catch (err) {
                update.done('Error closing server...')
                update.raw(err)
            }
        },
    },
}
