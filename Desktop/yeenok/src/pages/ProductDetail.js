import React, {Component} from 'react';import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import Branch from '../common/Branch';
import Footer from '../common/Footer';
import ProductDetailContent from '../components/ProductDetail_Content';
import axios from 'axios';

export default class ProductDetail extends Component{
    constructor(){
        super();
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        let url = 'http://localhost:8080/product/' + this.props.match.params.id
        axios.get(url)
            .then( res =>{
                this.setState({
                    data : res.data.result[0]
                })
            })
    }
    render(){  
        return(
            <div class="wrapper">
                <Header />
                <div class="container">
                    <div class="row ">
                        <Redirect redirect="ProductDetail"/>
                        <MenuLeft />
                        <ProductDetailContent data= {this.state.data} /> 
                    </div>
                    <Branch />    
                </div>
                <Footer />
                </div>
        )
    }
}