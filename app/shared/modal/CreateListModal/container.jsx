import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createListRequest as createListRequestAction } from '../../../store/theMovieDB/myLists/actions';

import CreateListModalComponent from './component';

class CreateListModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <CreateListModalComponent
        {...this.props}
        modalVisible={modalVisible}
        showModal={this.showModal}
        hideModal={this.hideModal}
      />
    );
  }
}

const mapDispatchToProps = {
  createListRequest: createListRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateListModalContainer);
