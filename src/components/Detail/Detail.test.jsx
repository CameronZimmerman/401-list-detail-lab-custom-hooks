import React from 'react'
import {MemoryRouter, Route} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, screen} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import avatarDataSingle from '../../testData/avatarDataSingle.json'
import Detail from './Detail'

describe('List component', () => {
  const history = createMemoryHistory()
  history.push("/5cf5679a915ecad153ab68f7")
  const server = setupServer(
    rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/', (req, res, ctx) => {
      res(ctx.json(avatarDataSingle))
    })
  )
  beforeAll(() => server.listen())
  afterAll(() => server.close())

  it('should render a single characters', async () => {
    render(
    <MemoryRouter initialEntries={['/5cf5679a915ecad153ab68f7']}>
      <Route path='/:id'> <Detail /> </Route>
    </MemoryRouter>
      )
    screen.getByText('Loading...')
    const card = await screen.findByRole('character-card')
    expect(card).toMatchSnapshot()
  })
})