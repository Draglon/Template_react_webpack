import React, { Component } from 'react';
import { connect } from 'react-redux';

import MyListsTitleComponent from './component';

class MyListsTitleContainer extends Component {
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

  // onChangeField = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // onAddList = () => {
  //   const { createList } = this.props;
  //   const { name, description } = this.state;
  //   if (name) {
  //     createList({ name, description });
  //     this.setState({ errorNameValidate: false });
  //     this.hideModal();
  //   } else {
  //     this.setState({ errorNameValidate: true });
  //   }
  // };

  render() {
    return <MyListsTitleComponent {...this.props} showModal={this.showModal} />;
  }
}

export default connect(
  null,
  null,
)(MyListsTitleContainer);
