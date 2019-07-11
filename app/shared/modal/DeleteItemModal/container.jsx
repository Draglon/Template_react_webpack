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
  title: '',
  params: {},
  onConfirm: () => {},
};

DeleteItemModalContainer.propTypes = {
  title: PropTypes.string,
  params: PropTypes.object,
  onConfirm: PropTypes.func,
};

>>>>>>> typeProps part-3
export default DeleteItemModalContainer;
