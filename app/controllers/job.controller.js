var Models = require('../models')
var moment = require('moment')

exports.list_jobs = async (req, res) => {
  try {
    // user object
    console.log(req.user)

    const jobs = await Models.job.findAll()

    console.log(jobs)

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

    res.render('pages/index', {
      title: 'Express',
      jobs: formattedJobs
    })
  } catch (err) {
    console.log('Error in list_jobs')
    console.log(err)
    res.status(404)
    res.render('error')
  }
}

exports.get_job = async (req, res) => {
  try {
    const job = await Models.job.findByPk(req.params.jobId)

    if (!job) throw 'Job not found'

    res.render('pages/job', {
      job: {
        ...job.dataValues,
        updatedAt: moment
          .utc(job.dataValues.updatedAt)
          .local()
          .format('MM/DD/YYYY, h:mm a')
      }
    })
  } catch (err) {
    // res.send(err)
    console.log('Error in get_job')
    res.status(404)
    res.render('error')
  }
}

exports.create_job = async (req, res) => {
  try {
    const employer = await Models.employer.findOne({
      user_id: req.user.id
    })

    const newJob = await Models.job.create({
      title: req.body.title,
      description: req.body.description,
      employer_id: employer.id
    })

    if (!newJob) throw 'Job not created'

    res.status(201)
    res.render('pages/account')
  } catch (err) {
    // res.send(err)
    console.log('Error in create_job')
    res.status(200)
    res.render('error')
  }
}

exports.update_job = async (req, res) => {
  try {
    var job = {
      title: req.body.title,
      description: req.body.description,
      employer: req.body.employer
    }

    const update_job = await Models.job.update(
      {
        job
      },
      {
        where: {
          id: req.params.jobId
        }
      }
    )

    if (!update_job) throw 'Job not updated'

    res.status(200)
    res.render('pages/account', {
      updated: true,
      update_job
    })
  } catch (err) {
    // res.send(err)
    console.log('Error in update_job')
    res.status(200)
    res.render('error')
  }
}

exports.delete_job = async (req, res) => {
  try {
    const delete_job = await Models.job.update(
      {
        deleted: true
      },
      {
        where: {
          id: req.params.jobId
        }
      }
    )

    if (!delete_job) throw 'Job not deleted'

    res.status(201)
    res.render('pages/account')
  } catch (err) {
    // res.send(err)
    console.log('Error in delete_job')
    res.status(200)
    res.render('error')
  }
}
