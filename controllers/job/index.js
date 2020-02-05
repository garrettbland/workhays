var list_jobs = require('./list')
var get_job = require('./get')
var create_job = require('./create')
var update_job = require('./update')
var delete_job = require('./delete')

exports.get_job = get_job.index
exports.list_jobs = list_jobs.index
exports.create_job = create_job.index
exports.update_job = update_job.index
exports.delete_job = delete_job.index
