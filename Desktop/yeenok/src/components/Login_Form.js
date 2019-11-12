import React, {Component} from 'react';
import NotificationModal from '../util/Notification_Modal'
import {Link, Redirect} from "react-router-dom";

import axios from'axios';
import {withCookies } from 'react-cookie';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            username : "",
            password : "",
            modal : false,
            redirect: false
        }
        this.toggle = this.toggle.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    }
    handleInputChange(event){
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }
    onSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8080/user/login',
            {
                username : this.state.username,
                password : this.state.password,
            },
        ).then(res =>{
            if(res.data.token){
                const { cookies } = this.props;
                cookies.set('token', res.data.token);
                cookies.set('user_id', res.data.user_id)
                cookies.set('name', res.data.full_name);
                this.setState({
                    redirect: true
                  })
            }
            else{
                console.log('sai');
            }
        })
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render(){
        return(
            <div className="col-sm-8 col-lg-9 mtb_20">
                {this.renderRedirect()}
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
                                        <form id="login-form" onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <label>Tên Đăng Nhập</label>
                                                <input type="text" name="username" id="username1" tabIndex="1" className="form-control" placeholder="Tên Đăng Nhập" value={this.state.username} onChange={this.handleInputChange}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Mật Khẩu</label>
                                                <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Mật Khẩu" value={this.state.password} onChange={this.handleInputChange}/>
                                            </div>
                                            <div className="form-inline text-center">
                                                <input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
                                                <label htmlFor="remember">Ghi Nhớ</label>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Đăng Nhập" onClick={this.toggle}/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </form>
                                        {
                                            this.state.modal === true &&  <NotificationModal
                                                modal = {this.state.modal}
                                                message = 'Tên Tài Khoản Hoặc Mật Khẩu Không Chính Xác'
                                                code = '403'
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
export default withCookies(LoginForm);