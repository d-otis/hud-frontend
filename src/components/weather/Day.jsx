import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { dayMap, uppercaseAbbreviate } from '../../util'
import Icon from './Icon'

const Day = ({ dayData }) => {

  const { dt, weather, temp, wind_speed, pop } = dayData
  
  const processedDate = new Date(dt * 1000)

  const day = uppercaseAbbreviate(dayMap[processedDate.getDay()], 2)

  const generateIcons = () => weather.map(el => <Icon weatherData={el} card />)

  return(
    <Card>
      {generateIcons()}
      <Card.Body>
        <Card.Title>{ day }</Card.Title>
        <Card.Text>
          High: {temp.max}&deg;
          <br/>
          Low: {temp.min}&deg;
          <br/>
          Wind: {wind_speed} mph
          <br/>
          Precip: {pop}%
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  )
}

export default Day