exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  console.log('USER IS NOT LOGGED IN')
  res.redirect('/signin')
}
