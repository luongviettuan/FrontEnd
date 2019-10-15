import React, {Component} from 'react';

export const CartContext = React.createContext()

export class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartItems : Object.entries(localStorage)
        }
        this.addToCart = this.addToCart.bind(this)
    }
    addToCart(product){
        localStorage.setItem(product.product_id, JSON.stringify(product))
        this.setState({
            cartItems : Object.entries(localStorage)
        })
    }
    render(){
        return <CartContext.Provider 
            value={{
                cartItems : this.state.cartItems,
                addToCart : this.addToCart
            }}>
                {
                    this.props.children
                }
            </CartContext.Provider>
    }
}
