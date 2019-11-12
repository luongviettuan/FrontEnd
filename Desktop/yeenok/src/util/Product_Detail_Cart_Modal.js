import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
class ProductDetailCartModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal : this.props.modal
        }
    }
    
    componentDidUpdate(prevProps,prevState){
        const {modal} = this.props;
        if(modal !== prevProps.modal){
            this.setState({
                modal : modal
            })
        }
    }
    render() {
        const {listProductOfOrder, turnOffModal} = this.props
        return (
            <div>
                <Modal fade={false} isOpen={this.state.modal}>
                    <ModalHeader>
                        Chi Tiết Giỏ Hàng
                    </ModalHeader>
                    <ModalBody>
                        {
                            listProductOfOrder.length>0 &&
                            listProductOfOrder.map(product =>{
                                let str = `[${product.quatity}_${product.size}_${product.color}] ${product.product_name}`
                                return <p>{str}</p>
                            })
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={turnOffModal}>Đóng</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ProductDetailCartModal;