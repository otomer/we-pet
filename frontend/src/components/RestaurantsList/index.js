import React from 'react';
import PropTypes from 'prop-types';
import RestaurantsListItem from '../RestaurantsListItem';
import './restaurants-list.scss';

const RestaurantsList = props => {
  const { items } = props;
  return (
    <div className="restaurants-list-container">
      <div className="container-content">
        {items.map(restaurant => {
          return (
            <RestaurantsListItem key={restaurant.id} restaurant={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

RestaurantsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default RestaurantsList;
