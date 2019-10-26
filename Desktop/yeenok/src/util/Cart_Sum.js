import React, {Component} from 'react'
import {withCart} from '../context/Cart.Context'

class CartSum extends Component{
    constructor(props){
        super()
        this.state = {
            listItems : [],
            sum :''
        }
    }
    convertJson(listItems) {
        const arr = listItems.map(item => JSON.parse(item[1]))
       
        const temp = arr.reduce((
                (S, item) => S = S + item.unit * item.price
            ),0)
        
        this.setState({sum : temp})
        
    }
    
    componentDidMount(){
        this.convertJson(this.props.cartItems);
    }
    render(){
        const {sum} = this.state
        
        return(
            
            <td className="text-right">
               
                {sum +' VNĐ'}
            </td>
           
        )
    }
}
export default withCart(CartSum)