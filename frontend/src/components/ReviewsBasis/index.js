import React from 'react';
import PropTypes from 'prop-types';

const ReviewsBasis = props => {
  const { average, total } = props;
  return (
    <span className="reviews-basis">
      {' / ' +
        Math.round(average * 10) / 10 +
        ' average based on ' +
        total +
        ' reviews'}
    </span>
  );
};

ReviewsBasis.propTypes = {
  average: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ReviewsBasis;
