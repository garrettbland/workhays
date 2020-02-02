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


module.exports = router
