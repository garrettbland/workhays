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

exports.isAdmin = (req, res, next) => {
  if (res.locals.user.role === 'admin') {
    return next()
  }

  res.redirect('/404')
}
// res.locals.user = req.user