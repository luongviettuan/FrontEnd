import React, {Component} from 'react';
import axios from 'axios';

export const CartContext = React.createContext()

export class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartItems : Object.entries(localStorage),
            province_id :'',
            district_id :'',
            voucher_id : '',
            sum_monney : 0,
            ship_fee : 0,
            discount : 0,
            total : 0
        }
        this.caculator = this.caculator.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.addToVoucher = this.addToVoucher.bind(this);
        this.addToAddress = this.addToAddress.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.clearCart = this.clearCart.bind(this)
    }
    clearCart(){
        localStorage.clear()
        this.setState({
            cartItems: Object.entries(localStorage)
        })
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
                else if(res.data.code === 200 & unit === 'VNĐ'){
                    temp = await parseInt(discount)*1000
                }
                else{
                    temp = 0
                }
                this.setState({
                    discount : temp,
                    voucher_id :voucher_id
                })
            }).catch(err =>
                console.error(err)    
            )
        }
    }
    addToAddress(province_id, district_id){
        if(district_id){
            axios.post('http://localhost:8080/get_api_GHN',
                {
                    district_id : district_id
                }
            ).then(res =>{
                this.setState({
                    ship_fee : res.data.result,
                    province_id: province_id,
                    district_id :district_id
                })
            })
        }
    }
    removeFromCart(product_id){
        localStorage.removeItem(product_id);
        this.setState({
            cartItems: Object.entries(localStorage)
        })
        
    }
    componentDidUpdate(prevProps, prevState){
        const {sum_monney, ship_fee, discount, cartItems} = this.state
        if(sum_monney!==prevState.sum_monney
            || ship_fee !== prevState.ship_fee 
            || discount!==prevState.discount){
            this.setState({
                total : parseInt(sum_monney) + parseInt(ship_fee) - parseInt(discount)
            })
        }
        if(cartItems !== prevState.cartItems){
            this.caculator(cartItems)
        }
    }
    componentWillMount(){
        const {cartItems} = this.state
        this.caculator(cartItems)
    }
    componentDidMount(){
        const {sum_monney, ship_fee, discount} = this.state
        this.setState({
            total : parseInt(sum_monney) + parseInt(ship_fee) - parseInt(discount)
        })
    }
    render(){
        return <CartContext.Provider 
            value={{
                cartItems : this.state.cartItems,
                province_id : this.state.province_id,
                district_id : this.state.district_id,
                voucher_id : this.state.voucher_id,
                sum_monney : this.state.sum_monney,
                ship_fee : this.state.ship_fee,
                discount : this.state.discount,
                total : this.state.total,
                addToCart : this.addToCart,
                addToVoucher : this.addToVoucher,
                addToAddress : this.addToAddress,
                removeFromCart: this.removeFromCart,
                clearCart: this.clearCart
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