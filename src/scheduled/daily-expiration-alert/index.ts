import fetch from 'node-fetch'

/**
 * Daily scheduled function to trigger email alerts. During development,
 * must save file to trigger invocation (see plugins/scheduled)
 */
export const handler = async (req) => {
    console.log(`Scheduled Once a day Expiration Alert running in "${process.env.ENV}" environment...`)

    let data

    if (process.env.ENV === 'testing') {
        data = {
            message: 'Scheduled Function Running in test mode',
            stage: process.env.ENV,
        }
    } else  {
        const response = await fetch(
            'https://workhays.com/api/send_expiration_alert?api_key=sbjafdi43290sdnjk24389',
            { method: 'POST' }
        )
        data = await response.json()
    }

    console.log(`Data:`, data)

    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/json; charset=utf8',
        },
        body: JSON.stringify(data),
    }
}
