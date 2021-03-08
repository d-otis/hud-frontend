import React from 'react'
import Card from 'react-bootstrap/Card'

const Icon = ({ weatherData, card }) => {

  const { icon, description } = weatherData

  return(
    <>
      {card 
        ?
       <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
       :
       <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} key={icon} />
      }
    </>
  )
}

export default Icon