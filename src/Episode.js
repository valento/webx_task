import React,{ useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import ItemCard from './ItemCard'

const Episode = ({match,episodes,name}) => {

  const [ character,setChars ] = useState([])

  useEffect(() => {
  // Make an array of api-calls, without recursive loop:
    const fetchData = async () => {
      if(episodes.length===0) return
      let result = await Promise.all(
        episodes.find( e => e.id===Number(match.params.id)).characters.map( async c => {
            let char = await fetch(c).then( res => res.json() )
            return char
        })
      )
        return result
      }

    fetchData()
    .then( r => {
  // store these localy:
      setChars(r)
    })},[])

  return (
    <div className='init topped padded'>
      <h2>{episodes.find( e=>e.id===Number(match.params.id)).name}</h2>
      <h3>Characters:</h3>
      <div className='collection-table'>
        <ul>
          {character.map( item => {
            const {name,status,species,origin,location,gender,image} = item
            let style = {
              backgroundImage: `url(${image})`
            }
            return (
              <li style={style}>
                <ItemCard i='char' item={Object.assign({},{name,status,species,origin,location,gender,image})} />
              </li>)
          })}
        </ul>
      </div>
      <div className='custom-form oval-but'>
        <Button as={Link} to='/' content='Back to List' />
      </div>
    </div>
  )
}

const mapStateToProps = (state,match) => ({
  episodes: state.collection.results
})

export default connect(mapStateToProps)(Episode)
