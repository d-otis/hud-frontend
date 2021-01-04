import React from 'react'
import { Header } from '../header/header.styles'
import { PlantSection, PlantWrapper } from './plant.styles'
import { niceNames, capitalize } from '../../util'

const Plant = ({ match, plants }) => {

  const plantId = match.params.plantId
  const plant = plants.find(plant => plant.id === plantId)

  const renderPlant = () => {
    return (
      <PlantWrapper>
        <Header>{plant.name}</Header>
        <PlantSection><strong>Latin Name:</strong> {plant.latinName}</PlantSection>
        <PlantSection><strong>Description:</strong> {plant.description}</PlantSection>
        <PlantSection><strong>Watering:</strong> {plant.watering}</PlantSection>
        <PlantSection><strong>Light:</strong> {plant.light}</PlantSection>
        <PlantSection><strong>Soil:</strong> {plant.soil}</PlantSection>
        <PlantSection><strong>Pruning:</strong> {plant.pruning}</PlantSection>
        
        {plant.pestAndDisease ? 
          <PlantSection><strong>Pest & Disease:</strong> {plant.pestAndDisease}</PlantSection>
        :
          null
        }

        {plant.tempLow && plant.tempHi ? 
          <PlantSection><strong>Temperature Spectrum:</strong> {plant.tempLow}&deg; - {plant.tempHi}&deg;</PlantSection>
        :
          null
        }
        
      </PlantWrapper>
    )
  }

  return(
    <>
    {plant && renderPlant()}
    </>
  )
}

export default Plant