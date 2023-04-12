module.exports = function(sequelize, Sequelize) {
    var Employer = sequelize.define(
        'employer',
        {
            id: {
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
            },

            user_id: {
                type: Sequelize.UUID,
                defaultValue: 'unclaimed',
                required: false,
            },

            title: {
                type: Sequelize.STRING,
                required: false,
            },

            description: {
                type: Sequelize.TEXT('long'),
                required: false,
            },

            contact: {
                type: Sequelize.STRING,
                required: false,
            },

            email: {
                type: Sequelize.STRING,
                required: false,
            },

            phone: {
                type: Sequelize.STRING,
                required: false,
            },

            logo_url: {
                type: Sequelize.STRING,
                required: false,
            },

            header_image_url: {
                type: Sequelize.STRING,
                required: false,
            },

            website_url: {
                type: Sequelize.STRING,
                required: false,
            },

            facebook_url: {
                type: Sequelize.STRING,
                required: false,
            },

            twitter_url: {
                type: Sequelize.STRING,
                required: false,
            },

            instagram_url: {
                type: Sequelize.STRING,
                required: false,
            },

            youtube_url: {
                type: Sequelize.STRING,
                required: false,
            },
        },
        {
            underscored: true,
        }
    )

    // Employer.sync({ alter: true })

    return Employer
}
