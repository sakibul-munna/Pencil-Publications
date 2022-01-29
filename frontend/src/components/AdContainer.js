import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AdContainer = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col xs={6}>
          <img
            src={require("../assets/ad02.png")}
            alt="ad banner 01"
            className="img-fluid hover-shadow"
          />
        </Col>
        <Col xs={6}>
          <img
            src={require("../assets/ad02.png")}
            alt="ad banner 01"
            className="img-fluid hover-shadow"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AdContainer;
