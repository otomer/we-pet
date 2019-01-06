import React from 'react';
import * as Constants from '../../constants';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      Copyright © 2019 {Constants.APP_NAME}. All rights reserved
    </footer>
  );
};

export default Footer;
