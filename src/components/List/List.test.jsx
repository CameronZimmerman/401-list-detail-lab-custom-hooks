import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import {render, screen} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import avatarData from '../../testData/avatarData.json'
import List from './List'

describe('List component', () => {
  const server = setupServer(
    rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/', (req, res, ctx) => {
      res(ctx.json(avatarData))
    })
  )
  beforeAll(() => server.listen())
  afterAll(() => server.close())

  it('should render a list of characters', async () => {
    render(<MemoryRouter><List /></MemoryRouter>)
    screen.getByText('Loading...')
    const list = await screen.findByLabelText('character-list')
    expect(list).toMatchSnapshot()
  })
})