import React from 'react';
import { Button } from 'antd';

const PopoverNavItemComponent = ({ list, onClick }) => (
  <li key={list.id}>
    <Button type="link" onClick={onClick}>
      {list.name}
    </Button>
  </li>
);

export default PopoverNavItemComponent;
