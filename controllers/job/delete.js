/*
===========================================================================

Description:
Deletes a job

Params
- jobId

===========================================================================
*/

var Jobs = require('../../models/jobs')

exports.index = async (req, res) => {
  Jobs.deleteJob(req.params.jobId, function (err, job) {
    console.log('controller')
    if (err) res.send(err)

    console.log(res)

    res.status(200).send({
      message: 'Deleted Job'
    })
  })
}
