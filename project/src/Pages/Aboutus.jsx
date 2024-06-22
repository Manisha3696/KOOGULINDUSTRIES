import React from 'react'
import '../css/Aboutus.css';
import { Link } from 'react-router-dom'
import Header from '../Components/Header';
function Aboutus() {


  return (
    <>
      <Header />
      <div className='container'>
        <section class="About-banner">
          <img src="./images/About-banner.png" alt="" />
          <div class="content">
            <h1 className='text'>About Us</h1>
            <ul className='menu'>
              <li><Link to="/">HOME</Link></li>
              <li> / ABOUT US</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Aboutus
