/*
===========================================================================

Description:
Main router file. All routes are defined here and reference their
controller to handle logic.

===========================================================================
*/

/*

External Scripts

*/

var express = require('express')
var passport = require('passport')
var router = express.Router()
var middleware = require('./middleware')

/*

Controllers

*/
var jobController = require('../app/controllers/job.controller')
var authController = require('../app/controllers/auth.controller')
var accountController = require('../app/controllers/account.controller')
var employerController = require('../app/controllers/employer.controller')
var contactController = require('../app/controllers/contact.controller')
var subscriberController = require('../app/controllers/subscriber.controller')

/*

Public Routes

*/
router.get('/', jobController.list_jobs)
router.get('/jobs/:jobId', jobController.get_job)
router
    .route('/contact')
    .get((req, res) => res.render('pages/public/contact'))
    .post(contactController.contact_form)
router.get('/privacy', (req, res) => res.render('pages/public/privacy'))
router.get('/employers', employerController.list_employers)
router.get('/employers/:employerId', employerController.get_employer)
router.get('/about', (req, res) => res.render('pages/public/about'))
router.get('/help', (req, res) => res.render('pages/public/help'))
router.get('/terms', (req, res) => res.render('pages/public/terms'))
router.get('/login', (req, res) => res.render('pages/public/login'))
router
    .route('/signin')
    .get(authController.signin)
    .post(
        passport.authenticate('local-signin', {
            successRedirect: '/admin/dashboard',
            failureRedirect: '/signin',
        })
    )
router
    .route('/signup')
    .get(authController.signup)
    .post(
        passport.authenticate('local-signup', {
            successRedirect: '/admin/dashboard',
            failureRedirect: '/signup',
        })
    )
router
    .route('/password-reset')
    .get((req, res) => {
        res.render('pages/public/passwordreset', {
            message: req.flash('message'),
        })
    })
    .post(authController.password_reset)
router
    .route('/password-update')
    .get(authController.password_update)
    .post(authController.change_password)
router.get('/logout', authController.logout)

/*

Private Routes

*/
router.get('/admin/dashboard', middleware.isLoggedIn, accountController.index)
router.get('/admin/jobs', middleware.isLoggedIn, accountController.jobs)
router.get('/admin/business', middleware.isLoggedIn, accountController.business)
router.get('/admin/profile', middleware.isLoggedIn, accountController.profile)
router.get('/admin/jobs/new', middleware.isLoggedIn, middleware.isUserVerified, jobController.new_job)
router.get('/admin/jobs/:jobId', middleware.isLoggedIn, middleware.isUserVerified, jobController.edit_job)

router.get('/job-listing-new', middleware.isLoggedIn, middleware.isUserVerified, function(req, res) {
    res.render('pages/private/joblistingnew')
})

router.post('/jobs', middleware.isLoggedIn, middleware.isUserVerified, jobController.create_job)
router.post('/jobs/edit/:jobId', middleware.isLoggedIn, middleware.isUserVerified, jobController.update_job)
router.post('/jobs/renew/:jobId', middleware.isLoggedIn, middleware.isUserVerified, jobController.renew_job)
router.post(
    '/account/change_email',
    middleware.isLoggedIn,
    authController.change_email
)
router.post('/employers/edit/:employerId', middleware.isLoggedIn, employerController.update_employer)

// catch 404 and forward to error handler
router.get('*', (req, res) => {
    res.status(404).render('error')
})

/*

API Routes

*/

router.post('/api/subscribe', subscriberController.create_subscriber)

module.exports = router
