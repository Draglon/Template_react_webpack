import React from 'react';
import { Modal, Icon, Button } from 'antd';

import CreateListForm from './CreateListForm';

const CreateListModalComponent = ({
  modalVisible,
  showModal,
  hideModal,
  onSubmit,
  onValidate,
  icon = '',
  text = '',
}) => (
  <>
    {icon && <Icon type={icon} onClick={showModal} />}
    {text && (
      <Button type="link" onClick={showModal}>
        {text}
      </Button>
    )}

    <Modal
      visible={modalVisible}
      onCancel={hideModal}
      onOk={onSubmit}
      okText="Create"
      title="Create list"
    >
      <CreateListForm onValidate={onValidate} />
    </Modal>
  </>
);

export default CreateListModalComponent;
