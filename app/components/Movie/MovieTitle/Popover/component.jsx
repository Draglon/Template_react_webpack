import React from 'react';
import { Popover, Icon } from 'antd';

import PopoverContent from './PopoverContent';

const PopoverComponent = ({ popoverVisible, closePopover, handleVisiblePopover }) => (
  <Popover
    title="Add movie to list"
    trigger="click"
    visible={popoverVisible}
    onVisibleChange={handleVisiblePopover}
    content={<PopoverContent closePopover={closePopover} />}
  >
    <Icon type="plus-circle" />
  </Popover>
);

export default PopoverComponent;
