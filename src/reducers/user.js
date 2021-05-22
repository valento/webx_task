import { USER_SIGNED } from '../types'

export const user = (state={},action) => {
  switch (action.type) {
    case USER_SIGNED:
      return {...state, ...action.user}
    default: return state

  }
}
