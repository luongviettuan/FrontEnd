import React, {Component} from 'react';
import {withCart} from '../context/Cart.Context';

class SubCartPayment extends Component{
    render(){
        const {sum_monney, ship_fee, discount, total} = this.props
        return(
            <div className="row">
                <div className="col-sm-4 col-sm-offset-8">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td className="text-right">Tạm Tính</td>
                                <td className="text-right">{sum_monney + ' VNĐ'}</td>
                            </tr>
                            <tr>
                                <td className="text-right">Phí Giao Hàng</td>
                                <td className="text-right">{ship_fee + ' VNĐ'}</td>
                            </tr>
                            <tr>
                                <td className="text-right">Tiền Giảm Giá</td>
                                <td className="text-right">{discount + ' VNĐ'}</td>
                            </tr>
                            <tr>
                                <td className="text-right">Tổng Tiền</td>
                                <td className="text-right">{total + ' VNĐ'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default withCart(SubCartPayment)