import ListingSection from '../../components/ListingSection';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';

class ListingSectionContainer extends React.PureComponent {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const { restaurants, lastUpdated } = this.props;
    return (
      <ListingSection restaurants={restaurants} lastUpdated={lastUpdated} />
    );
  }
}

ListingSectionContainer.propTypes = {
  restaurants: PropTypes.array,
  fetchRestaurants: PropTypes.func.isRequired,
  lastUpdated: PropTypes.instanceOf(Date),
};

const mapStateToProps = state => {
  const { isFetching, lastUpdated, restaurants } = state.restaurantsReducer;
  return {
    isFetching,
    lastUpdated,
    restaurants,
  };
};

const mapDispatchToProps = {
  fetchRestaurants,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListingSectionContainer);
