var path = require('path')
// var { Liquid } = require('liquidjs')
// var engine = new Liquid({
//     root: path.join(__dirname, '/_includes'),
// })
var layout = require('./_includes/head.11ty.js')

exports.handler = async (event, context, callback) => {
    try {
        // get the job id from request
        const jobId = event.queryStringParameters.id

        // var body = await engine.renderFile('layout.liquid', {
        //     content: `<h1>Job id: ${jobId}</h1>`,
        // })

        return {
            statusCode: 200,
            body: layout({ jobId: jobId }),
        }
    } catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
}
