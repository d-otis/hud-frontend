import React from 'react'
import { v4 as uuid } from 'uuid'
import { PlantSection } from './plant.styles'
import { niceNames, capitalize } from '../../util'

const PlantSections = ({ plant }) => {
  return(
    Object.keys(plant).map(key => {
      if (key !== 'id' && key !== 'roomId' && key !== 'name') {
        return <PlantSection key={uuid()}><strong>{niceNames[key] ? niceNames[key] : capitalize(key)}: </strong>{plant[key]}</PlantSection>
      }
    })
  )
}

export default PlantSections