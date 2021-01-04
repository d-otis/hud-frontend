import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from './actions/plants.actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PlantsContainer from './containers/plants.container';

class App extends Component {

  componentDidMount() {
    this.props.fetchPlants()
  }

  render() {
    return (
      <Router>
        <Route path="/plants" render={renderProps => <PlantsContainer {...renderProps} />} />
      </Router>
    );
  }
}

export default connect(null, { fetchPlants })(App);
