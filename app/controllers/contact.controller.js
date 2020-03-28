var path = require('path')
var env = process.env.NODE_ENV || 'development'
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]

exports.contact_form = async (req, res) => {
    try {

        if (!req.body.first || !req.body.last || !req.body.email || !req.body.message) {
            throw 'All fields must be completed'
        }

        var api_key = config.mailgun_api_key
        var domain = 'mg.workhays.com'
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })

        var data = {
            from: 'Work Hays <support@workhays.com>',
            to: 'workhays@gmail.com,gmorganbland@gmail.com',
            subject: 'Contact Submission',
            html: `<h1>Contact Details</h1><p>A new contact us submission has been submitted from Work Hays. View details below</p><p>
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