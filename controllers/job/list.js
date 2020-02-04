/*
===========================================================================

Description:
Gets all jobs

To Do:
- Pagination

===========================================================================
*/

var Jobs = require('../../models/jobs')
var moment = require('moment')

exports.index = async (req, res) => {
  Jobs.getAllJobs(function (err, jobs) {
    console.log('controller')
    if (err) res.send(err)
    console.log('res', jobs)

    // loops through jobs and formats updated_at. Returns new array with map
    var formattedJobs = jobs.map(function (job) {
      return {
        ...job,
        updated_at: moment
          .utc(job.updated_at)
          .local()
          .format('MM/DD/YYYY, h:mm a')
      }
    })

    // res.send(job)
    res.render('pages/index', {
      title: 'Express',
      jobs: formattedJobs
    })
  })
}
