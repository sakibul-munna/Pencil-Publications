import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import "./AdminBookList.css";
import books from "../books";

const AdminBookList = () => {
  return (
    <Container className="textBookList my-5 ">
      <Table striped bordered hover responsive="sm" className="table-sm my-3">
        <thead>
          <tr className="py-3">
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Price</th>
            <th>Page Number</th>
            <th>Published Year</th>
            <th>Buy Link</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td my-3>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre.name}</td>
              <td>{book.price}</td>
              <td>{book.pageNumber}</td>
              <td>{book.publishedYear}</td>
              <td>{book.buyLink}</td>
              <td>
                <Button variant="light" className="btn-sm mx-3">
                  <MDBIcon className="fas fa-edit" />
                </Button>
                <Button variant="danger" className="btn-sm mx-3">
                  <MDBIcon className="fas fa-trash" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminBookList;
