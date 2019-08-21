import React, { Component } from 'react';
export default class Redirect extends Component {
    render() {
        return (
            <div className="col-sm-12">
                <div className="breadcrumb ptb_20">
                    <h1>Login</h1>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Login</li>
                    </ul>
                </div>
            </div>
        )
    }
}