import {REDUCE_TIMER} from '../constants'

const initialState = 2443332

export default (state = initialState, action) => {
  switch (action.type) {
    case REDUCE_TIMER: return state - 1

    default: return state
  }
}