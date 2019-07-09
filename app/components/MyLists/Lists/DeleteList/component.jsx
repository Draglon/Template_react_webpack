import React from 'react';
import { Icon } from 'antd';

const ListsComponent = ({ showModalDelete }) => (
  <Icon key="delete" type="delete" onClick={showModalDelete} />
);

export default ListsComponent;
