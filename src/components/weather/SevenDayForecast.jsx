import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup'
import Day from './Day'

const SevenDayForecast = ({ daily }) => {

  const generateDays = () => daily.map(data => <Day dayData={data} key={data.dt} />)

  return(
    <Container fluid>
      <Row>
        <CardGroup>
          { generateDays() }
        </CardGroup>
      </Row>
    </Container>
  )
}

export default SevenDayForecast