var Models = require('../models')
var moment = require('moment')
const { Op } = require('sequelize')

exports.index = async (req, res) => {
    try {
        console.log('FIND EMPLOYER WITH USER ID OF ' + req.user.id)

        // get employer
        const employer = await Models.employer.findOne({
            where: {
                user_id: req.user.id,
            },
        })

        // get employers jobs
        // const jobs = await Models.job.findAll({
        //     where: {
        //         employer_id: employer.id,
        //         [Op.or]: [{ status: 'active' }, { status: 'inactive' }],
        //     },
        // })

        const jobs = await Models.job.count({
            where: {
                employer_id: employer.id,
                [Op.or]: [{ status: 'active' }, { status: 'inactive' }],
            },
        })

        if (!jobs) throw 'Jobs not found'

        console.log(jobs)

        // var formattedJobs = jobs.map(function (job) {
        //     return {
        //         ...job.dataValues,
        //         updatedAt: moment
        //             .utc(job.dataValues.updatedAt)
        //             .local()
        //             .format('MM/DD/YYYY, h:mm a'),
        //     }
        // })

        // console.log('======> EMPLOYER JOBS =====>')

        res.render('pages/private/dashboard', {
            totalJobs: jobs,
            message: req.flash('accountMessage'),
        })
    } catch (err) {
        console.log('Error in list_jobs')
        console.log(err)
        res.status(404)
        res.render('error')
    }
}

exports.jobs = async (req, res) => {
    try {

        // get jobs

        // get employer
        const employer = await Models.employer.findOne({
            where: {
                user_id: req.user.id,
            },
        })

        // get employers jobs
        const jobs = await Models.job.findAll({
            where: {
                employer_id: employer.id,
                [Op.or]: [{ status: 'active' }, { status: 'inactive' }],
            },
            order: [
                ['createdAt', 'DESC']
            ],
        })

        if (!jobs) throw 'Jobs not found'

        res.render('pages/private/jobs', {
            jobs: jobs
        })


    } catch (err) {
        console.log(err)
        res.render('error')
    }
}

exports.business = async (req, res) => {
    try {

        // get employer
        const employer = await Models.employer.findOne({
            where: {
                user_id: req.user.id,
            },
        })

        res.render('pages/private/business', {
            employer: employer.dataValues
        })

    } catch (err) {
        console.log(err)
        res.render('error')
    }
}

exports.profile = async (req, res) => {
    try {

        res.render('pages/private/profile', {
            
        })

    } catch (err) {
        console.log(err)
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
            res.render('pages/private/joblistingedit', {
                job: job.dataValues,
                enabled: enabled,
            })
        } else {
            res.status(404)
            res.render('error')
        }
    } catch (err) {}
}

exports.list_archived_jobs = async (req, res) => {
    try {
        // get employer
        const employer = await Models.employer.findOne({
            where: {
                user_id: req.user.id,
            },
        })

        // get employers jobs
        const jobs = await Models.job.findAll({
            where: {
                employer_id: employer.id,
                [Op.or]: [{ status: 'archived' }, { status: 'filled' }],
            },
        })

        if (!jobs) throw 'Jobs not found'

        var formattedJobs = jobs.map(function (job) {
            return {
                ...job.dataValues,
                updatedAt: moment
                    .utc(job.dataValues.updatedAt)
                    .local()
                    .format('MM/DD/YYYY, h:mm a'),
            }
        })

        console.log('======> EMPLOYER JOBS =====>')
        console.log(jobs)

        res.render('pages/private/joblistingarchive', {
            jobs: formattedJobs,
        })
    } catch (err) {
        console.log('Error in list_archived_jobs')
        console.log(err)
        res.status(404)
        res.render('error')
    }
}
