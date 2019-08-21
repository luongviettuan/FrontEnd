import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class SubRelatedProduct extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            arrows: false
          };
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="heading-part text-center mb_10">
                        <h2 className="main_title mt_50">Related Products</h2>
                    </div>
                    <div className="related_pro box">
                        <div className="row product-layout  product-grid related-pro  mb_50 ">
                            <Slider {...settings}>
                                <div className="col-sm-3 item">
                                    <div className="product-thumb">
                                        <div className="image product-imageblock">
                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require('../public/images/product/product7.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require('../public/images/product/product7-1.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                            <div className="button-group text-center">
                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                            </div>
                                        </div>
                                        <div className="caption product-detail text-center">
                                            <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                                            </div>
                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 item">
                                    <div className="product-thumb">
                                        <div className="image product-imageblock">
                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require('../public/images/product/product8.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require('../public/images/product/product8-1.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                            <div className="button-group text-center">
                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                            </div>
                                        </div>
                                        <div className="caption product-detail text-center">
                                            <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                                            </div>
                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 item">
                                    <div className="product-thumb">
                                        <div className="image product-imageblock">
                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require('../public/images/product/product9.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require('../public/images/product/product9-1.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                            <div className="button-group text-center">
                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                            </div>
                                        </div>
                                        <div className="caption product-detail text-center">
                                            <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                                            </div>
                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 item">
                                    <div className="product-thumb">
                                        <div className="image product-imageblock">
                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require('../public/images/product/product10.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require('../public/images/product/product10-1.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                            <div className="button-group text-center">
                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                            </div>
                                        </div>
                                        <div className="caption product-detail text-center">
                                            <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                                            </div>
                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 item">
                                    <div className="product-thumb">
                                        <div className="image product-imageblock">
                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require('../public/images/product/product1.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require('../public/images/product/product1-1.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                            <div className="button-group text-center">
                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                            </div>
                                        </div>
                                        <div className="caption product-detail text-center">
                                            <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                                            <div className="rating">
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                                <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                                            </div>
                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 item">
                                <div className="product-thumb">
                                    <div className="image product-imageblock">
                                        <a href="product_detail_page.html"> <img data-name="product_image" src={require('../public/images/product/product2.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require('../public/images/product/product2-1.jpg')} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                        <div className="button-group text-center">
                                            <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                            <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                            <div className="compare"><a href="#"><span>Compare</span></a></div>
                                            <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                        </div>
                                    </div>
                                    <div className="caption product-detail text-center">
                                        <h6 data-name="product_name" className="product-name mt_20"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Video Recording</a></h6>
                                        <div className="rating">
                                            <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                            <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                            <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                            <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span>
                                            <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span>
                                        </div>
                                        <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}