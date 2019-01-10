import React from 'react';
import './search.scss';

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search"
        className="search-input"
        aria-label="Search"
      />
      <button className="search-btn" aria-label="Search">
        <i className="fa fa-search" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Search;
