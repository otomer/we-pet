import React from 'react';
import Logo from '../Logo';
import Search from '../Search';
import './header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <Logo />
      <Search />
    </header>
  );
};

export default Header;
