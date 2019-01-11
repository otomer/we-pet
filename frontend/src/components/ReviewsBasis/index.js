import PropTypes from 'prop-types';
import React from 'react';

const ReviewsBasis = ({ average, total }) => {
  return (
    <span className="reviews-basis">
      {` ${average.toFixed(2)} average is based on ${total} reviews`}
    </span>
  );
};

ReviewsBasis.propTypes = {
  average: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ReviewsBasis;
