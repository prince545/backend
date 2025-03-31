import React from 'react';
import './List.css';

const List = () => {
  console.log("✅ List component is rendering!");
  return (
    <div className="list-container">
      <h1 style={{ color: "white", backgroundColor: "#007bff", padding: "10px" }}>
        List Page
      </h1>
      <p>This is the List Page. If you see this, everything is working!</p>
    </div>
  );
};

export default List;
