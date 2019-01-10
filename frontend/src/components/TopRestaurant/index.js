import './top-rest.scss';

import PropTypes from 'prop-types';
import { RANDOM_IMAGE_LP_URL } from '../../constants';
import Rating from '../Rating';
import React from 'react';
import SelectFiltersContainer from '../../containers/SelectFiltersContainer';
import sample from 'lodash/sample';

const TopRestaurant = ({ restaurant }) => {
  const review =
    (restaurant && restaurant.reviews && sample(restaurant.reviews)) || null;
  return (
    <section className="top-section">
      {restaurant && (
        <div className="container">
          <div className="top-restaurant">
            <div className="top-rest-icon">
              <img src={`${RANDOM_IMAGE_LP_URL}`} alt={restaurant.name} />
            </div>

            <div className="top-rest-title">
              <h1>
                Our Recommendation: <b>"{restaurant.name}"</b> /{' '}
                <Rating rating={restaurant.rating_avg} />
              </h1>

              {review && (
                <div className="top-rest-subtitle">
                  <b>{review.author}:</b> "{review.comment}"
                </div>
              )}
            </div>
          </div>

          <SelectFiltersContainer />
        </div>
      )}
    </section>
  );
};

TopRestaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cuisines: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.name,
        id: PropTypes.number,
      }),
    ).isRequired,
    max_delivery_time: PropTypes.number.isRequired,
    is_tenbis: PropTypes.bool.isRequired,
    rating_avg: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string,
        comment: PropTypes.string,
        rating: PropTypes.number,
        id: PropTypes.number,
      }),
    ).isRequired,
    location: PropTypes.shape({
      address: PropTypes.string.isRequired,
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired,
    }),
  }),
};

export default TopRestaurant;
