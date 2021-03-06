import React from 'react'
import WeatherCurrent from './WeatherCurrent'
import SevenDayForecast from './SevenDayForecast'

const Weather = ({ weather }) => {

  const { current, daily } = weather

  return(
    <>
      <WeatherCurrent current={current} />
      <SevenDayForecast daily={daily} />
    </>
  )
}

export default Weather