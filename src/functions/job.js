var path = require('path')
// var { Liquid } = require('liquidjs')
// var engine = new Liquid({
//     root: path.join(__dirname, '/_includes'),
// })
var layout = require('./_includes/layout.11ty.js')

exports.handler = async (event, context, callback) => {
    try {
        // get the job id from request
        //const jobId = event.queryStringParameters.id

        // gets the job id from request
        // netlify dev and prod work differently, idk why
        // has to deal with redirects
        const jobId = event.queryStringParameters.id
            ? event.queryStringParameters.id
            : event.path.split('/')[2]

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
