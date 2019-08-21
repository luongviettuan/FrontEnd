import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MenuBrandSlide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      arrows: false
      
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="item active">
            <a href="#"><img src={require("../public/images/menu-banner1.jpg")} className="img-responsive" alt="Banner1" /></a>
          </div>
          <div className="item">
            <a href="#"><img src={require("../public/images/menu-banner2.jpg")} className="img-responsive" alt="Banner1" /></a>
          </div>
          <div className="item">
            <a href="#"><img src={require("../public/images/menu-banner3.jpg")} className="img-responsive" alt="Banner1" /></a>
          </div>
        </Slider>
      </div>
    );
  }
}