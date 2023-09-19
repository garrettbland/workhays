import { VALID_EMAIL_PATTERN } from './constants'

/**
 * Returns boolean if string is a valid email or not
 */
export const isValidEmail = (email: string): boolean => {
    return VALID_EMAIL_PATTERN.test(email)
}
