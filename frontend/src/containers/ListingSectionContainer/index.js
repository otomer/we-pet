import React, { Component } from 'react';
import axios from 'axios';
import ListingSection from '../../components/ListingSection';

export default class ListingSectionContainer extends Component {
  state = {
    restaurants: [],
  };

  componentDidMount() {
    // TODO: after adding redux - set this as an action
    axios.get('restaurants').then(res => {
      const restaurants = res.data.restaurants;
      this.setState({ restaurants });
    });
  }

  render() {
    return <ListingSection items={this.state.restaurants} />;
  }
}
