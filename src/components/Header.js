import React from "react";
import ReactDOM from "react-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "../ComponentStyles/Header.css";

const header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">hello@colorlib.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">| </Nav.Link>
              <Nav.Link href="#link">
                Free Shipping for all Order of $99{" "}
              </Nav.Link>
            </Nav>
            <FontAwesomeIcon className="pin" icon={faPinterest} />
            <FontAwesomeIcon className="fac" icon={faFacebookF} />
            <FontAwesomeIcon className="twi" icon={faTwitter} />
            <FontAwesomeIcon className="Link" icon={faLinkedin} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default header;
