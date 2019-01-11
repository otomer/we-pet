import 'moment-timezone';
import './review.scss';

import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Rating from '../Rating';
import React from 'react';

const Review = ({ review }) => {
  const { author, comment, rating, created_at, id } = review;
  return (
    <ul className="details">
      <h4 className="author">
        {author} <Rating rating={rating} /> (#{id})
      </h4>
      <li />
      <li className="comment">"{comment}"</li>
      <hr />
      <li className="date">
        <Moment>{created_at}</Moment>
      </li>
    </ul>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    comment: PropTypes.string,
    rating: PropTypes.number,
    created_at: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default Review;
