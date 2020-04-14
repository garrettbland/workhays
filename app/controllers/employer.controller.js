var Models = require('../models')

exports.list_employers = async (req, res) => {
    try {
        // total results limit
        const employer_limit = 20

        const page = parseInt(req.query.page) - 1 || 0

        console.log(`employer limit => ${employer_limit}`)

        const employers = await Models.employer.findAndCountAll({
            where: {},
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
        const employer = await Models.employer.findByPk(req.params.employerId)

        if (!employer) throw 'Employer not found'

        res.render('pages/public/employer', {
            req: req,
            employer: employer.dataValues,
        })
    } catch (err) {
        // res.send(err)
        console.log('Error in get_employer')
        res.status(404)
        res.render('error')
    }
}

exports.update_employer = async (req, res) => {
    try {
        var employer = {
            title: req.body.title,
            description: req.body.description,
            contact: req.body.contact,
            email: req.body.email,
            phone: req.body.phone,
            logo_url: req.body.logo_url,
            website_url: req.body.website_url,
            facebook_url: req.body.facebook_url,
            twitter_url: req.body.twitter_url,
        }

        const update_employer = await Models.employer.update(employer, {
            where: {
                id: req.params.employerId,
                user_id: req.user.id,
            },
        })

        if (!update_employer) throw 'Employer not updated'

        res.status(200)
        // res.render('pages/account', {
        //   updated: true,
        //   update_job
        // })
        req.flash('accountMessage', 'Employer updated successfully')
        res.redirect('/admin/business')
    } catch (err) {
        // res.send(err)
        console.log('Error in update_employer')
        res.status(200)
        res.render('error')
    }
}
