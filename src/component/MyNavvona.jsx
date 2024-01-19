import React from "react";
import { Col, Navbar, Nav } from "react-bootstrap";

const MyNavvona = () => {
  return (
    <Col md={2} className="bg-black  tuttoschermo">
      <Navbar expand="md">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          MyNavbar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#your-library" style={{ color: "white" }}>
              Your Library
            </Nav.Link>
            {/* Aggiungi altri link della navbar qui */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default MyNavvona;
