import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import DeleteItemModalComponent from './component';

class DeleteItemModalContainer extends Component {
  showModal = () => {
    const { title, params, onConfirm } = this.props;
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

DeleteItemModalContainer.propTypes = {
  title: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteItemModalContainer;
