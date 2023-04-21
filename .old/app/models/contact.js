module.exports = function (sequelize, Sequelize) {
    var Contact = sequelize.define(
      'contact',
      {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
          
        first_name: {
            type: Sequelize.STRING,
            required: true
        },

        last_name: {
            type: Sequelize.STRING,
            required: true
        },
          
        email: {
            type: Sequelize.STRING,
            required: true
        },
        
        phone: {
            type: Sequelize.STRING,
            required: false
        },
        
        message: {
            type: Sequelize.TEXT('long'),
            required: true
        },
        
      },
      {
        underscored: true
      }
    )
  
    // Contact.sync({ alter: true })
  
    return Contact
  }
  