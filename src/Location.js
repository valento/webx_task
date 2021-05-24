import Rreact, { useEffect,useState } from 'react'

const Locate = ({match}) => {

  const [location,setLoc] = useState({})
  const [residents,setResid] = useState([])

  useEffect(() => {

    // Fetch Data from Origin:
      const fetchData = async () => {
        const result = await fetch(`https://rickandmortyapi.com/api/location/${match.params.id}`)
        return result
      }

      fetchData()
      .then( res => res.json() )
      .then( r => {
        const {id,url,residents,...rest} = r
    // store these localy:
        setLoc(rest)
        Promise.all(
          residents.map( r => fetch(r).then( char => char.json() ))
        ).then(rsdnts => setResid(rsdnts))
      })
  },[])

  return (
    <div>
      <h2>Origin</h2>
      {Object.keys(location).map( key => <p>{`${key}: ${location[key]}`}</p> )}
      <h3>Residents:</h3>
      {residents.map( r => <span>{r.name}</span> )}

    </div>
  )
}

export default Locate
