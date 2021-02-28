import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from './actions/plants.actions'
import { fetchWeather } from './actions/weather.actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PlantsContainer from './containers/plants.container';
import WeatherContainer from './containers/weather.container';
import Navigation from "./components/navigation/Navigation"

class App extends Component {

  componentDidMount() {
    this.props.fetchPlants()
    this.props.fetchWeather()
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Route path="/plants" render={renderProps => <PlantsContainer {...renderProps} />} />
        <Route path="/weather" render={renderProps => <WeatherContainer {...renderProps} />} />
      </Router>
    );
  }
}

export default connect(null, { fetchPlants, fetchWeather })(App);
