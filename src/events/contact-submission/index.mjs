import arc from '@architect/functions'

/**
 * Fake 2 second ses email
 */
const sendSES = () => new Promise((resolve) => setTimeout(() => resolve('done'), 2000))

/**
 * Contact Submission Lambda. Will be executed from SNS topic 'contact-submission'
 * @typedef {{first_name: string, last_name: string, email: string, business?: string, message: string}} Payload
 * @param {Payload} event
 */
export const main = async (event) => {
    /**
     * TO DO: Wire up SES and send email
     */
    console.log(event)
    await sendSES()
    console.log('done')
    return
}

export const handler = arc.events.subscribe(main)
