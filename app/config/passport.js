var bCrypt = require('bcrypt-nodejs')

module.exports = function (passport, user, employer) {
  var User = user
  var Employer = employer

  var LocalStrategy = require('passport-local').Strategy

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      function (req, email, password, done) {
        var generateHash = function (password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
        }

        User.findOne({
          where: {
            email: email
          }
        }).then(function (user) {
          if (user) {
            console.log('email is already taken')
            return done(
              null,
              false,
              req.flash('loginMessage', 'This email is already in use')
            )
          } else {
            var userPassword = generateHash(password)

            var data = {
              email: email,
              password: userPassword,
              first_name: req.body.first_name,
              last_name: req.body.last_name
            }

            User.create(data).then(function (newUser) {
              if (!newUser) {
                return done(null, false)
              }

              if (newUser) {
                console.log('new user created')

                // new user is created, now create new employer with user id as owner
                Employer.create({
                  user_id: newUser.id
                }).then(function (newEmployer) {
                  if (!newEmployer) {
                    console.log('could not create new employer')
                    return done(null, false, {
                      message: 'Employer not created'
                    })
                  }

                  var newData = {
                    newUser,
                    newEmployer
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
    'local-signin',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function (req, email, password, done) {
        var User = user

        var isValidPassword = function (userpass, password) {
          return bCrypt.compareSync(password, userpass)
        }

        User.findOne({
          where: {
            email: email
          }
        })
          .then(function (user) {
            if (!user) {
              return done(null, false, {
                message: 'Email does not exist'
              })
            }

            if (!isValidPassword(user.password, password)) {
              return done(
                null,
                false,
                req.flash('loginMessage', 'Email or Password is incorrect')
              )
            }

            var userinfo = user.get()
            return done(null, userinfo)
          })
          .catch(function (err) {
            console.log('Error:', err)

            return done(
              null,
              false,
              req.flash(
                'loginMessage',
                'Something went wrong with your login on our end.'
              )
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
    console.log('deserialzing user')
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


