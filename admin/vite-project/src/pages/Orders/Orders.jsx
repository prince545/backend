import React from 'react';
import './Orders.css';

const Orders = () => {
  console.log("✅ Orders component is rendering!");
  return (
    <div className="orders-container">
      <h1 style={{ color: "white", backgroundColor: "#28a745", padding: "10px" }}>
        Orders Page
      </h1>
      <p>This is the Orders Page. If you see this, everything is working!</p>
    </div>
  );
};

export default Orders;
