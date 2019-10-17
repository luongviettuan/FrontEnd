import React, { Component } from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import Brand from '../common/Brand';
import Footer from '../common/Footer';
import CategoryContent from '../components/Category_Content';
import axios from 'axios';
export default class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/product/search${this.props.location.search}`)
            .then(res => {
                console.log(res.data.result);
                this.setState({
                    data : res.data.result
                })
            })
    }
    render() {

        return (
            <div class="wrapper">
                <Header />
                <div class="container">
                    <div class="row ">
                        <Redirect redirect="Search"/>
                        <MenuLeft />
                        {
                            this.state.data.length > 0 && <CategoryContent data ={this.state.data}/>
                        }
                    </div>
                    <Brand />
                </div>
                <Footer />
            </div>
    
       )
    }
}