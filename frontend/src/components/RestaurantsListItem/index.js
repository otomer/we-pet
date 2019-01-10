import './restaurants-list-item.scss';

import DeliveryTime from '../DeliveryTime';
import PropTypes from 'prop-types';
import { RANDOM_IMAGE_LP_URL } from '../../constants';
import Rating from '../Rating';
import React from 'react';
import Review from '../Review';
import ReviewsBasis from '../ReviewsBasis';
import Tenbis from '../Tenbis';
import ToggledReviews from '../ToggledReviews';
import { cleanup } from '../../helpers/string-helper';
import sample from 'lodash/sample';

const RestaurantsListItem = ({ restaurant }) => {
  const {
    id,
    name,
    cuisines,
    reviews,
    location,
    is_tenbis,
    max_delivery_time,
    rating_avg,
  } = restaurant;

  return (
    <div key={id} className={'restaurant-item'}>
      <div className="meta">
        <div
          className="photo"
          style={{
            backgroundImage: `url(${RANDOM_IMAGE_LP_URL}${cleanup(name)})`,
          }}
        />
        {reviews && reviews.length > 0 && <Review review={sample(reviews)} />}
      </div>
      <div className="description">
        <Tenbis isTenbis={is_tenbis} />
        <h1>{name}</h1>
        <h2>
          <Rating rating={rating_avg} />
          {reviews && reviews.length && (
            <ReviewsBasis average={rating_avg} total={reviews.length} />
          )}
        </h2>
        <p>{cuisines.map(elem => elem.name).join(', ')}</p>
        <DeliveryTime time={max_delivery_time} />
        <h2>
          <i className="fas fa-map-marker-alt" />{' '}
          {(location && location.address) || 'No location'}
        </h2>
        <ToggledReviews reviews={reviews} />
      </div>
    </div>
  );
};

RestaurantsListItem.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cuisines: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.name,
        id: PropTypes.number,
      }),
    ).isRequired,
    max_delivery_time: PropTypes.number,
    is_tenbis: PropTypes.bool,
    rating_avg: PropTypes.number,
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

export default RestaurantsListItem;
