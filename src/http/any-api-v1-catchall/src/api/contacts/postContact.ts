import { tables } from '@architect/functions'
import { Request, Response } from 'lambda-api'
import { isValidEmail } from '@architect/shared/validEmail'
import { generateRandomId, isNotEmpty } from '../../utilities'

export const postContact = async (request: Request, res: Response) => {
    let client = await tables()
    let workhaysTable = client.workhays

    const { first_name, last_name, email, business = null, message } = request.body

    /**
     * Validations
     */
    const validations = [
        isValidEmail(email),
        isNotEmpty(first_name),
        isNotEmpty(last_name),
        isNotEmpty(message),
    ]

    if (validations.includes(false)) {
        return res.status(400).send({
            message: `Inputs did not pass validation checks. Required values are email, first_name, last_name, message`,
            provided_inputs: request.body,
        })
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

    res.status(200).send({
        message: 'Success',
        inputForm,
    })
}
