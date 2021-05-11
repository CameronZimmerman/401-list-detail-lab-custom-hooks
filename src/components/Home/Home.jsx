import React, { Component } from 'react'
import List from '../List/List'
import { fetchCharacters } from '../../services/avatarApi'

export default class Home extends Component {
  state = {
    loading: true,
    characters: []
  }

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({characters, loading: false})
  }

  render() {
    if (this.state.loading) return <div>Loading</div>
    return (
      <List characters={this.state.characters}/>
    )
  }
}
