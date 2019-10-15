import React, {Component} from 'react';
import classNames from 'classnames';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {CartContext} from '../context/Cart.Context'
export default class CartContent extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    
    toggle() {
        console.log(this.state.collapse);
        
        this.setState(state => ({ collapse: !state.collapse }));
    }
    render(){
        const textMiddle = {
            verticalAlign: 'middle'
        }
        var vorcher = classNames('panel-collapse collapse ', {
            'in' : this.state.collapse
        })
        var address = classNames('panel-collapse collapse ', {
            'in' : !this.state.collapse
        })
        return(
            <div className="col-sm-8 col-lg-9 mtb_20">
            <form method="post" action="#">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Hình Ảnh Sản Phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Phân Loại</th>
                        <th>Số Lượng</th>
                        <th>Đơn Vị Giá (VNĐ)</th>
                        <th>Thành Tiền</th>
                    </tr>
                    </thead>
                    <tbody>
                                            {/* <CartContext.Consumer>
                                                {
                                                     
                                                    ({cartItems}) =>{
                                                        let cartItem = cartItems[0]
                                                        cartItem.map(item =>
                                                            <tr>
                                                                <td ><img className="img-responsive" src={require('../public/images/product/70x84.jpg')} alt=""/></td>
                                                                <td style={textMiddle}>Áo Sơ Mi Trắng</td>
                                                                <td style={textMiddle}>L-Đen</td>
                                                                <td style={textMiddle}>1</td>
                                                                <td style={textMiddle}>150000</td>
                                                            </tr>
                                                            )
                                                    }
                                                    
                                                    
                                                }
                                            </CartContext.Consumer> */}
                                 <tr>
                                     <td ><img className="img-responsive" src={require('../public/images/product/70x84.jpg')} /></td>
                                     <td style={textMiddle}>Áo Sơ Mi Trắng</td>
                                     <td style={textMiddle}>L-Đen</td>
                                     <td style={textMiddle}>1</td>
                                     <td style={textMiddle}>150000</td>
                                 </tr>
                           
                    </tbody>
                </table>
            </form>
            <h3 className="mtb_10">Vui Lòng Thực Hiện Bước Tiếp Theo?</h3>
            <p>Nhập Mã Giảm Giá (Nếu Có).</p>
            <div className="panel-group mt_20" id="accordion">
                <div className="panel panel-default pull-left">
                    <div className="panel-heading" onClick={this.toggle}>
                        <h4 className="panel-title">Sử Dụng Mã Giảm Giá <i className="fa fa-caret-down"></i></h4>
                    </div>
                    <div id="demo1" className={vorcher}>
                        <div className="panel-body">
                            <label for="input-coupon" className="col-sm-4 control-label">Mã giảm giá của bạn </label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="input-coupon" placeholder="Nhập mã giảm giá tại đây" value="" name="coupon" />
                                <span className="input-group-btn">
                                    <input type="button" className="btn" data-loading-text="Loading..." id="button-coupon" value="Apply Coupon" />
                                </span> 
                            </div>
                        </div>
                    </div>
                </div>
               <div className="panel panel-default pull-left">
                    <div className="panel-heading" onClick={this.toggle}>
                        <h4 className="panel-title">Ước Tính Phí Vận Chuyển <i className="fa fa-caret-down"></i></h4>
                    </div>
                    <div id="collapseThree" className={address}>
                        <div className="panel-body">
                            <p>Hãy cho chúng tôi biết địa chị bạn nhận hàng.</p>
                            <form className="form-horizontal">
                                <div className="form-group required">
                                    <label for="input-country" className="col-sm-2 control-label">Tỉnh / Thành Phố</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" id="input-country" name="country_id">
                                            <option value=""> --- Please Select --- </option>
                                            <option value="244">Aaland Islands</option>
                                            <option value="1">Afghanistan</option>
                                         
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <label for="input-zone" className="col-sm-2 control-label">Huyện / Quận</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" id="input-zone" name="zone_id">
                                            <option value=""> --- Please Select --- </option>
                                            <option value="3513">Aberdeen</option>
                                            
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <label for="input-postcode" className="col-sm-2 control-label">Địa Chỉ Nhận</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="input-postcode" placeholder="Post Code" value="" name="postcode" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 col-sm-offset-8">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td className="text-right"><strong>Tạm Tính</strong></td>
                                <td className="text-right">$210.00</td>
                            </tr>
                            <tr>
                                <td className="text-right"><strong>Phí Vận Chuyển</strong></td>
                                <td className="text-right">$2.00</td>
                            </tr>
                            <tr>
                                <td className="text-right"><strong>Mã Giảm Giá</strong></td>
                                <td className="text-right">$42.00</td>
                            </tr>
                            <tr>
                                <td className="text-right"><strong>Tổng Cộng:</strong></td>
                                <td className="text-right">$254.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <form action="index.html">
                <input className="btn pull-left mt_30" type="submit" value="Continue Shopping" />
            </form> */}
            <Button className="btn pull-left mt_30" color="success">Tiếp Tục Mua Hàng</Button>
            {/* <form action="checkout.html">
                <input className="btn pull-right mt_30" type="submit" value="Checkout" />
            </form> */}
            <Button className="btn pull-right mt_30" color="success">Tiến Hành Thanh Toán</Button>
        </div>
    
        )
    }
}