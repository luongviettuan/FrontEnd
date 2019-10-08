import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            province : [],
            district : [],
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/location/province')
            .then(res=>{
                this.setState({
                    province : res.data.result
                })
            })
    }
    handleChange(){
        if(this.refs.province_ref.value != ""){
            axios.post("http://localhost:8080/location/province", {province_id : this.refs.province_ref.value})
            .then(res=>{
                this.setState({
                    district : res.data.result
                })
            })
        }
    }
    render(){
        console.log(this.state.province);
        
        return(
            <div className="col-sm-8 col-lg-9 mtb_20">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel-login panel">
                            <div className="panel-heading">
                                <div className="row mb_20">
                                    <div className="col-xs-6">
                                        <Link to="/login">Đăng Nhập</Link>
                                    </div>
                                    <div className="col-xs-6">
                                        <Link to="/regitster">Đăng Ký</Link>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form id="login-form" action="#" method="post">
                                            <div className="form-group">
                                                <label>Họ Tên</label>
                                                <input type="text" name="fullName" tabIndex="1" className="form-control" placeholder="Họ Tên" />
                                            </div>
                                            <div className="form-group">
                                                <label>Số Điện Thoại</label>
                                                <input type="text" name="phoneNumber" tabIndex="1" className="form-control" placeholder="Số Điện Thoại" />
                                            </div>
                                            <div className="form-group">
                                                <label>Tỉnh</label>
                                                <select className="form-control" onChange={this.handleChange} ref="province_ref">
                                                    <option value="">--- Mời Khách Hàng Chọn Tỉnh ---</option>
                                                    {
                                                        this.state.province.length > 0 && this.state.province.map(item =>
                                                            <option value={item.province_id} key={item.province_id}>{item.province_name}</option>
                                                        )
                                                        
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Huyện</label>
                                                <select className="form-control">
                                                    {
                                                        this.state.district.length >  0 ? this.state.district.map(item =>
                                                            <option 
                                                                value={item.district_id}
                                                                key={item.district_id}>
                                                                    {item.district_name}
                                                            </option>) : <option>Vui Lòng Chọn Tên Tỉnh Trước</option>
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Địa Chỉ Chi Tiết</label>
                                                <input type="text" name="addressDetail" tabIndex="1" className="form-control" placeholder="Xã, Thôn, Xóm, Làng, Đường, Số Nhà ..." />
                                            </div>
                                            <div className="form-group">
                                                <label>Tên Đăng Nhập</label>
                                                <input type="text" name="username" tabIndex="1" className="form-control" placeholder="Tên Đăng Nhập" />
                                            </div>
                                            <div className="form-group">
                                                <label>Mật Khẩu</label>
                                                <input type="password" name="password" tabIndex="2" className="form-control" placeholder="Nhập Mật Khẩu" />
                                            </div>
                                            <div className="form-group">
                                                <label>Nhập Lại Mật Khẩu</label>
                                                <input type="password" name="confirmPassword" tabIndex="2" className="form-control" placeholder="Xác Nhận Mật Khẩu" />
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Đăng Ký" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                            
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