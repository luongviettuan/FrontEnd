import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import classNames from 'classnames';
import { Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import CartListItems from '../util/Cart_ListItem';
import axios from 'axios'
import CartSum from '../util/Cart_Sum';


export default class CartContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            modal : false,
            province : [],
            district : [],
            province_pass : '',
            district_pass: '',
            voucher_pass : '',
            address_detail: '',
            shipFee : ''
        };
        this.toggle = this.toggle.bind(this);
        this.turnOffModal = this.turnOffModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAddVoucherAndAddress = this.handleAddVoucherAndAddress.bind(this)
        this.handleComfirmVoucher = this.handleComfirmVoucher.bind(this)

    }
    
    toggle() {
        this.setState(
            state => ({ collapse: !state.collapse })
        );
    }
    turnOffModal() {
        this.setState(
          state => ({modal : !state.modal})
        );
    }
    handleChange(){
        if(this.refs.province_ref.value !== ""){
            axios.post("http://localhost:8080/location/province",
                        {province_id : this.refs.province_ref.value}
                    )
            .then(res=>{
                this.setState({
                    district : res.data.result
                })
            })
        }
        if(this.refs.district_ref.value !== ""){
            axios.post(
                'http://localhost:8080/get_api_GHN',
                {district_id : this.refs.district_ref.value}
                ).then(res =>{
                    this.setState({
                        shipFee : res.data.result
                    })
                })
        }
        
    }
    handleAddVoucherAndAddress(event){
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }
    handleComfirmVoucher(){
        console.log(this.state.voucher_pass);
        console.log(this.state.address_detail)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/location/province')
            .then(res=>{
                this.setState({
                    province : res.data.result
                })
            }
        ) 
    }
    render(){
        const {shipFee} = this.state
        var vorcher = classNames('panel-collapse collapse ', {
            'in' : this.state.collapse
        })
        var address = classNames('panel-collapse collapse ', {
            'in' : !this.state.collapse
        })
        return(
            <div className="col-sm-8 col-lg-9 mtb_20">
            
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
                            <CartListItems />   
                    </tbody>
                </table>
            
            <h3 className="mtb_10">Vui Lòng Thực Hiện Bước Tiếp Theo?</h3>
            <p>Nhập Mã Giảm Giá (Nếu Có).</p>
            <div className="panel-group mt_20" id="accordion">
                <div className="panel panel-default pull-left">
                    <div className="panel-heading" onClick={this.toggle}>
                        <h4 className="panel-title">Sử Dụng Mã Giảm Giá <i className="fa fa-caret-down"></i></h4>
                    </div>
                    <div id="demo1" className={vorcher}>
                        <div className="panel-body">
                            <label className="col-sm-4 control-label">Mã giảm giá của bạn </label>
                            <div className="input-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập mã giảm giá tại đây"
                                    name="voucher_pass"
                                    value={this.state.voucher_pass}
                                    onChange={this.handleAddVoucherAndAddress}
                                />
                                <span className="input-group-btn" onClick={this.handleComfirmVoucher}>
                                    <input type="button" className="btn" data-loading-text="Loading..." id="button-coupon" value="Áp Dụng" />
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
                                    <label className="col-sm-2 control-label">Tỉnh / Thành Phố</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" name="province_id" onClick={this.handleChange} ref="province_ref" value= {this.state.province_id}>
                                            <option value="">--- Mời Khách Hàng Chọn Tỉnh ---</option>
                                            {
                                                this.state.province.length > 0 && this.state.province.map(item =>
                                                    <option value={item.province_id} key={item.province_id}>{item.province_name}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <label className="col-sm-2 control-label">Huyện / Quận</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" name="district_id" ref="district_ref" onChange={this.handleChange} value={this.state.district_id}>
                                            {
                                                this.state.district.length >  0 ? this.state.district.map(item =>
                                                    <option 
                                                        value={item.district_id}
                                                        key={item.district_id}>
                                                        {item.district_name}
                                                    </option>) : <option value="">Vui Lòng Chọn Tên Tỉnh Trước</option>
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <label className="col-sm-2 control-label">Địa Chỉ Nhận</label>
                                    <div className="col-sm-10">
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="Địa Chỉ Chi Tiết"
                                            name="address_detail"
                                            value={this.state.address_detail}
                                            onChange={this.handleAddVoucherAndAddress}
                                        />
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
                                <CartSum />
                            </tr>
                            <tr>
                                <td className="text-right"><strong>Phí Vận Chuyển</strong></td>
                                <td className="text-right">
                                    {
                                        shipFee ? shipFee + ' VNĐ' : 'Đang Tính ...'
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right"><strong>Mã Giảm Giá</strong></td>
                                <td className="text-right"></td>
                            </tr>
                            <tr>
                                <td className="text-right"><strong>Tổng Cộng:</strong></td>
                                <td className="text-right">$254.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to="/">
                <Button
                    className="btn pull-left mt_30"
                    color="success"
                >
                    Tiếp Tục Mua Hàng
                </Button>
            </Link>
            <Button
                className="btn pull-right mt_30"
                color="success"
                onClick={this.turnOffModal}
            >
                Tiến Hành Thanh Toán
            </Button>
            <div>
            <Modal fade={false} isOpen={this.state.modal}>
                <ModalBody>
                    Thanh Toán Đơn Hàng Này
                </ModalBody>
                <ModalFooter>
                    <Link to="/checkout">
                        <Button>
                            Đặt Hàng        
                        </Button>
                    </Link>
                    <Button
                        onClick={this.turnOffModal}
                    >
                        Huỷ
                    </Button>
                </ModalFooter>
                </Modal>
            </div>
        </div>
    
        )
    }
}