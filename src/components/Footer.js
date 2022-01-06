import React from "react";
import {
    Button,
  Col,
  Container,
  FormControl,
  Image,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ComponentStyles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
const footer = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="footer">
        <Container className="footer">
          
            <Col md={3}>
              <Image src="data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ==" />
              <p>Address: 60-49 Road 11378 New York</p>
              <p>Phone: +65 11.188.888</p>
              <p>Email: hello@colorlib.com</p>
            </Col>
            <Col md={2}>
              <h3>Useful Links</h3>
              <a href="#" className="link">
                About Us
              </a>
              <br />
              <a href="#" className="link">
                About Our Shop
              </a>
              <br />
              <a href="#" className="link">
                Secure Shopping
              </a>
              <br />
              <a href="#" className="link">
                Delivery information
              </a>
              <br />
              <a href="#" className="link">
                {" "}
                Privacy Policy
              </a>
              <br />
              <a href="#" className="link">
                {" "}
                Our Sitemap
              </a>
            </Col>
            <Col md={2}>
              <a href="#" className="link">
                Who we are
              </a>
              <br />
              <a href="#" className="link">
                Our Services
              </a>
              <br />
              <a href="#" className="link">
                Projects
              </a>
              <br />
              <a href="#" className="link">
                Contact
              </a>
              <br />
              <a href="#" className="link">
                Innovation
              </a>
              <br />
              <a href="#" className="link">
                Testimonials
              </a>
            </Col>
            <Col md={1}></Col>
            <Col md={4}>
              <h4>Join Our Newsletter Now</h4>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
                <InputGroup className="mb-3">
                <FormControl aria-label="Text input with dropdown button" />
                  <Button>Search</Button>
                </InputGroup>
              <FontAwesomeIcon className="pin" icon={faPinterest} />
              <FontAwesomeIcon className="fac" icon={faFacebookF} />
              <FontAwesomeIcon className="twi" icon={faTwitter} />
              <FontAwesomeIcon className="Link" icon={faLinkedin} />
            </Col>
          
          </Container>
      </Navbar>
      
      </>
  );
};

export default footer;
