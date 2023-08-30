import arc from '@architect/functions'
import { isValidEmail, generateRandomId } from '../../shared/index.mjs'

/**
 * Endpoint for contact submissions
 *
 * POST /v1/contacts
 *
 * Body
 * Required: `first_name`,`last_name`,`email`,`message`
 * Optional: `business`
 *
 * @param {import('@architect/functions/types/http').HttpRequest} req
 * @returns {Promise<import('@architect/functions/types/http').HttpResponse>}
 */
export const main = async (req) => {
    try {
        const client = await arc.tables()
        const workhaysTable = client.workhays

        const { first_name, last_name, email, business, message } = req.body

        /**
         * Validations
         */
        const validations = [
            isValidEmail(email),
            Boolean(first_name),
            Boolean(last_name),
            Boolean(message),
        ]

        if (validations.includes(false)) {
            return {
                status: 400,
                json: {
                    message: 'Inputs did not pass validation checks',
                    requestBody: req.body,
                },
            }
        }

        /**
         * Item that will be stored in table
         * @type {import('../../types/contacts.mjs').ContactSubmission}
         */
        const databaseItem = {
            PK: 'CONTACT', // type
            SK: generateRandomId(), // id
            first_name, // attribue
            last_name, // attribute
            email, // attribute
            business: business ?? null, // attribute
            message, // attribute
        }

        /**
         * Put item into table
         */
        const inputForm = await workhaysTable.put(databaseItem)

        /**
         * Publish SNS topic for contact event/notification
         */
        await arc.events.publish({
            name: 'contact-submission',
            payload: {
                ...inputForm,
            },
        })

        return {
            json: {
                message: 'Successfully posted contact',
                data: inputForm,
            },
        }
    } catch (err) {
        console.log(err)
        return {
            status: 500,
            json: {
                message: 'Error posting submission',
                err: String(err),
            },
        }
    }
}

export const handler = arc.http.async(main)
