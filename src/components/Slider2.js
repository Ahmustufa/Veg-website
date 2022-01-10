import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "../ComponentStyles/Slider2.css";

export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };

    const Slider2 = [
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-1.jpg.pagespeed.ic.dQgcajStX5.webp",
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp",
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.eEz5Jo7-Qa.webp",
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-1.jpg.pagespeed.ic.dQgcajStX5.webp",
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp",
      "https://preview.colorlib.com/theme/ogani/img/latest-product/xlp-3.jpg.pagespeed.ic.eEz5Jo7-Qa.webp",
    ];
    return (
      <div>
        <Slider {...settings}>
          {Slider2.map((slide2, index) => {
            return (
              <>
                <div className="slider-div">
                  <h3>
                    <Image src={slide2}></Image>
                  </h3>
                  <p className="p-5">Crab Pool Security</p>
                  <p>
                    <b>$30.00</b>
                  </p>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    );
  }
}
