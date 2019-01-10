import React from 'react';
import Logo from '../Logo';
import SearchContainer from '../../containers/SearchContainer';
import './header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <Logo />
      <SearchContainer />
    </header>
  );
};

export default Header;
