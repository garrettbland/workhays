/**
 * Parcel process for bundling for development
 */

const startWatcher = async (config) => {
    const { update, bundler } = config

    update.start('Starting Watcher...')

    const parcelProcess = await bundler.watch((err, event) => {
        update.start(`Rebuilding...`)

        if (err) {
            // fatal error
            throw err
        }

        if (event.type === 'buildSuccess') {
            let bundles = event.bundleGraph.getBundles()
            update.done(`Built ${bundles.length} bundles in ${event.buildTime}ms!`)
        } else if (event.type === 'buildFailure') {
            console.log(event.diagnostics)
        }
    })

    update.done('Started Watcher...')

    return parcelProcess
}

module.exports = {
    startWatcher,
}
