import './listing-section.scss';

import Map from '../Map';
import PropTypes from 'prop-types';
import React from 'react';
import RestaurantsList from '../RestaurantsList';

const ListingSection = ({ restaurants, lastUpdated }) => {
  const locations =
    restaurants &&
    restaurants.map(element => {
      return { ...element.location, name: element.name };
    });
  return (
    <main className="listing-section-container">
      <div className="container flexbox-container">
        <RestaurantsList restaurants={restaurants} lastUpdated={lastUpdated} />
        <Map markers={locations} />
      </div>
    </main>
  );
};

ListingSection.propTypes = {
  restaurants: PropTypes.array,
  lastUpdated: PropTypes.instanceOf(Date),
};

export default ListingSection;
