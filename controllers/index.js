/*
===========================================================================

Description:
Index controller

To Do:
- Review if this is even needed. Added here initially for testing.

===========================================================================
*/

var Jobs = require('../models/jobs')

exports.list = async (req, res) => {
  Jobs.getAllJobs(function (err, jobs) {
    console.log('controller')
    if (err) res.send(err)
    console.log('res', jobs)

    // res.send(job)
    res.render('pages/index', {
      title: 'Express',
      jobs: jobs
    })
  })
}
