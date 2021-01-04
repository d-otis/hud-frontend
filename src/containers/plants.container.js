import React from 'react'
import { connect } from 'react-redux'
import { Header } from '../components/header/header.styles'


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