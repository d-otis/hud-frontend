import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Day from './Day'

const SevenDayForecast = ({ daily }) => {

  const generateDays = () => daily.map(day => <Day day={day} key={day.dt} />)

  return(
    <Container>
      <Row>
        { generateDays() }
      </Row>
    </Container>
  )
}

export default SevenDayForecast