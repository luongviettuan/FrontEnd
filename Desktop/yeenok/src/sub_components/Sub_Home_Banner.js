import React, {Component} from 'react';

export default class SubHomeBanner extends Component{
    render(){
        return(
            <div className="row">
                <div className="cms_banner mt_50">
                    <div className="col-sm-12 mt_10">
                        <div id="subbanner3" className="sub-hover">
                            <div className="sub-img">
                                <a href="#"><img src={require( "../public/images/sub6.jpg")} alt="Sub Banner3" className="img-responsive" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}