import React from "react";
import { MDBCardBody, MDBIcon, MDBInput } from "mdb-react-ui-kit";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "./ContactScreen.css";

const ContactScreen = () => {
  return (
    <Container className="contact-section my-5">
      <Row>
        <Col className="px-3" lg="8">
          <Card.Body className="form">
            <div className="contact-section-header-text py-3">
              <h2>Send A Message to Us </h2>
            </div>
            <Row className="py-3">
              <Col md="10">
                <div className="contact-section-text">
                  <MDBInput
                    type="text"
                    id="form-contact-name"
                    label="Your name"
                    className="contact-input-section"
                  />
                </div>
              </Col>
            </Row>
            <Row className="py-3">
              <Col md="10">
                <div className="contact-section-text">
                  <MDBInput
                    type="email"
                    id="form-contact-email"
                    label="Your email"
                    className="contact-input-section"
                  />
                </div>
              </Col>
            </Row>
            <Row className="py-3">
              <Col md="10">
                <div className="contact-section-text">
                  <MDBInput
                    label="Your Message"
                    id="textArea"
                    textarea
                    rows={4}
                    className="contact-input-section"
                  />
                  <Button className="my-3" variant="danger">
                    Send
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Col>
        <Col lg="4">
          <MDBCardBody className="contact-section-header-text text-center h-100 white-text">
            <div className="my-3 mb-5">
              <h3>Contact Information</h3>
            </div>
            <Container>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <div className="my-2">
                    <MDBIcon
                      icon="map-marker-alt"
                      className="px-3 py-2 fa-lg"
                      style={{ color: "#dc3545" }}
                    />
                    <br></br>
                    <div className="contact-section-text mt-3">
                      House: 1363, Road: 7, Avenue: 3, Mirpur DOHS, Dhaka.
                    </div>
                  </div>
                </li>
                <hr className="hrline" />
                <li>
                  <div className="my-2">
                    <MDBIcon
                      icon="phone"
                      className="px-3 py-2 fa-lg"
                      style={{ color: "#dc3545" }}
                    />
                    <br></br>
                    <div className="contact-section-text mt-3">
                      +880 17 2303 8230
                    </div>
                  </div>
                </li>
                <hr className="hrline" />
                <li>
                  <div className="my-2">
                    <MDBIcon
                      icon="envelope"
                      className="px-3 py-2 fa-lg"
                      style={{ color: "#dc3545" }}
                    />
                    <br></br>
                    <div className="contact-section-text mt-3">
                      info.pencilpublication@gmail.com
                    </div>
                  </div>
                </li>
              </ul>
              <hr className="hrline" />
            </Container>
          </MDBCardBody>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
