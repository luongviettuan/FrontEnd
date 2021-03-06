import React, {Component} from 'react';
export default class SubHomeItem1 extends Component{
    render(){
        return(
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
                            <div className="product-grid">
                                    <div className="col-sm-3 item">
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
                                    <div className="col-sm-3 item">
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
                                <div className="col-sm-3 item">
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
                                <div className="col-sm-3 item">
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
                            <div className="product-grid">
                                    <div className="col-sm-3 item">
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
                                    <div className="col-sm-3 item">
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
                                <div className="col-sm-3 item">
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
                                <div className="col-sm-3 item">
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
                            
                        </div>
                    </div>
                    <div className="tab-pane" id="Bestsellers">
                        <div className="Bestsellers owl-carousel">
                            <div className="product-grid">
                                <div className="col-sm-3 item">
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
                                <div className="col-sm-3 item">
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
                                <div className="col-sm-3 item">
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
                                <div className="col-sm-3 item">
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
                                <div className="col-sm-3 item">
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
                                <div className="col-sm-3 item">
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
                </div>
            </div>
        )
    }
}