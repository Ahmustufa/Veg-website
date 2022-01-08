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
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import Responsive from "../components/Slider";
import Slider2 from "../components/Slider2"
import { Link } from "react-router-dom";

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
        <div className="home">
          <Row >
            <Col md={12}>
          <ul className="home-ul">
            <li className="p-5 me-5"><Image src="data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ==" /></li>
            <li className="p-5"><a href="#"><b>HOME</b></a></li>
            <li className="p-5"><a href="#"><b>SHOP</b></a></li>
            <li className="p-5"><a href="#"><b>PAGES</b></a></li>
            <li className="p-5"><a href="#"><b>BLOG</b></a></li>
            <li className="p-5 me-5"><a href="#"><b>CONTACT</b></a></li>
            <li className="p-5"><a href="#"><FontAwesomeIcon icon={faGratipay} /></a></li>
            <li ><a href="#"><FontAwesomeIcon icon={faShoppingBag} /></a></li>
            {/* <li className="p-5 me-5"><Image src="data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ==" /></li>
            <Link to="/Home"><li className="p-5"><b>HOME</b></li></Link>
            <Link to="/Shop"><li className="p-5"><b>SHOP</b></li></Link>
            <Link to="Pages"><li className="p-5"><b>PAGES</b></li></Link>
            <Link to="Blog"><li className="p-5"><b>BLOG</b></li></Link>
            <Link to="Contact"><li className="p-5 me-5"><b>CONTACT</b></li></Link>
            <Link><li className="p-5"><FontAwesomeIcon icon={faGratipay} /></li></Link>
            <Link><li ><FontAwesomeIcon icon={faShoppingBag} /></li></Link> */}
          </ul>
          </Col>
          </Row>
        </div>
        <div>
          <Row className="Department-Row mb-4">
            <Col className="Department-Col" md={3}>
              <Button className="px-5"
              variant="dark"
                onClick={() => {
                  setArrowToggle(!arrowToggle);
                }}
              ><FontAwesomeIcon icon={faBars} className="me-5"/><h12>All Departments</h12><FontAwesomeIcon icon={faArrowDown} className="ms-3" />
              </Button>
              {arrowToggle && (
                <Col className="Department-innerCol" md={12} >
                <ul className="Department-ul">
                  {categories.map((category, index) => {
                    return <li className="p-2" >{category}</li>
                    
                    
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
                  <p>F R U I T  F R E S H</p>
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
              <h1>Featured product</h1>
              <hr style={{width: "10%"}}/>
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
          <Row>
            <Col md={6} className="mb-5">
              <img src="https://preview.colorlib.com/theme/ogani/img/banner/xbanner-1.jpg.pagespeed.ic.aDN3QrExt6.webp" />
            </Col>
            <Col md={6} className="mb-5">
              <img src="https://preview.colorlib.com/theme/ogani/img/banner/xbanner-2.jpg.pagespeed.ic.-2eeuFVLcY.webp" />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={4} className="list">
              <p className="latestproduct">Latest Products</p>
              <Button variant="dark">
                <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
                <Button variant="dark">
                <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            </Col>
            <Col md={4} className="list">
              <p className="latestproduct">Top Rated Products</p>
              <Button variant="dark">
                <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
                <Button variant="dark">
                <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            </Col>
            <Col md={4} className="list ">
              <p className="latestproduct">Review Products</p>
              <Button variant="dark">
                <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
                <Button variant="dark">
                <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            </Col>
          </Row>
          <Row className=" Slider-Row mb-5">
            <Col md={4} className="Slider-Col ">
              <Slider2/>
            </Col>
            <Col md={4} className="Slider-Col ">
            <Slider2/>
            </Col>
            <Col md={4} className="Slider-Col ">
            <Slider2/>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={12} className="fromtheblog">
              <h1>From The Blog</h1>
              <hr style={{width: "10%"}}/>
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
