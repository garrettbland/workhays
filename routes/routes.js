/*
===========================================================================

Description:
Main router file. All routes are defined here and reference their
controller to handle logic.

===========================================================================
*/

var express = require('express')
var router = express.Router()

// controllers
var home = require('../controllers/index')
var job = require('../controllers/job')

// routes and route type (get, put, post, delete)
router.get('/', home.list)
router.get('/jobs/:jobId', job.get)
router.get('/privacy', function(req, res) {  res.render('pages/privacy');});
router.get('/terms', function(req, res) {  res.render('pages/terms');});
router.get('/login', function(req, res) {  res.render('pages/login');});
router.get('/employer-inquiry', function(req, res) {  res.render('pages/employerinquiry');});
router.get('/employer-list', function(req, res) {  res.render('pages/employerlist');});
router.get('/employer-list/employer', function(req, res) {  res.render('pages/employer');});



module.exports = router
