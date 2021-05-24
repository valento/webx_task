import React from 'react'
//import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import MainPage from './MainPage'
import UserRoute from './UserRoute'
import Episode from './Episode'
import Signup from './forms/Signup'
import Locate from './Location'
import Origin from './Origin'

// Routes:
const App = ({location}) => {
  return (
    <div className='App'>
      <UserRoute location={location} path='/' exact component={MainPage}/>
      <Route location={location} path='/signup' exact component={Signup}/>
      <Route location={location} path='/location/:id' exact component={Locate}/>
      <Route location={location} path='/origin/:id' exact component={Origin}/>
{/* ========= USER ================== */}
      <UserRoute location={location} path='/episode/:id' exact component={Episode}/>
    </div>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App
