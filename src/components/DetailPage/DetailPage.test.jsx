import React from 'react';
import { render, screen } from '@testing-library/react'
import DetailPage from '../DetailPage/DetailPage'
const character = {
  name: 'bob',
  id: '2',
  photoUrl: 'img',
  allies: ['cats'],
  enemies: ['not cats'],
  affiliation: ['king of cats']
}

const match = {
  params: {
    id: '5cf5679a915ecad153ab68cc'
  }
}

describe('detail page component', () => {
  it('should display detailed information on a character', async () => {
    render(<DetailPage match={match}/>)
    screen.getByText('Loading')
    await screen.findByRole("character-card")
  })
})