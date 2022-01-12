import React from "react";
import ReactDOM from "react-dom";
import {
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faPinterest,
  faGratipay,
} from "@fortawesome/free-brands-svg-icons";
import "../ComponentStyles/Header.css";
import { Link } from "react-router-dom";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const header = () => {
  return (
    <>
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
              <a href="#">
                <FontAwesomeIcon className="pin" icon={faPinterest} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="fac" icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="twi" icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="Link" icon={faLinkedin} />
              </a>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Navbar expand="lg">
        <Container className="Nav">
          <Navbar.Brand>
            <Image src="data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ==" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="px-5">
                <Link to={"/"}>
                  <b>HOME</b>
                </Link>
              </Nav.Link>
              <Nav.Link className="px-5">
                <Link to={"/Shop"}>
                  <b>SHOP</b>
                </Link>
              </Nav.Link>
              <Nav.Link className="px-5">
                <Link to={"/Pages"}>
                  <b>PAGES</b>
                </Link>
              </Nav.Link>
              <Nav.Link className="px-5">
                <Link to={"/Blog"}>
                  <b>BLOG</b>
                </Link>
              </Nav.Link>
              <Nav.Link className="px-5">
                <Link to={"/Contact"}>
                  <b>CONTACT</b>
                </Link>
              </Nav.Link>
              <Nav.Link className="px-5">
                <Link to={"/"}>
                  <FontAwesomeIcon icon={faGratipay} />
                </Link>
              </Nav.Link>
              <Nav.Link className="px-5">
                <Link to={"/"}>
                  <FontAwesomeIcon icon={faShoppingBag} />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default header;
