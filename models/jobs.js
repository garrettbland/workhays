var DB = require('./db.js')

// Job object constructor
var Job = function (task) {
  this.job = job.job
  this.status = job.status
  this.created_at = new Date()
}

Job.getAllJobs = function (result) {
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

module.exports = Job
