import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NotificationModal from '../util/Notification_Modal'
export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            province : [],
            district : [],
            user : {
                fullName : "",
                phoneNumber : "",
                provinceId : "",
                districtId : "",
                addressDetail : "",
                username : "",
                password : "",
                confirmPassword: ""
            },
            message_resgiter :  {},
            modal : false
        }
        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8080/location/province')
            .then(res=>{
                this.setState({
                    province : res.data.result
                })
            })
    }
    handleChange(event){
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
        this.setState({user : {
            ...this.state.user,
            [event.target.name] : event.target.value,
            }
        })
    }

    handleLogin(event){
        axios.post("http://localhost:8080/user/register", this.state.user).then(res =>{
            this.setState({
                message_resgiter : res.data
            })
        })
        event.preventDefault();
    }
    toggle() {
        this.setState({
          modal: true
        });
      }
    render(){
        return(
            <div className="col-sm-8 col-lg-9 mtb_20">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel-login panel">
                            <div className="panel-heading">
                                <div className="row mb_20">
                                    <div className="col-xs-6">
                                        <Link to="/login"><p>Đăng Nhập</p></Link>
                                    </div>
                                    <div className="col-xs-6">
                                        <Link to="/regitster"><p>Đăng Ký</p></Link>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form id="login-form" method="post" onSubmit={this.handleLogin}>
                                            <div className="form-group">
                                                <label>Họ Tên</label>
                                                <input type="text" name="fullName" tabIndex="1" className="form-control" placeholder="Họ Tên" value={this.state.fullName} onChange={this.handleChange}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Số Điện Thoại</label>
                                                <input type="text" name="phoneNumber" tabIndex="1" className="form-control" placeholder="Số Điện Thoại" value={this.state.phoneNumber} onChange={this.handleChange}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Tỉnh</label>
                                                <select className="form-control" name="provinceId" onClick={this.handleChange} ref="province_ref" value= {this.state.province_id}>
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
                                                <select className="form-control" name="districtId" onChange={this.handleChange} value={this.state.district_id}>
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
                                                <input type="text" name="addressDetail" tabIndex="1" className="form-control" placeholder="Xã, Thôn, Xóm, Làng, Đường, Số Nhà ..." onChange= {this.handleChange} value={this.state.addressDetail}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Tên Đăng Nhập</label>
                                                <input type="text" name="username" tabIndex="1" className="form-control" placeholder="Tên Đăng Nhập" onChange ={this.handleChange} value ={this.state.username}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Mật Khẩu</label>
                                                <input type="password" name="password" tabIndex="2" className="form-control" placeholder="Nhập Mật Khẩu" onChange={this.handleChange} value={this.state.password} autoComplete="password"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Nhập Lại Mật Khẩu</label>
                                                <input type="password" name="confirmPassword" tabIndex="2" className="form-control" placeholder="Xác Nhận Mật Khẩu" onChange={this.handleChange} value={this.state.confirmPassword} autoComplete="password"/>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Đăng Ký" onClick={this.toggle}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        {
                                            this.state.modal === true &&  <NotificationModal
                                                modal = {this.state.modal}
                                                message = {this.state.message_resgiter.message}
                                                code = {this.state.message_resgiter.code}
                                            />
                                        }
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