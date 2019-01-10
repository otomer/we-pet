import React from 'react';
import * as Constants from '../../constants';
import './logo.scss';

const Logo = () => {
  return (
    <div className="logo-container">
      <a href="/">
        <h1>
          <i className="fa fa-utensils logo-icon" aria-hidden="true" />
          {Constants.APP_NAME}
        </h1>
      </a>
    </div>
  );
};

export default Logo;
