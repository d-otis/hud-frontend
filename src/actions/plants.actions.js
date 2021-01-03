const BASE_URL = "http://localhost:3000/api/v1/"

export function fetchPlants() {
  return dispatch => {
    dispatch({type: 'LOADING_PLANTS'})
    fetch(`${BASE_URL}/plants`)
      .then(res => res.json())
      .then(json => console.log(json))
  }
}