import { COLLECTION_GET } from '../types'
import api from '../api'

export const haveCollection = data => ({
  type: COLLECTION_GET,
  data
})

export const getCollection = () => dispatch => {
  api.collection.getCollection().then( result => {
    dispatch(haveCollection(result.data))
  })
}

export const getNextCollection = page => dispatch => {
  api.collection.getCollection(page).then( result => {
    dispatch(haveCollection(result.data.results))
  })
}
