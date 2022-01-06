import React from 'react'
import { Button, Col, Container, Dropdown, DropdownButton, FormControl, Image, InputGroup, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ScreenStyles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope,faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import {  faGratipay } from '@fortawesome/free-brands-svg-icons'
import Responsive from '../components/Slider'

const Home = () => {
    return (
        <>
        <div className='home'>
    <Container fluid='md' >
    <Row >
        <Col>
            <Image src='data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ=='/>
        </Col>
            <Col className='p-1' md={1}>HOME</Col>
            <Col className='p-1' md={1}>SHOP</Col>
            <Col className='p-1' md={1}>PAGES</Col>
            <Col className='p-1' md={1}>BLOG</Col>
            <Col md={1}><FontAwesomeIcon  icon={faGratipay} /></Col>
            <Col ><FontAwesomeIcon  icon={faShoppingBag} />
            </Col>
            
        
        
    </Row>
    </Container>
    
    </div>
    <div>
    <Container >
            <Row className='Department-Row'>
                <Col className='Department-Col' md={2}><Button>All Departments</Button>
                <Row className='p-2'>Fresh Meat</Row>
                <Row className='p-2'>Vegetables</Row>
                <Row className='p-2'>Fruit & Nut Gifts</Row>
                <Row className='p-2'>Fresh Berries</Row>
                <Row className='p-2'>Ocean Foods</Row>
                <Row className='p-2'>Butter & Eggs</Row>
                <Row className='p-2'>Fastfood</Row>
                <Row className='p-2'>Fresh Onion</Row>
                <Row className='p-2'>Papayaya & Crips</Row>
                <Row className='p-2'>Oatmeal</Row>
                <Row className='p-2'>Fresh Bananas</Row>
                </Col>
                <Col>
                <Row>
        <InputGroup className="mb-3 w-75" >
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
                                <Button>Search</Button>
  </InputGroup>
  </Row>
  <Row className='ShopNow-Row w-75' >
  <Col md={6} className='ShopNow-Col Sh p-5 '>
    <p>F R U I T  F R E S H</p>
    <h1>Vegetable</h1>
    <h1>100% Organic</h1>
    <p>Free Pickup and Delivery Available</p>
    <Button className=''>Shop Now</Button>
    </Col>
  </Row>
  </Col>
    </Row>
    </Container>
    <Container>
        <Row>
            <Col md={6} className='Slider-Col'>
                <Responsive/>
            </Col>
        </Row>
    </Container>
  </div>
 
  </>
    )
}

export default Home
