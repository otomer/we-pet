import './logo.scss';

import { APP_NAME } from '../../constants';
import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container">
      <a href="/">
        <h1>
          <i className="fa fa-utensils logo-icon" aria-hidden="true" />
          {APP_NAME}
        </h1>
      </a>
    </div>
  );
};

export default Logo;
