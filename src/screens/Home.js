import React, { useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ScreenStyles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faShoppingBag,
  faArrowRight,
  faArrowLeft,
  faCalendar,
  faComment,
  faBars,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import Responsive from "../components/Slider";
import Slider2 from "../components/Slider2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Home = () => {
  const products = [
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-1.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "meat",
    },
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-2.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "fruit",
    },
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "fruit",
    },
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-4.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "fruit",
    },
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-5.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "fruit",
    },
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-6.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "fastFood",
    },
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-7.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "fruit",
    },
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "fruit",
    },
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-1.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "meat",
    },
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-1.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "meat",
    },
    {
      name: `Product ${getRandomNumber(1, 10)}`,
      image:
        "https://preview.colorlib.com/theme/ogani/img/featured/feature-1.jpg.webp",
      price: getRandomNumber(200, 500),
      category: "meat",
    },
  ];

  const [productList, setProductList] = useState(products);

  const categories = [
    "Fresh Meat",
    "Vegetables",
    "Fruit & Nut Gifts",
    "Fresh Berries",
    "Ocean Foods",
    "Butter & Eggs",
    "Fastfood",
    "Fresh Onion",
    "Papayaya & Crips",
    "Oatmeal",
    "Fresh Bananas",
  ];

  const filteredProducts = (category) => {
    setProductList(products.filter((product) => product.category === category));
  };

  const [arrowToggle, setArrowToggle] = useState(true);
  return (
    <>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div>
          <Row className="Department-Row mb-4">
            <Col className="Department-Col" md={3}>
              <Button
                className="px-5"
                variant="dark"
                onClick={() => {
                  setArrowToggle(!arrowToggle);
                }}
              >
                <FontAwesomeIcon icon={faBars} className="me-5" />
                <h12>All Departments</h12>
                <FontAwesomeIcon icon={faArrowDown} className="ms-3" />
              </Button>
              {arrowToggle && (
                <Col className="Department-innerCol" md={12}>
                  <ul className="Department-ul">
                    {categories.map((category, index) => {
                      return <li className="p-2">{category}</li>;
                    })}
                  </ul>
                </Col>
              )}
            </Col>

            <Col>
              <Row className="">
                <InputGroup className="mb-3 ">
                  <DropdownButton
                    variant="outline-secondary"
                    title="All Categories"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Spring</Dropdown.Item>
                    <Dropdown.Item href="#">Fall</Dropdown.Item>
                    <Dropdown.Item href="#">Summer</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Winter</Dropdown.Item>
                  </DropdownButton>
                  <FormControl aria-label="Text input with dropdown button" />
                  <Button variant="dark">Search</Button>
                </InputGroup>
              </Row>
              <Row className="ShopNow-Row m-2 mb-4">
                <Col md={6} className="ShopNow-Col Sh p-5 ">
                  <p>F R U I T F R E S H</p>
                  <h1>Vegetable</h1>
                  <h1>100% Organic</h1>
                  <p>Free Pickup and Delivery Available</p>
                  <Button variant="dark">Shop Now</Button>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col className="mb-5">
              <Responsive />
            </Col>
          </Row>

          <Row>
            <Col md={12} className="Featuredproduct">
              <h1>Featured Products</h1>
              <hr style={{ width: "10%", height: "2px", color: "black" }} />
            </Col>
          </Row>

          <Row className="">
            <Col md={12}>
              <ul className="featuredProductUl ">
                <li
                  className="featuredProductLi"
                  onClick={() => setProductList(products)}
                >
                  All
                </li>
                <li
                  className="featuredProductLi"
                  onClick={() => filteredProducts("fruit")}
                >
                  Fruits
                </li>
                <li
                  className="featuredProductLi"
                  onClick={() => filteredProducts("meat")}
                >
                  Meat
                </li>
                {/* <li className="featuredProductLi">Vegetables</li> */}
                <li
                  className="featuredProductLi"
                  onClick={() => filteredProducts("fastFood")}
                >
                  Fast Food
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mb-2 pb-5 ">
            {productList &&
              productList.length > 0 &&
              productList.map((product, index) => {
                // console.log(product, "product");
                return (
                  <Col key={index} md={3} className="items">
                    <img src={product.image} />
                    <p>{product.name}</p>
                    <p>
                      <b>${product.price}</b>
                    </p>
                  </Col>
                );
              })}
          </Row>
          <Row className="mb-5">
            <Col md={6} >
              <img src="https://preview.colorlib.com/theme/ogani/img/banner/xbanner-1.jpg.pagespeed.ic.aDN3QrExt6.webp" />
            </Col>
            <Col md={6} >
              <img src="https://preview.colorlib.com/theme/ogani/img/banner/xbanner-2.jpg.pagespeed.ic.-2eeuFVLcY.webp" />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={4} className="list">
              <Row>
                <Col md={8}>
                  <p className="">Latest Products</p>
                </Col>
                <Col md={2}>
                  <Button variant="dark" size="sm" className="mx-1">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </Button>
                </Col>
                <Col md={2}>
                  <Button variant="dark" size="sm" className="mx-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="list">
              <Row>
                <Col md={8}>
                  <p className="">Top Rated Products</p>
                </Col>
                <Col md={2}>
                  <Button variant="dark" size="sm" className="mx-1">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </Button>
                </Col>
                <Col md={2}>
                  <Button variant="dark" size="sm" className="mx-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="list">
              <Row>
                <Col md={8}>
                  <p className="">Review Products</p>
                </Col>
                <Col md={2}>
                  <Button variant="dark" size="sm" className="mx-1">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </Button>
                </Col>
                <Col md={2}>
                  <Button variant="dark" size="sm" className="mx-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className=" Slider-Row mb-5">
            <Col md={4} className="Slider-Col ">
              <Slider2 />
            </Col>
            <Col md={4} className="Slider-Col ">
              <Slider2 />
            </Col>
            <Col md={4} className="Slider-Col ">
              <Slider2 />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={12} className="fromtheblog">
              <h1>From The Blog</h1>
              <hr style={{ width: "10%", height: "2px" }} />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <img src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-1.jpg.pagespeed.ic.b6c8D8etPg.webp" />
              <p style={{ padding: "10px" }}>
                <FontAwesomeIcon icon={faCalendar} /> May 4,2019{" "}
                <FontAwesomeIcon icon={faComment} />
              </p>
              <h3>
                <b>Cooking tips make simple</b>
              </h3>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
            </Col>
            <Col md={4}>
              <img src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-2.jpg.pagespeed.ic.Wv9OXwE7iA.webp" />
              <p style={{ padding: "10px" }}>
                <FontAwesomeIcon icon={faCalendar} /> May 4,2019{" "}
                <FontAwesomeIcon icon={faComment} />
              </p>
              <h3>
                <b>6 ways to prepare breakfast for 30</b>
              </h3>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
            </Col>
            <Col md={4}>
              <img src="https://preview.colorlib.com/theme/ogani/img/blog/xblog-3.jpg.pagespeed.ic.ruf-U0Iaxk.webp" />
              <p style={{ padding: "10px" }}>
                <FontAwesomeIcon icon={faCalendar} /> May 4,2019{" "}
                <FontAwesomeIcon icon={faComment} />
              </p>
              <h3>
                <b>Visit the clean farm in the US</b>
              </h3>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;
