import React, {Component} from 'react';
export default class HomeRes extends Component{
    render(){
        return(
            <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="news-head pull-left">
                                    <h2>SIGN UP FOR NEWSLETTER</h2>
                                    <div className="new-desc">Be the First to know about our Fresh Arrivals and much more!</div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="news-form pull-right">
                                    <form className="form-inline" onSubmit="return validatemail();" method="post">
                                        <div className="form-group required">
                                            <input name="email" id="email" placeholder="Enter Your Email" className="form-control input-lg setWidth" required="" type="email" />
                                            <input type="submit" className="btn btn-default btn-lg" value="Subscribe" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                
        )
    }
}