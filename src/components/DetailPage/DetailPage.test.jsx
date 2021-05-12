import React from 'react';
import { render, screen } from '@testing-library/react'
import Detail from '../Detail/Detail'

describe('detail page component', () => {
  it('should display detailed information on a character', async () => {
    render(<Detail />)
    screen.getByText('Loading')
    await screen.findByRole("character-card")
  })
})