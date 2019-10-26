import React, { Component } from 'react';
import SubRelatedProduct from '../sub_components/Sub_Related_Product';
import {CartContext} from '../context/Cart.Context'
import ClassNames from 'classnames';
import StarsRating from 'stars-rating';
import SubHomeItem2 from '../sub_components/Sub_Home_Item2'
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
            },
            active : true
        }
        this.handleChange = this.handleChange.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    ratingChanged = (newRating) => {
        console.log(newRating)
    }
    toggle() {
        this.setState(
            state => ({ active: !state.active })
        );
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

        let overviewClass = ClassNames({
            'active': this.state.active
        })
        let commentClass = ClassNames({
            'active': !this.state.active
        })

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
                                        <select name="size" value={this.state.product.size} onChange={this.handleChange} className="selectpicker form-control">
                                            {
                                                data.size !== undefined && data.size.map(item=><option name={item} key={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="Color col-md-4">
                                        <label>Màu Sắc</label>
                                        <select name="color" value={this.state.product.color} onChange={this.handleChange} className="selectpicker form-control">
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
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mtb_30">
                            <ul className="nav nav-tabs">
                                <li className={overviewClass} onClick={this.toggle}> <a href="#1c" data-toggle="tab">Tổng Quan</a> </li>
                                <li className={commentClass} onClick={this.toggle}><a href="#2c" data-toggle="tab">Đánh Giá</a> </li>
                            </ul>
                            <div className="tab-content">
                                <div className={`tab-pane ${overviewClass}`}>
                                    <p style={{paddingTop :'1rem'}}>
                                        {data.overview}
                                    </p>
                                </div>
                                <div className={`tab-pane ${commentClass}`}>
                                    <form className="form-horizontal">
                                        <div id="review"></div>
                                        <h4 className="mt_20 mb_30">Cảm Nhận Của Bạn</h4>
                                        <div className="form-group required">
                                            <div className="col-sm-12">
                                                <label className="control-label">Bình Luận Của Bạn</label>
                                                <textarea name="text" className="form-control"></textarea>
                                                
                                            </div>
                                        </div>
                                        <div className="form-group required">
                                            <div className="col-md-6">
                                                <label className="control-label">Đánh Giá</label>
                                                <StarsRating
                                                    count={5}
                                                    className="star"
                                                    onChange={this.ratingChanged}
                                                    size={24}
                                                    color2={'#ffd700'}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="buttons pull-right">
                                                    <button type="submit" className="btn btn-md btn-link">Bình Luận</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* <SubRelatedProduct /> */}
                <SubHomeItem2 />
            </div>

        )
    }
}