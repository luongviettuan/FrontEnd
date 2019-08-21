import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Redirect extends Component {
    render() {
        return (
            <div className="col-sm-12">
                <div className="breadcrumb ptb_20">
                    <h1>{this.props.redirect}</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="active">{this.props.redirect}</li>
                    </ul>
                </div>
            </div>
        )
    }
}