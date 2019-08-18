import React, { Component } from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import BlogDetailContent from '../components/BlogDetail_Content';
import Footer from '../common/Footer';

export default class BlogDetail extends Component {
    render() {
        return (
            <div class="wrapper">
                <Header />
                <div class="container">
                    <div class="row ">
                        <Redirect />
                        <MenuLeft />
                        <BlogDetailContent />    
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}