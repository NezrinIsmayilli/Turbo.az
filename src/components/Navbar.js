import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      Nav
      <NavLink to="/wishlist">wishlist</NavLink>
    </nav> 
  )
}

export default Navbar;