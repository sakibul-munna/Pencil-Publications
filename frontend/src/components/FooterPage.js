import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

import "./Footer.css";

const FooterPage = () => {
  return (
    <MDBFooter
      className="text-white text-center text-lg-left"
      style={{ backgroundColor: "#388761" }}
    >
      <MDBContainer className="p-4">
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

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Our Office</h5>
            <div className="footer-right">
              <ui className="list-unstyled">
                <h5>Dhaka Office:</h5>
                <li>House: 1363</li>
                <li>Road: 7, Avenue: 3</li>
                <li>Mirpur DOHS, Dhaka</li>
                <li>mail@pencilfoundation.com</li>
                <li>info.pencilfoundation@gmail.com</li>
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

export default FooterPage;
