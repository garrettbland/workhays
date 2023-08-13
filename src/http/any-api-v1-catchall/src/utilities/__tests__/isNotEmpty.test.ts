import { isNotEmpty } from '../isNotEmpty'

describe('isNotEmpty', () => {
    it('Should return true for string with 1 or more characters', () => {
        expect(isNotEmpty('Golf')).toEqual(true)
    })
    it('Should return false for empty string', () => {
        expect(isNotEmpty('')).toEqual(false)
    })
})
