import React from 'react';
import PropTypes from 'prop-types';
import RestaurantsListItem from '../RestaurantsListItem';
import './restaurants-list.scss';

const RestaurantsList = props => {
  const { restaurants } = props;
  return (
    <div className="restaurants-list-container">
      <div className="container-content">
        {restaurants &&
          restaurants.map(restaurant => {
            return (
              <RestaurantsListItem
                key={restaurant.id}
                restaurant={restaurant}
              />
            );
          })}
      </div>
    </div>
  );
};

RestaurantsList.propTypes = {
  restaurants: PropTypes.array,
};

export default RestaurantsList;
