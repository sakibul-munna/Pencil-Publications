import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Book.css";

const Book = ({ book }) => {
  return (
    <Card className="my-3 p-3 rounded" bg="cardBackground">
      <Card.Img src={book.image} variant="top" />
      <Card.Body>
        <Card.Title as="div" className="cardText">
          <strong>{book.title}</strong>
        </Card.Title>
        <Card.Text className="cardText"> {book.author}</Card.Text>
        <Card.Text className="cardText">ধরণঃ {book.genre.name}</Card.Text>
        <Card.Text className="cardText">দামঃ {book.price}</Card.Text>
        <Card.Text className="cardText">প্রকাশঃ {book.publishedYear}</Card.Text>
        <Button variant="danger">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
