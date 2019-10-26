import React, {Component} from 'react';
import MenuLeftItem from '../util/Menu_Left_Item';
import axios from 'axios';
export default class MenuLeft extends Component{
    constructor(){
        super();
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/category')
            .then(res=>{
                this.setState({
                    data : res.data.result
                })
            })
    }
    render(){
        return (
            <div id="column-left" className="col-sm-4 col-lg-3 hidden-xs">
                <div id="category-menu" className="navbar collapse in mb_40" style={{lineHeight : '25px'}}>
                    <div className="nav-responsive">
                        <div className="heading-part">
                            <h2 className="main_title">Loại Sản Phẩm</h2>
                        </div>
                        <ul className="nav  main-navigation collapse in">
                            {
                                this.state.data.map(item => <MenuLeftItem item={item} key={item.category_id}/>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="left_banner left-sidebar-widget mt_30 mb_40">
                    <img
                        src={require('../public/images/menuleft.jpg')}
                        alt="Left Banner"
                        className="img-responsive"
                    />
                </div>
            </div>
        
        )
    }
}