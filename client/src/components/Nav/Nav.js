import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Nav.css";

const Navbar = (props) => {

  return (
    <div className="nav">
      <Nav tabs>
        <NavItem>
          <Link to="/home" className='nav-link'>Home</Link>
        </NavItem>
        <NavItem>
          <Link to='/profile' className='nav-link'>Profile</Link>
        </NavItem>
        <NavItem>
          <Link to='/' className='nav-link'>Log Out</Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navbar;