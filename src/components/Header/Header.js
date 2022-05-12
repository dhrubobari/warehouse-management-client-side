import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar bg="success" variant="dark">
      <Container>
          <Navbar.Brand to="/">
            Tech Scope
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/items">Items</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
