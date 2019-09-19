import React, { Component } from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import Branch from '../common/Branch';
import Footer from '../common/Footer';
import CategoryContent from '../components/Category_Content';

export default class Category extends Component {
    render() {
        return (
            <div class="wrapper">
                <Header />
                <div class="container">
                    <div class="row ">
                        <Redirect redirect="category"/>
                        <MenuLeft />
                        <CategoryContent />    
                    </div>
                    <Branch />
                </div>
                <Footer />
            </div>
    
       )
    }
}