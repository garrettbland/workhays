var Models = require('../models')
var moment = require('moment')
const { Op } = require("sequelize");

exports.list_jobs = async (req, res) => {
    try {
        // total results limit
        const job_limit = 10

        const page = parseInt(req.query.page) - 1 || 0

        console.log(`job limit => ${job_limit}`)

        const jobs = await Models.job.findAndCountAll({
            where: {
                status: 'active',
                created_at: {
                    [Op.gt]: moment.tz(moment(), 'America/Chicago').subtract(14, 'days').endOf('day')
                }
            },
            order: [['createdAt', 'DESC']],
            limit: job_limit,
            offset: parseInt(page * job_limit),
            include: Models.employer,
        })

        if (!jobs) throw 'Jobs not found'

        console.log(jobs)

        // var buildStatus = function(job) {
        //     // expiration is 2 weeks. Check if createdAt is older than two week, set expired instead of inactive for more verbose messages for users

        //     var TWO_WEEKS_OLD = moment
        //         .tz(moment(), 'America/Chicago')
        //         .subtract(14, 'days')
        //         .endOf('day')
        //     var jobCreatedAt = moment.tz(job.createdAt, 'America/Chicago').utc()

        //     if (jobCreatedAt > TWO_WEEKS_OLD) {
        //         return job
        //     }

        // }

        // var formattedJobs = jobs.rows.map(function (job) {
        //     return buildStatus(job)
        // })
        
        res.render('pages/public/index', {
            jobs: jobs.rows,
            count: jobs.count,
            pages: Math.ceil(jobs.count / job_limit),
            current_page: page + 1,
            moment: moment,
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
        const job = await Models.job.findByPk(req.params.jobId, {
            include: Models.employer,
        })

        if (!job) throw 'Job not found'

        res.render('pages/public/job', {
            job: {
                ...job.dataValues,
            },
            moment: moment,
        })
    } catch (err) {
        // res.send(err)
        console.log('Error in get_job')
        res.status(404)
        res.render('error')
    }
}

exports.new_job = (req, res) => {
    res.render('pages/private/new_job')
}

exports.create_job = async (req, res) => {
    try {
        console.log('find employer by user_id of' + req.user.id)

        const employer = await Models.employer.findOne({
            where: {
                user_id: req.user.id,
            },
        })

        const newJob = await Models.job.create({
            title: req.body.title,
            description: req.body.description,
            job_type: req.body.job_type,
            application_link: req.body.application_link,
            employer_id: employer.dataValues.id,
            status: req.body.status,
        })

        if (!newJob) throw 'Job not created'

        res.status(200)
        // res.render('pages/account')
        req.flash('success', 'New job created successfully')
        res.redirect('/admin/jobs')
    } catch (err) {
        // res.send(err)
        req.flash(
            'error',
            'Something went wrong creating job, please try again.'
        )
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
                user_id: req.user.id,
            },
        })

        var job = {
            title: req.body.title,
            description: req.body.description,
            job_type: req.body.job_type,
            application_link: req.body.application_link,
            status:
                req.body.action_button === 'update'
                    ? req.body.status
                    : 'archived',
        }

        const update_job = await Models.job.update(job, {
            where: {
                id: req.params.jobId,
                employer_id: employer.id,
            },
        })

        if (!update_job) throw 'Job not updated'

        res.status(200)
        // res.render('pages/account', {
        //   updated: true,
        //   update_job
        // })

        if (req.body.action_button === 'update') {
            req.flash('success', 'Job updated successfully')
            res.redirect(
                '/admin/jobs/' + req.params.jobId + '?from=/admin/jobs'
            )
        } else {
            req.flash('success', 'Job archived successfully')
            res.redirect('/admin/jobs')
        }
    } catch (err) {
        // res.send(err)
        req.flash('error', 'Something went wrong, please try again.')
        console.log('Error in update_job')
        res.status(200)
        res.render('error')
    }
}

exports.edit_job = async (req, res) => {
    try {
        // get employer
        const employer = await Models.employer.findOne({
            where: {
                user_id: req.user.id,
            },
        })

        const job = await Models.job.findOne({
            where: {
                id: req.params.jobId,
                employer_id: employer.id,
            },
        })

        let enabled
        if (
            job.dataValues.status === 'active' ||
            job.dataValues.status === 'inactive'
        ) {
            enabled = true
        } else {
            enabled = false
        }

        if (job) {
            res.render('pages/private/job', {
                job: job.dataValues,
                enabled: enabled,
            })
        } else {
            res.status(404)
            res.render('error')
        }
    } catch (err) {}
}
