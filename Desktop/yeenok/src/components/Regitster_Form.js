import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class LoginForm extends Component{
    render(){
        return(
            <div className="col-sm-8 col-lg-9 mtb_20">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel-login panel">
                            <div className="panel-heading">
                                <div className="row mb_20">
                                    <div className="col-xs-6">
                                        <Link to="/login">Login</Link>
                                    </div>
                                    <div className="col-xs-6">
                                        <Link to="/regitster">Register</Link>
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
                                                <select className="form-control">
                                                    <option>Hà Nội</option>
                                                    <option>TP HCM</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Tỉnh</label>
                                                <select className="form-control">
                                                    <option>Hà Đông</option>
                                                    <option>Cầu Giấy</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Tên Đăng Nhập</label>
                                                <input type="text" name="username" tabIndex="1" className="form-control" placeholder="Username" />
                                            </div>
                                            <div className="form-group">
                                                <label>Mật Khẩu</label>
                                                <input type="password" name="password" tabIndex="2" className="form-control" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label>Nhập Lại Mật Khẩu</label>
                                                <input type="password" name="confirmPassword" tabIndex="2" className="form-control" placeholder="Password" />
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