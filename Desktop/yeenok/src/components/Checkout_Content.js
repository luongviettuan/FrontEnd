import React, { Component } from 'react';
import {Table} from 'reactstrap';
import {withCookies } from 'react-cookie';
import {Button} from 'reactstrap';
import Axios from 'axios';
class CheckoutContent extends Component {
    constructor(props){
        super(props);
        const {cookies} = props
        this.state ={
            user_id : cookies.get('user_id') || '',
            listOrder : []
        }
    }
    componentDidMount(){
        const {user_id} = this.state
        Axios.post('http://localhost:8080/order//get_order_by_user',
            {
                user_id : user_id
            }
        ).then(res =>{
            const {listOrder} = this.state;
            this.setState({
                listOrder : [
                    ...listOrder,
                    ...res.data.result
                ]
            })
            
        })
    }
    render() {
        const {listOrder} = this.state
        const style = {
            padding: '1px 5px',
            background: 'green',
            fontSize: '10px'
        }
        return (
            <div class="col-sm-8 col-lg-9 mtb_20">
                <div class="panel-group">
                    <Table striped>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã Đơn Hàng</th>
                                <th>Chi Tiết</th>
                                <th>Tổng Tiền</th>
                                <th>Trạng Thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listOrder.length > 0 && listOrder.map((order, index) =>
                                    <tr key={index+1}>
                                        <th scope="row">{index+1}</th>
                                        <td>{order.order_id}</td>
                                        <td>
                                            <Button style={style}>Xem Chi Tiết</Button>
                                        </td>
                                        <td>{order.total + ' VNĐ'}</td>
                                        <td>{order.status}</td>
                                    </tr>
                                )
                            }
                            
                        </tbody>
                    </Table>
                </div>
            </div>

        )
    }
}
export default withCookies(CheckoutContent)