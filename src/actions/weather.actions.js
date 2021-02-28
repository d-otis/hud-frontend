import apiKey from '../util/apiKey'

const API = "https://api.openweathermap.org/data/2.5/onecall?lat=39.9712381&lon=-75.1783442&exclude=minutely&units=imperial"

export function fetchWeather() {
  return dispatch => {
    dispatch({ type: "LOADING_WEATHER" })
    fetch(`${API}&appid=${apiKey}`)
      .then(res => res.json())
      .then(json => dispatch({ type: "SET_WEATHER", payload: json }))
      .catch(err => console.warn(err))
  }
}