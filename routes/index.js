var express = require('express')
var router = express.Router()

var Jobs = require('../models/jobs')

/* GET home page. */
router.get('/', function (req, res, next) {
  Jobs.getAllJobs(function (err, jobs) {
    console.log('controller')
    if (err) res.send(err)
    console.log('res', jobs)

    // res.send(job)
    res.render('pages/index', {
      title: 'Express',
      jobs: jobs
    })
  })
})

module.exports = router
