import React, {Component} from 'react';

import "../public/css/font-awesome.min.css"
import "../public/css/bootstrap.css"
import "../public/css/style.css"
import "../public/css/magnific-popup.css"
import "../public/css/owl.carousel.css"
import "../public/images/favicon.png"
import Header from '../common/Header';
import HomeHeadSlider from '../components/Home_HeadSlider';
import HomeBanner from '../components/Home_MainBanner';
import HomeItem from '../components/Home_Item';
import HomeRes from '../components/Home_Res';
import Footer from '../common/Footer';
import Brand from '../common/Brand';
export default class Home extends Component{
    render(){
        return (
            <div>
                <div className="wrapper">
                    <Header/>
                    <HomeHeadSlider />
                    <div className="container">
                        <HomeBanner />
                        <HomeItem />
                    </div>
                    
                    <Brand />
                    <HomeRes />
                </div>
                <Footer />
           
            </div>
        )
    }
}