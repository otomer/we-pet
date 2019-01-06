import React from 'react';
import * as Constants from '../../constants';
import './background.scss';

const Background = () => {
  return (
    <section className="background-container">
      <div className="title">{Constants.APP_SLOGAN}</div>
    </section>
  );
};

export default Background;
