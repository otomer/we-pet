import 'moment-timezone';
import './restaurants-list.scss';

import LoadingHOC from '../../hoc/loading.hoc';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import React from 'react';
import RestaurantsListItem from '../RestaurantsListItem';

const RestaurantsList = ({ restaurants, lastUpdated }) => {
  return (
    <div className="restaurants-list-container">
      <div className="container-content">
        <p>
          Searched at <Moment date={lastUpdated} /> and showing
          <b> {restaurants.length} results</b>
        </p>
        {restaurants &&
          restaurants.length > 0 &&
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
  lastUpdated: PropTypes.instanceOf(Date),
};

export default LoadingHOC('restaurants')(RestaurantsList);
// export default RestaurantsList;
