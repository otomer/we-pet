import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search';

const SearchContainer = () => {
  return <Search handleClick={() => console.log('temp')} />;
};

SearchContainer.propTypes = {
  refreshRestaurants: PropTypes.func,
};

export default SearchContainer;
