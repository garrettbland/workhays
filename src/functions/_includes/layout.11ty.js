var head = require('./head')

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
