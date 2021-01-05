import React from 'react'
import { v4 as uuid } from 'uuid'
import { PlantSection } from './plant.styles'
import { niceNames, capitalize } from '../../util'

const PlantSections = ({ plant }) => {
  return(
    // eslint-disable-next-line
    Object.keys(plant).map(key => {
      if (key !== 'id' && key !== 'roomId' && key !== 'name' && plant[key]) {
        // TODO: create formatData() util function to handle rendering of temperatures (degrees) and Season names instead of ids
        return <PlantSection key={uuid()}><strong>{niceNames[key] ? niceNames[key] : capitalize(key)}: </strong>{plant[key]}</PlantSection>
      }
    })
  )
}

export default PlantSections