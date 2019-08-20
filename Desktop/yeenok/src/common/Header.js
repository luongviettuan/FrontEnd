import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Header extends Component{
    render(){
        return(
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
                                    <li className="account">
                                        {/* <a href="#">My Account</a> */}
                                        <Link to="/login/" >My Account</Link>
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

        
        )
    }
}