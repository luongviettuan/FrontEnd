import React, {Component}  from 'react';

import '../public/css/font-awesome.min.css';
import '../public/css/bootstrap.css';
import '../public/css/style.css';
import '../public/css/magnific-popup.css';
import '../public/css/owl.carousel.css';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import RegitsterForm from '../components/Regitster_Form';
import Footer from '../common/Footer';
import NotificationModal from '../util/Notification_Modal';




export default class Regitster extends Component{
    render(){
        return (
            <div className="wrapper">
                <Header />
                <div className="container">
                    <div className="row ">
                        <Redirect redirect="Login"/>
                        <MenuLeft />
                        <RegitsterForm />
                    </div>
                </div>
                <Footer />
                
            </div> 
        )
    }
}