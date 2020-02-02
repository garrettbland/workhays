/*
===========================================================================

Description:
Job controller. Handles all logic and is referrenced from main router

===========================================================================
*/

var Jobs = require('../models/jobs')

exports.get = async (req, res) => {
  Jobs.getJobById(req.params.jobId, function (err, job) {
    console.log('controller')
    if (err) res.send(err)

    if (job.length > 0) {
      // res.send(job)
      console.log('res', job)
      res.render('pages/job', {
        title: job[0].title,
        employer: job[0].employer,
        description: job[0].description,
        created_at: job[0].created_at,
        updated_at: job[0].updated_at
      })
    } else {
      res.status(404)
      res.render('error')
    }
  })
}
