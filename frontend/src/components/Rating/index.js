import React from 'react';
import PropTypes from 'prop-types';
import './rating.scss';

const Rating = props => {
  const { rating } = props;
  const roundedRating = Math.round(props.rating);
  return (
    <span className="rating" title={rating}>
      {Array.apply(null, { length: 3 })
        .map(Number.call, Number)
        .map((x, i) => (
          <i
            key={x}
            className={(i < roundedRating ? 'fas' : 'far') + ' fa-star'}
            aria-hidden="true"
          />
        ))}
    </span>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
