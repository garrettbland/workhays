var Models = require('../models')
var moment = require('moment')
const { Op } = require('sequelize')

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
            data: users.rows
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
            role: req.body.role
        }

        const update_user = await Models.user.update(user_obj, {
            where: {
                id: req.params.userId,
            },
        })

        if (!update_user) throw 'Update failed'

        res.status(200).json({
            code: 1,
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
            data: new_employer
        })


    } catch (err) {
        res.status(500).json({
            error: 500,
            message: err
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
            data: employers.rows
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 500,
            message: err
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
            youtube_url: req.body.youtube_url
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
            message: err
        })
    }
}