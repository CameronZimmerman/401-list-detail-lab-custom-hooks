import React, { Component } from 'react'
import List from '../List/List'

export default class Home extends Component {
  state = {
    loading: false,
    characters: []
  }
  render() {
    return (
      <List characters={this.state.characters}/>
    )
  }
}
