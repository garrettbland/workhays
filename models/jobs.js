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
  DB.query('SELECT * FROM jobs', function (err, res, fields) {
    if (err) throw new Error(err)
    result(null, res)
  })
}

Jobs.getJobById = function (jobId, result) {
  DB.query(`SELECT * FROM jobs WHERE id = ${jobId}`, function (
    err,
    res,
    fields
  ) {
    if (err) throw new Error(err)
    result(null, res)
  })
}

module.exports = Jobs
