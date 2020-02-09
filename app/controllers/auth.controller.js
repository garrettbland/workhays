exports.signup = function (req, res) {
  res.render('pages/signup', {
    message: req.flash('loginMessage')
  })
}

exports.signin = function (req, res) {
  res.render('pages/signin', {
    message: req.flash('loginMessage')
  })
}

exports.logout = function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/')
  })
}
