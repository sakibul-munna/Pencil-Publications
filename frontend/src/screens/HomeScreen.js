import React from "react";
import { Col, Row } from "react-bootstrap";
import books from "../books";
import Book from "../components/Book";

const HomeScreen = () => {
  return (
    <>
      <h1 className="text">অমর একুশে গ্রন্থমেলা</h1>
      <Row>
        {books.map((book) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Book book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
