import React from 'react';
import PropTypes from 'prop-types';
import Tenbis from '../Tenbis';
import DeliveryTime from '../DeliveryTime';
import ReviewsBasis from '../ReviewsBasis';
import Rating from '../Rating';
import './restaurants-list-item.scss';

/* TODO: This is only a first temp version, will be major changed. */
const RestaurantsListItem = props => {
  function cleanup(s) {
    return s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
  }
  const {
    id,
    name,
    cuisines,
    reviews,
    location,
    is_tenbis,
    max_delivery_time,
    rating_avg,
  } = props.restaurant;

  const cuisinesCsv = cuisines.map(elem => elem.name).join(', ');

  return (
    <React.Fragment>
      <div key={id} className={'restaurant-item'}>
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                'url(http://lorempixel.com/246/140/food/' +
                encodeURIComponent(cleanup(name)) +
                ')',
            }}
          />
          <ul className="details">
            <h4>Random Review</h4>
            <li className="author">Jane Doe</li>
            <li className="date">July. 15, 2015</li>
            <li className="comment">Some text comment</li>
          </ul>
        </div>
        <div className="description">
          <Tenbis isTenbis={is_tenbis} />
          <h1>{name}</h1>
          <h2>
            <Rating rating={rating_avg} />
            <ReviewsBasis average={rating_avg} total={reviews.length} />
          </h2>
          <p>{cuisinesCsv}</p>
          <DeliveryTime time={max_delivery_time} />
          <h2>
            <i className="fas fa-map-marker-alt" /> {location.address}
          </h2>
          <p className="read-more">
            <a href="/">{reviews.length} Review(s)</a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

RestaurantsListItem.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cuisines: PropTypes.array.isRequired,
    max_delivery_time: PropTypes.number.isRequired,
    is_tenbis: PropTypes.bool.isRequired,
    rating_avg: PropTypes.number.isRequired,
    reviews: PropTypes.array.isRequired,
    location: PropTypes.shape({
      address: PropTypes.string.isRequired,
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired,
    }),
  }),
};

export default RestaurantsListItem;
