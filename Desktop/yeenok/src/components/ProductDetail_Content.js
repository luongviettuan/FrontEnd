import React, { Component } from 'react';
import SubRelatedProduct from '../sub_components/Sub_Related_Product';
import {CartContext} from '../context/Cart.Context'
export default class ProductDetailContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            product : {
                product_id: this.props.data.product_id,
                product_name: this.props.data.product_name,
                product_image_url: this.props.data.product_image_url,
                price : this.props.data.price,
                size : "",
                color: "",
                unit : 1
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const { value, name } = event.target;
        this.setState({
            product : {
                ...this.state.product,
                product_id: this.props.data.product_id,
                product_name: this.props.data.product_name,
                product_image_url: this.props.data.product_image_url,
                price : this.props.data.price,
                [name]: value
            }
        })
    }
    render() {
        const data = this.props.data

        let image_url = "";
        if(data.product_image_url !== undefined){
            image_url = require(`../public/images/product/${data.product_image_url}`)
        }
        
        return (
            <div className="col-sm-8 col-lg-9 mtb_20">
                <div className="row mt_10 ">
                    <div className="col-md-6">
                        <div>
                            <img 
                            data-name="product_image"
                            src={image_url}
                            alt="" />
                            </div>
                    </div>
                    <div className="col-md-6 prodetail caption product-thumb">
                        <h4 data-name="product_name" className="product-name">{data.product_name}</h4>
                        <span className="price mb_20"><span className="amount"><span className="currencySymbol">Giá : </span>{data.price} VNĐ</span>
                        </span>
                        <hr></hr>
                        <ul className="list-unstyled product_info mtb_20">
                            <li>
                                <label>Brand:</label>
                                <span>{data.brand_name}</span>
                            </li>
                            <li>
                                <label>Trạng Thái:</label>
                                <span>{data.status}</span>
                            </li>
                        </ul>
                        <hr></hr>
                        <p className="product-desc mtb_30">{data.description}</p>
                        <div id="product">
                            <div className="form-group">
                                <div className="row">
                                    <div className="Sort-by col-md-4">
                                        <label>Kích Cỡ</label>
                                        <select name="size" value={this.state.product.size} onChange={this.handleChange} id="select-by-size" className="selectpicker form-control">
                                            {
                                                data.size !== undefined && data.size.map(item=><option name={item} key={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="Color col-md-4">
                                        <label>Màu Sắc</label>
                                        <select name="color" value={this.state.product.color} onChange={this.handleChange} id="select-by-color" className="selectpicker form-control">
                                            {
                                                data.color !== undefined && data.color.map(item => <option name={item} key={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="Color col-md-4">
                                        <label>Số Lượng</label>
                                        <input type="number" min="1" value={this.state.product.unit} onChange={this.handleChange} className="form-control" name="unit"/>
                                    </div>
                                </div>

                            </div>
                            <div className="button-group mt_30">
                                <CartContext.Consumer>
                                    {
                                        ({addToCart}) =><div className="add-to-cart" onClick={()=>addToCart(this.state.product)}><span>Add to cart</span></div>
                                    }
                                </CartContext.Consumer>
                                {/* <div className="wishlist"><span>wishlist</span></div>
                                <div className="compare"><span>Compare</span></div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="exTab5" className="mtb_30">
                            <ul className="nav nav-tabs">
                                <li className="active"> <a href="#1c" data-toggle="tab">Overview</a> </li>
                                <li><a href="#2c" data-toggle="tab">Reviews (1)</a> </li>
                                <li><a href="#3c" data-toggle="tab">Solution</a> </li>
                            </ul>
                            <div className="tab-content ">
                                <div className="tab-pane active" id="1c">
                                    <p>CLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis malesuada mi id tristique. Sed ipsum nisi, dapibus at faucibus non, dictum a diam. Nunc vitae interdum diam. Sed finibus, justo vel maximus facilisis, sapien turpis euismod tellus, vulputate semper diam ipsum vel tellus.</p>
                                </div>
                                <div className="tab-pane" id="2c">
                                    <form className="form-horizontal">
                                        <div id="review"></div>
                                        <h4 className="mt_20 mb_30">Write a review</h4>
                                        <div className="form-group required">
                                            <div className="col-sm-12">
                                                <label className="control-label" for="input-name">Your Name</label>
                                                <input name="name" value="" id="input-name" className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="form-group required">
                                            <div className="col-sm-12">
                                                <label className="control-label" for="input-review">Your Review</label>
                                                <textarea name="text" rows="5" id="input-review" className="form-control"></textarea>
                                                <div className="help-block"><span className="text-danger">Note:</span> HTML is not translated!</div>
                                            </div>
                                        </div>
                                        <div className="form-group required">
                                            <div className="col-md-6">
                                                <label className="control-label">Rating</label>
                                                <div className="rates"><span>Bad</span>
                                                    <input name="rating" value="1" type="radio" />
                                                    <input name="rating" value="2" type="radio" />
                                                    <input name="rating" value="3" type="radio" />
                                                    <input name="rating" value="4" type="radio" />
                                                    <input name="rating" value="5" type="radio" />
                                                    <span>Good</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="buttons pull-right">
                                                    <button type="submit" className="btn btn-md btn-link">Continue</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="3c">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis malesuada mi id tristique. Sed ipsum nisi, dapibus at faucibus non, dictum a diam. Nunc vitae interdum diam. Sed finibus, justo vel maximus facilisis, sapien turpis euismod tellus, vulputate semper diam ipsum vel tellus.applied clearfix to the tab-content to rid of the gap between the tab and the content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SubRelatedProduct />
            </div>

        )
    }
}