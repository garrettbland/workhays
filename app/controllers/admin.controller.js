var Models = require('../models')
var path = require('path')
var env = process.env.NODE_ENV || 'development'
var moment = require('moment-timezone')
const { Op } = require('sequelize')
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]
var exec = require('child_process').exec

exports.get_users = async (req, res) => {
    try {
        // defaults
        const users_limit = req.query.limit || 100
        const page = parseInt(req.query.page) - 1 || 0

        // get users
        const users = await Models.user.findAndCountAll({
            order: [['last_name', 'DESC']],
            limit: users_limit,
            offset: parseInt(page * users_limit),
            include: Models.employer,
        })

        res.status(200).json({
            meta: {
                limit: users_limit,
                count: users.count,
                pages: Math.ceil(users.count / users_limit),
                current_page: page + 1,
            },
            data: users.rows,
        })
    } catch (err) {
        console.log(err)
        res.status(404).render('error')
    }
}

exports.update_user = async (req, res) => {
    try {
        const user_obj = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            status: req.body.status,
            role: req.body.role,
        }

        const update_user = await Models.user.update(user_obj, {
            where: {
                id: req.params.userId,
            },
        })

        if (!update_user) throw 'Update failed'

        // get updated user
        const updated_user_record = await Models.user.findByPk(
            req.params.userId
        )

        var api_key = config.mailgun_api_key
        var domain = 'mg.workhays.com'
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })

        var data = {
            from: 'Work Hays <support@workhays.com>',
            to: updated_user_record.dataValues.email,
            subject: 'Work Hays Account Status Update',
            html: `
                <p>Hello,</p>
                <p>Your Work Hays account has been updated to <i>${
                    updated_user_record.dataValues.status
                }.</i></p>
                ${
                    updated_user_record.dataValues.status === 'verified'
                        ? '<p>You may now login and post jobs to Work Hays.</p>'
                        : ''
                }
                ${
                    updated_user_record.dataValues.status === 'locked'
                        ? '<p>Please contact us if you believe there has been an error on our end to re-validate your account.</p>'
                        : ''
                }
                <p>Thank you,</p>
                <p>Work Hays<br>support@workhays.com</p>
            `,
        }

        // send the email
        mailgun.messages().send(data, function(error, body) {
            console.log(body)
        })

        res.status(200).json({
            code: 1,
            data: updated_user_record.dataValues,
        })
    } catch (err) {
        console.log(err)
        res.status(404).render('error')
    }
}

exports.create_employer = async (req, res) => {
    try {
        let body = req.body

        let new_employer = await Models.employer.create(body)

        if (!new_employer) throw 'New employer not created'

        res.status(201).json({
            data: new_employer,
        })
    } catch (err) {
        res.status(500).json({
            error: 500,
            message: err,
        })
    }
}

exports.get_employers = async (req, res) => {
    try {
        // defaults
        const limit = req.query.limit || 100
        const page = parseInt(req.query.page) - 1 || 0

        // get users
        const employers = await Models.employer.findAndCountAll({
            order: [['title', 'DESC']],
            limit: limit,
            offset: parseInt(page * limit),
        })

        res.status(200).json({
            meta: {
                limit: limit,
                count: employers.count,
                pages: Math.ceil(employers.count / limit),
                current_page: page + 1,
            },
            data: employers.rows,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 500,
            message: err,
        })
    }
}

exports.update_employer = async (req, res) => {
    try {
        const employer_obj = {
            user_id: req.body.user_id,
            title: req.body.title,
            description: req.body.description,
            contact: req.body.contact,
            email: req.body.email,
            phone: req.body.phone,
            website_url: req.body.website_url,
            facebook_url: req.body.facebook_url,
            twitter_url: req.body.twitter_url,
            instagram_url: req.body.instagram_url,
            youtube_url: req.body.youtube_url,
        }

        const update_employer = await Models.employer.update(employer_obj, {
            where: {
                id: req.params.employerId,
            },
        })

        if (!update_employer) throw 'Update failed'

        res.status(200).json({
            code: 1,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 500,
            message: err,
        })
    }
}

/**
 * Jobs API
 */

exports.create_job = async (req, res) => {
    try {
        let body = req.body

        let new_job = await Models.job.create(body)

        if (!new_job) throw 'New job not created'

        res.status(201).json({
            data: new_job,
        })
    } catch (err) {
        res.status(500).json({
            error: 500,
            message: err,
        })
    }
}

exports.get_jobs = async (req, res) => {
    try {
        // defaults
        const limit = req.query.limit || 100
        const page = parseInt(req.query.page) - 1 || 0

        // get users
        const jobs = await Models.job.findAndCountAll({
            order: [['title', 'DESC']],
            limit: limit,
            offset: parseInt(page * limit),
        })

        res.status(200).json({
            meta: {
                limit: limit,
                count: jobs.count,
                pages: Math.ceil(jobs.count / limit),
                current_page: page + 1,
            },
            data: jobs.rows,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 500,
            message: err,
        })
    }
}

