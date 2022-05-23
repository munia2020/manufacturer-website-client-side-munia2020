import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Safety Tools</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Purcheses</Nav.Link>
            <Nav.Link href="#pricing">Blogs</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase.init";
// import { signOut } from "firebase/auth";
// import "./Header.css";

// const Header = () => {
//   const [user] = useAuthState(auth);
//   const handleSignOut = () => {
//     signOut(auth);
//   };
//   return (
//     <div className="header-background">
//       <div className="header-items">
//         <div>
//           <NavLink
//             to="/"
//             className={({ isActive }) => (isActive ? "active-link" : "link")}
//           >
//             <h3 className="brand-name">Organic Zone</h3>
//           </NavLink>
//         </div>
//         <div>
//           <NavLink
//             to="/"
//             className={({ isActive }) => (isActive ? "active-link" : "link")}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) => (isActive ? "active-link" : "link")}
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => (isActive ? "active-link" : "link")}
//           >
//             Contact Us
//           </NavLink>
//           <NavLink
//             to="/blogs"
//             className={({ isActive }) => (isActive ? "active-link" : "link")}
//           >
//             Blogs
//           </NavLink>
//           <NavLink
//             to="/myitems"
//             className={({ isActive }) => (isActive ? "active-link" : "link")}
//           >
//             My Items
//           </NavLink>
//           {user ? (
//             <button className="sign-out-button" onClick={handleSignOut}>
//               Sign out
//             </button>
//           ) : (
//             <NavLink
//               as={Link}
//               to="login"
//               className={({ isActive }) => (isActive ? "active-link" : "link")}
//             >
//               Login
//             </NavLink>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
