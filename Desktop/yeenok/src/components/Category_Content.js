import React, {Component} from 'react';
import {Link} from 'react-router-dom'
export default class categoryContent extends Component {
    render(){
        return(
            <div className="col-sm-8 col-lg-9 mtb_20">
                <div className="row">
                    {
                        this.props.data.length >0 && this.props.data.map(item =>
                            <div className="product-layout  product-grid  col-md-4 col-sm-6 col-xs-12 " key={item.product_id}>
                                <div className="item">
                                    <div className="product-thumb  mb_30">
                                        <div className="image product-imageblock">
                                            <a href="product_detail_page.html">
                                                <img
                                                    src={require(`../public/images/product/${item.product_image_url}`)}
                                                    alt={item.product_name}
                                                    className="img-responsive"
                                                />
                                                <img
                                                    src={require(`../public/images/product/${item.product_image_url}`)}
                                                    alt={item.product_name}
                                                    className="img-responsive"
                                                />
                                            </a>
                                            <div className="button-group text-center">
                                                <Link to={`/productdetail/${item.product_id}`}>
                                                    <div className="quickview">
                                                        <span>Quick View</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="caption product-detail text-center">
                                            <h6 data-name="product_name" className="product-name mt_20">{item.product_name}</h6>
                                            <span className="price"><span className="amount"><span className="currencySymbol">Giá</span> {item.price} VNĐ</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        
                        ) 
                                 
                    }
                </div>
     
            </div>

        )
    }
}