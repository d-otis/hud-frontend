import React from 'react'
import { Header } from '../header/header.styles'
import { PlantSection, PlantWrapper } from './plant.styles'
import { niceNames, capitalize } from '../../util'
import { v4 as uuid } from 'uuid'

const Plant = ({ match, plants, history }) => {

  const plantId = match.params.plantId
  const plant = plants.find(plant => plant.id === plantId)

  const renderSections = () => {
    // eslint-disable-next-line
    return Object.keys(plant).map(key => {
      if (key !== 'id' && key !== 'roomId' && key !== 'name') {
        return <PlantSection key={uuid()}><strong>{niceNames[key] ? niceNames[key] : capitalize(key)}: </strong>{plant[key]}</PlantSection>
      }
    })
  }

  const renderPlant = () => {
    return (
      <PlantWrapper>
        <Header>{plant.name}</Header>
        {renderSections()} 
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