import "./Footer.css";
import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      className="text-white text-center text-lg-left"
      style={{ backgroundColor: "#388761" }}
      id="my-footer"
    >
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol
            lg="8"
            md="12"
            className="mb-4 mb-md-0"
            id="footer-contents-left"
          >
            <h5 className="text-uppercase">
              <img
                src={require("../assets/logo-footer.png")}
                alt="logo"
                width="100px"
                height="auto"
              />
            </h5>
            <p>বাংলা শিল্প-সাহিত্য কে নিয়ে যাব মোরা বিশ্বময়</p>
          </MDBCol>

          <MDBCol
            lg="3"
            md="6"
            className="mb-4 mb-md-0"
            id="footer-contents-right"
          >
            <div className="footer-right" style={{ textAlign: "left" }}>
              <h5 className="text-uppercase mb-0" style={{paddingBottom:"15px"}}>Our Office</h5>
              <ui className="list-unstyled">
                <li style={{fontSize:"14pt"}}>Dhaka Office:</li>
                <li>House: 1363</li>
                <li>Road: 7, Avenue: 3</li>
                <li>Mirpur DOHS, Dhaka</li>
                <li><i>mail@pencilfoundation.com</i></li>
                <li><i>info.pencilfoundation@gmail.com</i></li>
              </ui>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright: Pencil Publications | All
        rights reserved |
      </div>
    </MDBFooter>
  );
};

export default Footer;
