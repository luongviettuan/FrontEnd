import React, {Component}  from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import CartContent from '../components/Cart_Content';
import Brand from '../common/Brand';
import Footer from '../common/Footer';
// import {VoucherProvider} from '../context/Voucher.Context'
export default class Cart extends Component{
    render(){
        return (
            <div className="wrapper">
                <Header />
                <div className="container">
                    <div className="row ">
                        <Redirect redirect="Cart"/>
                        <MenuLeft />
                        <CartContent />
                    </div>
                    <Brand />
                </div>
                <Footer />
            </div>
            
        )
    }
}