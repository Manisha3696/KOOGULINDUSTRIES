import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import  '../css/Header.css'

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);
  const [headerHeight, setHeaderHeight] = useState(120);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollHeight > 0) {
      setHeaderHeight(80);
    } else {
      setHeaderHeight(120);
    }
  }, [scrollHeight]);

  return (
    <div className="header" >
      <img className="background-image" src='./images/Bg.png' alt="" style={{ height: headerHeight }} />
      <div className="logo">
      <img src="./images/logo.png" alt="Logo" className="background-image" style={{ height: headerHeight }}/>
      </div>
      <ul className="menu-items" >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Header;
