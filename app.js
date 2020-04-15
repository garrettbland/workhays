var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const bodyParser = require('body-parser')
var passport = require('passport')
var session = require('express-session')
var flash = require('connect-flash')
const fs = require('fs')

// get app version
let rawdata = fs.readFileSync('./version.json')
let versionFile = JSON.parse(rawdata)
let version = versionFile.version

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// For Passport
// session secret
app.use(
    session({ secret: 'w0rkH@ys!2020', resave: true, saveUninitialized: true })
)
app.use(passport.initialize())
// persistent login sessions
app.use(passport.session())
app.use(flash())

// Models
var models = require('./app/models')

// load passport strategies
require('./app/config/passport.js')(passport, models.user, models.employer)

// add currentUser and active url to each request && set version
app.use(function(req, res, next) {
    res.locals.APP_VERSION = version
    res.locals.user = req.user
    res.locals.activeUrl = req.path.split('/')[1] // [0] will be empty since routes start with '/'
    res.locals.adminPage = req.path.split('/')[1] + req.path.split('/')[2]
    res.locals.req = req
    res.locals.flashMessages = req.flash()
    console.log('get current user ====>')
    next()
})

// Routes
app.use('/', require('./routes/routes'))

// Sync Database
models.sequelize
    .sync()
    .then(function() {
        console.log('Nice! Database looks fine')
    })
    .catch(function(err) {
        console.log(err, 'Something went wrong with the Database Update!')
    })

// start server and listen for requests. Default to port 4000 for development
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

module.exports = app
