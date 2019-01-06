import React from 'react';
import PropTypes from 'prop-types';
import { formatAsHoursMinutes } from '../../helpers/time-helper';

import './deliveryTime.scss';

const DeliveryTime = props => {
  const { time } = props;

  function getTimeLabel(n) {
    if (n < 60) {
      return 'fast';
    } else if (n < 120) {
      return 'fair';
    }
    return 'slow';
  }

  return (
    <p className={'delivery ' + getTimeLabel(time)}>
      <i className="fas fa-truck" /> {formatAsHoursMinutes(time) + '  '}
    </p>
  );
};

DeliveryTime.propTypes = {
  time: PropTypes.number.isRequired,
};

export default DeliveryTime;
