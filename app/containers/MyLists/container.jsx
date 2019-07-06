import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { createdListsRequest, deleteListRequest } from '../../store/theMovieDB/myLists/actions';
import { getCreatedLists } from '../../store/theMovieDB/myLists/selectors';
import { createListRequest } from '../../store/theMovieDB/list/actions';

import MyListsComponent from './component';

class MyListsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { modalVisible: false };

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
      onCancel() {},
    });
  };

  getPage = page => {
    const { createdLists } = this.props;
    createdLists({ page });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <MyListsComponent
        {...this.props}
        page={this.getPage}
        showModal={this.showModal}
        showModalDelete={this.showModalDelete}
        hideModal={this.hideModal}
        modalVisible={modalVisible}
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
