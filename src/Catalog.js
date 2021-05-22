import React from 'react'
import { connect } from 'react-redux'

const Catalog = ({ catalog }) => {
  return (
    <div>
      <ul>
        {catalog.map( item => {
          return <li>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  catalog: state.collection.results
})

export default connect(mapStateToProps)(Catalog)
