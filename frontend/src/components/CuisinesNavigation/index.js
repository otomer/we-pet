import React from 'react';
import PropTypes from 'prop-types';
import './cuisines-navigation.scss';

const CuisinesNavigation = props => {
  const { cuisines } = props;
  return (
    <nav className="cuisines-navigation-container">
      <div className="container">
        <ul>
          {cuisines &&
            cuisines.map(item => (
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
  cuisines: PropTypes.array,
};

export default CuisinesNavigation;
