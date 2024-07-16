/**
 * Inovkes a scheduled event whenever scheduled file changes
 */
module.exports = {
    sandbox: {
        watcher: async ({ filename, event, inventory, invoke }) => {
            if (filename.includes('src/scheduled/')) {
                // let rawPayload = await readFile('test/fixtures/event-payload.json')

                invoke({
                    pragma: 'scheduled',
                    name: 'daily-expiration-alert',
                    payload: {} // JSON.parse(rawPayload),
                })
               
            }
        },
    },
}
