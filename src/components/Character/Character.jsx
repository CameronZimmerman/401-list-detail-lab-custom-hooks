import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

function Character({ name, photoUrl, id }) {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/${id}`)
    history.go(`/${id}`)
  }

  return (
    <div>
      <img src={photoUrl} alt={name} onClick={handleClick}/>
      <p>{name}</p>
    </div>
  )
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  id: PropTypes.string.isRequired
}

export default Character

