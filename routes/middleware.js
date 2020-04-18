exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next()

  res.redirect('/signin')
}

exports.isLocked = (req, res, next) => {
  if (res.locals.user.status === 'locked') {
    req.session.destroy(function(err) {
      res.redirect('/signin?locked=true')
    })
  }

  next()
}

exports.isUserVerified = (req, res, next) => {

  if (res.locals.user.status === 'verified') return next()

  res.redirect('/admin/dashboard')
}
// res.locals.user = req.user