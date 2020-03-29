module.exports = function (sequelize, Sequelize) {
  var Subscriber = sequelize.define(
    'subscriber',
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        required: false
      }
    },
    {
      underscored: true
    }
  )

  // Subscriber.sync({ alter: true })

  return Subscriber
}
