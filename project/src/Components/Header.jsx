import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css';
function Header() {
 
  return (
    <div>
    <section>
      <div className="header">
        <div className="left">
          <img src="./logo.png" alt="Logo" />
        </div>
        <div className="main-container">
          <ul className="menu-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>
     
      </div>
    </section>
    
  </div>
);
}

export default Header;