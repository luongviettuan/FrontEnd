import React, {Component} from 'react';
export default class HomeBanner extends Component{
    render(){
        return (
                    <div className="row">
                        <div className="cms_banner mt_10">
                            <div className="col-xs-4 mt_10">
                                <div id="subbanner1" className="sub-hover">
                                    <div className="sub-img">
                                        <a href="#"><img src={require( '../public/images/sub1.jpg')} alt="Sub Banner1" className="img-responsive" /></a>
                                    </div>
                                    <div className="bannertext text-center">
                                        <button className="btn mb_10 cms_btn">View product</button>
                                        <h2>Hats & collapse</h2>
                                        <p className="mt_10">Wide veriety of sizes,colors</p>
                                    </div>
                                </div>
                                <div id="subbanner2" className="sub-hover mt_20">
                                    <div className="sub-img">
                                        <a href="#"><img src={require( '../public/images/sub2.jpg')} alt="Sub Banner2" className="img-responsive" /></a>
                                    </div>
                                    <div className="bannertext text-center">
                                        <button className="btn mb_10 cms_btn">View product</button>
                                        <h2>Buy Scarfs</h2>
                                        <p className="mt_10">Shop collection of designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 mt_10">
                                <div id="subbanner3" className="sub-hover">
                                    <div className="sub-img">
                                        <a href="#"><img src={require( '../public/images/sub3.jpg')} alt="Sub Banner3" className="img-responsive" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 mt_10">
                                <div id="subbanner4" className="sub-hover">
                                    <div className="sub-img">
                                        <a href="#"><img src={require( '../public/images/sub4.jpg')} alt="Sub Banner4" className="img-responsive" /></a>
                                    </div>
                                    <div className="bannertext text-center">
                                        <button className="btn mb_10 cms_btn">View product</button>
                                        <h2>Handbags</h2>
                                        <p className="mt_10">Bags for men & women only</p>
                                    </div>
                                </div>
                                <div id="subbanner5" className="sub-hover mt_20">
                                    <div className="sub-img">
                                        <a href="#"><img src={require( '../public/images/sub5.jpg')} alt="Sub Banner5" className="img-responsive" /></a>
                                    </div>
                                    <div className="bannertext text-center">
                                        <button className="btn mb_10 cms_btn">View product</button>
                                        <h2>Footware</h2>
                                        <p className="mt_10">Over 400 luxury designers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            )
        }
}