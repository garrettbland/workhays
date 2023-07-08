export const getJobs = (req, res, next) => {
    return {
        jobs: [
            {
                id: '123',
                title: 'Retail Sales Associate',
            },
            {
                id: '456',
                title: 'Retail Sales Associate',
            },
        ],
    }
}
