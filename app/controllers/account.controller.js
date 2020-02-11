var Models = require('../models')
var moment = require('moment')

exports.index = async (req, res) => {
  try {
    console.log('FIND EMPLOYER WITH USER ID OF ' + req.user.id)

    // get employer
    const employer = await Models.employer.findOne({
      where: {
        user_id: req.user.id
      }
    })

    // get employers jobs
    const jobs = await Models.job.findAll({
      where: {
        employer_id: employer.id
      }
    })

    if (!jobs) throw 'Jobs not found'

    var formattedJobs = jobs.map(function (job) {
      return {
        ...job.dataValues,
        updatedAt: moment
          .utc(job.dataValues.updatedAt)
          .local()
          .format('MM/DD/YYYY, h:mm a')
      }
    })

    console.log('======> EMPLOYER JOBS =====>')
    console.log(jobs)

    res.render('pages/account', {
      employer: employer.dataValues,
      jobs: formattedJobs,
      message: req.flash('accountMessage')
    })
  } catch (err) {
    console.log('Error in list_jobs')
    console.log(err)
    res.status(404)
    res.render('error')
  }
}

exports.edit_job = async (req, res) => {
  try {
    // get employer
    const employer = await Models.employer.findOne({
      where: {
        user_id: req.user.id
      }
    })

    const job = await Models.job.findOne({
      where: {
        id: req.params.jobId,
        employer_id: employer.id
      }
    })

    if (job) {
      res.render('pages/joblistingedit', {
        job: job.dataValues
      })
    } else {
      res.status(404)
      res.render('error')
    }
  } catch (err) {}
}
