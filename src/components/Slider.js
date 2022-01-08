import React, { Component } from "react";
import Slider from "react-slick";

import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3><Image src="https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg.webp"></Image></h3>
          </div>
          <div>
            <h3><Image src="https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg.webp"></Image></h3>
          </div>
          <div>
            <h3><Image src="https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg.webp"></Image></h3>
          </div>
          <div>
            <h3><Image src="https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg.webp"></Image></h3>
          </div>
          <div>
            <h3><Image src="https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg.webp"></Image></h3>
          </div>
          <div>
          <h3><Image src="https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg.webp"></Image></h3>
          </div>
          <div>
          <h3><Image src="https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg.webp"></Image></h3>
          </div>
          <div>
          <h3><Image src="https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg.webp"></Image></h3>
          </div>
        </Slider>
      </div>
    );
  }
}

