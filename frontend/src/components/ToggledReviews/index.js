import './toggled-reviews.scss';

import PropTypes from 'prop-types';
import Rating from '../Rating';
import React from 'react';
import classNames from 'classnames/bind';

class ToggledReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { reviews } = this.props;
    return (
      <div className="read-more">
        <button onClick={this.toggle.bind(this)}>
          {this.props.reviews.length} Review(s)
        </button>

        <div className={classNames('collapse', this.state.open ? ' in' : '')}>
          {reviews &&
            reviews.map(review => {
              return (
                <div key={review.id} className="collapsible-item">
                  <Rating rating={review.rating} /> <b>{review.author}:</b> "
                  {review.comment}"
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

ToggledReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      comment: PropTypes.string,
      rating: PropTypes.number,
      created_at: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

export default ToggledReviews;
