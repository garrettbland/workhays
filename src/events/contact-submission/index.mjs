import arc from '@architect/functions'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

/**
 * Contact Submission Lambda. Will be executed from SNS topic 'contact-submission'
 * @param {import('../../types/contacts.mjs').ContactSubmission} event
 */
export const main = async (event) => {
    try {
        const client = new SESClient()
        const input = {
            // SendEmailRequest
            Source: 'example@mail.garrettbland.com', // required
            Destination: {
                // Destination
                ToAddresses: [
                    // AddressList
                    // 'support@workhays.com',
                    'success@simulator.amazonses.com',
                ],
                // CcAddresses: ['STRING_VALUE'],
                // BccAddresses: ['STRING_VALUE'],
            },
            Message: {
                // Message
                Subject: {
                    // Content
                    Data: 'New Contact Submission', // required
                    // Charset: 'STRING_VALUE',
                },
                Body: {
                    // Body
                    Text: {
                        Data: 'Contact submission details \n ' + JSON.stringify(event), // required
                        // Charset: 'STRING_VALUE',
                    },
                    // Html: {
                    //     Data: 'STRING_VALUE', // required
                    //     Charset: 'STRING_VALUE',
                    // },
                },
            },
            Tags: [
                // MessageTagList
                {
                    // MessageTag
                    Name: 'TYPE', // required
                    Value: 'CONTACT_SUBMISSION', // required
                },
            ],
            // ReplyToAddresses: ['support@workhays.com'],
        }
        const command = new SendEmailCommand(input)
        await client.send(command)
        // console.log(event)
        // await sendSES()
        // console.log('done')
        return
    } catch (err) {
        console.log(err)
        return
    }
}

export const handler = arc.events.subscribe(main)
