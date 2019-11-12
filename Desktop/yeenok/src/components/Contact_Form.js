import React, {Component} from 'react';
export default class ContactForm extends Component{
    render(){
        return (
            <div className="col-sm-8 col-lg-9 mtb_20">    
                <div className="row">
                    <div className="col-md-4 col-xs-12 contact">
                        <div className="location mb_50">
                            <h5 className="capitalize mb_20"><strong>Thông Tin</strong></h5>
                            <div className="address">Trụ Sở Chính
                                <br/>Số Nhà 4C, Phố Nguyễn Văn Trỗi,
                                <br/>Quận Hà Đông, TP Hà Nội
                            </div>
                            <div className="call mt_10">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                033 919 6335
                            </div>
                            <div className="email mt_10">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                luongviettuan311297@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-xs-12 contact-form mb_50">                       
                        <div id="contact_form">
                            <form id="contact_body" method="post" action="contact_me.php">   
                                <textarea className="full-with-form  mt_30" name="message" placeholder="Thắc Mắc, Khiếu Nạn Về Sản Phẩm" data-required="true"></textarea>
                                <button className="btn mt_30" type="submit">Gửi</button>
                            </form>
                            <div id="contact_results"></div>
                        </div>
                    </div>
                </div>           
            </div>
        
        )
    }
}