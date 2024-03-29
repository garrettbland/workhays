module.exports = function(sequelize, Sequelize) {
    var Job = sequelize.define(
        'job',
        {
            id: {
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
            },

            employer_id: {
                type: Sequelize.UUID,
                required: true,
            },

            title: {
                type: Sequelize.STRING,
                required: true,
            },

            job_type: {
                type: Sequelize.ENUM('full_time', 'part_time'),
                defaultValue: 'full_time',
            },

            description: {
                type: Sequelize.TEXT('long'),
                required: false,
            },

            application_link: {
                type: Sequelize.STRING,
                required: false,
            },

            renewed: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },

            status: {
                type: Sequelize.ENUM('active', 'inactive', 'archived'),
                defaultValue: 'active',
            },

            industry: {
                type: Sequelize.STRING,
            },
        },
        {
            underscored: true,
        }
    )

    // Job.sync({ alter: true })

    return Job
}
