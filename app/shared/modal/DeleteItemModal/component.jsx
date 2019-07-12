import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const DeleteItemModalComponent = ({ type, showModal }) => (
  <Icon key="delete" type={type} onClick={showModal} />
);

DeleteItemModalComponent.propTypes = {
  type: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default DeleteItemModalComponent;
