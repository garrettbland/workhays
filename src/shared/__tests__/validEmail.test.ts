import { isValidEmail } from '../validEmail'

const VALID_EMAILS = ['tom@hanks.com', 'abc123@apple.co.com']
const INVALID_EMAILS = [
    'something',
    'thisis@',
    'whatever@what.com@',
    '@notreal.com',
    'notreal@@bill.com',
]

describe('isValidEmail Utility', () => {
    describe.each(VALID_EMAILS)('Valid Emails', (email) => {
        test(`'${email}' should return true`, () => {
            expect(isValidEmail(email)).toEqual(true)
        })
    })
    describe.each(INVALID_EMAILS)('Invalid Emails', (email) => {
        test(`'${email}' should return false`, () => {
            expect(isValidEmail(email)).toEqual(false)
        })
    })
})
