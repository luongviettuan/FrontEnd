import React, {Component} from 'react';
export default class HomeRes extends Component{
    render(){
        return(
            <div className="container">
                        <div className="row ptb_20">
                            <div className="col-sm-6">
                                <div className="news-head pull-left">
                                    <h2>Đăng Ký Nhận Tin Khuyến Mãi</h2>
                                    <div className="new-desc">Hãy Đăng Ký Để Nhận Được Tin Khuyến Mãi Sớm Nhất Của Chúng Tôi!</div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="news-form pull-right">
                                    <form className="form-inline" onSubmit="return validatemail();" method="post">
                                        <div className="form-group required">
                                            <input name="email" id="email" placeholder="Nhập Email Của Bạn" className="form-control input-lg setWidth" required="" type="email" />
                                            <input type="submit" className="btn btn-default btn-lg" value="Đăng Ký" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                
        )
    }
}