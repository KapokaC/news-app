import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logoImage from "../componets/images/logo.png";

const Header = () => {
  return (
    <header id="navbar">
      <Navbar bg="purple" expand="lg" variant="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/" className="logo">
            <img src={logoImage} alt="Logo" /> News Summary
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            <Button variant="warning" className="btn-demo">
              2024
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
