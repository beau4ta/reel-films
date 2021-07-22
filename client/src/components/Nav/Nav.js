import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = (props) => {

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="#" active>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
       
      </Nav>
    </div>
  );
}

export default Navbar;