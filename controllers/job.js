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
<<<<<<< HEAD
        title: job[0].title,
        employer: job[0].employer,
        description: job[0].description,
        created_at: job[0].created_at,
        updated_at: job[0].updated_at
=======
        title: job[0].title
>>>>>>> 9fde590e56655415f23518d176b3a43eca7997e0
      })
    } else {
      res.status(404)
      res.render('error')
    }
  })
}
