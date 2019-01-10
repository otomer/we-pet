import React from 'react';
import { APP_SLOGAN } from '../../constants';
import './background.scss';

const Background = () => {
  return (
    <section className="background-container">
      <div className="title">{APP_SLOGAN}</div>
    </section>
  );
};

export default Background;
