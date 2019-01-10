import './cuisines-navigation.scss';

import LoadingHOC from '../../hoc/loading.hoc';
import PropTypes from 'prop-types';
import React from 'react';

class Categories extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currCuisine: null,
    };
  }

  setFilterCuisine(currCuisine) {
    const cuisine =
      !this.state.currCuisine || this.state.currCuisine !== currCuisine
        ? currCuisine
        : null;
    this.setState({ currCuisine: cuisine }, this.props.filterCuisine(cuisine));
  }

  render() {
    const { cuisines } = this.props;
    return (
      <nav className="cuisines-navigation-container">
        <div className="container">
          <ul>
            {cuisines &&
              cuisines.map(item => (
                <li key={item.id} className="nav-item">
                  <button
                    className={
                      item.id === this.state.currCuisine ? 'current' : ''
                    }
                    onClick={() => {
                      this.setFilterCuisine(item.id);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    );
  }
}

Categories.propTypes = {
  cuisines: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  filterCuisine: PropTypes.func,
};

export default Categories;
