import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css';
function Header() {
  window.onscroll = function () {
        myscrolsEvent();
    }
    
    function myscrolsEvent() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector(".header").classList.add("fixedClass");
        } else {
    
            document.querySelector(".header").classList.remove("fixedClass");
        }
    }
  return (
    <div>
    <section>
      <div className="header">
        {/* <div className='image'>
          <img src='./images/box1.jpg'></img> */}
       
        <div className="left">
          <img src="./logo1.png" alt="Logo" />
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
      {/* </div> */}
    </section>
    
  </div>
);
}

export default Header;