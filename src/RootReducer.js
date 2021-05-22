import { combineReducers } from 'redux'
import { settings } from './reducers/settings'
import { user } from './reducers/user'
import { collection } from './reducers/collection'

export default combineReducers({
  settings,
  user,
  collection
})
