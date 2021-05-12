import React, { Component } from 'react'
import { fetchSingleCharacter } from '../../services/avatarApi';
import Detail from '../Detail/Detail'

export default class DetailPage extends Component {
  state = {
    loading: true,
    character: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const character = await fetchSingleCharacter(id)
    this.setState({character, loading: false})
  }

  render() {

    if(this.state.loading) {
      return (
        <div>Loading</div>
      )
    }

    return <Detail character={this.state.character}/>
    
  }
}
