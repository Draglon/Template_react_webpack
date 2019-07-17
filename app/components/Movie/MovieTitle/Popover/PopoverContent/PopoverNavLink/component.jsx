import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const PopoverNavLinkComponent = ({ list, onClick }) => (
  <Button type="link" onClick={onClick}>
    {list.name}
  </Button>
);

PopoverNavLinkComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

export default PopoverNavLinkComponent;
