import React from 'react';
import { Popover, Icon } from 'antd';

const PopoverComponent = () => (
  <Popover
    title="Add movie to list"
    trigger="click"
    // visible={popoverVisible}
    // onVisibleChange={this.handleVisiblePopover}
    // content={
    //   <PopoverContent
    //     openModal={this.showModal}
    //     closePopover={() => this.handleVisiblePopover(false)}
    //   />
    // }
  >
    <Icon type="plus-circle" />
  </Popover>

  /* <Modal
    // visible={modalVisible}
    onCancel={this.hideModal}
    okText="Create"
    title="Create list"
  >
    <CreateListModal />
  </Modal> */
);

export default PopoverComponent;
