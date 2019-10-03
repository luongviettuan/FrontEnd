import React, { Component } from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import Branch from '../common/Branch';
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
        axios.get(`http://localhost:8080/category/${this.props.match.params.id}`)
            .then(res =>{
                this.setState({
                    data : res.data
                })
            })
    }
    render() {
        return (
            <div class="wrapper">
                <Header />
                <div class="container">
                    <div class="row ">
                        <Redirect redirect="category"/>
                        <MenuLeft />
                        <CategoryContent data ={this.state.data}/>
                           
                    </div>
                    <Branch />
                </div>
                <Footer />
            </div>
    
       )
    }
}