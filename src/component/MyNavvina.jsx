import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const MyNavvina = () => {
  return (
    <Navbar className="bg-dark" style={{ margin: "0", padding: "0" }}>
      <Navbar.Brand href="#home" style={{ color: "white" }}>
        MyNavbar
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex">
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
  );
};
export default MyNavvina;
