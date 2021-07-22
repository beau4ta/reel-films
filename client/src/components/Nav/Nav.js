import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Nav = (props) => {

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="#" active>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
       
      </Nav>
    </div>
  );
}

export default Nav;