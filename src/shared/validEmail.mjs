export const VALID_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Returns boolean if string is a valid email or not
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
    return VALID_EMAIL_PATTERN.test(email)
}
