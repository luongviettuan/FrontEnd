import React, {Component} from 'react';
import { IconContext } from "react-icons";
import {FaRegTrashAlt} from 'react-icons/fa'
import {withCart} from '../context/Cart.Context';

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
    componentDidUpdate(prevProps, prevState){
        const {cartItems} = this.props
        if(cartItems !== prevProps.cartItems){
            this.convertJson(cartItems);
        }
    }
    componentDidMount(){
        this.convertJson(this.props.cartItems);
    }
    render(){
        const {listItems} = this.state
        const textMiddle = {
            verticalAlign: 'middle'
        }
        const {removeFromCart} = this.props;
        return(
            
                listItems.length > 0 && listItems.map(item =>
                    <tr key={item.product_id}>
                        <td >
                            <img
                                className="img-responsive"
                                src={require(`../public/images/product/${item.product_image_url}`)}
                                alt={item.product_name}
                                width="120"
                            />
                        </td>
                        <td style={textMiddle}>{item.product_name}</td>
                        <td style={textMiddle}>{item.size}-{item.color}</td>
                        <td style={textMiddle}>{item.unit}
                                <IconContext.Provider value={{ color: "red", style:{fontSize: '15px', marginLeft: '10px'} }}>
                                    <FaRegTrashAlt onClick={()=>removeFromCart(item.product_id)} />
                                </IconContext.Provider>
                        </td>
                        <td style={textMiddle}>{item.price}</td>
                        <td style={textMiddle}>{item.price*item.unit}</td>
                    </tr>
                )
            
        )
    }
}
export default withCart(CartListItems)