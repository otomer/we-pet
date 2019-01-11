import './select-filters.scss';

import PropTypes from 'prop-types';
import { RESTAURANT_MAX_RATING } from '../../constants';
import React from 'react';
import { generateUpTo } from '../../helpers/time-helper';

const SelectFilters = ({ filterRating, filterMaxDeliveryTime }) => {
  const upToTimes = generateUpTo(10, 30);
  const ratings = Array.from(
    { length: RESTAURANT_MAX_RATING },
    (v, k) => k + 1,
  );

  return (
    <div className="select-filters">
      <div className="select-style">
        <select onChange={e => filterRating(e.target.value)}>
          <option value="">Minimum Rating...</option>
          {ratings.map(val => (
            <option key={val} value={val}>
              From {'☆'.repeat(val)}
            </option>
          ))}
        </select>
      </div>

      <div className="select-style">
        <select onChange={e => filterMaxDeliveryTime(e.target.value)}>
          <option>Maximum Delivery Time...</option>
          {upToTimes.map(time => {
            return (
              <option key={time.value} value={time.value}>
                Up to {time.text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

SelectFilters.propTypes = {
  filterRating: PropTypes.func,
  filterMaxDeliveryTime: PropTypes.func,
};

export default SelectFilters;
