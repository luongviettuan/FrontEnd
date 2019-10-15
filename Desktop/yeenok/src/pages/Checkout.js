import React, { Component } from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import Brand from '../common/Brand';
import Footer from '../common/Footer';
import CheckoutContent from '../components/Checkout_Content';


export default class Checkout extends Component {
  render() {
    return (
      <div class="wrapper">
        <Header />
        <div class="container">
          <div class="row ">
            <Redirect redirect="Checkout"/>
            <MenuLeft />
            <CheckoutContent />
          </div>
          <Brand />  
        </div>
        <Footer />
      </div>
    )
  }
}