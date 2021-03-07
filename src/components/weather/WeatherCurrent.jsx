import React from 'react';
import { WeatherCurrentWrapper } from './weather.styles'
import Icon from './Icon'

const WeatherCurrent = ({ current }) => {

  const { temp, sunrise, sunset } = current

  const renderIcons = () => {
    return current.weather.map(data => <Icon weatherData={data} />)
  }

  const renderShortDescription = () => {
    return current.weather.map(data => data.main).join(" & ")
  }

  const renderSunriseSunset = () => {
    let rise = new Date(sunrise * 1000).toLocaleTimeString()
    let set = new Date(sunset * 1000).toLocaleTimeString()
    return(
      <>
        <li>Sunrise: {rise}</li>
        <li>Sunset: {set}</li>
      </>
    )
  }

  return (
    <WeatherCurrentWrapper>
      <ul> Current: {renderShortDescription()} {renderIcons()}
        <li>Temperature: {temp} &deg; </li>
        {renderSunriseSunset()}
      </ul>
    </WeatherCurrentWrapper>
  )
}

export default WeatherCurrent;