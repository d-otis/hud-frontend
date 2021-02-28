import React from 'react'

const Weather = ({ weather }) => {

  const { current } = weather

  const { temp } = current

  return(
    <>
    <ul> Le Weather
      <li>Temperature: {temp} </li>
      <li>High Temp: xx</li>
      <li>Low Temp: xx</li>
    </ul>
    </>
  )
}

export default Weather