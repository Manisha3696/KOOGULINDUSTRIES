import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as Icons from "react-icons/fa";
import "../css/Header.css";
import { navItems } from "../Components/Navitems";
import Dropdown from "./Dropdown";

function Header() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          NATURE
          {/* <Icons.FaTree /> */}
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Products") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Header;
  // const [scrollHeight, setScrollHeight] = useState(window.scrollY);
  // const [headerHeight, setHeaderHeight] = useState(120);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollHeight(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (scrollHeight > 0) {
  //     setHeaderHeight(80);
  //   } else {
  //     setHeaderHeight(120);
  //   }
  // }, [scrollHeight]);


 
    // <div className="header" >
    //   <img className="background-image" src='./images/Bg.png' alt="" style={{ height: headerHeight }} />
    //   <div className="logo">
    //   <img src="./logo1.png" alt="Logo" className="background-image" style={{ height: headerHeight }}/>
    //   </div>
    //   <ul className="menuitems">
    //           <li><Link to="/">Home</Link></li>
    //           <li><Link to="/aboutus">About Us</Link></li>
    //           <li><Link to="/products">Products</Link></li>
    //           <li><Link to="/contactus">Contact Us</Link></li>
    //         </ul>
    // </div>
  