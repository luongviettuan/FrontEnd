import React, {Component} from 'react';
import axios from 'axios'

export const VoucherContext = React.createContext()

export class VoucherProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            voucher_id : '',
            discount : '',
            unit: '',
            
        }
        this.addToVoucher = this.addToVoucher.bind(this)
    }
    addToVoucher(voucher_id){
        if(voucher_id){
            axios.post('http://localhost:8080/voucher/getVoucherByName',
                {
                    voucher_id : voucher_id
                }).then(res =>{
                    //const result = res.data.result
                    
                    this.setState({
                        discount : res.data.result.discount,
                        unit : res.data.result.unit,
                        voucher_id : res.data.result.voucher_id
                    })
                    
                })
        }
    }

    render(){
        console.log(this.state);
        
        return <VoucherContext.Provider 
            value={{
                voucher_id : this.state.voucher_id,
                discount : this.state.discount,
                unit: this.state.unit,
                addToVoucher : this.addToVoucher
            }}>
                {
                    this.props.children
                }
            </VoucherContext.Provider>
    }
    
}