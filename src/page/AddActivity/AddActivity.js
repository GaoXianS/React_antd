import React, { Component } from 'react';
import { Modal } from 'antd';

class AddActivity extends Component {
  state = { visible: false };

  showModal = (e) => {
    this.setState({
      visible: true,
    });
    console.log(e)
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() { 
    return ( 
      <div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
 
export default AddActivity;