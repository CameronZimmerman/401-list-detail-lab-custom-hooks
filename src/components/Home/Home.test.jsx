import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from './Home'

describe('List Component', () => {
  it('Should display a list of ATLA characters', async () => {
    render(<Home />)
    screen.getByText('Loading')

    const list = await screen.findByRole('list', {name: 'character-list'} )

    expect(list.childElementCount).not.toBe(0)
  })
})