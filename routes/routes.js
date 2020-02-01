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

router.get('/', home.list)
router.get('/jobs/:jobId', job.get)

module.exports = router
