import React, {Component} from 'react';
import {withCart} from '../context/Cart.Context'
class SubCartVoucher extends Component{
    constructor(props){
        super(props);
        this.state= {
            voucher_id : ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        const {value} = event.target
        this.setState({
            voucher_id : value
        })
    }
    render(){
        const {vorcher, addToVoucher} = this.props
        const {voucher_id} = this.state
        return(
            <div id="demo1" className={vorcher}>
                        <div className="panel-body">
                            <label className="col-sm-4 control-label">Mã giảm giá của bạn </label>
                            <div className="input-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập mã giảm giá tại đây"
                                    name="voucher_id"
                                    value= {voucher_id}
                                    onChange = {this.handleChange}
                                />
                                <span className="input-group-btn">
                                    <input type="button" 
                                        className="btn"
                                        value="Áp Dụng"
                                        onClick={()=>addToVoucher(voucher_id)}
                                    />
                                </span>                                    
                            </div>
                        </div>
                    </div>
        )
    }
}
export default withCart(SubCartVoucher);