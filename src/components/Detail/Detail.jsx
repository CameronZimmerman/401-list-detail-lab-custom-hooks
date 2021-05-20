import React from 'react'
import PropTypes from 'prop-types'
import useGallery from '../../hooks/useGallery'

function Detail() {
  const {characters, loading} = useGallery()

  if(loading) return <div>Loading...</div>
  return (
    <div role="character-card">
      <p>{characters.name}</p>
      <img src={characters.photoUrl} alt={characters.name}></img>
      <p>allies: {characters.allies.join(', ')}</p>
      <p>enemies: {characters.enemies.join(', ')}</p>
      <p>affiliation: {characters.affiliation}</p>
    </div>
  )
}

export default Detail

