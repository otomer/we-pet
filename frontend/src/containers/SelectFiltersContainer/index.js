import { filterMaxDeliveryTime, filterRating } from '../../actions';

import PropTypes from 'prop-types';
import React from 'react';
import SelectFilters from '../../components/SelectFilters';
import { connect } from 'react-redux';

const SelectFiltersContainer = ({ filterRating, filterMaxDeliveryTime }) => {
  return (
    <SelectFilters
      filterRating={filterRating}
      filterMaxDeliveryTime={filterMaxDeliveryTime}
    />
  );
};

SelectFiltersContainer.propTypes = {
  filterRating: PropTypes.func,
  filterMaxDeliveryTime: PropTypes.func,
};

const mapStateToProps = state => state;
const mapDispatchToProps = {
  filterRating,
  filterMaxDeliveryTime,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectFiltersContainer);
