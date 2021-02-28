import React, { useState } from 'react'
import { PlantHeader, PlantWrapper } from './plant.styles'
import PlantSections from './plantSections'

const Plant = ({ plant }) => {

  const [visibility, setVisibility] = useState(false)

  const handleClick = () => setVisibility(visibility => !visibility)

  const renderPlant = () => {
    return (
      <PlantWrapper>
        <PlantHeader onClick={handleClick}>{plant.name}</PlantHeader>
        {visibility && <PlantSections plant={plant} />}
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