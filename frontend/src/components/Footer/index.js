import React from 'react';
import { APP_NAME } from '../../constants';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      Copyright © 2019 {APP_NAME}. All rights reserved
    </footer>
  );
};

export default Footer;
