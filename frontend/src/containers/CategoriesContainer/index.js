import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCuisines } from '../../actions';
import CuisinesNavigation from '../../components/CuisinesNavigation';

class CategoriesContainer extends Component {
  componentDidMount() {
    this.props.fetchCuisines();
  }
  render() {
    const { cuisines } = this.props;
    return <CuisinesNavigation cuisines={cuisines} />;
  }
}

CategoriesContainer.propTypes = {
  cuisines: PropTypes.array,
  fetchCuisines: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { isFetching, lastUpdated, cuisines } = state.cuisinesReducer;
  return {
    isFetching,
    lastUpdated,
    cuisines,
  };
};

function mapDispatchToProps(dispatch) {
  return { fetchCuisines: bindActionCreators(fetchCuisines, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesContainer);
