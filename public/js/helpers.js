var register = function (Handlebars) {
  var helpers = {
    // put all of your helpers inside this object
    prod: function () {
      return process.env.NODE_ENV
    },
    environment: function () {
      if (process.env.NODE_ENV === 'production') {
        return 'production'
      } else {
        return 'development'
      }
    },
    foo: function () {
      return 'FOO FUNCTION'
    },
    bar: function () {
      return 'BAR'
    },
    uppercase: function (text) {
      return text.toUpperCase()
    }
  }

  if (Handlebars && typeof Handlebars.registerHelper === 'function') {
    // register helpers
    for (var prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop])
    }
  } else {
    // just return helpers object if we can't register helpers here
    return helpers
  }
}

module.exports.register = register
module.exports.helpers = register(null)
