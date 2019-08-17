import React, { Component} from 'react';
export default class HomeHeadSlider extends Component{
    render(){
        return(
                <div className="container banner mt_20">
                    {/* <div className="main-banner owl-carousel"> */}
                        <div className="item">
                            <a href="#"><img src={require( '../public/images/main_banner1.jpg')} alt="Main Banner" className="img-responsive" /></a>
                        </div>
                        {/* <div className="item">
                            <a href="#"><img src={require( '../public/images/main_banner2.jpg')} alt="Main Banner" className="img-responsive" /></a>
                        </div> */}
                    {/* </div> */}
                </div>
        )
    }
}