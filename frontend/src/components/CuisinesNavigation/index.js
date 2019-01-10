import React from 'react';
import PropTypes from 'prop-types';
import './cuisines-navigation.scss';

const CuisinesNavigation = props => {
  const { items } = props;
  return (
    <nav className="cuisines-navigation-container">
      <div className="container">
        <ul>
          {items.map(item => (
            <li key={item.id} className="nav-item">
              <a href="/">{item.name}</a>{' '}
              {/* TODO: after adding redux - set this as action property*/}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

CuisinesNavigation.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CuisinesNavigation;
