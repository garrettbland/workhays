'use strict'

var fs = require('fs')
var path = require('path')
var Sequelize = require('sequelize')
var env = process.env.NODE_ENV || 'development'
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]
var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)
var db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

fs.readdirSync(__dirname)
  .filter(function (file) {
    return file.indexOf('.') !== 0 && file !== 'index.js'
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

// Relations
db.job.belongsTo(db.employer)
db.employer.hasMany(db.job)
db.employer.belongsTo(db.user)
db.user.hasOne(db.employer)

module.exports = db
