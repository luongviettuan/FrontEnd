import React, {Component}  from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import CartContent from '../components/Cart_Content';
import Branch from '../common/Branch';
import Footer from '../common/Footer';

export default class Cart extends Component{
    render(){
        return (
            <div className="wrapper">
                <Header />
                <div className="container">
                    <div className="row ">
                        <Redirect />
                        <MenuLeft />
                        <CartContent /> 
                    </div>
                    <Branch />
                </div>
                <Footer />
            </div>
            
        )
    }
}