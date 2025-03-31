import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
// Placeholder icons (replace with your actual icons)
import add_icon from '../../admin_assets/add_icon.png';
import order_icon from '../../admin_assets/order_icon.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={add_icon} alt="Add Icon" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={order_icon} alt="List Icon" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={order_icon} alt="Order Icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;