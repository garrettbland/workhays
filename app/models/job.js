module.exports = function (sequelize, Sequelize) {
  var Job = sequelize.define('job', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    title: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    description: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    employer: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  })

  return Job
}
