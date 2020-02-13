var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const bodyParser = require('body-parser')
var passport = require('passport')
var session = require('express-session')
var flash = require('connect-flash')

require('dotenv').config()

var app = express()

// Parse incoming requests data (https://github.com/expressjs/body-parser)
// app.use(bodyParser.json())
// app.use(bodyParser.json({ limit: '10mb', extended: true }))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// For Passport
app.use(
  session({ secret: 'garretts secret', resave: true, saveUninitialized: true })
) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash())

// Models
var models = require('./app/models')

// load passport strategies
require('./app/config/passport.js')(passport, models.user, models.employer)

// add currentUser to all routes
app.use(function (req, res, next) {
  res.locals.user = req.user
  console.log('get current user ====>')
  next()
})

// Routes
app.use('/', require('./routes/routes'))

// Sync Database
models.sequelize
  .sync()
  .then(function () {
    console.log('Nice! Database looks fine')
  })
  .catch(function (err) {
    console.log(err, 'Something went wrong with the Database Update!')
  })

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404)
  res.render('error')
})

// start server and listen for requests. Default to port 4000 for development
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

module.exports = app
