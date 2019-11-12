import React, {Component} from 'react';
import { IconContext } from "react-icons";
import {Link} from 'react-router-dom';
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
                                    <Link to='/'> <img src={require( "../public/images/footer-logo.png")} alt="OYEENok" /> </Link>
                                </div>
                                <div className="footer-desc">Thời Trang Cũng Giống Như Cách Bạn Ăn Uống,<br></br> Bạn Không Nên Chọn Chỉ Một Thực Đơn Duy Nhất Mỗi Ngày.</div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 footer-block">
                            <h6 className="footer-title ptb_20">Dịch Vụ CSKH</h6>
                            <ul>
                                <li><Link to='/'>Trung Tâm Trợ Giúp</Link></li>
                                <li><Link to='/'>Hướng Dẫn Mua Hàng</Link></li>
                                <li><Link to='/'>Hướng Dẫn Vận Chuyển</Link></li>
                                <li><Link to='/'>Chính Sách Bảo Hành</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-block">
                            <h6 className="footer-title ptb_20">Thông Tin Chúng Tôi</h6>
                            <ul>
                                <li><Link to='/'>Giới Thiệu Về QUEENOK</Link></li>
                                <li><Link to='/'>Các Chi Nhánh</Link></li>
                                <li><Link to='/'>Các Khuyến Mãi</Link></li>
                                <li><Link to='/'>Các Điều Khoản</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-block">
                            <h6 className="footer-title ptb_20">Theo Dõi Chúng Tôi</h6>
                            <ul>
                                <IconContext.Provider value={{style:{marginBottom: '-1px', marginRight: '5px'}}}>
                                    <li><Link to='/'><FaFacebookSquare />Facebook</Link></li>
                                    <li><Link to='/'><FaYoutube/>Youtube</Link></li>
                                    <li><Link to='/'><FaInstagram/>Instagram</Link></li>
                                    <li><Link to='/'><FaLinkedin/>Linkedln</Link></li>
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
                                        <li><Link to='/'><i><FaFacebookF/></i></Link></li>
                                        <li><Link to='/'><i><FaGofore/></i></Link></li>
                                        <li><Link to='/'><i><FaLinkedinIn/></i></Link></li>
                                        <li><Link to='/'><i><FaTwitter /></i></Link></li>
                                        <li><Link to='/'><i><FaRss/></i></Link></li>
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