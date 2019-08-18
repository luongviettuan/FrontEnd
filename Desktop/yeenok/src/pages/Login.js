import React, {Component}  from 'react';

import '../public/css/font-awesome.min.css';
import '../public/css/bootstrap.css';
import '../public/css/style.css';
import '../public/css/magnific-popup.css';
import '../public/css/owl.carousel.css';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import LoginForm from '../components/Login_Form';
import Footer from '../common/Footer';




export default class Login extends Component{
    render(){
        return (
            <div class="wrapper">
                <Header />
                <div class="container">
                    <div class="row ">
                        <Redirect />
                        <MenuLeft />
                        <LoginForm />
                    </div>
                </div>
                <Footer />
            </div> 
        )
    }
}