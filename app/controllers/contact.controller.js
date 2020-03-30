var Models = require('../models')
var path = require('path')
var env = process.env.NODE_ENV || 'development'
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]

exports.contact_form = async (req, res) => {
    try {

        if (!req.body.first || !req.body.last || !req.body.email || !req.body.message) {
            throw 'All fields must be completed'
        }

        // validate email function
        const validateEmail = (email) => {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        // checks if email is valid
        if (!validateEmail(req.body.email)) throw 'Not a valid email address'

        const newContact = await Models.contact.create({
            first_name: req.body.first,
            last_name: req.body.last,
            email: req.body.email,
            phone: req.body.phone || null,
            message: req.body.message,
        })

        if(!newContact) throw 'Error when creating new contact'

        var api_key = config.mailgun_api_key
        var domain = 'mg.workhays.com'
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })

        var data = {
            from: 'Work Hays <support@workhays.com>',
            to: 'workhays@gmail.com,gmorganbland@gmail.com',
            subject: 'Contact Submission',
            html: `<h1>Contact Details</h1><p>A new contact us submission has been submitted from Work Hays. View details below. A copy of this submission was saved.</p><p>
                <ul>
                    <li><strong>Name:</strong> ${req.body.first} ${req.body.last}</li>
                    <li><strong>Email:</strong> ${req.body.email}</li>
                    <li><strong>Phone:</strong> ${req.body.phone}</li>
                    <li>
                        <p><strong>Message</strong></p>
                        <p>${req.body.message}</p>
                    </li>
                </ul>
            </p>`
          }
      
          mailgun.messages().send(data, function (error, body) {
            console.log(body)
          })
        
        // res.sendStatus(200)
        res.redirect('/contact?success=true')
        
        
    } catch (err) {
        console.log(err)
        //res.sendStatus(200)
        res.redirect('/contact?error=true')
    }
}