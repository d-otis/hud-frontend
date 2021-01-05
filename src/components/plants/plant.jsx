import React, { useState } from 'react'
import { PlantHeader } from './plant.styles'
import PlantSections from './plantSections'

const Plant = ({ plant }) => {

  const [visibility, setVisibility] = useState(false)

  const handleClick = () => setVisibility(!visibility)

  const renderPlant = () => {
    return (
      <>
        <PlantHeader onClick={handleClick}>{plant.name}</PlantHeader>
        {visibility && <PlantSections plant={plant} />}
      </>
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