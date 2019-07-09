import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopoverComponent from './component';

class PopoverContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      popoverVisible: false,
    };

    this.handleVisiblePopover = visible => {
      this.setState({ popoverVisible: visible });
    };

    this.showModal = () => {
      this.setState({ modalVisible: true });
    };

    this.hideModal = () => {
      this.setState({ modalVisible: false });
    };
  }

  render() {
    return <PopoverComponent {...this.props} />;
  }
}

export default connect(
  null,
  null,
)(PopoverContainer);
