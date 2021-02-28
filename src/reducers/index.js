import { combineReducers } from 'redux'
import plantsReducer from './plants.reducer'
import weatherReducer from './weather.reducer'

const rootReducer = combineReducers({
  plants: plantsReducer,
  weather: weatherReducer
})

export default rootReducer