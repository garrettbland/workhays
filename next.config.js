module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:route*',
                destination: 'http://localhost:3333/:route*',
            },
        ]
    },
}
