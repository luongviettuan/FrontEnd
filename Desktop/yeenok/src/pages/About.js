import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import AboutContent from '../components/About_Content';

export default class About extends Component{
    render(){
        return(
            <div class="wrapper">
                <Header />
                <div class="container">
                    <div class="row ">
                        <Redirect  redirect="About"/>
                        <MenuLeft />
                        <AboutContent />
                    </div>
                </div>
                <Footer />
                </div> 
        )
    }
}