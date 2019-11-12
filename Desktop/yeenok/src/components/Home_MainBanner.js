import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
export default class HomeBanner extends Component{
    constructor(props){
        super();
        this.state = {
            data : []
        }
    }
    render(){
        return (
                    <div className="row">
                        <div className="cms_banner mt_10">
                            <div className="col-xs-4 mt_10">
                                <div id="subbanner1" className="sub-hover">
                                    <div className="sub-img">
                                        <Link to='/category/15'><img src={require( '../public/images/sub1.jpg')} alt="Sub Banner1" className="img-responsive" /></Link>
                                    </div>
                                    <div className="bannertext text-center">
                                        <Link to='/category/15'>
                                            <button className="btn mb_10 cms_btn">Xem Chi Tiết</button>
                                        </Link>
                                        <h2>Mũ & Nón</h2>
                                        <p className="mt_10">Đa Dạng Kích Thước & Màu Sắc</p>
                                    </div>
                                </div>
                                <div id="subbanner2" className="sub-hover mt_20">
                                    <div className="sub-img">
                                        <Link to="/category/9"><img src={require( '../public/images/sub2.jpg')} alt="Sub Banner2" className="img-responsive" /></Link>
                                    </div>
                                    <div className="bannertext text-center">
                                        <Link to="/category/9">    
                                            <button className="btn mb_10 cms_btn">Xem Chi Tiết</button>
                                        </Link>
                                        <h2>Thắt Lưng</h2>
                                        <p className="mt_10">Thời Trang Khẳng Định Đẳng Cấp</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 mt_10">
                                <div id="subbanner3" className="sub-hover">
                                    <div className="sub-img">
                                        <Link to='/'><img src={require( '../public/images/sub3.jpg')} alt="Sub Banner3" className="img-responsive" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 mt_10">
                                <div id="subbanner4" className="sub-hover">
                                    <div className="sub-img">
                                        <Link to="/category/8"><img src={require( '../public/images/sub4.jpg')} alt="Sub Banner4" className="img-responsive" /></Link>
                                    </div>
                                    <div className="bannertext text-center">
                                        <Link to="/category/8">
                                            <button className="btn mb_10 cms_btn">Xem Chi Tiết</button>
                                        </Link>
                                        <h2>Cặp & Túi Xách & Ví</h2>
                                        <p className="mt_10">Hàng Hiệu & Phong Cách Thời Trang</p>
                                    </div>
                                </div>
                                <div id="subbanner5" className="sub-hover mt_20">
                                    <div className="sub-img">
                                        <Link to="/category/16"><img src={require( '../public/images/sub5.jpg')} alt="Sub Banner5" className="img-responsive" /></Link>
                                    </div>
                                    <div className="bannertext text-center">
                                        <Link to="/category/16">
                                            <button className="btn mb_10 cms_btn">Xem Chi Tiết</button>
                                        </Link>
                                        <h2>Kính Thời Trang</h2>
                                        <p className="mt_10">Tạo Nên Sự Khác Biệt Của Bạn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            )
        }
}