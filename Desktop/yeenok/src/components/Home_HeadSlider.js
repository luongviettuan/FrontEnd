import React, { Component} from 'react';
import {Link} from 'react-router-dom'
;export default class HomeHeadSlider extends Component{
    render(){
        return(
                <div className="container banner mt_20">
                        <div className="item">
                            <Link to='/'>
                                <img src={require( '../public/images/main_banner1.jpg')} alt="Main Banner" className="img-responsive" />
                            </Link>
                        </div>
                </div>
        )
    }
}