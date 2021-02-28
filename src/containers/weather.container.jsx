import React from 'react';
import Weather from '../components/weather/Weather'
import { connect } from 'react-redux'

const WeatherContainer = ({ weather }) => {
  return(
    <Weather weather={weather} />
  )
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherContainer)