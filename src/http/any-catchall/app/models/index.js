'use strict'

// var fs = require('fs')
var path = require('path')
var Sequelize = require('sequelize')
var env = process.env.NODE_ENV || 'development'
// var config = require('../config/config.json')[env]
var config = require('../../config')

var contact = require('./contact')
var employer = require('./employer')
var job = require('./job')
var subscriber = require('./subscriber')
var user = require('./user')

var sequelize = new Sequelize(
    config.getEnvironment(env).database,
    config.getEnvironment(env).username,
    config.getEnvironment(env).password,
    config.getEnvironment(env),
    {
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
)

var db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.contact = contact(sequelize, Sequelize)
db.employer = employer(sequelize, Sequelize)
db.job = job(sequelize, Sequelize)
db.subscriber = subscriber(sequelize, Sequelize)
db.user = user(sequelize, Sequelize)

// db.contact.associate(db)
// db.employer.associate(db)
// db.job.associate(db)
// db.subscriber.associate(db)
// db.user.associate(db)

// fs.readdirSync(__dirname)
//     .filter(function (file) {
//         return file.indexOf('.') !== 0 && file !== 'index.js'
//     })
//     .forEach(function (file) {
//         var model = sequelize.import(path.join(__dirname, file))
//         db[model.name] = model
//     })

// Object.keys(db).forEach(function (modelName) {
//     if ('associate' in db[modelName]) {
//         db[modelName].associate(db)
//     }
// })

// Relations
db.job.belongsTo(db.employer)
db.employer.hasMany(db.job)
db.employer.belongsTo(db.user)
db.user.hasOne(db.employer)

module.exports = db
