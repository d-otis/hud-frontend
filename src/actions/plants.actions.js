const BASE_URL = "http://10.0.0.15:3000/api/v1"

export function fetchPlants() {
  return dispatch => {
    dispatch({type: 'LOADING_PLANTS'})
    fetch(`${BASE_URL}/plants`)
      .then(res => res.json())
      .then(json => dispatch({type: "SET_PLANTS", payload: json}))
      .catch(err => console.log(err))
  }
}