import './footer.scss';

import { APP_NAME } from '../../constants';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      Copyright &copy; 2019 {APP_NAME}. All rights reserved // Coded with ❤ by
      Tomer Ovadia
    </footer>
  );
};

export default Footer;
