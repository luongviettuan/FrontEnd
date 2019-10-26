import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class CommonSearch extends Component {
    constructor(){
        super();
        this.state = {
            q : ''
        }
        this.handleChange = this.handleChange.bind(this)
        
    }
    handleChange(event){
        this.setState({
            q : event.target.value
        })
    }
    
    render(){
        return (
            <div className="col-xs-12 col-sm-4">
                <div className="main-search mt_40">
                    <input
                        type="text"
                        className="form-control input-lg"
                        placeholder="Tìm Kiếm Sản Phẩm ..."
                        value={this.state.q}
                        onChange={this.handleChange}
                    />
                    <span className="input-group-btn">
                        <Link to={`/search?q=${this.state.q}`}>
                            <button className="btn btn-default btn-lg"  onClick={this.handleSearch}>
                                <i className="fa fa-search"></i>
                            </button>
                        </Link>
                    </span>
                </div>
            </div>
        )
    }
}