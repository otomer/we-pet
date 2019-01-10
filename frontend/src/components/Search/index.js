import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';

const Search = ({ handleClick }) => {
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search"
        className="search-input"
        aria-label="Search"
      />
      <button className="search-btn" aria-label="Search" onClick={handleClick}>
        <i className="fa fa-search" aria-hidden="true" />
      </button>
    </div>
  );
};

Search.propTypes = {
  handleClick: PropTypes.func,
};

export default Search;
