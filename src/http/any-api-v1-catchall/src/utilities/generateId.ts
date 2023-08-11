import { customAlphabet } from 'nanoid'

/**
 * Our nanoid generator will only produce random ID's that are 15
 * characters long and use a combination of alphabet and numbers only.
 */
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 15)

/**
 * Returns a random id to be used within database
 */
export const generateRandomId = () => nanoid()
