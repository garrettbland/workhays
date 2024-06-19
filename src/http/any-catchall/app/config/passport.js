var bCrypt = require('bcrypt-nodejs')
const passport = require('passport')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
var Models = require('../models')
const jwt = require('jsonwebtoken')

var User = Models.user
var Employer = Models.employer

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret', // Use a strong secret or use environment variable
}

exports.passport = passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            User.findByPk(jwt_payload.id).then(function (user) {
                if (user) {
                    console.log('logged in as ' + user.id)
                    done(null, user.get())
                } else {
                    done(user, null)
                }
            })
        } catch (err) {
            return done(err, false)
        }
    })
)

exports.signIn = (req, res, next) => {
    var isValidPassword = function (userpass, password) {
        return bCrypt.compareSync(password, userpass)
    }

    console.log('TRYING TO FIND USER>>>')

    User.findOne({
        where: {
            email: req.body.email,
        },
    })
        .then(function (user) {
            if (!user) {
                console.log('USER NOT FOUND')
                return res.redirect(`/signin?invalidCredentials=true`)
                // return done(null, false, req.flash('error', 'Email or Password is incorrect'))
            }

            if (!isValidPassword(user.password, req.body.password)) {
                console.log('EMAIL OR PASSWORD INCORRECT')
                //return done(null, false, req.flash('error', 'Email or Password is incorrect'))
            }

            var userinfo = user.get()

            console.log('User FOUND>>>', JSON.stringify(userinfo, null, 4))

            /**
             * JWT Payload
             */
            const payload = {
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                // password: '',
                // password_reset_token: null,
                // password_reset_token_expires: null,
                status: user.status,
                role: user.role,
                // employer_id_claim_request: null,
                // last_login: null,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            }

            console.log({ payload })

            const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' })

            console.log({ token })
            res.cookie('workhays-auth-jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            })

            res.redirect('admin/dashboard')

            // return done(null, userinfo)
        })
        .catch(function (err) {
            console.log('Error:', err)

            // return done(
            //     null,
            //     false,
            //     req.flash('error', 'Something went wrong with your login on our end.')
            // )
        })
}

exports.signUp = (req, res, next) => {
    const { email, password } = req.body

    var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
    }

    User.findOne({
        where: {
            email: email,
        },
    }).then(function (user) {
        if (user) {
            console.log('email is already taken')
            res.redirect('/signup?emailTaken=true') // TO DO
            // return done(null, false, req.flash('error', 'Email is already in use'))
        } else {
            var userPassword = generateHash(password)

            if (req.body.employer_id_claim_request) {
                var data = {
                    email: email,
                    password: userPassword,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    employer_id_claim_request: req.body.employer_id_claim_request,
                }
            } else {
                var data = {
                    email: email,
                    password: userPassword,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                }
            }

            User.create(data).then(function (newUser) {
                if (!newUser) {
                    // return done(null, false)
                    console.log('New user was not created, something went wrong...')
                    res.redirect('/signup?error=true') // to do
                }

                if (newUser) {
                    console.log('new user created')

                    // new user is created, now create new employer with user id as owner
                    Employer.create({
                        user_id: newUser.id,
                    }).then(function (newEmployer) {
                        if (!newEmployer) {
                            console.log('could not create new employer')

                            // destory new user
                            User.destroy(newUser.id).then(() => {
                                console.log('deleted new user...')
                            })

                            res.redirect('/signup?error=true') // to do
                            // return done(null, false, {
                            //     message: 'Employer not created',
                            // })
                        }

                        var newData = {
                            newUser,
                            newEmployer,
                        }

                        console.log('everything was created good')

                        res.redirect('/signin?newUserCreated=true')

                        // return done(null, newUser)
                    })
                }
            })
        }
    })
}

var notUsed = function (passport, user, employer) {
    var User = user
    var Employer = employer

    var LocalStrategy = require('passport-local').Strategy

    passport.use(
        'local-signup',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true,
            },
            function (req, email, password, done) {
                var generateHash = function (password) {
                    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
                }

                User.findOne({
                    where: {
                        email: email,
                    },
                }).then(function (user) {
                    if (user) {
                        console.log('email is already taken')

                        return done(null, false, req.flash('error', 'Email is already in use'))
                    } else {
                        var userPassword = generateHash(password)

                        if (req.body.employer_id_claim_request) {
                            var data = {
                                email: email,
                                password: userPassword,
                                first_name: req.body.first_name,
                                last_name: req.body.last_name,
                                employer_id_claim_request: req.body.employer_id_claim_request,
                            }
                        } else {
                            var data = {
                                email: email,
                                password: userPassword,
                                first_name: req.body.first_name,
                                last_name: req.body.last_name,
                            }
                        }

                        User.create(data).then(function (newUser) {
                            if (!newUser) {
                                return done(null, false)
                            }

                            if (newUser) {
                                console.log('new user created')

                                // new user is created, now create new employer with user id as owner
                                Employer.create({
                                    user_id: newUser.id,
                                }).then(function (newEmployer) {
                                    if (!newEmployer) {
                                        console.log('could not create new employer')
                                        return done(null, false, {
                                            message: 'Employer not created',
                                        })
                                    }

                                    var newData = {
                                        newUser,
                                        newEmployer,
                                    }

                                    console.log('everything was created good')

                                    return done(null, newUser)
                                })
                            }
                        })
                    }
                })
            }
        )
    )

    // LOCAL SIGNIN
    passport.use(
        'cookie',
        new LocalStrategy(
            {
                //by default, local strategy uses username and password, we will override with email
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true, // allows us to pass back the entire request to the callback
            },
            function (req, token, done) {
                console.log('======')
                console.log({ req })
                console.log({ token })
                console.log('======')

                var User = user

                var isValidPassword = function (userpass, password) {
                    return bCrypt.compareSync(password, userpass)
                }

                console.log('TRYING TO FIND USER>>>')

                User.findOne({
                    where: {
                        email: email,
                    },
                })
                    .then(function (user) {
                        if (!user) {
                            return done(
                                null,
                                false,
                                req.flash('error', 'Email or Password is incorrect')
                            )
                        }

                        if (!isValidPassword(user.password, password)) {
                            return done(
                                null,
                                false,
                                req.flash('error', 'Email or Password is incorrect')
                            )
                        }

                        var userinfo = user.get()

                        console.log('User FOUND>>>', JSON.stringify(userinfo, null, 4))

                        return done(null, userinfo)
                    })
                    .catch(function (err) {
                        console.log('Error:', err)

                        return done(
                            null,
                            false,
                            req.flash('error', 'Something went wrong with your login on our end.')
                        )
                    })
            }
        )
    )

    // serialize
    passport.serializeUser(function (user, done) {
        console.log('serializing user')
        console.log(user)
        done(null, user.id)
    })

    // deserialize user
    passport.deserializeUser(function (id, done) {
        console.log('deserialzing user ====>')
        User.findByPk(id).then(function (user) {
            if (user) {
                console.log('logged in as ' + user.id)
                done(null, user.get())
            } else {
                done(user, null)
                // done(user.errors, null)
            }
        })
    })
}
