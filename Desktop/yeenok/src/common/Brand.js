import React, { Component } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Brand extends Component {
    constructor(){
        super();
        this.state = {
            data : [],

        }

    }
    componentDidMount(){
        axios.get('http://localhost:8080/brand')
            .then(res => {
                this.setState({
                    data : res.data.result
                })
            })
    }
    render() {
        const data = this.state.data;
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
          };
        
        return (
            <div style={{margin: "40px 40px 40px 110px"}}>
                <Slider {...settings}>
                    {
                        data.map(item => {
                            return (
                                <div key={item.brand_id}>
                                    <h3>
                                        <Link to={`/brand/${item.brand_id}`}>
                                            <img
                                                src={require('../public/images/brand/' + item.brand_img_url)}
                                                alt="Disney"
                                                className="img-responsive" />
                                        </Link>
                                    </h3>
                                </div>
                            )
                        })
                    }                
                </Slider>
            </div>
        )
    }
}