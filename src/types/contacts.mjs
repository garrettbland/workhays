/**
 * @typedef {object} ContactForm
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} email
 * @property {string} [business]
 * @property {string} message
 */

/**
 * Contact submission type. Combines required form fields and base table response
 * @typedef {ContactForm & import('./tables.mjs').Base} ContactSubmission
 */
