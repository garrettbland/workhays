var Models = require('../models')
var path = require('path')
var env = process.env.NODE_ENV || 'development'
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]
const uuidv1 = require('uuid/v1')
var bCrypt = require('bcrypt-nodejs')

exports.signup = function(req, res) {
    res.render('pages/public/signup', {
        message: req.flash('error'),
    })
}

exports.signin = function(req, res) {
    res.render('pages/public/signin')
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/signin')
    })
}

exports.password_reset = async (req, res) => {
    try {
        // Make sure user exists in db
        const user = await Models.user.findOne({
            where: {
                email: req.body.email,
            },
        })

        if (!user) {
            console.log('=====> USER NOT FOUND')
            throw 'User not found'
        }

        // update user with random token and expiration date
        let random_token = uuidv1()
        let tomorrow = new Date()
        let expires = tomorrow.setDate(tomorrow.getDate() + 1)

        let updated_fields = {
            password_reset_token: random_token,
            password_reset_token_expires: expires,
        }

        const update_user = await Models.user.update(updated_fields, {
            where: {
                email: req.body.email,
            },
        })

        if (!update_user) {
            console.log('=====> USER NOT UPDATED')
            throw 'User not updated'
        }

        var api_key = config.mailgun_api_key
        var domain = 'mg.workhays.com'
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })

        var data = {
            from: 'Work Hays <support@workhays.com>',
            to: req.body.email,
            subject: 'Password Reset',
            text: `Click here to reset your password. ${process.NODE_ENV === 'production' ? 'https://workhays.com' : 'http://localhost:3000'}/password-update?token=${random_token}. This will expire in 24 hours`,
        }

        mailgun.messages().send(data, function(error, body) {
            console.log(body)
        })

        res.status(200)
        req.flash(
            'success',
            'An email has been sent to your email account with instructions'
        )
        res.redirect('/password-reset')
    } catch (err) {
        console.log('Error in password_reset =====>')
        console.log(err)
        res.status(200)
        res.render('error')
    }
}

exports.password_update = async (req, res) => {
    try {
        if (!req.query.token) throw 'Token not found'

        // Make sure user exists in db and token matches
        const user = await Models.user.findOne({
            where: {
                password_reset_token: req.query.token,
            },
        })

        if (!user) {
            console.log('=====> USER NOT FOUND')
            throw 'User not found'
        }

        const now = new Date()
        const expires = user.dataValues.password_reset_token_expires

        if (now < expires) {
            console.log('user can reset password ===>')
            res.status(200)
            res.render('pages/public/passwordupdate', {
                token: req.query.token,
            })
        } else {
            console.log('token is expired ===>')
            throw 'Token expired'
        }
    } catch (err) {
        console.log('Error in password update ===>')
        res.status(404)
        res.render('error')
    }
}

exports.change_password = async (req, res) => {
    try {
        // Make sure user exists in db and token matches
        const user = await Models.user.findOne({
            where: {
                password_reset_token: req.body.token,
            },
        })

        if (!user) throw 'User not found'

        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
        }

        var userPassword = generateHash(req.body.password)

        let updated_fields = {
            password: userPassword,
            password_reset_token: null,
            password_reset_token_expires: null,
        }

        const updated_user = await Models.user.update(updated_fields, {
            where: {
                email: user.dataValues.email,
            },
        })

        if (!updated_user) throw 'Password not updated'

        if (updated_user) {
            res.status(200)
            res.redirect('/signin?password_update=true')
        }
    } catch (err) {
        console.log(err.message)
        console.log('Error in change password ===>')
        res.status(404)
        res.render('error')
    }
}

exports.change_email = async (req, res) => {
    try {
        const user = await Models.user.findOne({
            where: {
                email: req.body.user_email,
            },
        })

        if (user) {
            throw 'Email is already in use. Please try again with a different email.'
        }

        console.log('changing email! =====>')
        console.log(req.body.user_email)

        let updated_fields = {
            email: req.body.user_email,
        }

        const updated_user = await Models.user.update(updated_fields, {
            where: {
                id: req.user.id,
            },
        })

        if (!updated_user) {
            req.flash('error', 'Email not updated. Please try again.')
            res.redirect('/admin/profile')
        }

        req.flash('success', 'Profile updated successfully')
        res.redirect('/admin/profile')
    } catch (err) {
        req.flash('error', err)
        console.log('Error in change email')
        console.log(err)
        res.redirect('/admin/profile')
    }
}
