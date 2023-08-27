import { generateRandomId } from '../generateId.mjs'

describe('generateId', () => {
    it('Should return a random string', () => {
        const exampleId = generateRandomId()
        expect(exampleId).toHaveLength(15)
    })
})
