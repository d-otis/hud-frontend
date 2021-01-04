import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Header } from '../components/header/header.styles'
import PlantsList from '../components/plants/plantsList'
import Plant from '../components/plants/plant'


const PlantsContainer = ({ plants }) => {


  return(
    <div>
      <Header>Plants Container</Header>
      {plants.map(plant => <li>{plant.name}</li>)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    plants: state.plants
  }
}

export default connect(mapStateToProps)(PlantsContainer)