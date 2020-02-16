var Models = require('../models')
var path = require('path')
var env = process.env.NODE_ENV || 'development'
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]

exports.signup = function (req, res) {
  res.render('pages/signup', {
    message: req.flash('loginMessage')
  })
}

exports.signin = function (req, res) {
  res.render('pages/signin', {
    message: req.flash('loginMessage')
  })
}

exports.logout = function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/')
  })
}

exports.password_reset = async (req, res) => {
  try {

    // Make sure user exists in db
    const user = await Models.user.findOne({
      where: {
        email: req.body.email
      }
    })

    if(!user) {
      console.log('=====> USER NOT FOUND')
      throw 'User not found'
    }

    // update user with random token and expiration date
    let random_token = '1233'
    let expires = new Date(Date.now() + 86400)

    let updated_fields = {
      password_reset_token: random_token,
      password_reset_token_expires: expires
    }

    const update_user = await Models.user.update(updated_fields, {
      where: {
        email: req.body.email
      }
    })

    if(!update_user) {
      console.log('=====> USER NOT UPDATED')
      throw 'User not updated'
    }

    var api_key = config.mailgun_api_key;
    var domain = 'mg.workhays.com';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = {
      from: 'Work Hays <support@workhays.com>',
      to: req.body.email,
      subject: 'Password Reset',
      text: `Click here to reset your password. http://localhost:3000/password-update?token=${random_token}. This will expire in 24 hours`
    };
    
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });

    res.status(200)
    res.redirect('/')

  } catch (err) {
        console.log('Error in password_reset =====>')
        console.log(err)
      res.status(200)
      res.render('error')
  }
}