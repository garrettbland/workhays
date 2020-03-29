var Models = require('../models')

exports.create_subscriber = async (req, res) => {
    try {

        // validate email function
        const validateEmail = (email) => {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        // checks if email is valid
        if (!validateEmail(req.body.email)) throw 'Not a valid email address'
        
        // email is valid
        const newSubscriber = await Models.subscriber.create({
            email: req.body.email,
        })

        if (!newSubscriber) throw 'Valid email address but somewhen went wrong creating subscriber'

        res.status(200).send({
            type: 'success',
            message: 'successfully subscribed'
        })

    } catch (err) {
        console.log('Error in create_subscriber')
        res.status(200).send({
            type: 'error',
            message: err
        })
    }
}