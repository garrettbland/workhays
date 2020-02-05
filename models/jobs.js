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
  DB.query('SELECT * FROM jobs WHERE deleted = 0', function (err, res, fields) {
    if (err) throw new Error(err)
    result(null, res)
  })
}

Jobs.getJobById = function (jobId, result) {
  DB.query(`SELECT * FROM jobs WHERE id = ?`, [jobId], function (
    err,
    res,
    fields
  ) {
    if (err) throw new Error(err)
    result(null, res)
  })
}

Jobs.createJob = function (job, result) {
  DB.query(
    `INSERT INTO jobs (title, description, employer) VALUES (?,?,?)`,
    [job.title, job.description, job.employer],
    function (err, res) {
      if (err) throw new Error(err)
      result(null, res)
    }
  )
}

Jobs.updateJob = function (jobId, job, result) {
  DB.query(
    `UPDATE jobs SET 
    title = ?,
    description = ?,
    employer = ?
    WHERE id = ?`,
    [job.title, job.description, job.employer, jobId],
    function (err, res) {
      if (err) throw new Error(err)
      result(null, res)
    }
  )
}

Jobs.deleteJob = function (jobId, result) {
  DB.query(
    `UPDATE jobs SET 
    deleted = 1
    WHERE id = ?`,
    [jobId],
    function (err, res) {
      if (err) throw new Error(err)
      result(null, res)
    }
  )
}

module.exports = Jobs
