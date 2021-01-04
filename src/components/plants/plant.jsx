import React from 'react'
import { Header } from '../header/header.styles'

const Plant = ({ match, plants }) => {

  const plantId = match.params.plantId
  const plant = plants.find(plant => plant.id === plantId)

  const renderPlant = () => {
    return (
      <Header>{plant.name}</Header>
    )
  }

  return(
    <>
    {plant && renderPlant()}
    </>
  )
}

export default Plant