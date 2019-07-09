import React from 'react';
import { Modal, Icon, Button } from 'antd';

import CreateListForm from './CreateListForm';

const CreateListModalComponent = ({
  modalVisible,
  showModal,
  hideModal,
  onCreateList,
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
      onOk={onCreateList}
      okText="Create"
      title="Create list"
    >
      <CreateListForm onValidate={onValidate} />
    </Modal>
  </>
);

export default CreateListModalComponent;
