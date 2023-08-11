import { tables } from '@architect/functions'
import { Request, Response } from 'lambda-api'
import { generateRandomId } from '../../utilities/generateId'

const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Sends 400 response with validation error message & returns
 */
const returnInvalidResponse = (res: Response, type: string) => {
    res.status(400).send({ message: `${type} input did not pass validation checks` })
}

export const postContact = async (request: Request, res: Response) => {
    console.log('POST REQUEST TO SUMBIT CONACT FORM')
    console.log(request.body)

    let client = await tables()
    let workhaysTable = client.workhays

    const { first_name, last_name, email, business = null, message } = request.body

    /**
     * Validations
     */
    if (!isValidEmail(email)) {
        return returnInvalidResponse(res, 'email')
    }

    const inputForm = await workhaysTable.put({
        PK: 'CONTACT', // type
        SK: generateRandomId(), // id
        first_name,
        last_name,
        email,
        business,
        message,
    })

    res.status(200).send({
        message: 'Success',
        inputForm,
    })

    // return { status: 'SUCCESS' }
}
