import { COLLECTION_GET,COLLECTION_GET_PAGE } from '../types'

export const collection = (state={},action) => {
  switch (action.type) {
    case COLLECTION_GET:
      return {...state, ...action.data}
    case COLLECTION_GET_PAGE:
      return {...state, ...action.data}
    default: return state
  }
}
