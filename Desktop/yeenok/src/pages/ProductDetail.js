import React, {Component} from 'react';import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import Brand from '../common/Brand';
import Footer from '../common/Footer';
import ProductDetailContent from '../components/ProductDetail_Content';
import axios from 'axios';
export default class ProductDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : {}
        }
    }
    componentDidMount(){
        let url = 'http://localhost:8080/product/' + this.props.match.params.id
        axios.get(url)
            .then( res =>{
                this.setState({
                    data : res.data.result
                })
            })
    }
    render(){
            return(
                <div className="wrapper">
                    <Header />
                    <div className="container">
                        <div className="row ">
                            <Redirect redirect="ProductDetail"/>
                            <MenuLeft />
                            <ProductDetailContent data={this.state.data}/>
                        </div>
                        <Brand />    
                    </div>
                    <Footer />
                    </div>
            )
    }
}