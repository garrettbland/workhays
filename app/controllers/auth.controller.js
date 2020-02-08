exports.signup = function (req, res) {
  res.render('pages/signup')
}

exports.signin = function (req, res) {
  res.render('pages/signin')
}

exports.logout = function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/')
  })
}
