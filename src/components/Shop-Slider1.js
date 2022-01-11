import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import '../ComponentStyles/Shop-Slider1.css'
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    const shopslider1 = [
      "https://preview.colorlib.com/theme/ogani/img/product/discount/pd-5.jpg.webp",
      "https://preview.colorlib.com/theme/ogani/img/product/discount/pd-4.jpg.webp",
      "https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg.webp",
      "https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg.webp",
      "https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg.webp",
      "https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg.webp",
    ];
    return (
      <div>
        <Slider {...settings}>
          {shopslider1.map((slider, index) => {
            return (
              <div className="shop-slider1">
                <Image src={slider} ></Image>
                <p>Dried Fruit</p>
                <p>Raisin'n'nuts</p>
                <p><b>$30.00</b></p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
