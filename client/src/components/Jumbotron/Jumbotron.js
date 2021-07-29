import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./Jumbotron.css";

const Header = (props) => {
  return (
    <div className="jumbotron">
      <Jumbotron fluid>
        <Container fluid>
          <p className="lead"></p>
          <h1 className="display-3">
            <i className="fas fa-film"></i> Reel Films
          </h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
