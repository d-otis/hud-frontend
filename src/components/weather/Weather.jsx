import React from 'react'
import WeatherCurrent from './WeatherCurrent'

const Weather = ({ weather }) => {

  const { current } = weather

  return(
    <WeatherCurrent current={current} />
  )
}

export default Weather