import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
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
                                        <Link to="/productdetail">
                                            <button className="btn mb_10 cms_btn">View product</button>
                                        </Link>
                                        <h2>Mũ & Nón</h2>
                                        <p className="mt_10">Đa Dạng Kích Thước & Màu Sắc</p>
                                    </div>
                                </div>
                                <div id="subbanner2" className="sub-hover mt_20">
                                    <div className="sub-img">
                                        <a href="#"><img src={require( '../public/images/sub2.jpg')} alt="Sub Banner2" className="img-responsive" /></a>
                                    </div>
                                    <div className="bannertext text-center">
                                        <Link to="/productdetail">    
                                            <button className="btn mb_10 cms_btn">View product</button>
                                        </Link>
                                        <h2>Khăn Quàng Cổ</h2>
                                        <p className="mt_10">Thời Trang Khẳng Định Đẳng Cấp</p>
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
                                        <Link to="/productdetail">
                                            <button className="btn mb_10 cms_btn">View product</button>
                                        </Link>
                                        <h2>Cặp & Túi Xách</h2>
                                        <p className="mt_10">Hàng Hiệu & Phong Cách Thời Trang</p>
                                    </div>
                                </div>
                                <div id="subbanner5" className="sub-hover mt_20">
                                    <div className="sub-img">
                                        <a href="#"><img src={require( '../public/images/sub5.jpg')} alt="Sub Banner5" className="img-responsive" /></a>
                                    </div>
                                    <div className="bannertext text-center">
                                        <Link to="/productdetail">
                                            <button className="btn mb_10 cms_btn">View product</button>
                                        </Link>
                                        <h2>Giày & Dép</h2>
                                        <p className="mt_10">Tạo Nên Sự Khác Biệt Của Bạn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            )
        }
}