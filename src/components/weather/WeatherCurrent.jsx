import React from 'react';
import { WeatherCurrentWrapper } from './weather.styles'

const WeatherCurrent = ({ current }) => {

  const renderIcons = () => {
    return current.weather.map(el => <img src={`http://openweathermap.org/img/wn/${el.icon}@2x.png`} alt="" key={el.icon} />)
  }

  const { temp } = current

  return (
    <WeatherCurrentWrapper>
      <ul> Le Weather {renderIcons()}
        <li>Temperature: {temp} &deg; </li>
        <li>High Temp: xx</li>
        <li>Low Temp: xx</li>
      </ul>
    </WeatherCurrentWrapper>
  )
}

export default WeatherCurrent;