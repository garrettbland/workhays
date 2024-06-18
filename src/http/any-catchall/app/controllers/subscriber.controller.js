var Models = require('../models')

exports.create_subscriber = async (req, res) => {
    try {

        // honey pot - check if hidden honey pot checkbox equals something other than 0
        if (req.body.contact_me_by_phone_only) {
            // the hidden field was checked, treat as spambot
            // Eventually might want to log the spam IP and block it, for now just throw an error
            console.log('subscriber honey pot field was filled ===>')
            throw 'Something went wrong'
        }

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

        if (!newSubscriber) throw 'Valid email address but something went wrong creating subscriber'

        res.status(200).send({
            type: 'success',
            message: 'successfully subscribed'
        })

    } catch (err) {
        console.log('Error in create_subscriber')
        res.status(400).send({
            type: 'error',
            message: err
        })
    }
}