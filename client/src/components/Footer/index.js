import React from "react";
import "./Footer/style.css";
import { Container, Row, Col } from "../Grid/Grid";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <span className="text-muted">
          <Row>
            <Col size="md-12">
              <h5>Reel-Films</h5>
              <div id="createdBy">
                Copyright © 2020 Reel-Films All Rights Reserved
              </div>
            </Col>
          </Row>
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
