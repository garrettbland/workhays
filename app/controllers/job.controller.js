var Models = require('../models')
var moment = require('moment')

exports.list_jobs = async (req, res) => {
  try {
    const jobs = await Models.job.findAll({
      where: {
        status: 'active'
      },
      include: Models.employer
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
    console.log('find employer by user_id of' + req.user.id)

    const employer = await Models.employer.findOne({
      where: {
        user_id: req.user.id
      }
    })

    const newJob = await Models.job.create({
      title: req.body.title,
      description: req.body.description,
      job_type: req.body.job_type,
      application_link: req.body.application_link,
      employer_id: employer.dataValues.id,
      status: req.body.status
    })

    if (!newJob) throw 'Job not created'

    res.status(200)
    // res.render('pages/account')
    req.flash('accountMessage', 'New job created successfully')
    res.redirect('/account')
  } catch (err) {
    // res.send(err)
    console.log('Error in create_job')
    res.status(200)
    res.render('error')
  }
}

exports.update_job = async (req, res) => {
  try {
    // get employer
    const employer = await Models.employer.findOne({
      where: {
        user_id: req.user.id
      }
    })

    var job = {
      title: req.body.title,
      description: req.body.description,
      job_type: req.body.job_type,
      application_link: req.body.application_link,
      status: req.body.action_button = 'archived' ? 'archived' : req.body.status
    }

    const update_job = await Models.job.update(job, {
      where: {
        id: req.params.jobId,
        employer_id: employer.id
      }
    })

    if (!update_job) throw 'Job not updated'

    res.status(200)
    // res.render('pages/account', {
    //   updated: true,
    //   update_job
    // })
    req.flash('accountMessage', 'Job updated successfully')
    res.redirect('/account')
  } catch (err) {
    // res.send(err)
    console.log('Error in update_job')
    res.status(200)
    res.render('error')
  }
}

// exports.archive_job = async (req, res) => {
//   try {
//     // get employer
//     const employer = await Models.employer.findOne({
//       where: {
//         user_id: req.user.id
//       }
//     })

//     var job = {
//       status: req.params.status
//     }

//     const update_job = await Models.job.update(job, {
//       where: {
//         id: req.params.jobId,
//         employer_id: employer.id
//       }
//     })

//     if (!update_job) throw 'Job not archived'

//     res.status(200)
//     // res.render('pages/account', {
//     //   updated: true,
//     //   update_job
//     // })
//     req.flash('accountMessage', 'Job archived successfully')
//     res.redirect('/account')
//   } catch (err) {
//     // res.send(err)
//     console.log('Error in update_job')
//     res.status(200)
//     res.render('error')
//   }
// }
