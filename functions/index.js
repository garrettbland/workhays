const functions = require('firebase-functions')
const express = require('express')
const app = express()
var layout = require('./_includes/layout')

app.get('/test', (req, res) => {
    res.send(`test---`)
})

app.get('/jobs/:jobId', (req, res) => {
    try {
        const { jobId } = req.params

        res.status(200).send(layout({ jobId: jobId }))
    } catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
})

//     console.log(`job id is ${req.params.jobid}`)
//     const date = new Date()
//     const hours = (date.getHours() % 12) + 1 // London is UTC + 1hr;
//     res.send(`
//     <!doctype html>
//     <head>
//       <title>Time</title>
//       <link rel="stylesheet" href="/style.css">
//       <script src="/script.js"></script>
//     </head>
//     <body>
//       <p>In London, the clock strikes:
//         <span id="bongs">${'BONG '.repeat(hours)}</span></p>
//       <button onClick="refresh(this)">Refresh</button>
//     </body>
//   </html>`)
// })

exports.bigben = functions.https.onRequest(app)

// exports.bigben = functions.https.onRequest((req, res) => {
//     console.log(req.query.jobid)
//     const hours = (new Date().getHours() % 12) + 1 // London is UTC + 1hr;
//     res.status(200).send(`<!doctype html>
//     <head>
//       <title>Time</title>
//     </head>
//     <body>
//       ${'BONG '.repeat(hours)}
//     </body>
//   </html>`)
// })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
