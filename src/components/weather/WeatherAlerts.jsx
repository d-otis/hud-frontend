import React from 'react'
import Alert from 'react-bootstrap/Alert'

const WeatherAlerts = ({ alerts }) => {

  const renderAlerts = () => {
    return alerts.map(alert => <Alert variant="danger"> <h2>{alert.event}</h2> {alert.description} </Alert>)
  }

  return(
    <>
      { renderAlerts() }
    </>
  )
}


export default WeatherAlerts
