import React, { Component } from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import Branch from '../common/Branch';
import Footer from '../common/Footer';
import CatagoryContent from '../components/Catagory_Content';

export default class Catagory extends Component {
    render() {
        return (
            <div class="wrapper">
                <Header />
                <div class="container">
                    <div class="row ">
                        <Redirect />
                        <MenuLeft />
                        <CatagoryContent />    
                    </div>
                    <Branch />
                </div>
                <Footer />
            </div>
    
       )
    }
}