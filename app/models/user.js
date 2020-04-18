module.exports = function (sequelize, Sequelize) {
  var User = sequelize.define(
    'user',
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },

      first_name: {
        type: Sequelize.STRING,
        required: false
      },

      last_name: {
        type: Sequelize.STRING,
        required: false
      },

      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      password_reset_token: {
        type: Sequelize.STRING,
        required: false
      },

      password_reset_token_expires: {
        type: Sequelize.DATE,
        required: false
      },

      status: {
        type: Sequelize.ENUM('pending', 'verified', 'locked'),
        defaultValue: 'pending'
      },

      role: {
        type: Sequelize.ENUM('employer', 'moderator', 'admin'),
        defaultValue: 'employer'
      },

      last_login: {
        type: Sequelize.DATE
      }
    },
    {
      underscored: true
    }
  )

  // User.sync({ alter: true })

  return User
}
