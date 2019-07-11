import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const PopoverNavItemComponent = ({ list, onClick }) => (
  <li key={list.id}>
    <Button type="link" onClick={onClick}>
      {list.name}
    </Button>
  </li>
);

PopoverNavItemComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

export default PopoverNavItemComponent;
