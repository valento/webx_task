import React from 'react'
import { connect } from 'react-redux'
import PropType from 'prop-types'
import CatalogPage from './CatalogPage'

const MainPage = ({ lan,username,catalog=[],info }) => {
  return (
    <div className='init topped padded'>
      <h1>Catalog Page</h1>
      {catalog.length>0?
        <CatalogPage catalog={catalog} info={info} /> :
        <p>Wait...</p>
      }
    </div>
  )
}

MainPage.propType = {
  lan: PropType.string.isRequired,
  username: PropType.number.isRequired,
  catalog: PropType.array.isRequired
}

const mapStateToProps = state => ({
  lan: state.settings.lan,
  username: state.user.username,
  catalog: state.collection.results,
  info: state.collection.info
})

export default connect(mapStateToProps)(MainPage)
