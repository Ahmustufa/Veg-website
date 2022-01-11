import React from "react";
import Helmet from "react-helmet";
import { Row, Col, Container, Button, DropdownButton, Dropdown, InputGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ScreenStyles/Shop.css";
import { Link } from "react-router-dom";
import Slider from "../components/Shop-Slider1";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThLarge, faGripHorizontal} from "@fortawesome/free-solid-svg-icons";
const shop = () => {
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
  const items = [
    "https://preview.colorlib.com/theme/ogani/img/product/discount/pd-5.jpg.webp",
    "https://preview.colorlib.com/theme/ogani/img/product/discount/pd-4.jpg.webp",
    "https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg.webp",
    "https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg.webp",
    "https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg.webp",
    "https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg.webp",
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="bg-div mb-5">
        <h1>Organi Shop</h1>
        <Link to={"/"} className="bg-link">
          Home - Shop
        </Link>
      </div>
      <Container>
        <Row className="mb-5">
          <Col md={3}>
            <h3>
              <b>Department</b>
            </h3>
            <ul className="Department-ul">
              {categories.map((category, index) => {
                return <li className="p-1">{category}</li>;
              })}
            </ul>
          </Col>
          <Col md={9}>
            <h2>
              <b>Sale Off</b>
            </h2>
            <hr style={{ width: "12%", height: "2px" }} />
            <Slider />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={3}>
            <h3>
              <b>Price</b>
            </h3>
          </Col>
          <Col md={9}>
            <hr style={{ width: "95%", height: "2px" }} className="line" />
          </Col>
        </Row>
        <Row className="mb-5">
            <Col md={3}>
            <div className="mb-5">
            <h3>
            <b>Colors</b>
            </h3>
            </div>
            <div className="mb-5">
            <h3><b>Popular Size</b></h3>
            </div>
            </Col>
            <Col md={9}>
            {/* <div className="shop-items">
                <p className="">Sort By</p>
                <DropdownButton title="Default" variant="dark">
                    <DropdownItem href="#">Default</DropdownItem>
                    <DropdownItem href="#">Default</DropdownItem>
                </DropdownButton>
                <p><b className="pe-3">16</b>Products found</p>
                <FontAwesomeIcon icon={faThLarge} />
                <FontAwesomeIcon icon={faGripHorizontal} />
                </div> */}
                <Row>
                    <Col md={4} className="selection1">
                    <InputGroup >
                    <p className="me-2">Sort By</p>
                    <DropdownButton size="sm" title="Default" variant="dark">
                    <DropdownItem href="#">Default</DropdownItem>
                    <DropdownItem href="#">Default</DropdownItem>
                </DropdownButton>
                </InputGroup>
                    </Col >
                    <Col md={4} className="selection2">
                    <p><b className="pe-3">16</b>Products found</p>
                    </Col>
                    <Col md={3} className="selection3">
                    <FontAwesomeIcon icon={faThLarge} className="me-4"/>
                    <FontAwesomeIcon icon={faGripHorizontal}  />
                    </Col>
                </Row>
                {
                    items.map((item,index)=>{
                        return(
                            <>
                            <div>
                                <Image src={item}></Image>
                                <p>Crab Pool Security</p>
                                <p><b>$30.00</b></p>
                            </div>
                            </>
                        )
                    })
                }
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default shop;
