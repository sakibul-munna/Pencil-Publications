import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img
              src={require("../assets/logo.png")}
              alt="logo"
              width="100px"
              height="75px"
            />
            <div className="textContainer">
              <p className="text-footer">
                বাংলা শিল্প-সাহিত্য কে নিয়ে যাব মোরা বিশ্বময়
              </p>
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          {/* Column3 */}
          <div className="col">
            <h3>Our Office</h3>
            <ui className="list-unstyled">
              <h5>Dhaka Office:</h5>
              <li>House: 1363</li>
              <li>Road: 7, Avenue: 3</li>
              <li>Mirpur DOHS, Dhaka</li>
              <li>mail@pencilfoundation.com</li>
              <li>info.pencilfoundation@gmail.com</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            Copyright &copy; 2022 Pencil Publications | All rights reserved |
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
