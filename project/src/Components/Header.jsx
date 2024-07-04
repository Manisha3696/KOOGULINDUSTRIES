import React from 'react'
import '../css/Header.css'
import Logo from '../images/logo1.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='container'>
      <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundImage: `url("../images/Bg.png")`, paddingLeft: `0px` }}>
        <div class="container-fluid">
          <img className='logo-img' src={Logo} alt="Logo.png" />
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to='/'>Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/aboutus'>About-us</Link>  </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item"><Link to="/rice">Rice</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/poojaproducts">Pooja Products</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/spices">Spices</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/flower">Flower</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/snacks">Snacks</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/paanbeeda">Paan Beeda</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/vegetables">Vegetables</Link></a></li>
                  <li><a class="dropdown-item"><Link to="/leaves">Leaves</Link></a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/certificate'>Certificate</Link> </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/contactus'>Contact-us</Link> </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header