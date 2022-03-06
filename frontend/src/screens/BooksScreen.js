import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import books from "../books";
import BookCard from "../components/BookCard";
import HomeText from "../components/HomeText";
const { toBengaliNumber } = require("bengali-number");

const BooksScreen = ({ headerText, selectedYear }) => {
  let selectedBooks = [];
  console.log("header " + headerText + " selected " + selectedYear);
  if (selectedYear === "0") {
    selectedBooks = books.filter((book) => {
      return book.genre.name === headerText.toString();
    });
  } else {
    selectedBooks = books.filter((book) => {
      return book.publishedYear === toBengaliNumber(selectedYear).toString();
    });
  }
  return (
    <Container fluid style={{ minHeight: "600px" }} className="gx-0 my-4">
      <HomeText headerText={headerText} />
      {selectedBooks.length > 0 ? (
        <Container className="py-3">
          <Row>
            {selectedBooks.map((book) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <BookCard book={book} />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Container
          className="my-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>No Books Available</h1>
        </Container>
      )}
    </Container>
  );
};

export default BooksScreen;
