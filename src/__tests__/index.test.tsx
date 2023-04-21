import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Home from '../pages'

test('home', () => {
    const { getByText } = render(<Home />)

    expect(getByText('Ayoo')).toBeDefined()
})
