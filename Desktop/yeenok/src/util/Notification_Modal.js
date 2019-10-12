import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
class ModalExample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal : this.props.modal
    }
  this.turnOffModal = this.turnOffModal.bind(this)
  }
  turnOffModal() {
    this.setState({
      modal: false
    });
  }

  render() {
    return (
      <div>
        <Modal fade={false} isOpen={this.state.modal}>
          
          <ModalBody>
            {
                this.props.message !== "" && this.props.message
            }
          </ModalBody>
          <ModalFooter>
            {
              this.props.code === 200 
              ? <Link to="/login"><Button>Đăng Nhập</Button></Link>
              : <Button onClick={this.turnOffModal}>Thử Lại</Button>
            }
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;