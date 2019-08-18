import React, {Component} from 'react';
export default class Branch extends Component{
    render(){
        return (
            <div id="brand_carouse" className="ptb_30 text-center">
                <div className="type-01">
                    <div className="heading-part mb_20 ">
                        <h2 className="main_title">Brand Logo</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            
                                <div className="col-sm-2 item text-center">
                                    <a href="#"><img src={require('../public/images/brand/brand1.png')} alt="Disney" className="img-responsive" /></a>
                                </div>
                                <div className="col-sm-2 item text-center">
                                    <a href="#"><img src={require('../public/images/brand/brand2.png')} alt="Dell" className="img-responsive" /></a>
                                </div>
                                <div className="col-sm-2 item text-center">
                                    <a href="#"><img src={require('../public/images/brand/brand3.png')} alt="Harley" className="img-responsive" /></a>
                                </div>
                                <div className="col-sm-2 item text-center">
                                    <a href="#"><img src={require('../public/images/brand/brand4.png')} alt="Canon" className="img-responsive" /></a>
                                </div>
                                <div className="col-sm-2 item text-center">
                                    <a href="#"><img src={require('../public/images/brand/brand5.png')} alt="Canon" className="img-responsive" /></a>
                                </div>
                                <div className="col-sm-2 item text-center">
                                    <a href="#"><img src={require('../public/images/brand/brand6.png')} alt="Canon" className="img-responsive" /></a>
                                </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}