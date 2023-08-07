const { dirname, resolve } = require('path')
const { mkdir } = require('fs/promises')
const { updater } = require('@architect/utils')
const { Parcel } = require('@parcel/core')
// const { startWatcher, build } = require('./cli')
/**
 * https://parceljs.org/features/parcel-api/
 */

/**
 * Create 'updater' to have console logging look
 * like Arc's typical messages
 */
const update = updater('Parcel')

let parcelProcess

module.exports = {
    // Setters
    set: {
        /**
         * Pragmas
         */
        // @events
        // events: ({ arc, inventory }) => {
        //   return {
        //     name: 'my-event',
        //     src: join('path', 'to', 'code'),
        //   }
        // },
        // @queues
        // queues: ({ arc, inventory }) => {
        //   return {
        //     name: 'my-queue',
        //     src: join('path', 'to', 'code'),
        //   }
        // },
        // @http
        // http: ({ arc, inventory }) => {
        //   return {
        //     method: 'get',
        //     path: '/*'
        //     src: join('path', 'to', 'code'),
        //   }
        // },
        // @scheduled
        // scheduled: ({ arc, inventory }) => {
        //   return {
        //     name: 'my-scheduled-event',
        //     src: join('path', 'to', 'code'),
        //     rate: '1 day', // or...
        //     cron: '* * * * * *',
        //   }
        // },
        // @tables-streams
        // 'tables-streams': ({ arc, inventory }) => {
        //   return {
        //     name: 'my-table-stream',
        //     table: 'app-data',
        //     src: join('path', 'to', 'code'),
        //   }
        // },
        // Custom / bare Lambdas (with event sources to be defined by `deploy.start`)
        // customLambdas: ({ arc, inventory }) => {
        //   return {
        //     name: 'my-custom-lambda',
        //     src: join('path', 'to', 'code'),
        //   }
        // },
        /**
         * Resources
         */
        // Environment variables
        // env: ({ arc, inventory }) => {
        //   return {
        //     MY_ENV_VAR: 'ok',
        //     ANOTHER_VAR: { objects_and_arrays_are_automatically_json_encoded: 'neat!' }
        //   }
        // },
        // Custom runtimes
        // runtimes: ({ arc, inventory }) => {
        //   return {
        //     name: 'runtime-name',
        //     type: 'transpiled',
        //     build: '.build',
        //     baseRuntime: 'nodejs14.x',
        //   }
        // },
    },

    // Deploy
    deploy: {
        // Pre-deploy operations
        start: async ({ arc, cloudformation, dryRun, inventory, stage }) => {
            // Run operations prior to deployment
            // Optionally return mutated `cloudformation`
            update.start('Starting production build...')
            await build({ update })
            update.done('Completed minified build for production')
        },
        // Architect service discovery and config data
        // services: async ({ arc, cloudformation, dryRun, inventory, stage }) => {
        //   return {
        //     'service-name': 'value or ARN', // Register a service, or...
        //     'arbitrary-data': '...' // Add up to 4KB of arbitrary data / config as a string
        //   }
        // },
        // Alternate deployment targets
        // target: async ({ arc, cloudformation, dryRun, inventory, stage }) => {
        //   // Deploy to a target other than AWS (e.g. Begin, Serverless Cloud, etc.)
        // },
        // Post-deploy operations
        // end: async ({ arc, cloudformation, dryRun, inventory, stage }) => {
        //   // Run operations after to deployment
        // },
    },

    // Sandbox
    sandbox: {
        // Startup operations
        start: async ({ arc, inventory, invoke }) => {
            //inventory.inv._project.cwd
            update.start('Starting Parcel...')

            let bundler = new Parcel({
                entries: ['./src/apps/admin/index.tsx', './src/apps/contact/index.tsx'],
                defaultConfig: '@parcel/config-default',
                mode: 'development',
                defaultTargetOptions: {
                    distDir: './public',
                },
                hmrOptions: {},
            })

            console.log(bundler)

            parcelProcess = await bundler.watch((err, event) => {
                if (err) {
                    // fatal error
                    throw err
                }

                if (event.type === 'buildSuccess') {
                    let bundles = event.bundleGraph.getBundles()
                    update?.status(`✨ Built ${bundles.length} bundles in ${event.buildTime}ms!`)
                } else if (event.type === 'buildFailure') {
                    console.log(event.diagnostics)
                }
            })

            //tailwindProcess = await startWatcher({ update })
            update.done('Started Parcel')
        },

        // Project filesystem watcher
        // watcher: async ({ filename, event, inventory, invoke }) => {
        //   // Act on filesystem events within your project
        // },

        // Shutdown operations
        end: async ({ arc, inventory, invoke }) => {
            // Run operations upon Sandbox shutdown
            update.start('Stopping Parcel...')
            // tailwindProcess.kill()
            await parcelProcess.unsubscribe()
            update.done('Stopped Parcel...')
        },
    },
}
