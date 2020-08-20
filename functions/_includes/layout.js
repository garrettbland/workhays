var head = require('./head')

module.exports = (data) => /*html*/ `
<html>
    <head>
        ${head}
    </head>
    <body>
        <h1>Job id: <span class="text-orange-500">${JSON.stringify(
            data.jobId
        )}</span></h1>
    </body>
</html>
`
