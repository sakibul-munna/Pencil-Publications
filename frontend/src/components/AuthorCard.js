import React from "react";
import { Card } from "react-bootstrap";
import "./AuthorCard.css";

const AuthorCard = ({ author }) => {
  return (
    <Card
      className="my-3 mx-3 author-card"
      bg="cardBackground"
      style={{ height: "270px", width: "240px" }}
    >
      <Card.Img
        src={author.image}
        variant="top"
        alt={author.name}
        style={{ height: "200px", width: "200px" }}
        className="mt-4"
      />
      <Card.Body>
        <Card.Title as="div" className="cardText">
          <strong>{author.name}</strong>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default AuthorCard;
