var path = require('path')
var { Liquid } = require('liquidjs')
var engine = new Liquid({
    root: path.resolve(__dirname, './_includes'),
    extname: '.liquid',
})

exports.handler = async (event, context, callback) => {
    try {
        // get the job id from request
        const path = event.queryStringParameters.id.replace('/', '')

        var body = await engine.renderFile('layout', {
            content: `<h1>Job id: ${path}</h1>`,
        })

        return {
            statusCode: 200,
            body: body,
        }
    } catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
}
