import { combineReducers } from 'redux'
import plantsReducer from './plants.reducer'

const rootReducer = combineReducers({
  plants: plantsReducer
})

export default rootReducer