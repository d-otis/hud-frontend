import React from 'react'
import { Header } from '../header/header.styles'
import { PlantWrapper } from './plant.styles'
import PlantSections from './plantSections'

const Plant = ({ match, plants, history }) => {

  const plantId = match.params.plantId
  const plant = plants.find(plant => plant.id === plantId)

  const renderPlant = () => {
    return (
      <PlantWrapper>
        <Header>{plant.name}</Header>
        <PlantSections plant={plant} />
      </PlantWrapper>
    )
  }

  return(
    <>
    <button onClick={() => history.goBack()} >back</button>
    {plant && renderPlant()}
    </>
  )
}

export default Plant