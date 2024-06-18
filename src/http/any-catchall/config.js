const envs = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        mailgun_api_key: process.env.MAILGUN_API_KEY,
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        mailgun_api_key: process.env.MAILGUN_API_KEY,
    },
}

module.exports.getEnvironment = (env) => {
    return envs[env]
}
