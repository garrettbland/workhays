var Models = require('../models')
var moment = require('moment')

exports.list_jobs = (req, res) => {
  Models.job.findAll().then(jobs => {
    // loops through jobs and formats updatedAt. Returns new array with map
    var formattedJobs = jobs.map(function (job) {
      return {
        ...job.dataValues,
        updatedAt: moment
          .utc(job.dataValues.updatedAt)
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
