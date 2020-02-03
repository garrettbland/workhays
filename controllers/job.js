/*
===========================================================================

Description:
Job controller. Handles all logic and is referrenced from main router

===========================================================================
*/

var Jobs = require('../models/jobs')
var moment = require('moment')

exports.get = async (req, res) => {
  Jobs.getJobById(req.params.jobId, function (err, job) {
    console.log('controller')
    if (err) res.send(err)

    if (job.length > 0) {
      // res.send(job)
      console.log('res', job)

      res.render('pages/job', {
        job: {
          ...job[0],
          updated_at: moment
            .utc(job[0].created_at)
            .local()
            .format('MM/DD/YYYY, h:mm a')
        }
      })
    } else {
      res.status(404)
      res.render('error')
    }
  })
}
