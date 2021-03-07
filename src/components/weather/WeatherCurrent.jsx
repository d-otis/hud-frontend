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

  return (
    <WeatherCurrentWrapper>
      <ul> Current: {renderShortDescription()} {renderIcons()}
        <li>Temperature: {temp} &deg; </li>
        <li>High Temp: xx</li>
        <li>Low Temp: xx</li>
      </ul>
    </WeatherCurrentWrapper>
  )
}

export default WeatherCurrent;