var Models = require('../models')

exports.list_unclaimed_employers = async (req, res) => {
    try {
        // total results limit
        const employer_limit = 20

        const page = parseInt(req.query.page) - 1 || 0

        const employers = await Models.employer.findAndCountAll({
            where: {
                user_id: 'unclaimed'
            },
            order: [['title', 'ASC']],
            limit: employer_limit,
            offset: parseInt(page * employer_limit),
        })

        // const employers = await Models.employer.findAll()

        if (!employers) throw 'Employers not found'

        res.render('pages/public/claim', {
            employers: employers.rows,
            count: employers.count,
            pages: Math.ceil(employers.count / employer_limit),
            current_page: page + 1,
        })
    } catch (err) {
        // res.send(err)
        console.log('Error in list_unclaimed_employers')
        console.log(err)
        res.status(200)
        res.render('error')
    }
}

exports.get_unclaimed_employer = async (req, res) => {
    try {
        const employer = await Models.employer.findAll({
            where: {
                id: req.params.employerId,
                user_id: 'unclaimed'
            },
            limit: 1
        })

        if (!employer[0]) throw 'Employer not found'

        console.log(employer)

        res.render('pages/public/claim_employer', {
            req: req,
            employer: employer[0],
        })
    } catch (err) {
        // res.send(err)
        console.log(err)
        console.log('Error in get_unclaimed_employer')
        res.status(404)
        res.render('error')
    }
}