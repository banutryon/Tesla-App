import React from 'react';
import './Header.css';
import logo from '../../assets/Images/logo.png';

const Header = () => (
  <div className="header">
    <img src={logo} alt="Tesla" />
  </div>
)

export default Header;