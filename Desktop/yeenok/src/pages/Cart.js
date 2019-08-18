import React, {Component}  from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import CartContent from '../components/Cart_Content';

export default class Cart extends Component{
    render(){
        return (
            <div className="wrapper">
                <Header />
                <div className="container">
                    <div className="row ">
                        <Redirect />
                        <MenuLeft />
                        <CartContent /> 
                    </div>
                    <div id="brand_carouse" className="ptb_30 text-center">
                        <div className="type-01">
                            <div className="heading-part mb_20 ">
                                <h2 className="main_title">Brand Logo</h2>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="brand owl-carousel ptb_20">
                                        <div className="item text-center">
                                            <a href="#"><img src={require('../public/images/brand/brand1.png')} alt="Disney" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require('../public/images/brand/brand2.png')} alt="Dell" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require('../public/images/brand/brand3.png')} alt="Harley" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require('../public/images/brand/brand4.png')} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require('../public/images/brand/brand5.png')} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require('../public/images/brand/brand6.png')} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require('../public/images/brand/brand7.png')} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require('../public/images/brand/brand8.png')} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require('../public/images/brand/brand9.png')} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="footer pt_60">
                    <div className="container">
                        <div className="row">
                            <div className="footer-top pb_60 mb_30">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="footer-logo">
                                        <a href="index.html"> <img src="images/footer-logo.png" alt="OYEENok" /> </a>
                                    </div>
                                    <div className="footer-desc">Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipisicagna.</div>
                                </div>
                             
                                <div className="col-xs-12 col-sm-6">
                                    <div className="Testimonial">
                                        <div className="client owl-carousel">
                                            <div className="item client-detail">
                                                <div className="client-avatar"> <img alt="" src="images/user1.jpg" /> </div>
                                                <div className="client-title"><strong>joseph Lui</strong></div>
                                                <div className="client-designation mb_10"> - php Developer</div>
                                                <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit amet, sea in odio ..</p>
                                            </div>
                                            <div className="item client-detail">
                                                <div className="client-avatar"> <img alt="" src="images/user2.jpg" /> </div>
                                                <div className="client-title"><strong>joseph Lui</strong></div>
                                                <div className="client-designation mb_10"> - php Developer</div>
                                                <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit amet, sea in odio ..</p>
                                            </div>
                                            <div className="item client-detail">
                                                <div className="client-avatar"> <img alt="" src="images/user3.jpg" /> </div>
                                                <div className="client-title"><strong>joseph Lui</strong></div>
                                                <div className="client-designation mb_10"> - php Developer</div>
                                                <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit amet, sea in odio ..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                     
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 footer-block">
                                <h6 className="footer-title ptb_20">Information</h6>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Delivery Information</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-block">
                                <h6 className="footer-title ptb_20">Services</h6>
                                <ul>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Site Map</a></li>
                                    <li><a href="#">Wish List</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Order History</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-block">
                                <h6 className="footer-title ptb_20">Extras</h6>
                                <ul>
                                    <li><a href="#">Brands</a></li>
                                    <li><a href="#">Gift Certificates</a></li>
                                    <li><a href="#">Affiliates</a></li>
                                    <li><a href="#">Specials</a></li>
                                    <li><a href="#">Newsletter</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-block">
                                <h6 className="footer-title ptb_20">Contacts</h6>
                                <ul>
                                    <li>Warehouse & Offices, 12345 Street name, California USA</li>
                                    <li>(+123) 456 789</li>
                                    <li>Contact@yourcompany.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom mt_60 ptb_20">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="social_icon">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="copyright-part text-center">@ 2017 All Rights Reserved OYEENok</div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="payment-icon text-right">
                                        <ul>
                                            <li><i className="fa fa-cc-paypal "></i></li>
                                            <li><i className="fa fa-cc-visa"></i></li>
                                            <li><i className="fa fa-cc-discover"></i></li>
                                            <li><i className="fa fa-cc-mastercard"></i></li>
                                            <li><i className="fa fa-cc-amex"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}