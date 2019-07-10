import React from 'react';
import { Icon } from 'antd';

const DeleteItemModalComponent = ({ type, showModal }) => (
  <Icon key="delete" type={type} onClick={showModal} />
);

export default DeleteItemModalComponent;
