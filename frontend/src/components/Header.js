import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";

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
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={require("../assets/logo.png")}
                alt="logo"
                width="100px"
                height="auto"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/about">
                <Nav.Link className="nav-text">পেন্সিল কি</Nav.Link>
              </LinkContainer>
              <NavDropdown title="আমাদের প্রকাশিত বইসমূহ" id="nav-dropdown">
                <LinkContainer to="/books/2019">
                  <NavDropdown.Item className="text-dropdown">
                    ২০১৯
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/books/2020">
                  <NavDropdown.Item className="text-dropdown">
                    ২০২০
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/books/2021">
                  <NavDropdown.Item className="text-dropdown">
                    ২০২১
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/books/2022">
                  <NavDropdown.Item className="text-dropdown">
                    ২০২২
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/authors">
                <Nav.Link className="nav-text">লেখকবৃন্দ</Nav.Link>
              </LinkContainer>

              <NavDropdown title="বিষয়" id="nav-dropdown">
                <LinkContainer to="subject/novels">
                  <NavDropdown.Item className="text-dropdown">
                    উপন্যাস
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="subject/stories">
                  <NavDropdown.Item className="text-dropdown">
                    গল্প
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="subject/poems">
                  <NavDropdown.Item className="text-dropdown">
                    কবিতা
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="subject/childish">
                  <NavDropdown.Item className="text-dropdown">
                    শিশুতোষ
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="subject/comics">
                  <NavDropdown.Item className="text-dropdown">
                    রম্য
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="subject/travelStories">
                  <NavDropdown.Item
                    href="subject/ভ্রমণকাহিণী"
                    className="text-dropdown"
                  >
                    ভ্রমণকাহিণী
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="subject/essays">
                  <NavDropdown.Item className="text-dropdown">
                    প্রবন্ধ
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="subject/sports">
                  <NavDropdown.Item className="text-dropdown">
                    খেলাধুলা
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/contact">
                <Nav.Link href="যোগাযোগ" className="nav-text">
                  যোগাযোগ
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
