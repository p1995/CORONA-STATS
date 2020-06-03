import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/header.css";
function Header() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      ><Navbar.Brand>COVID-19</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-end">
          <Nav.Link>
            <Link to="/CORONA-STATS/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/CORONA-STATS/CoronaCases">Daily-Stats</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/CORONA-STATS/StateWiseCases">State Cases</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
