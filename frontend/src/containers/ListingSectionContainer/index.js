import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';
import ListingSection from '../../components/ListingSection';
import { bindActionCreators } from 'redux';

class ListingSectionContainer extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    return <ListingSection restaurants={restaurants} />;
  }
}

ListingSectionContainer.propTypes = {
  restaurants: PropTypes.array,
  fetchRestaurants: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { isFetching, lastUpdated, restaurants } = state.restaurantsReducer;
  return {
    isFetching,
    lastUpdated,
    restaurants,
  };
};

function mapDispatchToProps(dispatch) {
  return { fetchRestaurants: bindActionCreators(fetchRestaurants, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListingSectionContainer);
