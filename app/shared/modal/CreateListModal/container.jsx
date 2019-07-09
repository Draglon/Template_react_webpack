import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createListRequest as createListRequestAction } from '../../../store/theMovieDB/myLists/actions';

import CreateListModalComponent from './component';

class CreateListModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      values: {},
    };
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  onValidate = values => {
    this.setState({ values });
  };

  onCreateList = () => {
    const { createListRequest } = this.props;
    const { values } = this.state;
    if (values.name) {
      createListRequest(values);
      this.hideModal();
    }
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <CreateListModalComponent
        {...this.props}
        modalVisible={modalVisible}
        showModal={this.showModal}
        hideModal={this.hideModal}
        onValidate={this.onValidate}
        onCreateList={this.onCreateList}
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
