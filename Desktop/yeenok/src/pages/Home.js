import React, {Component} from 'react';


import "../public/css/font-awesome.min.css"
import "../public/css/bootstrap.css"
import "../public/css/style.css"
import "../public/css/magnific-popup.css"
import "../public/css/owl.carousel.css"
import "../public/images/favicon.png"

export default class Home extends Component{
    render(){
        return (
            <div>
  
                <div className="wrapper">
                    <div id="subscribe-me" className="modal animated fade in" role="dialog" data-keyboard="true" tabIndex="-1">
                        <div className="newsletter-popup"> <img className="offer" src={require( "../public/images/newsbg.jpg")} alt="offer" />
                            <div className="newsletter-popup-static newsletter-popup-top">
                                <div className="popup-text">
                                    <div className="popup-title">50% <span>off</span></div>
                                    <div className="popup-desc">
                                        <div>Sign up and get 50% off your next Order</div>
                                    </div>
                                </div>
                                <form onSubmit="return  validatpopupemail();" method="post">
                                    <div className="form-group required">
                                        <input type="email" name="email-popup" id="email-popup" placeholder="Enter Your Email" className="form-control input-lg" required />
                                        <button type="submit" className="btn btn-default btn-lg" id="email-popup-submit">Subscribe</button>
                                        <label className="checkme">
                                            <input type="checkbox" value="" id="checkme" /> Dont show again</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <header id="header">
                        <div className="header-top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4">
                                        <div className="header-top-left">
                                            <div className="contact"><a href="#">Call now !</a> <span className="hidden-xs hidden-sm hidden-md">+91 987-654-321</span></div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-8">
                                        <ul className="header-top-right text-right">
                                            <li className="account"><a href="login.html">My Account</a></li>
                                            <li className="language dropdown"> <span className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">Language <span className="caret"></span> </span>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                    <li><a href="#">English</a></li>
                                                    <li><a href="#">French</a></li>
                                                    <li><a href="#">German</a></li>
                                                </ul>
                                            </li>
                                            <li className="currency dropdown"> <span className="dropdown-toggle" id="dropdownMenu12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">Currency <span className="caret"></span> </span>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu12">
                                                    <li><a href="#">€ Euro</a></li>
                                                    <li><a href="#">£ Pound Sterling</a></li>
                                                    <li><a href="#">$ US Dollar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4">
                                        <div className="main-search mt_40">
                                            <input id="search-input" name="search" value="" placeholder="Search" className="form-control input-lg" autoComplete="off" type="text" />
                                            <span className="input-group-btn">
                                        <button type="button" className="btn btn-default btn-lg"><i className="fa fa-search"></i></button>
                                        </span> </div>
                                    </div>
                                    <div className="navbar-header col-xs-6 col-sm-4">
                                        <a className="navbar-brand" href="index.html"> <img alt="OYEENok" src={require( '../public/images/logo.png')} /> </a>
                                    </div>
                                    <div className="col-xs-6 col-sm-4 shopcart">
                                        <div id="cart" className="btn-group btn-block mtb_40">
                                            <button type="button" className="btn" data-target="#cart-dropdown" data-toggle="collapse" aria-expanded="true"><span id="shippingcart">Shopping cart</span><span id="cart-total">items (0)</span> </button>
                                        </div>
                                        <div id="cart-dropdown" className="cart-menu collapse">
                                            <ul>
                                                <li>
                                                    <table className="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-center">
                                                                    <a href="#"><img src={require( '../public/images/product/70x84.jpg')} alt="iPod Classic" title="iPod Classic" /></a>
                                                                </td>
                                                                <td className="text-left product-name"><a href="#">MacBook Pro</a> <span className="text-left price">$20.00</span>
                                                                    <input className="cart-qty" name="product_quantity" min="1" value="1" type="number" />
                                                                </td>
                                                                <td className="text-center"><a className="close-cart"><i className="fa fa-times-circle"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-center">
                                                                    <a href="#"><img src={require( '../public/images/product/70x84.jpg')} alt="iPod Classic" title="iPod Classic" /></a>
                                                                </td>
                                                                <td className="text-left product-name"><a href="#">MacBook Pro</a> <span className="text-left price">$20.00</span>
                                                                    <input className="cart-qty" name="product_quantity" min="1" value="1" type="number" />
                                                                </td>
                                                                <td className="text-center"><a className="close-cart"><i className="fa fa-times-circle"></i></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </li>
                                                <li>
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-right"><strong>Sub-Total</strong></td>
                                                                <td className="text-right">$2,100.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right"><strong>Eco Tax (-2.00)</strong></td>
                                                                <td className="text-right">$2.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right"><strong>VAT (20%)</strong></td>
                                                                <td className="text-right">$20.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-right"><strong>Total</strong></td>
                                                                <td className="text-right">$2,122.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </li>
                                                <li>
                                                    <form action="cart_page.html">
                                                        <input className="btn pull-left mt_10" value="View cart" type="submit" />
                                                    </form>
                                                    <form action="checkout_page.html">
                                                        <input className="btn pull-right mt_10" value="Checkout" type="submit" />
                                                    </form>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <nav className="navbar">
                                    <p>Menu</p>
                                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse"> <span className="i-bar"><i className="fa fa-bars"></i></span></button>
                                    <div className="collapse navbar-collapse js-navbar-collapse">
                                        <ul id="menu" className="nav navbar-nav">
                                            <li> <a href="index.html">Home</a></li>
                                            <li> <a href="category_page.html">women</a></li>
                                            <li> <a href="category_page.html">men</a></li>
                                            <li className="dropdown mega-dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Collection </a>
                                                <ul className="dropdown-menu mega-dropdown-menu row">
                                                    <li className="col-md-3">
                                                        <ul>
                                                            <li className="dropdown-header">Women's</li>
                                                            <li><a href="#">Unique Features</a></li>
                                                            <li><a href="#">Image Responsive</a></li>
                                                            <li><a href="#">Auto Carousel</a></li>
                                                            <li><a href="#">Newsletter Form</a></li>
                                                            <li><a href="#">Four columns</a></li>
                                                            <li><a href="#">Four columns</a></li>
                                                            <li><a href="#">Good Typography</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-md-3">
                                                        <ul>
                                                            <li className="dropdown-header">Man's</li>
                                                            <li><a href="#">Unique Features</a></li>
                                                            <li><a href="#">Image Responsive</a></li>
                                                            <li><a href="#">Four columns</a></li>
                                                            <li><a href="#">Auto Carousel</a></li>
                                                            <li><a href="#">Newsletter Form</a></li>
                                                            <li><a href="#">Four columns</a></li>
                                                            <li><a href="#">Good Typography</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-md-3">
                                                        <ul>
                                                            <li className="dropdown-header">Children's</li>
                                                            <li><a href="#">Unique Features</a></li>
                                                            <li><a href="#">Four columns</a></li>
                                                            <li><a href="#">Image Responsive</a></li>
                                                            <li><a href="#">Auto Carousel</a></li>
                                                            <li><a href="#">Newsletter Form</a></li>
                                                            <li><a href="#">Four columns</a></li>
                                                            <li><a href="#">Good Typography</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-md-3">
                                                        <ul>
                                                            <li id="myCarousel" className="carousel slide" data-ride="carousel">
                                                                <div className="carousel-inner">
                                                                    <div className="item active">
                                                                        <a href="#"><img src={require( "../public/images/menu-banner1.jpg")} className="img-responsive" alt="Banner1" /></a>
                                                                    </div>

                                                                    <div className="item">
                                                                        <a href="#"><img src={require( "../public/images/menu-banner2.jpg")} className="img-responsive" alt="Banner1" /></a>
                                                                    </div>

                                                                    <div className="item">
                                                                        <a href="#"><img src={require( "../public/images/menu-banner3.jpg")} className="img-responsive" alt="Banner1" /></a>
                                                                    </div>

                                                                </div>

                                                            </li>

                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li> <a href="blog_page.html">Blog</a></li>
                                            <li> <a href="about.html">About us</a></li>
                                            <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages </a>
                                                <ul className="dropdown-menu">
                                                    <li> <a href="contact_us.html">Contact us</a></li>
                                                    <li> <a href="cart_page.html">Cart</a></li>
                                                    <li> <a href="checkout_page.html">Checkout</a></li>
                                                    <li> <a href="product_detail_page.html">Product Detail Page</a></li>
                                                    <li> <a href="single_blog.html">Single Post</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                </nav>
                            </div>
                        </div>
                    </header>

                    <div className="container banner mt_20">
                        <div className="main-banner owl-carousel">
                            <div className="item">
                                <a href="#"><img src={require( '../public/images/main_banner1.jpg')} alt="Main Banner" className="img-responsive" /></a>
                            </div>
                            <div className="item">
                                <a href="#"><img src={require( '../public/images/main_banner2.jpg')} alt="Main Banner" className="img-responsive" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="container">

                        <div className="row">
                            <div className="cms_banner mt_10">
                                <div className="col-xs-4 mt_10">
                                    <div id="subbanner1" className="sub-hover">
                                        <div className="sub-img">
                                            <a href="#"><img src={require( '../public/images/sub1.jpg')} alt="Sub Banner1" className="img-responsive" /></a>
                                        </div>
                                        <div className="bannertext text-center">
                                            <button className="btn mb_10 cms_btn">View product</button>
                                            <h2>Hats & collapse</h2>
                                            <p className="mt_10">Wide veriety of sizes,colors</p>
                                        </div>
                                    </div>
                                    <div id="subbanner2" className="sub-hover mt_20">
                                        <div className="sub-img">
                                            <a href="#"><img src={require( '../public/images/sub2.jpg')} alt="Sub Banner2" className="img-responsive" /></a>
                                        </div>
                                        <div className="bannertext text-center">
                                            <button className="btn mb_10 cms_btn">View product</button>
                                            <h2>Buy Scarfs</h2>
                                            <p className="mt_10">Shop collection of designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-4 mt_10">
                                    <div id="subbanner3" className="sub-hover">
                                        <div className="sub-img">
                                            <a href="#"><img src={require( '../public/images/sub3.jpg')} alt="Sub Banner3" className="img-responsive" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-4 mt_10">
                                    <div id="subbanner4" className="sub-hover">
                                        <div className="sub-img">
                                            <a href="#"><img src={require( '../public/images/sub4.jpg')} alt="Sub Banner4" className="img-responsive" /></a>
                                        </div>
                                        <div className="bannertext text-center">
                                            <button className="btn mb_10 cms_btn">View product</button>
                                            <h2>Handbags</h2>
                                            <p className="mt_10">Bags for men & women only</p>
                                        </div>
                                    </div>
                                    <div id="subbanner5" className="sub-hover mt_20">
                                        <div className="sub-img">
                                            <a href="#"><img src={require( '../public/images/sub5.jpg')} alt="Sub Banner5" className="img-responsive" /></a>
                                        </div>
                                        <div className="bannertext text-center">
                                            <button className="btn mb_10 cms_btn">View product</button>
                                            <h2>Footware</h2>
                                            <p className="mt_10">Over 400 luxury designers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-12 mtb_10">

                                <div id="product-tab" className="mt_50">
                                    <div className="heading-part mb_10 ">
                                        <h2 className="main_title">Fashion Items</h2>
                                    </div>
                                    <ul className="nav text-right">
                                        <li className="active"> <a href="#nArrivals" data-toggle="tab">New Arrivals</a> </li>
                                        <li><a href="#Bestsellers" data-toggle="tab">Bestsellers</a> </li>
                                        <li><a href="#Featured" data-toggle="tab">Featured</a> </li>
                                    </ul>
                                    <div className="tab-content clearfix box">
                                        <div className="tab-pane active" id="nArrivals">
                                            <div className="nArrivals owl-carousel">
                                                <div className="product-grid">
                                                    <div className="item">
                                                        <div className="product-thumb">
                                                            <div className="image product-imageblock">
                                                                <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product9.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product9-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                                <div className="button-group text-center">
                                                                    <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                    <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                    <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                    <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                                </div>
                                                            </div>
                                                            <div className="caption product-detail text-center">
                                                                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                                <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                                <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-grid">
                                                    <div className="item">
                                                        <div className="product-thumb">
                                                            <div className="image product-imageblock">
                                                                <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product1-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                                <div className="button-group text-center">
                                                                    <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                    <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                    <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                    <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                                </div>
                                                            </div>
                                                            <div className="caption product-detail text-center">
                                                                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                                <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                                <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-grid">
                                                    <div className="item">
                                                        <div className="product-thumb">
                                                            <div className="image product-imageblock">
                                                                <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product3.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product3-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                                <div className="button-group text-center">
                                                                    <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                    <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                    <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                    <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                                </div>
                                                            </div>
                                                            <div className="caption product-detail text-center">
                                                                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                                <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                                <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-grid">
                                                    <div className="item">
                                                        <div className="product-thumb"></div>
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product5.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product5-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product7.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product7-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product9.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product9-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="Bestsellers">
                                        <div className="Bestsellers owl-carousel">
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product1-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product3.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product3-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product5.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product5-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product6.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product6-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product8.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product8-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product10.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product10-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="Featured">
                                        <div className="Featured owl-carousel">
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product2.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product2-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product4.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product4-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product6.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product6-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product8.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product8-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product10.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product10-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                <div className="item">
                                                    <div className="product-thumb  mb_30">
                                                        <div className="image product-imageblock">
                                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product2.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product2-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                            <div className="button-group text-center">
                                                                <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="caption product-detail text-center">
                                                            <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                            <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                            <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="cms_banner mt_50">
                                    <div className="col-sm-12 mt_10">
                                        <div id="subbanner3" className="sub-hover">
                                            <div className="sub-img">
                                                <a href="#"><img src={require( "../public/images/sub6.jpg")} alt="Sub Banner3" className="img-responsive" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="product-tab" className="mt_50">
                                <div className="heading-part mb_10 ">
                                    <h2 className="main_title">Fashion Items</h2>
                                </div>
                                <div className="tab-content clearfix box">
                                    <div className="tab-pane active" id="nArrivals">
                                        <div className="tab-pane" id="Featured">
                                            <div className="Featured owl-carousel">
                                                <div className="product-grid">
                                                    <div className="item">
                                                        <div className="product-thumb  mb_30">
                                                            <div className="image product-imageblock">
                                                                <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product2.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product2-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                                <div className="button-group text-center">
                                                                    <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                    <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                    <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                    <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                                </div>
                                                            </div>
                                                            <div className="caption product-detail text-center">
                                                                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                                <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                                <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-grid">
                                                    <div className="item">
                                                        <div className="product-thumb  mb_30">
                                                            <div className="image product-imageblock">
                                                                <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product4.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product4-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                                <div className="button-group text-center">
                                                                    <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                    <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                    <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                    <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                                </div>
                                                            </div>
                                                            <div className="caption product-detail text-center">
                                                                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                                <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                                <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-grid">
                                                    <div className="item">
                                                        <div className="product-thumb  mb_30">
                                                            <div className="image product-imageblock">
                                                                <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product6.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product6-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                                <div className="button-group text-center">
                                                                    <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                    <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                    <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                    <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                                </div>
                                                            </div>
                                                            <div className="caption product-detail text-center">
                                                                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                                <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                                <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-grid">
                                                    <div className="item">
                                                        <div className="product-thumb  mb_30">
                                                            <div className="image product-imageblock">
                                                                <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product8.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product8-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                                <div className="button-group text-center">
                                                                    <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                    <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                    <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                    <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                                </div>
                                                            </div>
                                                            <div className="caption product-detail text-center">
                                                                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                                <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                                <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-grid">
                                                    <div className="item">
                                                        <div className="product-thumb  mb_30">
                                                            <div className="image product-imageblock">
                                                                <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product10.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product10-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                                <div className="button-group text-center">
                                                                    <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                    <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                    <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                    <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                                </div>
                                                            </div>
                                                            <div className="caption product-detail text-center">
                                                                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                                <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                                <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-grid">
                                                    <div className="item">
                                                        <div className="product-thumb  mb_30">
                                                            <div className="image product-imageblock">
                                                                <a href="product_detail_page.html"> <img data-name="product_image" src={require( "../public/images/product/product2.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> <img src={require( "../public/images/product/product2-1.jpg")} alt="iPod Classic" title="iPod Classic" className="img-responsive" /> </a>
                                                                <div className="button-group text-center">
                                                                    <div className="wishlist"><a href="#"><span>wishlist</span></a></div>
                                                                    <div className="quickview"><a href="#"><span>Quick View</span></a></div>
                                                                    <div className="compare"><a href="#"><span>Compare</span></a></div>
                                                                    <div className="add-to-cart"><a href="#"><span>Add to cart</span></a></div>
                                                                </div>
                                                            </div>
                                                            <div className="caption product-detail text-center">
                                                                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i><i className="fa fa-star fa-stack-x"></i></span> </div>
                                                                <h6 data-name="product_name" className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">New LCDScreen and HD Vide..</a></h6>
                                                                <span className="price"><span className="amount"><span className="currencySymbol">$</span>70.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="Blog" className="mt_50">
                                <div className="heading-part mb_10 ">
                                    <h2 className="main_title">Latest News</h2>
                                </div>
                                <div className="blog-contain box">
                                    <div className="blog owl-carousel ">
                                        <div className="item">
                                            <div className="box-holder">
                                                <div className="thumb post-img">
                                                    <a href="#"> <img src={require( "../public/images/blog/blog_img_01.jpg")} alt="OYEENok" /> </a>
                                                    <div className="date-time text-center">
                                                        <div className="day"> 11</div>
                                                        <div className="month">Aug</div>
                                                    </div>
                                                    <div className="post-image-hover"> </div>
                                                    <div className="post-info">
                                                        <h6 className="mb_10 text-uppercase"> <a href="single_blog.html">Fashions fade, style is eternal</a> </h6>
                                                        <div className="view-blog">
                                                            <div className="write-comment pull-left"> <a href="single_blog.html"> 0 Comments</a> </div>
                                                            <div className="read-more pull-right">
                                                                <a href="single_blog.html"> <i className="fa fa-link"></i> read more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="box-holder">
                                                <div className="thumb post-img">
                                                    <a href="#"> <img src={require( "../public/images/blog/blog_img_02.jpg")} alt="OYEENok" /> </a>
                                                    <div className="date-time text-center">
                                                        <div className="day"> 11</div>
                                                        <div className="month">Aug</div>
                                                    </div>
                                                    <div className="post-image-hover"> </div>
                                                    <div className="post-info">
                                                        <h6 className="mb_10 text-uppercase"> <a href="single_blog.html">Fashions fade, style is eternal</a> </h6>
                                                        <div className="view-blog">
                                                            <div className="write-comment pull-left"> <a href="single_blog.html"> 0 Comments</a> </div>
                                                            <div className="read-more pull-right">
                                                                <a href="single_blog.html"> <i className="fa fa-link"></i> read more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="box-holder">
                                                <div className="thumb post-img">
                                                    <a href="#"> <img src={require( "../public/images/blog/blog_img_01.jpg")} alt="OYEENok" /> </a>
                                                    <div className="date-time text-center">
                                                        <div className="day"> 11</div>
                                                        <div className="month">Aug</div>
                                                    </div>
                                                    <div className="post-image-hover"> </div>
                                                    <div className="post-info">
                                                        <h6 className="mb_10 text-uppercase"> <a href="single_blog.html">Fashions fade, style is eternal</a> </h6>
                                                        <div className="view-blog">
                                                            <div className="write-comment pull-left"> <a href="single_blog.html"> 0 Comments</a> </div>
                                                            <div className="read-more pull-right">
                                                                <a href="single_blog.html"> <i className="fa fa-link"></i> read more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="box-holder">
                                                <div className="thumb post-img">
                                                    <a href="#"> <img src={require( "../public/images/blog/blog_img_02.jpg")} alt="OYEENok" /> </a>
                                                    <div className="date-time text-center">
                                                        <div className="day"> 11</div>
                                                        <div className="month">Aug</div>
                                                    </div>
                                                    <div className="post-image-hover"> </div>
                                                    <div className="post-info">
                                                        <h6 className="mb_10 text-uppercase"> <a href="single_blog.html">Fashions fade, style is eternal</a> </h6>
                                                        <div className="view-blog">
                                                            <div className="write-comment pull-left"> <a href="single_blog.html"> 0 Comments</a> </div>
                                                            <div className="read-more pull-right">
                                                                <a href="single_blog.html"> <i className="fa fa-link"></i> read more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="brand_carouse" className="ptb_50 text-center">
                        <div className="type-01">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="brand owl-carousel ptb_20">
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand2.png")} alt="Dell" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand1.png")} alt="Disney" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand3.png")} alt="Harley" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand4.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand5.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand6.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand7.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand8.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand9.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="news-head pull-left">
                                    <h2>SIGN UP FOR NEWSLETTER</h2>
                                    <div className="new-desc">Be the First to know about our Fresh Arrivals and much more!</div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="news-form pull-right">
                                    <form class="form-inline" onSubmit="return validatemail();" method="post">
                                        <div className="form-group required">
                                            <input name="email" id="email" placeholder="Enter Your Email" className="form-control input-lg setWidth" required="" type="email" />
                                            <input type="submit" className="btn btn-default btn-lg" value="Subscribe" />
                                        </div>
                                    </form>
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
                                        <a href="index.html"> <img src={require( "../public/images/footer-logo.png")} alt="OYEENok" /> </a>
                                    </div>
                                    <div className="footer-desc">Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipisicagna.</div>
                                </div>

                                <div className="col-xs-12 col-sm-6">
                                    <div className="Testimonial">
                                        <div className="client owl-carousel">
                                            <div className="item client-detail">
                                                <div className="client-avatar"> <img alt="" src={require( "../public/images/user1.jpg")} /> </div>
                                                <div className="client-title"><strong>joseph Lui</strong></div>
                                                <div className="client-designation mb_10"> - php Developer</div>
                                                <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit amet, sea in odio ..</p>
                                            </div>
                                            <div className="item client-detail">
                                                <div className="client-avatar"> <img alt="" src={require( "../public/images/user2.jpg")} /> </div>
                                                <div className="client-title"><strong>joseph Lui</strong></div>
                                                <div className="client-designation mb_10"> - php Developer</div>
                                                <p><i className="fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum dolor sit amet, volumus oporteat his at sea in Rem ipsum dolor sit amet, sea in odio ..</p>
                                            </div>
                                            <div className="item client-detail">
                                                <div className="client-avatar"> <img alt="" src={require( "../public/images/user3.jpg")} /> </div>
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