import React from 'react'
import { connect } from 'react-redux'

import Catalog from './Catalog'
import Pagination from './Pagination'

import { getNextCollection } from './actions/collection'

const CatalogPage = ({ lan,catalog,info,getNextCollection }) => {

  const onPageClick = arrow => {
    getNextCollection(info[arrow])
  }

  return (
    <div className='collection-table'>
      <p>All Episodes Page</p>
      <Catalog catalog={catalog} />
      <Pagination info={info} navPage={onPageClick} />
    </div>
  )
}


export default connect(null,{ getNextCollection })(CatalogPage)
