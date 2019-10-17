import React, {Component} from 'react'
import {withCart, Consumer} from '../context/Cart.Context'

class CartListItems extends Component{
    constructor(props){
        super()
        this.state = {
            listItems : []
        }
    }
    convertJson(listItems) {
        const arr = listItems.map(item => JSON.parse(item[1]))
        this.setState({listItems : [...arr]})
        
    }
    componentDidMount(){
        this.convertJson(this.props.cartItems);
    }
    render(){
        const {listItems} = this.state
        const textMiddle = {
            verticalAlign: 'middle'
        } 
        
        return(
            
                listItems.length > 0 && listItems.map(item =>
                    <tr>
                        <td >
                            <img
                                className="img-responsive"
                                src={require(`../public/images/product/${item.product_image_url}`)}
                                alt={item.product_name}
                                width="120"
                            />
                        </td>
                        <td style={textMiddle}>{item.product_name}</td>
                        <td style={textMiddle} className="text-center">{item.size}-{item.color}</td>
                        <td style={textMiddle} className="text-center">{item.unit}</td>
                        <td style={textMiddle} className="text-center">{item.price}</td>
                        <td style={textMiddle} className="text-center">{item.price*item.unit}</td>
                    </tr>
                )
            
        )
    }
}
export default withCart(CartListItems)