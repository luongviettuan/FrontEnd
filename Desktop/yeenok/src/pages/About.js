import React, {Component} from 'react';

export default class About extends Component{
    render(){
        return(
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
                                    <li class="language dropdown">
                                        <span class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">Language <span class="caret"></span> </span>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">French</a></li>
                                        <li><a href="#">German</a></li>
                                        </ul>
                                    </li>
                                    <li class="currency dropdown">
                                        <span class="dropdown-toggle" id="dropdownMenu12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">Currency <span class="caret"></span> </span>
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
                                    <input id="search-input" name="search" value="" placeholder="Search" class="form-control input-lg" autocomplete="off" type="text"/>
                                    <span class="input-group-btn">
                                    <button type="button" class="btn btn-default btn-lg"><i class="fa fa-search"></i></button>
                                    </span> 
                                </div>
                            </div>
                            <div class="navbar-header col-xs-6 col-sm-4"> <a class="navbar-brand" href="index.html"> <img alt="OYEENok" src={require('../public/images/logo.png')} /> </a> </div>
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
                                                    <td class="text-center"><a href="#"><img src={require('../public/images/product/70x84.jpg')} alt="iPod Classic" title="iPod Classic"/></a></td>
                                                    <td class="text-left product-name"><a href="#">MacBook Pro</a> <span class="text-left price">$20.00</span>
                                                    <input class="cart-qty" name="product_quantity" min="1" value="1" type="number" />
                                                    </td>
                                                    <td class="text-center"><a class="close-cart"><i class="fa fa-times-circle"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center"><a href="#"><img src={require('../public/images/product/70x84.jpg')} alt="iPod Classic" title="iPod Classic" /></a></td>
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
                                    <li class="dropdown mega-dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Collection </a>
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
                                                    <div class="item active"> <a href="#"><img src={require('../public/images/menu-banner1.jpg')} class="img-responsive" alt="Banner1" /></a></div>
                                                    <div class="item"> <a href="#"><img src={require('../public/images/menu-banner2.jpg')} class="img-responsive" alt="Banner1" /></a></div>
                                                    <div class="item"> <a href="#"><img src={require('../public/images/menu-banner3.jpg')} class="img-responsive" alt="Banner1" /></a></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages </a>
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
                            <h1>About Us</h1>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li class="active">About Us</li>
                            </ul>
                            </div>
                        </div>
                        <div id="column-left" class="col-sm-4 col-lg-3 hidden-xs">
                            <div id="category-menu" class="navbar collapse in mb_40" aria-expanded="true"  role="button">
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
                            <div class="left_banner left-sidebar-widget mt_30 mb_40"> <a href="#"><img src={require('../public/images/left1.jpg')} alt="Left Banner" class="img-responsive" /></a> </div>
                        </div>
                        <div class="col-sm-8 col-lg-9 mtb_20">
                            <div class="row">
                            <div class="col-md-12">
                                <figure> <img src={require('../public/images/about-page-gaando.jpg')} alt="#" /> </figure>
                            </div>
                            <div class="col-md-12">
                                <div class="about-text">
                                    <div class="about-heading-wrap">
                                        <h2 class="about-heading mb_20 mt_40 ptb_10">OYEENok Design is Best Part of <span>my Life </span></h2>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                    <button type="button" class="btn mt_30">HIRE ME</button>
                                </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-md-6">
                                <div class="heading-part mb_20 mt_40">
                                    <h2 class="main_title">What We Do?</h2>
                                </div>
                                <div class="panel-group" id="accordion">
                                    <div class="panel panel-default pull-left">
                                        <div class="panel-heading">
                                        <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">1. What is HTML?</a> </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse in">
                                        <div class="panel-body">
                                            <p>HTML is a computer language devised to can then b the Internet. It is relatively easy to learn, with the basics being accessible.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default pull-left">
                                        <div class="panel-heading">
                                        <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">2. What is Bootstrap?</a> </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <p>Bootstrap is the most popular HTML, CSS, and JS frameen I discovered Bootstrap a few was still gaining in popularity, addition to HTML, CSS and JS.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default pull-left">
                                        <div class="panel-heading">
                                        <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">3. What is CSS?</a> </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <p>Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the procrt of a web page. Using CSS.</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="heading-part mb_20 mt_40 ">
                                    <h2 class="main_title">Skills</h2>
                                </div>
                                <div id="p_line">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}> <span class="sr-only">60% Complete</span> </div>
                                        <span class="progress-type">HTML / HTML5</span> <span class="progress-completed">60%</span> 
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}> <span class="sr-only">40% Complete (success)</span> </div>
                                        <span class="progress-type">ASP.Net</span> <span class="progress-completed">40%</span> 
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}> <span class="sr-only">20% Complete (info)</span> </div>
                                        <span class="progress-type">Java</span> <span class="progress-completed">20%</span> 
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}> <span class="sr-only">60% Complete (warning)</span> </div>
                                        <span class="progress-type">JavaScript / jQuery</span> <span class="progress-completed">60%</span> 
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}> <span class="sr-only">80% Complete (danger)</span> </div>
                                        <span class="progress-type">CSS / CSS3</span> <span class="progress-completed">80%</span> 
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="heading-part mb_10">
                            <h2 class="main_title mt_50">Our Creative Team</h2>
                            </div>
                            <div class="team_grid box">
                            
                                <div class="col-sm-3 item team-detail">
                                    <div class="team-item-img"> <img src={require('../public/images/tm1.jpg')} alt="" /> </div>
                                    <div class="team-designation mt_20">php Developer</div>
                                    <h4 class="team-title  mtb_10">joseph Lui </h4>
                                    <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                                    <ul class="social mt_20 mb_80">
                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-3 item team-detail">
                                    <div class="team-item-img"> <img src={require('../public/images/tm2.jpg')} alt="" /> </div>
                                    <div class="team-designation mt_20">php Developer</div>
                                    <h4 class="team-title  mtb_10">joseph Lui </h4>
                                    <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                                    <ul class="social mt_20 mb_80">
                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-3 item team-detail">
                                    <div class="team-item-img"> <img src={require('../public/images/tm3.jpg')} alt="" /> </div>
                                    <div class="team-designation mt_20">php Developer</div>
                                    <h4 class="team-title  mtb_10">joseph Lui </h4>
                                    <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                                    <ul class="social mt_20 mb_80">
                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-3 item team-detail">
                                    <div class="team-item-img"> <img src={require('../public/images/tm4.jpg')} alt="" /> </div>
                                    <div class="team-designation mt_20">php Developer</div>
                                    <h4 class="team-title  mtb_10">joseph Lui </h4>
                                    <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                                    <ul class="social mt_20 mb_80">
                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div> 
        )
    }
}