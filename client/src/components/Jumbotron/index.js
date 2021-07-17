import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import { Container, Jumbotron } from "react-bootstrap";
import { Row, Col } from ".Grid/index.js";
import ".Jumbotron/style.css";
import SearchButton from "../SearchBtn/index.js";
import API from "../../utils/API.js";

function Header() {
  return <Jumbotron fluid></Jumbotron>;
}

export default Header;
