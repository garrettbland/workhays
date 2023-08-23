import React from 'react'
import { render } from '@testing-library/react'
import { Blah } from '../Blah'

describe('<Blah />', () => {
    it('Should render some text', async () => {
        const { getByText } = render(<Blah />)
        expect(getByText('This is a react test')).toBeDefined()
    })
})
