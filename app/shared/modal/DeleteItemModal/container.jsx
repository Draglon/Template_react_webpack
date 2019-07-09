import React, { Component } from 'react';
import { Modal } from 'antd';

import DeleteItemModalComponent from './component';

class DeleteItemModalContainer extends Component {
  showModal = () => {
    const { title, params, onConfirm } = this.props;
    console.log(params)
    Modal.confirm({
      title,
      onOk() {
        onConfirm(params);
      },
    });
  };

  render() {
    return <DeleteItemModalComponent {...this.props} showModal={this.showModal} />;
  }
}

export default DeleteItemModalContainer;
