import React, { Component } from 'react';
import Header from '../common/Header';
import Redirect from '../common/Redirect';
import MenuLeft from '../common/Menu_Left';
import Brand from '../common/Brand';
import Footer from '../common/Footer';
import CategoryContent from '../components/Category_Content';
import axios from 'axios';
export default class Brand_Show extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/brand/${this.props.match.params.id}`)
            .then(res =>{
                this.setState({
                    data : res.data.result
                })
            })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            axios.get(`http://localhost:8080/brand/${this.props.match.params.id}`)
            .then(res =>{
                this.setState({
                    data : res.data.result
                })
            })
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="container">
                    <div className="row ">
                        <Redirect redirect="Brand"/>
                        <MenuLeft />
                        <CategoryContent data ={this.state.data}/>
                           
                    </div>
                    <Brand />
                </div>
                <Footer />
            </div>
    
       )
    }
}