import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (

    <>
      <NavDropdown.Item as={Link} to="/dashboard/orders">My Orders</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/dashboard/reviews">Add A Review</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/dashboard/profile">My profile</NavDropdown.Item>
      {/* <Outlet /> */}
    </>
    // <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
    //   <NavDropdown.Item as={Link} to="/dashboard">My Orders</NavDropdown.Item>
    //   <NavDropdown.Item as={Link} to="/dashboard/reviews">Add A Review</NavDropdown.Item>
    //   <NavDropdown.Item as={Link} to="/dashboard/profile">My profile</NavDropdown.Item>
    //   <Outlet />
    // </NavDropdown>
    
  );
};

export default Dashboard;
