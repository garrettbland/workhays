/*
===========================================================================

Description:
Jobs model and functions

Example usage:
var Jobs = require('./jobs')
Jobs.getAllJobs(function (err, jobs) { ... }

===========================================================================
*/

var DB = require('./db')

// Job object constructor
var Jobs = function (task) {
  this.job = job.job
  this.status = job.status
  this.created_at = new Date()
}

Jobs.getAllJobs = function (result) {
  DB.query('Select * from jobs', function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('jobs : ', res)
      result(null, res)
    }
  })
}

module.exports = Jobs
