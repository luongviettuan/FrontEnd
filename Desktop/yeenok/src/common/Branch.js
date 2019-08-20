import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Branch extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
          };
        return (
            <div>
                
                <Slider {...settings}>
                    <div>
                        <h3> <a href="#"><img src={require('../public/images/brand/brand1.png')} alt="Disney" class="img-responsive" /></a> </h3>
                    </div>
                    <div>
                        <h3> <a href="#"><img src={require('../public/images/brand/brand2.png')} alt="Disney" class="img-responsive" /></a> </h3>
                    </div>
                    <div>
                        <h3> <a href="#"><img src={require('../public/images/brand/brand3.png')} alt="Disney" class="img-responsive" /></a> </h3>
                    </div>
                    <div>
                        <h3> <a href="#"><img src={require('../public/images/brand/brand4.png')} alt="Disney" class="img-responsive" /></a> </h3>
                    </div>
                    <div>
                        <h3> <a href="#"><img src={require('../public/images/brand/brand5.png')} alt="Disney" class="img-responsive" /></a> </h3>
                    </div>
                    <div>
                        <h3> <a href="#"><img src={require('../public/images/brand/brand6.png')} alt="Disney" class="img-responsive" /></a> </h3>
                    </div>
                </Slider>
            </div>
        )
    }
}