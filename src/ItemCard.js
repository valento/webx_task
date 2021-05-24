import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ i,item }) => {
  const {origin,name,location,image,...rest} = item
  let lid = location.url.split('/')
  let oid = origin.url.split('/')
  return (
    <div className='item-card'>
      <h2>{name}</h2>
      <p className='link'><Link to={`/origin/${oid.slice(oid.length-1)}`}>{`From: ${origin.name}`}</Link><br/></p>
      <p className='link'><Link to={`/location/${lid.slice(lid.length-1)}`}>{`Located: ${location.name}`}</Link></p>
      {Object.keys(rest).map( key => {
        return (
          <p>{`${key}: ${item[key]}`}</p>
        )
      })}
    </div>
  )
}

export default ItemCard
