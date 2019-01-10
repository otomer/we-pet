import './search.scss';

import PropTypes from 'prop-types';
import React from 'react';
import debounce from 'lodash/debounce';

class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  debouncedSearch = debounce(q_name => {
    this.props.filterName(q_name);
  }, 200);

  searchValueChanged = inputValue => {
    this.setState({ inputValue }, () => {
      this.debouncedSearch(inputValue);
    });
  };

  render() {
    return (
      <div className="search-container">
        <input
          value={this.state.inputValue}
          type="search"
          placeholder="Search"
          className="search-input"
          aria-label="Search"
          onChange={e => this.searchValueChanged(e.target.value)}
        />
        <button
          className="search-btn"
          aria-label="Search"
          onClick={() => this.props.filterName(this.state.inputValue)}
        >
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  filterName: PropTypes.func,
};

export default Search;
