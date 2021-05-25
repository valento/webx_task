import Rreact, { useEffect,useState } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Profile from './Profile'

const Locate = ({match}) => {

  const [location,setLoc] = useState({})
  const [residents,setResid] = useState([])
  const [modal,setMod] = useState(false)
  const [char,setChar] = useState(0)

  useEffect(() => {
    // Fetch Data from Origin:
      const fetchData = async () => {
        const result = await fetch(`https://rickandmortyapi.com/api/location/${match.params.id}`)
        return result
      }

      fetchData()
      .then( res => res.json() )
      .then( r => {
        const {id,url,residents,created,...rest} = r
    // store these localy:
        setLoc(rest)
        Promise.all(
          residents.map( r => fetch(r).then( char => char.json() ))
        ).then(rsdnts => setResid(rsdnts))
      })
  },[])


  return (
    <div className='collection-table'>
      <h2>Location:</h2>
      {Object.keys(location).map( key => <p>{`${key}: ${location[key]}`}</p> )}
      <h3>Residents:</h3>
      <div className='padded oval-but'>
        {residents.map( r => <Button
          onClick={ () => {
            setChar(r.id)
            setMod(true)
        } } content={r.name} /> )}
      </div>
      {modal && <Profile closeModal={() => setMod(false)} item={Object.assign({},residents.find( i => i.id === char))} />}
    </div>
  )
}

export default Locate
