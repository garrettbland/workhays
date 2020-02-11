var Models = require('../models')

exports.update_employer = async (req, res) => {
  try {
    var employer = {
      title: req.body.title,
      description: req.body.description,
      contact: req.body.contact,
      email: req.body.email,
      phone: req.body.phone,
      logo_url: req.body.logo_url,
      website_url: req.body.website_url,
      facebook_url: req.body.facebook_url,
      twitter_url: req.body.twitter_url
    }

    const update_employer = await Models.employer.update(employer, {
      where: {
        id: req.params.employerId,
        user_id: req.user.id
      }
    })

    if (!update_employer) throw 'Job not updated'

    res.status(200)
    // res.render('pages/account', {
    //   updated: true,
    //   update_job
    // })
    req.flash('accountMessage', 'Employer updated successfully')
    res.redirect('/account')
  } catch (err) {
    // res.send(err)
    console.log('Error in update_employer')
    res.status(200)
    res.render('error')
  }
}
