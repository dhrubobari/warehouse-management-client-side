import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const signOutLogin = () => {
    signOut(auth);
  };

  return (
    <>
      <Nav class="navbar-custom">
        <Navbar>
          <Container>
            <Navbar.Brand to="/">Tech Scope</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/home/items">Items</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
              </Nav>
              <Nav>
              {
                user && <>
                <Nav.Link as={Link} to="manageinventory">Manage Items</Nav.Link>
                <Nav.Link as={Link} to="inventory/:itemId">My Items</Nav.Link>
                <Nav.Link as={Link} to="addinventory">Add Items</Nav.Link>
                </>
              }
              {user ? 
                <button className="btn btn-outline-light" onClick={signOutLogin}>
                  Logout
                </button>
               : 
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Nav>
    </>
  );
};

export default Header;
