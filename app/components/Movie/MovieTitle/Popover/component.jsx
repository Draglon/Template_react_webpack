import React from 'react';
import PropTypes from 'prop-types';
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

PopoverComponent.propTypes = {
  handleVisiblePopover: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  popoverVisible: PropTypes.bool.isRequired,
};

export default PopoverComponent;
