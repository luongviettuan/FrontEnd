import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import MenuBrandSlide from '../util/Menu_Brand_Slide';

export default class Header extends Component{
    render(){
        return(
            <header id="header">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <div className="header-top-left">
                                    <div className="contact"><a href="#">Gọi Ngay !</a> <span className="hidden-xs hidden-sm hidden-md">033 919 6335</span></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-8">
                                <ul className="header-top-right text-right">
                                    <li className="account">
                                        <Link to="/login/" >Tài Khoản</Link>
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
                                    <input id="search-input" name="search" value="" placeholder="Tìm kiếm ..." className="form-control input-lg" autoComplete="off" type="text" />
                                    <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-lg"><i className="fa fa-search"></i></button>
                                </span> </div>
                            </div>
                            <div className="navbar-header col-xs-6 col-sm-4">
                                <a className="navbar-brand" href="index.html"> <img alt="OYEENok" src={require( '../public/images/logo.png')} /> </a>
                            </div>
                            <div className="col-xs-6 col-sm-4 shopcart">
                                <Link to="/cart/" >
                                    <div id="cart" className="btn-group btn-block mtb_40">
                                        <button type="button" className="btn" data-target="#cart-dropdown" data-toggle="collapse" aria-expanded="true"><span id="shippingcart">Shopping cart</span><span id="cart-total">items (0)</span> </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <nav className="navbar">
                            <p>Menu</p>
                            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse"> <span className="i-bar"><i className="fa fa-bars"></i></span></button>
                            <div className="collapse navbar-collapse js-navbar-collapse">
                                <ul id="menu" className="nav navbar-nav">
                                    <li> <a href="index.html">Trang Chủ</a></li>
                                    <li> <a href="category_page.html">Đồ Nữ</a></li>
                                    <li> <a href="category_page.html">Đồ Nam</a></li>
                                    <li className="dropdown mega-dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Bộ Sưu Tập </a>
                                        <ul className="dropdown-menu mega-dropdown-menu row">
                                            <li className="col-md-3">
                                                <ul>
                                                    <li className="dropdown-header">Nữ Giới</li>
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
                                                    <li className="dropdown-header">Nam Giới</li>
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
                                                    <li className="dropdown-header">Trẻ Em</li>
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
                                                    {/* <li id="myCarousel" className="carousel slide" data-ride="carousel">
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

                                                    </li> */}
                                                    <li>
                                                        <MenuBrandSlide />
                                                    </li>

                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li> <a href="blog_page.html">Xu Hướng Mới</a></li>
                                    <li> <a href="about.html">Liên Hệ</a></li>
                                    <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Trang </a>
                                        <ul className="dropdown-menu">
                                            <li> <a href="cart_page.html">Giỏ Hàng</a></li>
                                            <li> <a href="checkout_page.html">Kiểm Tra Đơn Hàng</a></li>
                                            <li> <a href="single_blog.html">Xu Hướng Thời Trang</a></li>
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