import PropTypes from 'prop-types';
import React from 'react';
import Search from '../../components/Search';
import { connect } from 'react-redux';
import { filterName } from '../../actions';

const SearchContainer = ({ filterName }) => {
  return <Search filterName={filterName} />;
};

SearchContainer.propTypes = {
  filterName: PropTypes.func,
};

const mapStateToProps = state => state;
const mapDispatchToProps = {
  filterName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchContainer);
