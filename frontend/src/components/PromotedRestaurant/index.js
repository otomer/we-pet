import React from 'react';
import Rating from '../Rating';
import DeliveryTime from '../DeliveryTime';
import './promoted-rest.scss';

const PromotedRestaurant = () => {
  return (
    <section className="promoted-rest-section">
      <div className="container">
        <div className="promoted-rest-icon">
          <img src="http://lorempixel.com/100/100/food/" alt="" />
        </div>

        <div className="promoted-rest-title">
          <h1>
            {/* TODO: Set this later dynamically */}
            Suggested by us: "Hummus Ashkara" ?<Rating rating={2} />
          </h1>

          <div className="promoted-rest-subtitle">
            <DeliveryTime time={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotedRestaurant;
