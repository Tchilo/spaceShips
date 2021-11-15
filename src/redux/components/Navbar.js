import { Link } from 'react-router-dom';

import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div><img src="/src/assets/planet.png" alt="logo" /></div>
      <Link key="3" to="/">Rockets</Link>
      <Link key="1" to="/missions">Missions</Link>
      <Link key="2" to="/my-profile">My Profile</Link>
    </div>
  );
}

export default Navbar;
