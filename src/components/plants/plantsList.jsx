import React from 'react'
import { Header } from '../header/header.styles'
import Plant from './plant'

const PlantsList = ({ plants, match }) => {
  return(
    <div>
      <Header>Plants List Accordion</Header>
      {plants.map(plant => {
        return <Plant plant={plant} key={plant.id} />
      })}
    </div>
  )
}

export default PlantsList