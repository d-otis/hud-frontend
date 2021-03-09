import React from 'react'
import WeatherCurrent from './WeatherCurrent'
import SevenDayForecast from './SevenDayForecast'
import WeatherAlerts from './WeatherAlerts'

const Weather = ({ weather, alerts }) => {

  const { current, daily } = weather

  return(
    <>
      {alerts?.length && <WeatherAlerts alerts={alerts} />}
      <WeatherCurrent current={current} />
      <SevenDayForecast daily={daily} />
    </>
  )
}

export default Weather