import './header.scss';

import AddRestaurant from '../AddRestaurant';
import Logo from '../Logo';
import React from 'react';
import SearchContainer from '../../containers/SearchContainer';

const Header = () => {
  return (
    <header className="header-container">
      <Logo />
      <SearchContainer />
      <AddRestaurant />
    </header>
  );
};

export default Header;
