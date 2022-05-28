import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Safety Tools
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">
              My Portfolio
            </Nav.Link>
            {user && (
              <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/dashboard/orders">
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dashboard/reviews">
                  Add A Review
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dashboard/profile">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dashboard/manageallorders">
                  Manage All Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dashboard/addaproduct">
                  Add A Product
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dashboard/makeadmin">
                  Make Admin
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dashboard/manageproducts">
                  Manage Products
                </NavDropdown.Item>
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
