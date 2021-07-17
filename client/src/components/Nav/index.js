import React from "react";
import { Navbar, Button } from "react-bootstrap";
import "./Nav/style.css";

function Nav() {
  return (
    //

    <Navbar className="navbar   main-navigation justify-content-between ">
      <Navbar.Brand className="logo" href="/">
        Reel-Films
      </Navbar.Brand>
      <Button
        className="login-btn"
        variant="outline-primary"
        href="SignIn"
        size="sm"
      >
        Log In
      </Button>
    </Navbar>
  );
}

export default Nav;
