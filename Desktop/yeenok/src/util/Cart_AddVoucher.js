import React, {Component} from 'react';
import {VoucherContext} from '../context/Voucher.Context'
export default class CartAddVoucher extends Component{
    render(){
        return(
            <VoucherContext.Consumer>
                {
                    ({discount, unit})=>(<td className="text-right">{{discount} + " " + {unit}}</td>)
                }
            </VoucherContext.Consumer>
        )
    }
}
