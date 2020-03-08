/*
===========================================================================

Description:
Main router file. All routes are defined here and reference their
controller to handle logic.

===========================================================================
*/

var express = require('express')
var passport = require('passport')
var router = express.Router()
var middleware = require('./middleware')

// controllers
var jobController = require('../app/controllers/job.controller')
var authController = require('../app/controllers/auth.controller')
var accountController = require('../app/controllers/account.controller')
var employerController = require('../app/controllers/employer.controller')
var contactController = require('../app/controllers/contact.controller')

// === public routes ===
router.get('/', jobController.list_jobs)
router.get('/jobs/:jobId', jobController.get_job)
router.get('/contact', (req, res) => res.render('pages/contact'))
router.post('/contact', contactController.contact_form)
router.get('/events', (req, res) => res.render('pages/events'))
router.get('/privacy', (req, res) => res.render('pages/privacy'))
router.get('/employers', employerController.list_employers)
router.get('/employers/:employerId', employerController.get_employer)
router.get('/info', (req, res) => res.render('pages/info'))
router.get('/help', (req, res) => res.render('pages/help'))
router.get('/terms', (req, res) => res.render('pages/terms'))
router.get('/login', (req, res) => res.render('pages/login'))
router.get('/password-reset', (req, res) => {
  res.render('pages/passwordreset', {
    message: req.flash('message')
  })
})
router.post('/password-reset', authController.password_reset)

router.get('/password-update', authController.password_update)
router.post('/password-update', authController.change_password)
router.get('/signup', authController.signup)
router.get('/signin', authController.signin)
router.post(
  '/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/account',
    failureRedirect: '/signup'
  })
)
router.post(
  '/signin',
  passport.authenticate('local-signin', {
    successRedirect: '/account',
    failureRedirect: '/signin'
  })
)
router.get('/logout', authController.logout)

// === private routes ===
router.get('/account', middleware.isLoggedIn, accountController.index)
router.get(
  '/job-listing-archive',
  middleware.isLoggedIn,
  accountController.list_archived_jobs
)
router.get('/job-listing-new', middleware.isLoggedIn, function (req, res) {
  res.render('pages/joblistingnew')
})
router.get(
  '/jobs/edit/:jobId',
  middleware.isLoggedIn,
  accountController.edit_job
)

// auth only routes
// To do: add Auth lol
router.post('/jobs', jobController.create_job)
router.post('/jobs/edit/:jobId', jobController.update_job)
router.post(
  '/account/change_email',
  middleware.isLoggedIn,
  authController.change_email
)
// router.delete("/jobs/:jobId", jobController.archive_job);
router.post('/employers/edit/:employerId', employerController.update_employer)

router.get('/emailtest', function (req, res) {
  var api_key = '0b6a3b5c0b9b37bc188e42609d3de538-9ce9335e-5d0ed33c'
  var domain = 'mg.workhays.com'
  var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })

  var data = {
    from: 'Work Hays <support@workhays.com>',
    to: 'lanepatterson32@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
  }

  mailgun.messages().send(data, function (error, body) {
    console.log(body)
  })
})

// catch 404 and forward to error handler
router.get("*", (req,res) => {
  res.status(404).render('error')
})

module.exports = router
