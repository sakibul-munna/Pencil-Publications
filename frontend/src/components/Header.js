import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";

const Header = () => {
  return (
    <header>
      <Navbar
        className="navbar"
        variant="light"
        expand="lg"
        collapseOnSelect
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="\">
            <img
              src={require("../assets/logo.png")}
              alt="logo"
              width="60px"
              height="60px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="about" className="text-dropdown">
                পেন্সিল কি
              </Nav.Link>
              <NavDropdown title="আমাদের প্রকাশিত বইসমূহ" id="nav-dropdown">
                <NavDropdown.Item href="books/2019">২০১৯</NavDropdown.Item>
                <NavDropdown.Item href="books/2020">২০২০</NavDropdown.Item>
                <NavDropdown.Item href="books/2021">২০২১</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="লেখকবৃন্দ" className="text-dropdown">
                লেখকবৃন্দ
              </Nav.Link>
              <NavDropdown title="বিষয়" id="nav-dropdown">
                <NavDropdown.Item href="subject/উপন্যাস" className="text-dropdown">
                  উপন্যাস
                </NavDropdown.Item>
                <NavDropdown.Item href="subject/গল্প" className="text-dropdown">
                  গল্প
                </NavDropdown.Item>
                <NavDropdown.Item href="subject/কবিতা" className="text-dropdown">
                  কবিতা
                </NavDropdown.Item>
                <NavDropdown.Item href="subject/শিশুতোষ" className="text-dropdown">
                  শিশুতোষ
                </NavDropdown.Item>
                <NavDropdown.Item href="subject/রম্য" className="text-dropdown">
                  রম্য
                </NavDropdown.Item>
                <NavDropdown.Item href="subject/ভ্রমণকাহিণী" className="text-dropdown">
                  ভ্রমণকাহিণী
                </NavDropdown.Item>
                <NavDropdown.Item href="subject/প্রবন্ধ" className="text-dropdown">
                  প্রবন্ধ
                </NavDropdown.Item>
                <NavDropdown.Item href="subject/খেলাধুলা" className="text-dropdown">
                  খেলাধুলা
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="ব্লগ" className="text-dropdown">
                ব্লগ
              </Nav.Link>
              <Nav.Link href="যোগাযোগ" className="text-dropdown">
                যোগাযোগ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
