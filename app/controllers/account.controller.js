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

        const jobs = await Models.job.findAll({
            where: {
                employer_id: employer.id,
            },
        })

        if (!jobs) throw 'Jobs not found'

        var TWO_WEEKS_OLD = moment
            .tz(moment(), 'America/Chicago')
            .subtract(14, 'days')
            .endOf('day')

        var totalActiveJobs = jobs.filter(function(job) {
            var jobCreatedAt = moment.tz(job.renewed, 'America/Chicago').utc()
            if (job.status === 'active') {
                if (jobCreatedAt >= TWO_WEEKS_OLD) {
                    return job
                } else {
                    return null
                }
            } else {
                return null
            }
        })

        var totalExpiredJobs = jobs.filter(function(job) {
            var jobRenewed = moment.tz(job.renewed, 'America/Chicago').utc()
            if (job.status === 'active') {
                if (jobRenewed <= TWO_WEEKS_OLD) {
                    return job
                } else {
                    return null
                }
            } else {
                return null
            }
        })

        var checkIfEmployerSetup = function(employer) {
            if (
                !employer.title ||
                !employer.contact ||
                !employer.description ||
                !employer.email ||
                !employer.phone
            ) {
                return false
            } else {
                return true
            }
        }

        res.render('pages/private/dashboard', {
            activeJobs: totalActiveJobs.length,
            expiredJobs: totalExpiredJobs.length,
            employerSetup: checkIfEmployerSetup(employer.dataValues),
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
                [Op.or]: [
                    { status: 'active' },
                    { status: 'inactive' },
                    { status: 'archived' },
                ],
            },
            order: [['createdAt', 'DESC']],
        })

        if (!jobs) throw 'Jobs not found'

        var buildStatus = function (job) {
            if (job.status === 'archived') {
                return null
            } else {
                if (job.renewed > moment.tz(moment(), 'America/Chicago').subtract(14, 'days').endOf('day')) {
                    return 'active'
                } else {
                    return 'expired'
                }
            }
        }

        var formattedJobs = jobs.map(function(job) {
            return {
                ...job.dataValues,
                formattedStatus: buildStatus(job.dataValues),
            }
        })

        res.render('pages/private/jobs', {
            jobs: formattedJobs,
            employer: employer,
            moment: moment,
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
            employer: employer.dataValues,
        })
    } catch (err) {
        console.log(err)
        res.render('error')
    }
}

exports.profile = async (req, res) => {
    try {
        res.render('pages/private/profile', {})
    } catch (err) {
        console.log(err)
        res.render('error')
    }
}
