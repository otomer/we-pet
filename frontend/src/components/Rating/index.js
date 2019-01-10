import './rating.scss';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating);
  return (
    <span className="rating" title={rating}>
      {[0, 1, 2].map((x, i) => (
        <i
          key={x}
          className={classNames(x < roundedRating ? 'fas' : 'far', 'fa-star')}
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
