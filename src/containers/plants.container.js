import React from 'react'
import { connect } from 'react-redux'


const PlantsContainer = ({ plants }) => {


  return(
    <div>
      <h1>Plants Container!</h1>
      {plants.map(plant => <li>{plant.name}</li>)}
    </div>
  )
}


export default PlantsContainer