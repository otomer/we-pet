import './deliveryTime.scss';

import { formatAsHoursMinutes, formatAsSpeed } from '../../helpers/time-helper';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';

const DeliveryTime = ({ time }) => {
  return (
    <p className={classNames('delivery', formatAsSpeed(time))}>
      <i className="fas fa-truck" /> {formatAsHoursMinutes(time)}
    </p>
  );
};

DeliveryTime.propTypes = {
  time: PropTypes.number,
};

export default DeliveryTime;
