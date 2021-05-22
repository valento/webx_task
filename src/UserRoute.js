import React from 'react'
import { connect } from 'react-redux'
import { Route,Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserRoute = ({ isAuth, lan, component: Component, ...rest }) => {
  console.log(isAuth)
  return (
    <Route {...rest} render={props => isAuth? <Component lan={lan} {...props} /> : <Redirect to='/signup' />} />
  )
}

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  lan: state.settings.lan,
  isAuth: state.user.logged
})

export default connect(mapStateToProps)(UserRoute)
