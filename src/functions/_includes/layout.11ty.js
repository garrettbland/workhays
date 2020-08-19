var head = require('./head.11ty.js')

module.exports = (data) => `
<html>
    <head>
        ${head}
    </head>
    <body>
        <h1>Job id: ${JSON.stringify(data.jobId)}</h1>
    </body>
</html>
`
