import { describe, expect, test, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useEnvironment } from '../useEnvironment'

const windowLocationClone = { ...window.location }

describe('useEnvironment Hook', () => {
    test('Should return development stage object', () => {
        vi.spyOn(window, 'location', 'get').mockReturnValueOnce({
            ...windowLocationClone,
            origin: 'https://localhost:3000.com',
        })

        const { result } = renderHook(useEnvironment)

        expect(result.current.showDevBanner).toEqual(true)
    })
    test('Should return production stage object', () => {
        vi.spyOn(window, 'location', 'get').mockReturnValueOnce({
            ...windowLocationClone,
            origin: 'https://workhays.com',
        })

        const { result } = renderHook(useEnvironment)

        expect(result.current.showDevBanner).toEqual(false)
    })
})
