const INITIAL_STATE = {}

const weatherReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case "LOADING_WEATHER":
      console.log('loading weather')
      return state
    case "SET_WEATHER":
      debugger
      return state
    default:
      return state
  }
}

export default weatherReducer