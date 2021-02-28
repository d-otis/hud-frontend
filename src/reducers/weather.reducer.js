const INITIAL_STATE = { loading: true }

const weatherReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case "LOADING_WEATHER":
      console.log('loading weather')
      return state
    case "SET_WEATHER":
      return {
        ...action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default weatherReducer