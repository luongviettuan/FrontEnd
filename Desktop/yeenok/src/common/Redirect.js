import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Redirect extends Component {
    constructor(){
        super();
        this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this)
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        const redirect = this.capitalizeFirstLetter(this.props.redirect)
        return (
            <div className="col-sm-12">
                <div className="breadcrumb ptb_20">
                    <h1>{redirect}</h1>
                    <ul>
                        <li><Link to="/"><span style={{color:'black'}}>Home</span></Link></li>
                        <li className="active">{redirect}</li>
                    </ul>
                </div>
            </div>
        )
    }
}