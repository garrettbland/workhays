import arc from '@architect/functions'
import { isValidEmail, generateRandomId } from '../../shared/index.mjs'

/**
 * Endpoint for contact submissions
 *
 * POST /v1/contacts\
 * Body Requirements:\
 * `first_name`,`last_name`,`email`,`message`
 *
 * @param {import('@architect/functions/types/http').HttpRequest} req
 * @returns {Promise<import('@architect/functions/types/http').HttpResponse>}
 */
const main = async (req) => {
    try {
        let client = await arc.tables()
        let workhaysTable = client.workhays

        const { first_name, last_name, email, business = null, message } = req.body

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

        const inputForm = await workhaysTable.put({
            PK: 'CONTACT', // type
            SK: generateRandomId(), // id
            first_name, // attribue
            last_name, // attribute
            email, // attribute
            business, // attribute
            message, // attribute
        })

        return {
            json: {
                message: 'Successfully posted contact',
                data: inputForm,
            },
        }
    } catch (err) {
        return {
            json: {
                message: 'Error posting submission',
                err: String(err),
            },
        }
    }
}

export const handler = arc.http.async(main)
