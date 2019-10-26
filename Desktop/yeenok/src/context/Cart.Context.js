import React, {Component} from 'react';
import axios from 'axios';

export const CartContext = React.createContext()

export class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartItems : Object.entries(localStorage),
            sum_monney : 0,
            ship_fee : 0,
            discount : 0,
            total : 0
        }
        this.caculator = this.caculator.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.addToVoucher = this.addToVoucher.bind(this);
        this.addToAddress = this.addToAddress.bind(this)
    }
    caculator(cartItems){
        const arr = cartItems.map(item => JSON.parse(item[1]))
        const temp = arr.reduce((
                (S, item) => S = S + item.unit * item.price
            ),0)
        this.setState({sum_monney : temp})
    }
    addToCart(product){
        localStorage.setItem(product.product_id, JSON.stringify(product))
        this.setState({
            cartItems : Object.entries(localStorage)
        })
    }
    addToVoucher(voucher_id){
        if(voucher_id){
            axios.post('http://localhost:8080/voucher/getVoucherByName',
                {
                    voucher_id : voucher_id
                }
            ).then( async res =>{
                const {unit, discount} = res.data.result[0];    
                let temp;
                if(res.data.code === 200 && unit === '%'){
                    temp = await Math.ceil(parseInt(this.state.sum_monney) * parseInt(discount)/100);
                }
                else if(res.data.code === 200 & unit === 'VND'){
                    temp = await parseInt(discount)*1000
                }
                else{
                    temp = 0
                }
                this.setState({
                    discount : temp
                })
            }).catch(err =>
                console.error(err)    
            )
        }
    }
    addToAddress(district_id){
        if(district_id){
            axios.post('http://localhost:8080/get_api_GHN',
                {
                    district_id : district_id
                }
            ).then(res =>{
                this.setState({
                    ship_fee : res.data.result
                })
            })
        }
    }
    componentDidUpdate(prevProps, prevState){
        const {sum_monney, ship_fee, discount} = this.state
        if(sum_monney!==prevState.sum_monney
            || ship_fee !== prevState.ship_fee 
            || discount!==prevState.discount){
            this.setState({
                total : parseInt(sum_monney) + parseInt(ship_fee) - parseInt(discount)
            })
        }
    }
    componentDidMount(){
        this.caculator(this.state.cartItems)
    }
    render(){
        return <CartContext.Provider 
            value={{
                cartItems : this.state.cartItems,
                sum_monney : this.state.sum_monney,
                ship_fee : this.state.ship_fee,
                discount : this.state.discount,
                total : this.state.total,
                addToCart : this.addToCart,
                addToVoucher : this.addToVoucher,
                addToAddress : this.addToAddress
            }}>
                {
                    this.props.children
                }
            </CartContext.Provider>
    }
    
}
export function withCart (Component) {
    return class _ extends React.Component {
      render () {
        return (
          <CartContext.Consumer>
            {value => { return <Component {...this.props} {...value}/> }}
          </CartContext.Consumer>
        )
      }
    }   
  }