import React from 'react'
import PropTypes from 'prop-types'
import Character from '../Character/Character'

function List({characters}) {
  return (
    <ul aria-label="character-list">
      {characters.map(character => {
        return (
          <li key={character.id}>
            <Character photoUrl={character.photoUrl} name={character.name} id={character.id}/>
          </li>
        )
      })}
    </ul>
  )
}

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    photoUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
}

export default List

