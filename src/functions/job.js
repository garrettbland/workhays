var path = require('path')
var { Liquid } = require('liquidjs')
var engine = new Liquid({
    root: path.resolve(__dirname, '../_includes'),
    extname: '.liquid',
})

// const layout = require('../_layouts/default.liquid')
// const head = require('../_includes/head.liquid')

exports.handler = async (event, context, callback) => {
    try {
        // engine
        //     .parseAndRender('{{name | capitalize}}', { name: 'lucy' })
        //     .then(console.log)

        var body = await engine.renderFile('layout', {
            content: '<h1>Test</h1>',
        })

        return {
            statusCode: 200,
            body: body,
        }
    } catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
}
