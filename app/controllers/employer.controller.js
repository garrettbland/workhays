var Models = require('../models')
const multer = require('multer')
var path = require('path')
const { Op } = require('sequelize')
var moment = require('moment-timezone')

exports.list_employers = async (req, res) => {
    try {
        // total results limit
        const employer_limit = 20

        const page = parseInt(req.query.page) - 1 || 0

        const employers = await Models.employer.findAndCountAll({
            where: {
                title: {
                    [Op.ne]: null,
                },
            },
            order: [['title', 'ASC']],
            limit: employer_limit,
            offset: parseInt(page * employer_limit),
        })

        // const employers = await Models.employer.findAll()

        if (!employers) throw 'Employers not found'

        res.render('pages/public/employers', {
            employers: employers.rows,
            count: employers.count,
            pages: Math.ceil(employers.count / employer_limit),
            current_page: page + 1,
        })
    } catch (err) {
        // res.send(err)
        console.log('Error in get_employers')
        console.log(err)
        res.status(200)
        res.render('error')
    }
}

exports.get_employer = async (req, res) => {
    try {
        const employer = await Models.employer.findAndCountAll({
            where: {
                id: req.params.employerId,
            },
            include: {
                model: Models.job,
                required: false,
                where: {
                    renewed: {
                        [Op.gt]: moment
                            .tz(moment(), 'America/Chicago')
                            .subtract(14, 'days')
                            .endOf('day'),
                    },
                },
                // order: [['renewed', 'DESC']],
            },
            order: [[Models.job, 'renewed', 'DESC']],
            limit: 1,
        })

        console.log(employer)

        if (employer.count === 0) throw 'Employer not found'

        const validateUrl = value => {
            return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                value
            )
        }

        res.render('pages/public/employer', {
            req: req,
            moment: moment,
            job_count: employer.rows[0].jobs ? employer.rows[0].jobs.length : 0,
            employer: {
                ...employer.rows[0].dataValues,
                website_url: employer.rows[0].website_url
                    ? validateUrl(employer.rows[0].website_url)
                        ? employer.rows[0].website_url
                        : 'http://' + employer.rows[0].website_url
                    : null,
            },
        })
    } catch (err) {
        // res.send(err)
        console.log('Error in get_employer')
        console.log(err)
        res.status(404)
        res.render('error')
    }
}

exports.update_employer = async (req, res) => {
    try {
        // define storage location for images
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'public/uploads/employers/')
            },

            // By default, multer removes file extensions so let's add them back
            filename: function (req, file, cb) {
                cb(null, Date.now() + path.extname(file.originalname))
            },
        })

        const imageFilter = function (req, file, cb) {
            // Accept images only
            if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
                req.fileValidationError = 'Only image files are allowed!'
                return cb(new Error('Only image files are allowed!'), false)
            }
            cb(null, true)
        }

        let upload = await multer({
            storage: storage,
            fileFilter: imageFilter,
            limits: { fileSize: 1 * 1024 * 1024 },
        }).single('logo_url')

        upload(req, res, async function (err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any

            if (req.fileValidationError) {
                req.flash(
                    'error',
                    'File must be image type (jpg, jpeg, png) and less than 1MB in size. Please try again.'
                )
                return res.redirect('/admin/business')
            }
            // else if (!req.file) {
            //     req.flash('error', 'File must be image type (jpg, jpeg, png) and less than 1MB in size, please try again.')
            //     console.log(req.file)
            //     return res.redirect('/admin/business')
            // }
            else if (err instanceof multer.MulterError) {
                req.flash(
                    'error',
                    'File must be image type (jpg, jpeg, png) and less than 1MB in size. Please try again.'
                )
                return res.redirect('/admin/business')
            } else if (err) {
                req.flash(
                    'error',
                    'Something went wrong updating your business profile. Please try again or contact us.'
                )
            }

            if (!req.file) {
                var employer = {
                    title: req.body.title,
                    description: req.body.description,
                    contact: req.body.contact,
                    email: req.body.email,
                    phone: req.body.phone,
                    website_url: req.body.website_url,
                    facebook_url: req.body.facebook_url,
                    twitter_url: req.body.twitter_url,
                }
            } else {
                var employer = {
                    title: req.body.title,
                    description: req.body.description,
                    contact: req.body.contact,
                    email: req.body.email,
                    phone: req.body.phone,
                    logo_url: req.file.path,
                    website_url: req.body.website_url,
                    facebook_url: req.body.facebook_url,
                    twitter_url: req.body.twitter_url,
                }
            }

            const update_employer = await Models.employer.update(employer, {
                where: {
                    id: req.params.employerId,
                    user_id: req.user.id,
                },
            })

            if (!update_employer) throw 'Employer not updated'

            res.status(200)
            req.flash('success', 'Employer updated successfully')
            res.redirect('/admin/business')

            // Display uploaded image for user validation
            // res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
        })
    } catch (err) {
        // res.send(err)
        req.flash('error', 'Something went wrong, please try again.')
        console.log('Error in update_employer')
        res.status(200)
        res.render('error')
    }
}
