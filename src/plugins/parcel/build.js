/**
 * Parcel process for building for production
 */

const build = async (config) => {
    const { update, bundler } = config

    update.start(`Starting ${process.env.PARCEL_MODE} build...`)

    try {
        let { bundleGraph, buildTime } = await bundler.run()
        let bundles = bundleGraph.getBundles()
        update.status(`Built ${bundles.length} bundles in ${buildTime}ms!`)
    } catch (err) {
        update.error(err.diagnostics)
    } finally {
        update.done(`Completed bundling JS assets for production...`)
    }
}

module.exports = {
    build,
}
