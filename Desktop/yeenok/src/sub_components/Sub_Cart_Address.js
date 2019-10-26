import React, {Component} from 'react';
import {withCart} from '../context/Cart.Context';
import axios from 'axios';
class SubCartAddress extends Component{
    constructor(props){
        super(props);
        this.state = {
            province : [],
            province_id : '',
            district : [],
            district_id: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        let {name, value} = event.target;
        if(name === 'province_id'){
            this.setState({
                province_id : value
            })
        }
        if(name === 'district_id'){            
            this.setState({
                district_id : value
            })
        }
    }
    componentDidUpdate(prevProps, prevState){
        const {province_id, district_id} = this.state
        if(province_id !== prevState.province_id){
            axios.post("http://localhost:8080/location/province",
                {
                    province_id : province_id
                }
            ).then(res=>{
                this.setState({
                    district : res.data.result
                })
            })
        }
        if(district_id !== prevState.district_id){
            this.props.addToAddress(district_id)
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/location/province')
            .then(res=>{
                this.setState({
                    province : res.data.result
                })
            })
    }
    render(){
        const {address} = this.props;
        const {province, province_id, district, district_id} = this.state
        return(
            <div id="collapseThree" className={address}>
                        <div className="panel-body">
                            <p>Hãy cho chúng tôi biết địa chị bạn nhận hàng.</p>
                            <form className="form-horizontal">
                                <div className="form-group required">
                                    <label className="col-sm-2 control-label">Tỉnh / Thành Phố</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" name="province_id" onChange={this.handleChange} value={province_id}>
                                            <option value="">--- Mời Khách Hàng Chọn Tỉnh ---</option>
                                            {
                                                province && province.map(item =><option key={item.province_id} value={item.province_id}>{item.province_name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <label className="col-sm-2 control-label">Huyện / Quận</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" name="district_id" value={district_id} onChange={this.handleChange}>
                                            {
                                                district.length>0 ?
                                                district.map(item =>
                                                    <option
                                                        key={item.district_id}
                                                        value={item.district_id}>
                                                            {
                                                                item.district_name
                                                            }
                                                    </option>
                                                ) :
                                                <option value=''>Vui Lòng Chọn Tỉnh Trước</option>
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <label className="col-sm-2 control-label">Địa Chỉ Nhận</label>
                                    <div className="col-sm-10">
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="Địa Chỉ Chi Tiết"
                                            name="address_detail"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
        )
    }
}

export default withCart(SubCartAddress);