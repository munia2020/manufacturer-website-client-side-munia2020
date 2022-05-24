import { signOut } from "firebase/auth";
import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Safety Tools</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">My Portfolio</Nav.Link>
            {user && (
              <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dashboard/orders">My Orders</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dashboard/reviews">
                Add A Review
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dashboard/profile">My Profile</NavDropdown.Item>
            </NavDropdown>
              
            )}
            {user ? (
              <Button variant="primary" onClick={handleSignOut}>
                Sign Out
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

