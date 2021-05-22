import React from 'react'
import { connect } from 'react-redux'
import PropType from 'prop-types'
import CatalogPage from './CatalogPage'
import SignUp from './forms/Signup'

const MainPage = ({ isAuthorized,lan,username }) => {
  return (
    <div className='init topped padded'>
      <h1>Catalog Page</h1>
      <CatalogPage />
    </div>
  )
}

MainPage.propType = {
  lan: PropType.string.isRequired,
  username: PropType.number.isRequired,
  isAuthorized: PropType.bool.isRequired
}

const mapStateToProps = state => ({
  lan: state.settings.lan,
  isAuthorized: state.user.logged,
  username: state.user.username
})

export default connect(mapStateToProps)(MainPage)
