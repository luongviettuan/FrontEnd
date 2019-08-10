import React, {Component}  from 'react';

import '../public/css/font-awesome.min.css';
import '../public/css/bootstrap.css';
import '../public/css/style.css';
import '../public/css/magnific-popup.css';
import '../public/css/owl.carousel.css';




export default class Login extends Component{
    render(){
        return (
            <div class="wrapper">
                <header id="header">
                    <div class="header-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-4">
                                    <div class="header-top-left">
                                        <div class="contact"><a href="#">Call now !</a> <span class="hidden-xs hidden-sm hidden-md">+91 987-654-321</span></div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-8">
                                    <ul class="header-top-right text-right">
                                        <li class="account"><a href="login.html">My Account</a></li>
                                        <li class="language dropdown"> <span class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">Language <span class="caret"></span> </span>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">French</a></li>
                                                <li><a href="#">German</a></li>
                                            </ul>
                                        </li>
                                        <li class="currency dropdown"> <span class="dropdown-toggle" id="dropdownMenu12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">Currency <span class="caret"></span> </span>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu12">
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
                    <div class="header">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-4">
                                    <div class="main-search mt_40">
                                        <input id="search-input" name="search" value="" placeholder="Search" class="form-control input-lg" autocomplete="off" type="text" />
                                        <span class="input-group-btn">
                        <button type="button" class="btn btn-default btn-lg" ><i class="fa fa-search"></i></button>
                        </span> </div>
                                </div>
                                <div class="navbar-header col-xs-6 col-sm-4">
                                    <a class="navbar-brand" href="index.html"> <img alt="OYEENok" src="images/logo.png" /> </a>
                                </div>
                                <div class="col-xs-6 col-sm-4 shopcart">
                                    <div id="cart" class="btn-group btn-block mtb_40">
                                        <button type="button" class="btn" data-target="#cart-dropdown" data-toggle="collapse" aria-expanded="true"><span id="shippingcart">Shopping cart</span><span id="cart-total">items (0)</span> </button>
                                    </div>
                                    <div id="cart-dropdown" class="cart-menu collapse">
                                        <ul>
                                            <li>
                                                <table class="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <td class="text-center">
                                                                <a href="#"><img src="images/product/70x84.jpg" alt="iPod Classic" title="iPod Classic" /></a>
                                                            </td>
                                                            <td class="text-left product-name"><a href="#">MacBook Pro</a> <span class="text-left price">$20.00</span>
                                                                <input class="cart-qty" name="product_quantity" min="1" value="1" type="number" />
                                                            </td>
                                                            <td class="text-center"><a class="close-cart"><i class="fa fa-times-circle"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-center">
                                                                <a href="#"><img src="images/product/70x84.jpg" alt="iPod Classic" title="iPod Classic" /></a>
                                                            </td>
                                                            <td class="text-left product-name"><a href="#">MacBook Pro</a> <span class="text-left price">$20.00</span>
                                                                <input class="cart-qty" name="product_quantity" min="1" value="1" type="number" />
                                                            </td>
                                                            <td class="text-center"><a class="close-cart"><i class="fa fa-times-circle"></i></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li>
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td class="text-right"><strong>Sub-Total</strong></td>
                                                            <td class="text-right">$2,100.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-right"><strong>Eco Tax (-2.00)</strong></td>
                                                            <td class="text-right">$2.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-right"><strong>VAT (20%)</strong></td>
                                                            <td class="text-right">$20.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-right"><strong>Total</strong></td>
                                                            <td class="text-right">$2,122.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li>
                                                <form action="cart_page.html">
                                                    <input class="btn pull-left mt_10" value="View cart" type="submit" />
                                                </form>
                                                <form action="checkout_page.html">
                                                    <input class="btn pull-right mt_10" value="Checkout" type="submit" />
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <nav class="navbar">
                                <p>Menu</p>
                                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse"> <span class="i-bar"><i class="fa fa-bars"></i></span></button>
                                <div class="collapse navbar-collapse js-navbar-collapse">
                                    <ul id="menu" class="nav navbar-nav">
                                        <li> <a href="index.html">Home</a></li>
                                        <li> <a href="category_page.html">Shop</a></li>
                                        <li> <a href="blog_page.html">Blog</a></li>
                                        <li class="dropdown mega-dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">Collection </a>
                                            <ul class="dropdown-menu mega-dropdown-menu row">
                                                <li class="col-md-3">
                                                    <ul>
                                                        <li class="dropdown-header">Women's</li>
                                                        <li><a href="#">Unique Features</a></li>
                                                        <li><a href="#">Image Responsive</a></li>
                                                        <li><a href="#">Auto Carousel</a></li>
                                                        <li><a href="#">Newsletter Form</a></li>
                                                        <li><a href="#">Four columns</a></li>
                                                        <li><a href="#">Four columns</a></li>
                                                        <li><a href="#">Good Typography</a></li>
                                                    </ul>
                                                </li>
                                                <li class="col-md-3">
                                                    <ul>
                                                        <li class="dropdown-header">Man's</li>
                                                        <li><a href="#">Unique Features</a></li>
                                                        <li><a href="#">Image Responsive</a></li>
                                                        <li><a href="#">Four columns</a></li>
                                                        <li><a href="#">Auto Carousel</a></li>
                                                        <li><a href="#">Newsletter Form</a></li>
                                                        <li><a href="#">Four columns</a></li>
                                                        <li><a href="#">Good Typography</a></li>
                                                    </ul>
                                                </li>
                                                <li class="col-md-3">
                                                    <ul>
                                                        <li class="dropdown-header">Children's</li>
                                                        <li><a href="#">Unique Features</a></li>
                                                        <li><a href="#">Four columns</a></li>
                                                        <li><a href="#">Image Responsive</a></li>
                                                        <li><a href="#">Auto Carousel</a></li>
                                                        <li><a href="#">Newsletter Form</a></li>
                                                        <li><a href="#">Four columns</a></li>
                                                        <li><a href="#">Good Typography</a></li>
                                                    </ul>
                                                </li>
                                                <li class="col-md-3">
                                                    <ul>
                                                        <li id="myCarousel" class="carousel slide" data-ride="carousel">
                                                            <div class="carousel-inner">
                                                                <div class="item active">
                                                                    <a href="#"><img src="images/menu-banner1.jpg" class="img-responsive" alt="Banner1" /></a>
                                                                </div>
                                                              
                                                                <div class="item">
                                                                    <a href="#"><img src="images/menu-banner2.jpg" class="img-responsive" alt="Banner1" /></a>
                                                                </div>
                                                             
                                                                <div class="item">
                                                                    <a href="#"><img src="images/menu-banner3.jpg" class="img-responsive" alt="Banner1" /></a>
                                                                </div>
                                                              
                                                            </div>
                                                      
                                                        </li>
                                                     
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages </a>
                                            <ul class="dropdown-menu">
                                                <li> <a href="contact_us.html">Contact us</a></li>
                                                <li> <a href="cart_page.html">Cart</a></li>
                                                <li> <a href="checkout_page.html">Checkout</a></li>
                                                <li> <a href="product_detail_page.html">Product Detail Page</a></li>
                                                <li> <a href="single_blog.html">Single Post</a></li>
                                            </ul>
                                        </li>
                                        <li> <a href="about.html">About us</a></li>
                                    </ul>
                                </div>
                                
                            </nav>
                        </div>
                    </div>
                </header>
                <div class="container">
                    <div class="row ">
                        <div class="col-sm-12">
                            <div class="breadcrumb ptb_20">
                                <h1>Login</h1>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li class="active">Login</li>
                                </ul>
                            </div>
                        </div>
                        <div id="column-left" class="col-sm-4 col-lg-3 hidden-xs">
                            <div id="category-menu" class="navbar collapse in mb_40" aria-expanded="true" role="button">
                                <div class="nav-responsive">
                                    <div class="heading-part">
                                        <h2 class="main_title">Top category</h2>
                                    </div>
                                    <ul class="nav  main-navigation collapse in">
                                        <li><a href="#">Appliances</a></li>
                                        <li><a href="#">Mobile Phones</a></li>
                                        <li><a href="#">Tablet PC & Accessories</a></li>
                                        <li><a href="#">Consumer Electronics</a></li>
                                        <li><a href="#">Computers & Networking</a></li>
                                        <li><a href="#">Electrical & Tools</a></li>
                                        <li><a href="#">Apparel</a></li>
                                        <li><a href="#">Bags & Shoes</a></li>
                                        <li><a href="#">Toys & Hobbies</a></li>
                                        <li><a href="#">Watches & Jewelry</a></li>
                                        <li><a href="#">Home & Garden</a></li>
                                        <li><a href="#">Health & Beauty</a></li>
                                        <li><a href="#">Outdoors & Sports</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="left_banner left-sidebar-widget mt_30 mb_40">
                                <a href="#"><img src="images/left1.jpg" alt="Left Banner" class="img-responsive" /></a>
                            </div>
                        </div>
                        <div class="col-sm-8 col-lg-9 mtb_20">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3">
                                    <div class="panel-login panel">
                                        <div class="panel-heading">
                                            <div class="row mb_20">
                                                <div class="col-xs-6">
                                                    <a href="#" class="active" id="login-form-link">Login</a>
                                                </div>
                                                <div class="col-xs-6">
                                                    <a href="#" id="register-form-link">Register</a>
                                                </div>
                                            </div>
                                            <hr></hr>
                                        </div>
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <form id="login-form" action="#" method="post">
                                                        <div class="form-group">
                                                            <input type="text" name="username" id="username1" tabindex="1" class="form-control" placeholder="Username" value="" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password" />
                                                        </div>
                                                        <div class="form-group text-center">
                                                            <input type="checkbox" tabindex="3" class="" name="remember" id="remember" />
                                                            <label for="remember"> Remember Me</label>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-sm-6 col-sm-offset-3">
                                                                    <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <div class="text-center">
                                                                        <a href="#" tabindex="5" class="forgot-password">Forgot Password?</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <form id="register-form" action="#" method="post">
                                                        <div class="form-group">
                                                            <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="password" name="password" id="password2" tabindex="2" class="form-control" placeholder="Password" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password" />
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-sm-6 col-sm-offset-3">
                                                                    <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
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
        )
    }
}