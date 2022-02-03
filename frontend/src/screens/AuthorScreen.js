import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AuthorScreen.css";

import authors from "../authors";
import AuthorCard from "../components/AuthorCard";

const AuthorScreen = () => {
  return (
    <Container className="my-5">
      <div className="authors-section-header-text my-4">
        <h1>লেখকবৃন্দ</h1>
      </div>
      <Container>
        <Row>
          {authors.map((author) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <AuthorCard author={author} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default AuthorScreen;
