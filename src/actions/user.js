import { USER_SIGNED } from '../types'
import api from '../api'
//import setAuthHeader from '../utils/setAuthHeader'

export const userSigned = user => ({
  type: USER_SIGNED,
  user
})

export const userSignsUp = user => dispatch => {
  return new Promise ( (resolve,reject) => {
    api.collection.getCollection().then( result => {
      if(!result) reject({ err: {msg: 'No data'} })
      dispatch(userSigned(user))
      resolve(result.data)
    })
  })
}
