import React from 'react';
import { Popover, Icon } from 'antd';

import PopoverContent from './PopoverContent';

const PopoverComponent = ({ popoverVisible, closePopover, handleVisiblePopover, movieId }) => (
  <Popover
    title="Add movie to list"
    trigger="click"
    visible={popoverVisible}
    onVisibleChange={handleVisiblePopover}
    content={<PopoverContent closePopover={closePopover} movieId={movieId} />}
  >
    <Icon type="plus-circle" />
  </Popover>
);

export default PopoverComponent;
