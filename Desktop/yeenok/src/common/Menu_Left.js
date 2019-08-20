import React, {Component} from 'react';
export default class MenuLeft extends Component{
    render(){
        return (
            <div id="column-left" className="col-sm-4 col-lg-3 hidden-xs">
                <div id="category-menu" className="navbar collapse in mb_40" aria-expanded="true" role="button">
                    <div className="nav-responsive">
                        <div className="heading-part">
                            <h2 className="main_title">Top category</h2>
                        </div>
                        <ul className="nav  main-navigation collapse in">
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
                <div className="left_banner left-sidebar-widget mt_30 mb_40">
                    <a href="#"><img src={require('../public/images/left1.jpg')} alt="Left Banner" className="img-responsive" /></a>
                </div>
            </div>
        
        )
    }
}