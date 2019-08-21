import React, {Component} from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import ContactForm from '../components/Contact_Form';
import Footer from '../common/Footer';

export default class Contact extends Component {
    render(){
        return(
            <div class="wrapper">
                <Header />
                <div class="container">
                    <div class="row ">
                        <Redirect redirect="Contact"/>
                        <MenuLeft />
                        <ContactForm />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}