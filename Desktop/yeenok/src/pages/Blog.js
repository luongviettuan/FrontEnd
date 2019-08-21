import React, { Component } from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import Footer from '../common/Footer';
import BlogContent from '../components/Blog_Content';
export default class Blog extends Component {
    render() {
        return (
            <div class="wrapper">
                <Header />
                <div class="container">
                    <div class="row ">
                        <Redirect redirect="Blog"/>
                        <MenuLeft />
                        <BlogContent />
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}