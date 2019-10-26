import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import MenuBrandSlide from '../util/Menu_Brand_Slide';
import {CartContext} from '../context/Cart.Context'
import CommonSearch from '../components/Common_Search';
class Header extends Component {
    constructor(props){
        super(props);
        const { cookies } = props;
        this.state = {
            name: cookies.get('name') || ''
        };
    }
    render() {
        const {name}= this.state;
        return (
            <header id="header">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <div className="header-top-left">
                                    <div className="contact">
                                        <strong>Gọi Ngay !</strong>
                                        <span className="hidden-xs hidden-sm hidden-md">033 919 6335</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-8">
                                <ul className="header-top-right text-right">
                                    <li className="account">
                                        {
                                            name.length>0 ?
                                            <Link to="/" >Xin Chào : {name}</Link> :
                                            <Link to="/login/" >Tài Khoản</Link> 
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <CommonSearch />
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
                                    <li><span><Link to="/">Trang Chủ</Link></span></li>
                                    <li><span><Link to="/">Đồ Nữ</Link></span></li>
                                    <li><span><Link to="/">Đồ Nam</Link></span></li>
                                    <li className="dropdown ul_change"><span><Link to="/">Bộ Sưu Tập</Link></span>
                                        <ul className="dropdown-menu row" style={{marginLeft: '-52.65rem', width: '117rem'}}>
                                            <li className="col-md-3">
                                                <ul>
                                                    <li>
                                                        <MenuBrandSlide />
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    <li><h5>Quần Áo Công Sở</h5></li>
                                                    <Link to="/category/1"><li className="change_color_li"><span>Áo Thun</span></li></Link>
                                                    <Link to="/category/2"><li className="change_color_li"><span>Áo Sơ Mi</span></li></Link>
                                                    <Link to="/category/4"><li className="change_color_li"><span>Áo Khoác & Áo Vest</span></li></Link>
                                                    <Link to="/category/6"><li className="change_color_li"><span>Áo Nỉ & Áo Len</span></li></Link>
                                                    <Link to="/category/7"><li className="change_color_li"><span>Quần</span></li></Link>
                                                    <Link to="/category/11"><li className="change_color_li"><span>Đầm</span></li></Link>
                                                    <Link to="/category/12"><li className="change_color_li"><span>Chân Váy</span></li></Link>
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    <li><h5>Đồ Bộ</h5></li>
                                                    <Link to="/category/5"><li className="change_color_li"><span>Đồ Đôi</span></li></Link>
                                                    <Link to="/category/3"><li className="change_color_li"><span>Đồ Bộ & Đồ Mặc Nhà</span></li></Link>
                                                    <Link to="/category/10"><li className="change_color_li"><span>Đồ Lót</span></li></Link>
                                                    <Link to="/category/13"><li className="change_color_li"><span>Bộ Đồ Thể Thao</span></li></Link>
                                                    <Link to="/category/14"><li className="change_color_li"><span>Bộ Đồ Bơi</span></li></Link>
                                                </ul>
                                            </li>
                                            <li className="col-md-3">
                                                <ul>
                                                    <li><h5>Phụ Kiện</h5></li>
                                                    <Link to="/category/8"><li className="change_color_li"><span>Ba Lô & Túi Xách & Ví</span></li></Link>
                                                    <Link to="/category/9"><li className="change_color_li"><span>Thắt Lưng</span></li></Link>
                                                    <Link to="/category/15"><li className="change_color_li"><span>Mũ Thời Trang</span></li></Link>
                                                    <Link to="/category/16"><li className="change_color_li"><span>Kính Dâm</span></li></Link>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><span><Link to='/'>Xu Hướng Mới</Link></span></li>
                                    <li><span><Link to='/'>Liên Hệ</Link></span></li>
                                    <li className="dropdown"><span><Link to="/">Trang</Link></span>
                                        <ul className="dropdown-menu">
                                            <Link to="/cart"><li className="change_color_li"><span>Giỏ Hàng</span></li></Link>
                                            <Link to="/checkout"><li className="change_color_li"><span>Kiểm Tra Đơn Hàng</span></li></Link>
                                            <Link to="/blog"><li className="change_color_li"><span>Xu Hướng Thời Trang</span></li></Link>
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
export default withCookies(Header)