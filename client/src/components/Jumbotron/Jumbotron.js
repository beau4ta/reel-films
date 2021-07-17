import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <p className="lead">Organize, Rate, Share</p>
          <h1 className="display-3">Reel Films</h1>
          <p className="lead">Plan Your Movie Night!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbotron;