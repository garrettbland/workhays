import { expect, test, describe } from 'vitest'
import { whichEnv } from '../whichEnv'

describe('whichEnv', () => {
    test('Should return development stage', () => {
        const stage = whichEnv('http://localhost:3000')
        expect(stage).toEqual('development')
    })
    test('Should return staging stage', () => {
        const stage = whichEnv('https://staging.workhays.com')
        expect(stage).toEqual('staging')
    })
    test('Should return production stage', () => {
        const stage = whichEnv('https://workhays.com')
        expect(stage).toEqual('production')
    })
})
