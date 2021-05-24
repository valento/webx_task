import React from 'react'
import { useHistory } from 'react-router-dom'

const EpisodePage = ({ item }) => {

  let history = useHistory()
  
  return (
    <li onClick={ e => history.push(`/episode/${item.id}`)}>
      <h2>{item.name}</h2>
      <p>released at: {item.air_date}</p>
    </li>
  )
}

export default EpisodePage
