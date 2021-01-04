import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../header/header.styles'

const PlantsList = ({ plants, match }) => {
  return(
    <div>
      <Header>Plants List</Header>
      {plants.map(plant => <li><Link to={`${match.path}${plant.id}`}>{plant.name}</Link></li>)}
    </div>
  )
}

export default PlantsList