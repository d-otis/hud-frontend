import React from 'react'
import Card from 'react-bootstrap/Card'

const Icon = ({ weatherData, card }) => {

  const { icon, description } = weatherData

  const url = `http://openweathermap.org/img/wn/${icon}@2x.png`

  return(
    <>
      {card 
        ?
       <Card.Img variant="top" src={url} alt={description} />
       :
       <img src={url} alt={description} key={icon} />
      }
    </>
  )
}

export default Icon