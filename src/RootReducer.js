import { combineReducers } from 'redux'
import { settings } from './reducers/settings'
import { user } from './reducers/user'

export default combineReducers({
  settings,
  user
})
