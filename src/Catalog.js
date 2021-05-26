import React from 'react'
import { connect } from 'react-redux'

import EpisodePage from './EpisodePage'
import SearchForm from './forms/SearchForm'

const Catalog = ({ catalog=[] }) => {
  return (
    <div>
      <ul>
        {catalog.map( (item,ind) => {
          return <EpisodePage item={Object.assign({},item,{index: (ind+1)})} />
        })}
      </ul>
    </div>
  )
}

//const mapStateToProps = state => ({
//  catalog: state.collection.results
//})

export default Catalog
