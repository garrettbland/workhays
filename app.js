var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
require('dotenv').config()

const bodyParser = require('body-parser')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// OLD HANDLEBARS STUFF BELOW
// app.engine(
//   'hbs',
//   exphbs({
//     defaultLayout: 'main', // set to false to not use layout at all
//     extname: '.hbs',
//     helpers: require('./public/js/helpers.js').helpers, // same file that gets used on our client
//     partialsDir: 'views/partials/', // same as default, I just like to be explicit
//     layoutsDir: 'views/layouts/' // same as default, I just like to be explicit
//   })
// )
// app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
