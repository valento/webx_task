import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals'

import 'semantic-ui-css/semantic.min.css'
import './App.css'


import App from './App'
import RootReducer from './RootReducer'
import { userSigned } from './actions/user'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initState = {
  user: {
    logged: false
  },
  settings: {
    lan: 'bg',
    socket: false
  }
}

const store = createStore(
  RootReducer,
  initState,
  composeEnhancers(applyMiddleware(thunk))
)

// Check if user has signedUp:
// Just username in localStorage as required:
if(localStorage.webxUser) {
  // SignedIn -- Unable Logout
  initState.user.username = localStorage.webxUser
  initState.user.logged = true
  store.dispatch(userSigned(initState.user))
}

const Root = (
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>
)

ReactDOM.render( Root, document.getElementById('root') )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
