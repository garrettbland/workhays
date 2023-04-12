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

/**
 * Very manual api key authentication.
 * Currently used for daily email send for expired jobs
 */
exports.verifyApiKey = (req, res, next) => {
    // First - validate that api_key was passed in the url
    if (req.query.api_key) {
        const api_key = 'sbjafdi43290sdnjk24389'

        // Next - validate that the api key matches
        if (req.query.api_key === api_key) {
            console.log('key is valid')
            next()
        } else {
            return res.status(404).json({
                message: 'Route not found',
            })
        }
    } else {
        return res.status(404).json({
            message: 'Route not found',
        })
    }
}
