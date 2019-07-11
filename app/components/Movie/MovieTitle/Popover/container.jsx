import React, { Component } from 'react';

import PopoverComponent from './component';

class PopoverContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverVisible: false,
    };
  }

  closePopover = () => {
    this.handleVisiblePopover(false);
  };

  handleVisiblePopover = visible => {
    this.setState({ popoverVisible: visible });
  };

  render() {
    const { popoverVisible } = this.state;
    return (
      <PopoverComponent
        {...this.props}
        popoverVisible={popoverVisible}
        handleVisiblePopover={this.handleVisiblePopover}
        closePopover={this.closePopover}
      />
    );
  }
}

export default PopoverContainer;
