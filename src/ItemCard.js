import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Icon } from 'semantic-ui-react'

const ItemCard = ({ item={},type }) => {
  const {origin,name,index,location,image,...rest} = item
  let lid = location.url.split('/')
  let oid = origin.url.split('/')
  return (
    <div className='item-card'>
      <h2>{name}</h2>
      <p className='link'><Link to={`/origin/${oid.slice(oid.length-1)}`}>{`From: ${origin.name}`}</Link><br/></p>
      <p className='link'>
        <Button as={Link}
          to={`/location/${lid.slice(lid.length-1)}`}
          color='blue'
          icon
          size='tiny'
          labelPosition='right'
        >
        {location.name}
        <Icon name='angle right' />
        </Button>
      </p>
      {Object.keys(rest).map( key => {
        return (
          <p>{`${key}: ${item[key]}`}</p>
        )
      })}
    </div>
  )
}

export default ItemCard
