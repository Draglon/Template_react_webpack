import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import {
  createdListsRequest,
  createListRequest,
  deleteListRequest,
} from '../../store/theMovieDB/myLists/actions';
import { getCreatedLists } from '../../store/theMovieDB/myLists/selectors';

import MyListsComponent from './component';

class MyListsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      name: '',
      description: '',
      errorNameValidate: false,
    };

    this.showModal = () => {
      this.setState({ modalVisible: true });
    };

    this.hideModal = () => {
      this.setState({ modalVisible: false });
    };
  }

  componentDidMount() {
    const { createdLists } = this.props;
    createdLists({ page: 1 });
  }

  showModalDelete = listId => {
    const { deleteList } = this.props;
    Modal.confirm({
      title: 'Do you want to delete list?',
      onOk() {
        deleteList({ listId });
      },
      // onCancel() {},
    });
  };

  onChangeField = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onAddList = () => {
    const { createList } = this.props;
    const { name, description } = this.state;
    if (name) {
      createList({ name, description });
      this.setState({ errorNameValidate: false });
      this.hideModal();
    } else {
      this.setState({ errorNameValidate: true });
    }
  };

  getPage = page => {
    const { createdLists } = this.props;
    createdLists({ page });
  };

  render() {
    const { modalVisible, errorNameValidate } = this.state;
    return (
      <MyListsComponent
        {...this.props}
        page={this.getPage}
        showModal={this.showModal}
        showModalDelete={this.showModalDelete}
        hideModal={this.hideModal}
        modalVisible={modalVisible}
        errorNameValidate={errorNameValidate}
        onChangeField={this.onChangeField}
        onAddList={this.onAddList}
      />
    );
  }
}

const mapStateToProps = state => ({
  myLists: getCreatedLists(state),
});

const mapDispatchToProps = {
  createdLists: createdListsRequest,
  createList: createListRequest,
  deleteList: deleteListRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyListsContainer);
