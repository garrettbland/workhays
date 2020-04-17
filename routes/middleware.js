exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next()

  res.redirect('/signin')
}

exports.isUserVerified = (req, res, next) => {
  if (res.locals.user.status === 'verified') return next()

  res.redirect('/admin/dashboard')
}
// res.locals.user = req.user
