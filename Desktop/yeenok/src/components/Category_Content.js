import React, {Component} from 'react';
import {Link} from 'react-router-dom'
export default class categoryContent extends Component {
    render(){
        return(
            <div class="col-sm-8 col-lg-9 mtb_20">
                {/* <div class="category-page-wrapper mb_30">
                    <div class="list-grid-wrapper pull-left">
                        <div class="btn-group btn-list-grid">
                            <button type="button" id="grid-view" class="btn btn-default grid-view active"></button>
                            <button type="button" id="list-view" class="btn btn-default list-view"></button>
                        </div>
                    </div>
                    <div class="page-wrapper pull-right">
                        <label class="control-label" for="input-limit">Show :</label>
                        <div class="limit">
                            <select id="input-limit" class="form-control">
                                <option value="8" selected="selected">08</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="75">75</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                        <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                    </div>
                    <div class="sort-wrapper pull-right">
                        <label class="control-label" for="input-sort">Sort By :</label>
                        <div class="sort-inner">
                            <select id="input-sort" class="form-control">
                                <option value="ASC" selected="selected">Default</option>
                                <option value="ASC">Name (A - Z)</option>
                                <option value="DESC">Name (Z - A)</option>
                                <option value="ASC">Price (Low &gt; High)</option>
                                <option value="DESC">Price (High &gt; Low)</option>
                                <option value="DESC">Rating (Highest)</option>
                                <option value="ASC">Rating (Lowest)</option>
                                <option value="ASC">Model (A - Z)</option>
                                <option value="DESC">Model (Z - A)</option>
                            </select>
                        </div>
                        <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                    </div>
                </div>
                 */}
                <div class="row">
                    {
                        this.props.data.length >0 && this.props.data.map(item =>
                            <div class="product-layout  product-grid  col-md-4 col-sm-6 col-xs-12 ">
                                <div class="item">
                                    <div class="product-thumb  mb_30">
                                        <div class="image product-imageblock">
                                            <a href="product_detail_page.html"> <img data-name="product_image" src={require(`../public/images/product/${item.product_image_url}`)} alt="iPod Classic" title="iPod Classic" class="img-responsive" /> <img src={require(`../public/images/product/${item.product_image_url}`)} alt="iPod Classic" title="iPod Classic" class="img-responsive" /> </a>
                                            <div class="button-group text-center">
                                                <Link to={`/productdetail/${item.product_id}`}>
                                                    <div class="quickview">
                                                        <span>Quick View</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="caption product-detail text-center">
                                            <h6 data-name="product_name" class="product-name mt_20">{item.product_name}</h6>
                                            <span class="price"><span class="amount"><span class="currencySymbol">Giá</span> {item.price} VNĐ</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        
                        ) 
                                 
                    }
                </div>
                {/* <div class="pagination-nav text-center mt_50">
                    <ul>
                        <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                        <li class="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                    </ul>
                </div> */}
            </div>

        )
    }
}