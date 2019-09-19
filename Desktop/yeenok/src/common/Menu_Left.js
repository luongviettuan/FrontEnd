import React, {Component} from 'react';
import MenuLeftItem from '../util/Menu_Left_Item';
export default class MenuLeft extends Component{
    constructor(){
        super();
        this.state = {
            data : [
                {
                    id : 1,
                    name : 'Áo Thun'
                },
                {
                    id : 2,
                    name : 'Áo Sơ Mi'
                },
                {
                    id : 3,
                    name : 'Đồ Bộ & Đồ Mặc Nhà'
                }
            ]
        }
    }
    render(){
        return (
            <div id="column-left" className="col-sm-4 col-lg-3 hidden-xs">
                <div id="category-menu" className="navbar collapse in mb_40" aria-expanded="true" role="button">
                    <div className="nav-responsive">
                        <div className="heading-part">
                            <h2 className="main_title">Top category</h2>
                        </div>
                        <ul className="nav  main-navigation collapse in">
                            {
                                this.state.data.map(item => <MenuLeftItem item={item}/>)
                            }
                            {/* <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#">Áo Khoác & Áo Vest</a></li>
                            <li><a href="#">Đồ Đôi</a></li>
                            <li><a href="#">Áo Nỉ & Áo Len</a></li>
                            <li><a href="#">Quần</a></li>
                            <li><a href="#">Ba Lô & Túi Xách & Ví</a></li>
                            <li><a href="#">Thắt Lưng</a></li>
                            <li><a href="#">Đồ Lót</a></li>
                            <li><a href="#">Đầm</a></li>
                            <li><a href="#">Chân Váy</a></li>
                            <li><a href="#">Bộ Đồ Thể Thao</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="left_banner left-sidebar-widget mt_30 mb_40">
                    <a href="#"><img src={require('../public/images/left1.jpg')} alt="Left Banner" className="img-responsive" /></a>
                </div>
            </div>
        
        )
    }
}