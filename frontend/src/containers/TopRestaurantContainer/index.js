import PropTypes from 'prop-types';
import React from 'react';
import TopRestaurant from '../../components/TopRestaurant';
import { connect } from 'react-redux';
import { fetchTopRestaurant } from '../../actions';

class TopRestaurantContainer extends React.PureComponent {
  componentDidMount() {
    this.props.fetchTopRestaurant();
  }

  render() {
    const { topRestaurant } = this.props;
    return <TopRestaurant restaurant={topRestaurant} />;
  }
}

TopRestaurantContainer.propTypes = {
  topRestaurant: PropTypes.object,
  fetchTopRestaurant: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { topRestaurant } = state.restaurantsReducer;
  return {
    topRestaurant,
  };
};

const mapDispatchToProps = {
  fetchTopRestaurant,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopRestaurantContainer);
