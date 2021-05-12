import React from 'react'
import PropTypes from 'prop-types'

function Detail({character}) {
  return (
    <div role="character-card">
      <p>{character.name}</p>
      <img src={character.photoUrl} alt={character.name}></img>
      <p>allies: {character.allies.join(', ')}</p>
      <p>enemies: {character.enemies.join(', ')}</p>
      <p>affiliation: {character.affiliation}</p>
    </div>
  )
}

Detail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    id: PropTypes.string,
    allies: PropTypes.array,
    enemies: PropTypes.array,
    affiliation: PropTypes.string
  })
}

export default Detail