exports.update_job = async (req, res) => {
    try {
        const job_obj = {
            title: req.body.title,
            job_type: req.body.job_type,
            description: req.body.description,
            application_link: req.body.application_link,
            status: req.body.status,
            employer_id: req.body.employer_id,
        }

        const update_job = await Models.job.update(job_obj, {
            where: {
                id: req.params.jobId,
            },
        })

        if (!update_job) throw 'Update failed'

        res.status(200).json({
            code: 1,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 500,
            message: err,
        })
    }
}

/**
 * Sends email reminder that job has expired
 */

exports.sendExpiredEmail = async (req, res) => {
    try {
        var api_key = config.mailgun_api_key
        var domain = 'mg.workhays.com'
        var mailgun = require('mailgun-js')({
            apiKey: api_key,
            domain: domain,
        })

        /**
         * My thought process on how to make this work...
         */
        // example renewed date -> 5-8-2020
        // api is ran on -> 5-19-2020
        // api gets date 14 days ago -> 5-5-2020
        // api fetches posts between begennings of 5-5-2020 and end of 5-5-2020

        //moment.tz(moment(), 'America/Chicago').subtract(14, 'days').endOf('day')
        let todaysDate = moment.tz(moment(), 'America/Chicago')
        let twoWeeksAgoDate = moment(todaysDate).subtract(14, 'days')
        let twoWeeksAgoDate_start = moment(todaysDate)
            .subtract(14, 'days')
            .startOf('day')
        let twoWeeksAgoDate_end = moment(todaysDate)
            .subtract(14, 'days')
            .endOf('day')

        let twoWeekOldJobs = await Models.job.findAll({
            where: {
                status: 'active',
                [Op.and]: [
                    {
                        renewed: {
                            [Op.gt]: twoWeeksAgoDate_start,
                        },
                    },
                    {
                        renewed: {
                            [Op.lt]: twoWeeksAgoDate_end,
                        },
                    },
                ],
            },
            include: [
                {
                    model: Models.employer,
                    where: {
                        user_id: {
                            [Op.ne]: 'unclaimed',
                        },
                    },
                    include: [
                        {
                            model: Models.user,
                        },
                    ],
                },
            ],
        })

        if (twoWeekOldJobs.length > 0) {
            twoWeekOldJobs.forEach(job => {
                console.log(
                    `Send an email about job ${job.title} to ${job.employer.user.email} -> /admin/jobs/${job.id}`
                )

                var data = {
                    from: 'Work Hays <no-reply@workhays.com>',
                    to: job.employer.user.email,
                    subject: 'Expired Job Notice',
                    html: `
                <p>Hello,</p>
                <p>
                    This is an automated message to let you know that your position, ${job.title}, has expired.
                </p>
                <p>
                    Please <a href="https://workhays.com/signin">signin</a> to your account to renew your job opening for an additional two
                    weeks. Until then, your position will not be viewable to the public from Work Hays.
                </p>
                <p>
                    If you have any questions, please contact us at support@workhays.com
                </p>
                <p>Thank you,</p>
                <p>Work Hays<br>support@workhays.com</p>
            `,
                }

                // send the email
                mailgun.messages().send(data, function(error, body) {
                    console.log(body)
                })
            })
        }

        /**
         * Can remove whenever, just set this up to make sure reminder is working
         */
        mailgun.messages().send({
            from: 'Work Hays <no-reply@workhays.com>',
            to: 'gmorganbland@gmail.com',
            subject: 'Expired Job Notice',
            html: `Cron job is performing normally. Sent expired email alert to ${
                twoWeekOldJobs.length ? twoWeekOldJobs.length : `0`
            } employers`,
        })

        let response = {
            todaysDate: todaysDate,
            twoWeeksAgoDate: twoWeeksAgoDate,
            message: `Cron job is performing normally. Sent expired email alert to ${
                twoWeekOldJobs.length ? twoWeekOldJobs.length : `0`
            } employers`,
        }

        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 500,
            message: err,
        })
    }
}

exports.create_db_backup = (req, res) => {
    try {
        /**
         * Create backup file name
         */
        let todays_date = moment
            .tz(moment(), 'America/Chicago')
            .format('MM-DD-YYYY')
        let filename = `workhays_db_dump_${todays_date}.sql`

        /**
         * Command to run
         */
        let command = `mysqldump
            -u ${config.username}
            -p ${config.database}
            --host ${config.host}
            --password="${config.password}"
            > ${filename}
        `

        /**
         * Exectute command
         */
        exec(command, (error, stdout, stderr) => {
            if (error) {
                res.status(500).json({
                    message: `Something went wrong making the backup`,
                    details: stderr,
                })
            }

            res.status(200).json({
                message: `successfully created backup`,
                details: filename,
            })
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 500,
            message: err,
        })
    }
}
