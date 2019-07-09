import React from 'react';
import { Modal } from 'antd';

const CreateListModalComponent = ({ }) => (
  <Modal
    visible={modalVisible}
    onCancel={hideModal}
    onOk={onAddList}
    okText="Create"
    title="Create list"
  >
    <CreateListModal onChangeField={onChangeField} errorNameValidate={errorNameValidate} />
  </Modal>
);

export default CreateListModalComponent;
