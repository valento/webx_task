import { USER_SIGNED } from '../types'
//import api from '../api'
//import setAuthHeader from '../utils/setAuthHeader'

export const userSigned = user => ({
  type: USER_SIGNED,
  user
})
