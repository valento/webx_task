import React from 'react'

import ItemCard from './ItemCard'

const Character = ({ match }) => {
  return (
    <ItemCard type='char' item={match.path.split('/')[1]}/>
  )
}

export default Character
