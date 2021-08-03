import React, { useState, useEffect } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Nav.css";
import API from '../../utils/API';

const Navbar = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    API.checkLoggedIn()
    .then(res => {
    console.log(res)
    if (res.data) {
      setLoggedIn(true)
    }
  })
  })

  return (
    <div className="nav">
      {loggedIn ? (<Nav tabs>
        <NavItem>
          <Link to="/home" className='nav-link'>Home</Link>
        </NavItem>
        <NavItem>
          <Link to='/profile' className='nav-link'>Profile</Link>
        </NavItem>
        
        <NavItem>
          <Link to='/' className='nav-link'>Log Out</Link>
        </NavItem>
      </Nav>) : (
        <Nav tabs>
        <NavItem>
          <Link to="/" className='nav-link'>Home</Link>
        </NavItem>
      </Nav>
      )}
      
    </div>
  );
}

export default Navbar;