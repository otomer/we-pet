import React from 'react';
import PropTypes from 'prop-types';
import Map from '../Map';
import RestaurantsList from '../RestaurantsList';
import './listing-section.scss';

const ListingSection = props => {
  const { items } = props;
  const locations = items.map(element => element.location);

  return (
    <main className="listing-section-container">
      <div className="container flexbox-container">
        <RestaurantsList items={items} />
        <Map items={locations} />
      </div>
    </main>
  );
};

ListingSection.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListingSection;
