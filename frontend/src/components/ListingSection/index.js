import React from 'react';
import PropTypes from 'prop-types';
import Map from '../Map';
import RestaurantsList from '../RestaurantsList';
import './listing-section.scss';

const ListingSection = props => {
  const { restaurants } = props;
  const locations = restaurants && restaurants.map(element => element.location);

  return (
    <main className="listing-section-container">
      <div className="container flexbox-container">
        <RestaurantsList restaurants={restaurants} />
        <Map items={locations} />
      </div>
    </main>
  );
};

ListingSection.propTypes = {
  restaurants: PropTypes.array,
};

export default ListingSection;
