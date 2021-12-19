import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/navbar.css';

import logo from '../asset/mylogo.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">

      <div className="logoContainer">
        <img className="logo" src={logo} alt="logo" />
        <h1> Space Traveler&apos;s hub </h1>

      </div>
      <div className="link-container">
        <ul className="nav-elements">
          <li><Link className="links" activeClassName="activelinks" key="3" to="/">Rockets</Link></li>
          <li><Link className="links" activeClassName="activelinks" key="1" to="/missions">Missions</Link></li>
          <li><Link className="links" activeClassName="activelinks" key="2" to="/my-profile">My Profile</Link></li>
        </ul>

      </div>
    </div>
  </nav>
);

export default Navbar;
