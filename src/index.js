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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initState = {
  user: {},
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
