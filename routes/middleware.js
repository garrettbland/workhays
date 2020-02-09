exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next()

  res.redirect('/signin')
}

// res.locals.user = req.user
