import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import books from "../books";
import BookCard from "../components/BookCard";
import HeaderContainer from "../components/HeaderContainer";
import AdContainer from "../components/AdContainer";
import HomeText from "../components/HomeText";

const HomeScreen = () => {
  return (
    <Container fluid className="gx-0">
      <HeaderContainer />
      <AdContainer />
      <HomeText />
      <Container className="py-3">
        <Row>
          {books.map((book) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default HomeScreen;
