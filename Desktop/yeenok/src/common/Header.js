import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MenuBrandSlide from '../util/Menu_Brand_Slide';
import {CartContext} from '../context/Cart.Context'
export default class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <div className="header-top-left">
                                    <div className="contact">
                                        <a href="#">Gọi Ngay !</a> <span className="hidden-xs hidden-sm hidden-md">033 919 6335</span>
                                    </div>
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
                                        <button type="button" className="btn btn-default btn-lg">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="navbar-header col-xs-6 col-sm-4">
                                <Link to="/" className="navbar-brand"><img alt="OYEENok" src={require('../public/images/logo.png')} /></Link>
                            </div>
                            <div className="col-xs-6 col-sm-4 shopcart">
                                <Link to="/cart/" >
                                    <div id="cart" className="btn-group btn-block mtb_40">
                                        <button type="button" className="btn" aria-expanded="true">
                                            <span id="shippingcart">Giỏ Hàng</span>
                                            <CartContext.Consumer>
                                                {
                                                    ({cartItems}) =><span id="cart-total">Mặt Hàng({cartItems.length})</span>
                                                }
                                            </CartContext.Consumer>
                                            
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <nav className="navbar">
                            <p>Menu</p>
                            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse"> <span className="i-bar"><i className="fa fa-bars"></i></span></button>
                            <div className="collapse navbar-collapse js-navbar-collapse">
                                <ul id="menu" className="nav navbar-nav">
                                    <li><Link to="/">Trang Chủ</Link></li>
                                    <li> <a href="category_page.html">Đồ Nữ</a></li>
                                    <li> <a href="category_page.html">Đồ Nam</a></li>
                                    <li className="dropdown mega-dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Bộ Sưu Tập </a>
                                        <ul className="dropdown-menu mega-dropdown-menu row">
                                            <li className="col-md-3">
                                                <ul>
                                                    <li>
                                                        <MenuBrandSlide />
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    <li className="dropdown-header">Quần Áo Công Sở</li>
                                                    <li><a href="#">Áo Thun</a></li>
                                                    <li><a href="#">Áo Sơ Mi</a></li>
                                                    <li><a href="#">Áo Khoác & Áo Vest</a></li>
                                                    <li><a href="#">Áo Nỉ & Áo Len</a></li>
                                                    <li><a href="#">Quần</a></li>
                                                    <li><a href="#">Đầm</a></li>
                                                    <li><a href="#">Chân Váy</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    <li className="dropdown-header">Đồ Bộ</li>
                                                    <li><a href="#">Đồ Bộ & Đồ Mặc Nhà</a></li>
                                                    <li><a href="#">Đồ Đôi</a></li>
                                                    <li><a href="#">Đồ Lót</a></li>
                                                    <li><a href="#">Bộ Đồ Thể Thao</a></li>
                                                    <li><a href="#">Bộ Đồ Bơi</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    <li className="dropdown-header">Phụ Kiện</li>
                                                    <li><a href="#">Ba Lô & Túi Xách & Ví</a></li>
                                                    <li><a href="#">Thắt Lưng</a></li>
                                                    <li><a href="#">Mũ Thời Trang</a></li>
                                                    <li><a href="#">Kính Dâm</a></li>
                                                </ul>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li> <a href="blog_page.html">Xu Hướng Mới</a></li>
                                    <li> <Link to="/contact">Liên Hệ</Link></li>
                                    <li className="dropdown"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">Trang </a>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/cart">Giỏ Hàng</Link></li>
                                            <li><Link to="/checkout">Kiểm Tra Đơn Hàng</Link></li>
                                            <li><Link to="/blog" >Xu Hướng Thời Trang</Link></li>
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