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