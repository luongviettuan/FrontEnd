import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import classNames from 'classnames';
import { Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import CartListItems from '../util/Cart_ListItem';
import {withCart} from '../context/Cart.Context';
import SubCartVoucher from '../sub_components/Sub_Cart_Voucher';
import SubCartAddress from '../sub_components/Sub_Cart_Address';
import SubCartPaymemt from '../sub_components/Sub_Cart_Payment';

class CartContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            modal : false,
        };
        this.toggle = this.toggle.bind(this);
        this.turnOffModal = this.turnOffModal.bind(this)
    }


    toggle() {
        this.setState(
            state => ({ collapse: !state.collapse })
        );
    }
    turnOffModal() {
        this.setState(
          state => ({modal : !state.modal})
        );
    }
    
    render(){
        
        var vorcher = classNames('panel-collapse collapse ', {
            'in' : this.state.collapse
        })
        var address = classNames('panel-collapse collapse ', {
            'in' : !this.state.collapse
        })
        return(
            <div className="col-sm-8 col-lg-9 mtb_20">
            
                <table className="table">
                    <thead>
                    <tr>
                        <th>Hình Ảnh Sản Phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Phân Loại</th>
                        <th>Số Lượng</th>
                        <th>Đơn Vị Giá (VNĐ)</th>
                        <th>Thành Tiền</th>
                    </tr>
                    </thead>
                    <tbody>
                        <CartListItems /> 
                    </tbody>
                </table>
            
            <h3 className="mtb_10">Vui Lòng Thực Hiện Bước Tiếp Theo?</h3>
            <p>Nhập Mã Giảm Giá (Nếu Có).</p>
            <div className="panel-group mt_20" id="accordion">
                <div className="panel panel-default pull-left">
                    <div className="panel-heading" onClick={this.toggle}>
                        <h4 className="panel-title">Sử Dụng Mã Giảm Giá <i className="fa fa-caret-down"></i></h4>
                    </div>
                    <SubCartVoucher vorcher={vorcher} />
                </div>
               <div className="panel panel-default pull-left">
                    <div className="panel-heading" onClick={this.toggle}>
                        <h4 className="panel-title">Ước Tính Phí Vận Chuyển <i className="fa fa-caret-down"></i></h4>
                    </div>
                    <SubCartAddress address={address}/>
                </div>
            </div>
            <SubCartPaymemt />
            <Link to="/">
                <Button
                    className="btn pull-left mt_30"
                    color="success"
                >
                    Tiếp Tục Mua Hàng
                </Button>
            </Link>
            <Button
                className="btn pull-right mt_30"
                color="success"
                onClick={this.turnOffModal}
            >
                Tiến Hành Thanh Toán
            </Button>
            <div>
            <Modal fade={false} isOpen={this.state.modal}>
                <ModalBody>
                    Thanh Toán Đơn Hàng Này
                </ModalBody>
                <ModalFooter>
                    <Link to="/checkout">
                        <Button>
                            Đặt Hàng        
                        </Button>
                    </Link>
                    <Button onClick={this.turnOffModal}>
                        Huỷ
                    </Button>
                </ModalFooter>
                </Modal>
            </div>
        </div>
    
        )
    }
}
export default withCart(CartContent)