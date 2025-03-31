import React from 'react';
import './Navbar.css';
// Placeholder logo (replace with your actual logo)
import logo from '../../admin_assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <h3 className="navbar-title">Admin Panel</h3>
    </div>
  );
};

export default Navbar;