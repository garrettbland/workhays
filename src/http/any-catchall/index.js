// import { APIGatewayProxyEventV2, Context } from 'aws-lambda'
// import lambdaApi from 'lambda-api'
// import { ROUTES } from './src/routes'

// export const handler = async (req: APIGatewayProxyEventV2, context: Context) => {
//     /**
//      * Global config for `lambda-api`
//      * https://github.com/jeremydaly/lambda-api#configuration
//      */
//     const api = lambdaApi({
//         base: '/api/v1/',
//         version: '1.0',
//     })

//     /**
//      * Register Routes
//      */
//     ROUTES.forEach((route) => {
//         api.METHOD(route.method, route.path, route.action)
//     })

//     /**
//      * Stringify each header value. The values we get from Arc could be numbers.
//      *
//      * If 'multiValueHeaders' is not in the request `lambda-api` will simulate this to add
//      * support for payload format version "1.0". (We are using payload version "2.0" -
//      * APIGatewayProxyEventV2). Not exactly sure why, but before we send the request to `lambda-api`,
//      * we need to make sure the header values are back in their original string format. Otherwise
//      * `lambda-api` fails when it tries to use "split" on a number.
//      *
//      * https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html#http-api-develop-integrations-lambda.proxy-format
//      */
//     const stringifiedHeaderValues = Object.keys(req.headers).reduce((prev, current) => {
//         return {
//             ...prev,
//             [req.headers[current]]: String(req.headers[current]),
//         }
//     }, {})

//     /**
//      * Start the API server
//      */
//     return await api.run(
//         {
//             ...req,
//             headers: stringifiedHeaderValues,
//         },
//         context
//     )
// }

// var createError = require('http-errors')
var express = require('express')
// var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const bodyParser = require('body-parser')
// var passport = require('passport')
var session = require('express-session')
// var flash = require('connect-flash')
// const fs = require('fs')
const serverless = require('serverless-http')
var models = require('./app/models/index.js')
var checkUserToken = require('./routes/middleware.js').checkUserToken
// get app version
// let rawdata = fs.readFileSync('./version.json')
// let versionFile = JSON.parse(rawdata)
let version = '0.9'

var app = express()

// attached appRoot to global object for root directory for file uploads
// global.appRoot = path.resolve(__dirname);

// view engine setup
app.set('views', './views')
app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express)

app.use(logger('dev'))
app.use(bodyParser.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

// For Passport
// session secret
app.use(session({ secret: 'w0rkH@ys!2020', resave: true, saveUninitialized: true }))
// app.use(passport.initialize())
// persistent login sessions
// app.use(passport.session())
// app.use(flash())

// Models
// var models = require('./app/models')

// load passport strategies
// require('./app/config/passport.js')(passport, models.user, models.employer)

// add currentUser and active url to each request && set version
app.use(checkUserToken)
app.use(function (req, res, next) {
    /**
     * This res.locals.blah = blah stuff is so express can access
     * req.thing in express/ejs files.
     */

    res.locals.APP_VERSION = version

    // res.user = req.user
    res.locals.activeUrl = req.path.split('/')[1] // [0] will be empty since routes start with '/'
    res.locals.adminPage = req.path.split('/')[1] + req.path.split('/')[2]
    res.locals.req = req
    // res.locals.flashMessages = req.flash()
    // console.log('get current user ====>')
    next()
})

// Routes
app.use('/', require('./routes/routes.js'))

// Sync Database
models.sequelize
    .authenticate()
    .then(function () {
        console.log('Nice! Database looks fine')
    })
    .catch(function (err) {
        console.log(err, 'Something went wrong when connecting to database')
    })

module.exports.handler = serverless(app)

// start server and listen for requests. Default to port 4000 for development
// const port = process.env.PORT || 3000
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`)
// })

// module.exports = app
