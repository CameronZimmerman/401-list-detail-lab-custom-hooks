import React from 'react'
import PropTypes from 'prop-types'
import Character from '../Character/Character'
import useGallery from '../../hooks/useGallery'

function List() {
  const {characters, loading} = useGallery()

  if(loading) return <div>Loading...</div>
  return (
    <div>
      <ul aria-label="character-list">
        {characters.map(character => {
          return (
            <li key={character.id}>
              <Character photoUrl={character.photoUrl} name={character.name} id={character.id}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List

