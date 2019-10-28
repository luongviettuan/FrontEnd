import React, {Component} from 'react';
import { IconContext } from "react-icons";
import {
    FaFacebookSquare,
    FaLinkedin,
    FaYoutube,
    FaInstagram,
    FaHome,
    FaPhone,
    FaMailBulk,
    FaFacebookF,
    FaGofore    ,
    FaLinkedinIn,
    FaTwitter,
    FaRss,
    FaCcVisa,
    FaCcMastercard,
    FaCcAmex,
    FaCcDiscover,
    FaCcPaypal
} from 'react-icons/fa';
export default class Footer extends Component{
    render(){
        return(
            <div className="footer pt_60">
                <div className="container">
                    <div className="row">
                        <div className="footer-top mb_30">
                            <div className="col-xs-12 col-sm-7">
                                <div className="footer-logo">
                                    <a href="index.html"> <img src={require( "../public/images/footer-logo.png")} alt="OYEENok" /> </a>
                                </div>
                                <div className="footer-desc">Thời Trang Cũng Giống Như Cách Bạn Ăn Uống,<br></br> Bạn Không Nên Chọn Chỉ Một Thực Đơn Duy Nhất Mỗi Ngày.</div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 footer-block">
                            <h6 className="footer-title ptb_20">Dịch Vụ CSKH</h6>
                            <ul>
                                <li><a href="#">Trung Tâm Trợ Giúp</a></li>
                                <li><a href="#">Hướng Dẫn Mua Hàng</a></li>
                                <li><a href="#">Hướng Dẫn Vận Chuyển</a></li>
                                <li><a href="#">Chính Sách Bảo Hành</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-block">
                            <h6 className="footer-title ptb_20">Thông Tin Chúng Tôi</h6>
                            <ul>
                                <li><a href="#">Giới Thiệu Về QUEENOK</a></li>
                                <li><a href="#">Các Chi Nhánh</a></li>
                                <li><a href="#">Các Khuyến Mãi</a></li>
                                <li><a href="#">Các Điều Khoản</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-block">
                            <h6 className="footer-title ptb_20">Theo Dõi Chúng Tôi</h6>
                            <ul>
                                <IconContext.Provider value={{style:{marginBottom: '-1px', marginRight: '5px'}}}>
                                    <li><a href="#"><FaFacebookSquare />Facebook</a></li>
                                    <li><a href="#"><FaYoutube/>Youtube</a></li>
                                    <li><a href="#"><FaInstagram/>Instagram</a></li>
                                    <li><a href="#"><FaLinkedin/>Linkedln</a></li>
                                </IconContext.Provider>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-block">
                            <h6 className="footer-title ptb_20">Liên Hệ</h6>
                            <ul>
                                <IconContext.Provider value={{style:{marginBottom: '-1px', marginRight: '5px'}}}>
                                    <li><FaHome />Số Nhà 4C, Phố Nguyễn Văn Trỗi, Quận Hà Đông, TP Hà Nội</li>
                                    <li><FaPhone />033 919 6335</li>
                                    <li><FaMailBulk />luongviettuan311297@gmail.com</li>
                                </IconContext.Provider>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt_60 pt_20">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="social_icon">
                                    <ul>
                                        <li><a href="#"><i><FaFacebookF/></i></a></li>
                                        <li><a href="#"><i><FaGofore/></i></a></li>
                                        <li><a href="#"><i><FaLinkedinIn/></i></a></li>
                                        <li><a href="#"><i><FaTwitter /></i></a></li>
                                        <li><a href="#"><i><FaRss/></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="copyright-part text-center">@ 2019 Bản Quyền Thuộc Về QYEENOk</div>
                            </div>
                            <div className="col-sm-4">
                                <div className="payment-icon text-right">
                                    <ul>
                                        <IconContext.Provider value={{style:{padding : '2px', fontSize: '120%'}}}>
                                            <li><FaCcPaypal/></li>
                                            <li><FaCcVisa/></li>
                                            <li><FaCcDiscover/></li>
                                            <li><FaCcMastercard/></li>
                                            <li><FaCcAmex/></li>
                                        </IconContext.Provider>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}