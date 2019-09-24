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
                                                <label>Tên Đăng Nhập</label>
                                                <input type="text" name="username" id="username1" tabIndex="1" className="form-control" placeholder="Username" value="" />
                                            </div>
                                            <div className="form-group">
                                                <label>Mật Khẩu</label>
                                                <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
                                            </div>
                                            <div className="form-inline text-center">
                                                <input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
                                                <label htmlFor="remember">Ghi Nhớ</label>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Đăng Nhập" />
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