import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class SubHomeItem2 extends Component{
    constructor(){
        super();
        this.state = {
            productList : []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/product')
            .then(res => 
                    this.setState({
                        productList : res.data
                    })
                )
            
    }
    render(){
        const {productList} = this.state
        let ramdomNumber = Math.floor((Math.random() * (this.state.productList.length-4)) + 1)
        
        return(
            <div id="product-tab" className="mt_50">
                <div className="heading-part mb_10 ">
                    <h2 className="main_title">Có Thể Bạn Sẽ Thích</h2>
                </div>
                <div className="tab-content clearfix box">
                    <div className="tab-pane active" id="nArrivals">
                        <div className="tab-pane" id="Featured">
                            {
                                productList.length > 0 && productList.slice(ramdomNumber, ramdomNumber+4).map(product=>
                                        <div className="product-grid" key={product.product_id}>
                                            <div className="col-sm-3 item">
                                                <div className="product-thumb  mb_30">
                                                    <div className="image product-imageblock">
                                                        <a>
                                                            <img 
                                                                data-name="product_image"
                                                                src={require(`../public/images/product/${product.product_image_url}`)}
                                                                alt={product.product_name} title={product.product_name}
                                                                className="img-responsive"
                                                            />
                                                            <img 
                                                                data-name="product_image"
                                                                src={require(`../public/images/product/${product.product_image_url}`)}
                                                                alt={product.product_name} title={product.product_name}
                                                                className="img-responsive"
                                                            />
                                                        </a>
                                                        <div className="button-group text-center">
                                                            
                                                            <Link to={`/productdetail/${product.product_id}`}>
                                                                <div className="quickview">
                                                                    <span>Quick View</span>
                                                                </div>                                                   
                                                            </Link>        
                                                        </div>
                                                    </div>
                                                    <div className="caption product-detail text-center">
                                                        <h6 data-name="product_name" className="product-name">{product.product_name}</h6>
                                                        <span className="price"><span className="amount"><span className="currencySymbol"></span>{product.price} VNĐ</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}