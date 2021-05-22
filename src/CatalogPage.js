import React from 'react'
import { connect } from 'react-redux'

import Catalog from './Catalog'
import Pagination from './Pagination'

const CatalogPage = ({ lan }) => {
  return (
    <div>
      <p>All Episodes Page</p>
      <Catalog />
      <Pagination />
    </div>
  )
}

const mapStateToProps = state => ({
  lan: state.settings.lan
})

export default connect(mapStateToProps)(CatalogPage)
