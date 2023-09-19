import { customAlphabet } from 'nanoid'

/**
 * Our nanoid generator will only produce random ID's that are 15
 * characters long and use a combination of alphabet and numbers only.
 */
const CUSTOM_ALPHABET = '1234567890abcdefghijklmnopqrstuvwxyz'
const nanoid = customAlphabet(CUSTOM_ALPHABET, 15)

/**
 * Returns a random id to be used within database
 */
export const generateRandomId = (): string => nanoid()
