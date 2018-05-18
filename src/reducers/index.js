import { combineReducers } from 'redux'
import timeReducer from './timer-reducer'

const appReducer = combineReducers({
  currentTime: timeReducer
})

export default appReducer