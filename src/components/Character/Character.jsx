import React from 'react'
import PropTypes from 'prop-types'

function Character({ name, photoUrl }) {
  return (
    <div>
      <img src={photoUrl} alt={name} />
      <p>{name}</p>
    </div>
  )
}

Character.propTypes = {

}

export default Character

