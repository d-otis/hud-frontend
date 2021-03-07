import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { dayMap } from '../../util'
import Icon from './Icon'

const Day = ({ dayData }) => {

  const { dt, weather } = dayData

  const day = dayMap[new Date(dt * 1000).getDay()].slice(0, 3).split("").map(char => char.toUpperCase()).join("")

  return(
    <Col md className="px-0">
      <Card>
        {weather.map(el => <Icon weatherData={el} card />)}
        <Card.Body>
          <Card.Title>{ day }</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default Day