import React from "react";
import { Col, Row } from "react-bootstrap";
import books from "../books";
import Book from "../components/Book";

const HomeScreen = () => {
  return (
    <>
      <div id="my-line" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <hr className="my-hr"
          style={{ width: "50%", color:"#388761", height:"2px" }}
        />
      </div>
      
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1 className="text-21">অমর একুশে গ্রন্থমেলা</h1>
      </div>

      <div id="my-line" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <hr className="my-hr"
          style={{ width: "50%", color:"#388761", height:"2px" }}
        />
      </div>
      
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
