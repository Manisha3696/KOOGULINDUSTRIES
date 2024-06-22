import React from 'react';
import '../css/Dropdown.css';
import { Link } from 'react-router-dom'
function Dropdown() {
  return (
    <div>
      <div className="down-container">
          <ul className="product-items">
            <li><Link to="/Flower">Flower</Link></li>
            <li><Link to="/Poojaitem">Poojaitem</Link></li> 
            <li><Link to="/Rice">Rice</Link></li>
            <li><Link to="/Spices">Spices</Link></li>
          </ul>
        </div>
    </div>
  );
}

export default Dropdown;
