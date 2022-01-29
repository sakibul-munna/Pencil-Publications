import React from "react";
import { Col, Row } from "react-bootstrap";
import books from "../books";
import Book from "../components/Book";
import StarIcon from '@mui/icons-material/Star';

const HomeScreen = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <hr className="my-hr"
          style={{ width: "25%", color: "#388761", height: "2px", marginRight: "20px" }}
        />
        
        <StarIcon style={{ color: "#F0393F", fontSize:"20px" }} />

        <hr className="my-hr"
          style={{ width: "25%", color: "#388761", height: "2px", marginLeft: "20px" }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 className="text-21">অমর একুশে গ্রন্থমেলা</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <hr className="my-hr"
          style={{ width: "25%", color: "#388761", height: "2px", marginRight: "20px" }}
        />

        <StarIcon style={{ color: "#F0393F", fontSize:"20px" }} />

        <hr className="my-hr"
          style={{ width: "25%", color: "#388761", height: "2px", marginLeft: "20px" }}
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
