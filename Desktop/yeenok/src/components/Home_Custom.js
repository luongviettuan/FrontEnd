import React, {Component} from 'react';
export default class HomeCustom extends Component{
    render(){
        return (
            <div id="brand_carouse" className="ptb_50 text-center">
                        <div className="type-01">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="brand owl-carousel ptb_20">
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand2.png")} alt="Dell" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand1.png")} alt="Disney" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand3.png")} alt="Harley" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand4.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand5.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand6.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand7.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand8.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                        <div className="item text-center">
                                            <a href="#"><img src={require( "../public/images/brand/brand9.png")} alt="Canon" className="img-responsive" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
    
        )
    }
}