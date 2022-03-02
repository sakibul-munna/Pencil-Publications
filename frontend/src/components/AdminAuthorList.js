import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import authors from "../authors";

const AdminAuthorList = () => {
  return (
    <Container className="textBookList my-5 ">
      <Table striped bordered hover responsive="sm" className="table-sm my-3">
        <thead>
          <tr className="py-3">
            <th>Author Name</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id}>
              <td my-3>{author.name}</td>
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

export default AdminAuthorList;
