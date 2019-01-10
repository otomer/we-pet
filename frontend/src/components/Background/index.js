import './background.scss';

import { APP_SLOGAN } from '../../constants';
import React from 'react';

const Background = () => {
  return (
    <section className="background-container">
      <div className="title">{APP_SLOGAN}</div>
    </section>
  );
};

export default Background;
