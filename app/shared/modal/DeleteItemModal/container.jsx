import React, { Component } from 'react';
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

<<<<<<< HEAD
=======
DeleteItemModalContainer.defaultProps = {
  params: null,
};

DeleteItemModalContainer.propTypes = {
  title: PropTypes.string.isRequired,
  params: PropTypes.object,
  onConfirm: PropTypes.func.isRequired,
};

>>>>>>> typeProps part-3
export default DeleteItemModalContainer;
