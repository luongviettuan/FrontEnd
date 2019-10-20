import React, {Component} from 'react'
import {withCart} from '../context/Cart.Context'

class CartSum extends Component{
    constructor(props){
        super()
        this.state = {
            listItems : [],
            total :''
        }
    }
    convertJson(listItems) {
        const arr = listItems.map(item => JSON.parse(item[1]))
       
        const temp = arr.reduce((
                (S, item) => S = S + item.unit * item.price
            ),0)
        
        this.setState({total : temp})
        
    }
    componentDidMount(){
        this.convertJson(this.props.cartItems);
    }
    render(){
        const {total} = this.state
        
        return(
           <td className="text-right">{total} VNĐ</td>
        )
    }
}
export default withCart(CartSum)