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

// === public routes ===
router.get('/', jobController.list_jobs)
router.get('/jobs/:jobId', jobController.get_job)
router.get('/contact', (req, res) => res.render('pages/contact'))
router.get('/events', (req, res) => res.render('pages/events'))
router.get('/privacy', (req, res) => res.render('pages/privacy'))
router.get('/info', (req, res) => res.render('pages/info'))
router.get('/help', (req, res) => res.render('pages/help'))
router.get('/terms', (req, res) => res.render('pages/terms'))
router.get('/login', (req, res) => res.render('pages/login'))
router.get('/password-reset', (req, res) => res.render('pages/passwordreset'))
router.get('/password-update', (req, res) => res.render('pages/passwordupdate'))
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

router.get('/employer-list', function (req, res) {
  res.render('pages/employerlist')
})
router.get('/employer-list/employer', function (req, res) {
  res.render('pages/employer')
})
router.get('/account', middleware.isLoggedIn, accountController.index)
router.get('/job-listing-archive', function (req, res) {
  res.render('pages/joblistingarchive')
})
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
router.delete('/jobs/:jobId', jobController.delete_job)

module.exports = router
