import React, { Component } from 'react';
import Header from '../common/Header';
import Redirect1 from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import Brand from '../common/Brand';
import Footer from '../common/Footer';
import CheckoutContent from '../components/Checkout_Content';
import { withCookies } from 'react-cookie';
import {Redirect} from 'react-router-dom';

class Checkout extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      user_id: cookies.get('user_id') || ''
    };
  }
  render() {
    const { user_id } = this.state;
    if (user_id) {
      return (
        <div className="wrapper">
          <Header />
          <div className="container">
            <div className="row ">
              <Redirect1 redirect="Checkout" />
              <MenuLeft />
              <CheckoutContent />
            </div>
            <Brand />
          </div>
          <Footer />
        </div>
      )
    }
    else{
      return (<Redirect to="/login" />)
    }
  }
}
export default withCookies(Checkout)