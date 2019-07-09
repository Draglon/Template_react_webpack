import React from 'react';
import { Icon } from 'antd';

const DeleteItemModalComponent = ({ showModal }) => (
  <Icon key="delete" type="delete" onClick={showModal} />
);

export default DeleteItemModalComponent;
