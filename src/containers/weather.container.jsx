import React from 'react';
import Weather from '../components/weather/Weather'
import { connect } from 'react-redux'

const WeatherContainer = ({ weather }) => {

  const { loading } = weather

  return(
    loading || <Weather weather={weather} />
  )
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherContainer)