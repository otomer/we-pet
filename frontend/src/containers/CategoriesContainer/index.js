import { fetchCuisines, filterCuisine } from '../../actions';

import Categories from '../../components/Categories';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class CategoriesContainer extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCuisines();
  }
  render() {
    const { cuisines } = this.props;
    return (
      <Categories
        cuisines={cuisines}
        filterCuisine={this.props.filterCuisine}
      />
    );
  }
}

CategoriesContainer.propTypes = {
  cuisines: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  fetchCuisines: PropTypes.func.isRequired,
  filterCuisine: PropTypes.func,
};

const mapStateToProps = state => {
  const { isFetching, lastUpdated, cuisines } = state.cuisinesReducer;
  return {
    isFetching,
    lastUpdated,
    cuisines,
  };
};

const mapDispatchToProps = {
  fetchCuisines,
  filterCuisine,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesContainer);
