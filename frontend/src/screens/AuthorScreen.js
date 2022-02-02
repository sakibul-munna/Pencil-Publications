import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import "./AuthorScreen.css";

const AuthorScreen = () => {
  return (
    <Container className="my-5">
      <div className="authors-section-header-text my-4">
        <h1>লেখকবৃন্দ</h1>
      </div>
      <MDBRow className="row-cols-1 row-cols-md-4 g-3">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="/images/authors/01.Luna Nusrat.tif"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/042.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/043.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Container>
  );
};

export default AuthorScreen;
