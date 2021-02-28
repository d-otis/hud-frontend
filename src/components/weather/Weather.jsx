import React from 'react'

const Weather = ({ weather }) => {

  const { current } = weather

  const renderIcons = () => {
    return current.weather.map(el => <img src={`http://openweathermap.org/img/wn/${el.icon}@2x.png`} alt=""/>)
  }

  const { temp } = current

  return(
    <>
    <ul> Le Weather {renderIcons()}
      <li>Temperature: {temp} &deg; </li>
      <li>High Temp: xx</li>
      <li>Low Temp: xx</li>
    </ul>
    </>
  )
}

export default Weather