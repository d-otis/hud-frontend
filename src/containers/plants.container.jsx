import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Header } from '../components/header/header.styles'
import PlantsList from '../components/plants/plantsList'
import Plant from '../components/plants/plant'

const PlantsContainer = ({ plants, match }) => {

  return(
    <div className="mt-5">
      <Route path={`${match.path}/:plantId`} render={routerProps => <Plant {...routerProps} plants={plants} />} />
      <Route exact path={match.url} render={routerProps => <PlantsList {...routerProps} plants={plants} />} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    plants: state.plants
  }
}

export default connect(mapStateToProps)(PlantsContainer)