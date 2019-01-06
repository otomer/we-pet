import React, { Component } from 'react';
import axios from 'axios';
import CuisinesNavigation from '../../components/CuisinesNavigation';

export default class CategoriesContainer extends Component {
  state = {
    cuisines: [],
  };

  componentDidMount() {
    // TODO: after adding redux - set this as an action
    axios.get('cuisines').then(res => {
      const cuisines = res.data;
      this.setState({ cuisines });
    });
  }

  render() {
    return <CuisinesNavigation items={this.state.cuisines} />;
  }
}
