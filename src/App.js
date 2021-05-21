import React from 'react'
//import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import SignupForm from './forms/Signup'
import MainPage from './MainPage'
import UserRoute from './UserRoute'
import CatalogPage from './CatalogPage'
import EpisodePage from './EpisodePage'

// Routes:
const App = ({location}) => {
  return (
    <div className='App'>
      <UserRoute location={location} path='/' exact component={MainPage}/>
{/* ========= USER ================== */}
      <UserRoute location={location} path='/catalog' exact component={CatalogPage}/>
      <UserRoute location={location} path='/play' exact component={EpisodePage}/>
      <Route location={location} path='/signup' exact component={SignupForm}/>
    </div>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App
