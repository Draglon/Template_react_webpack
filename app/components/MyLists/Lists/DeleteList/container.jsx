import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';

import { deleteListRequest as deleteListRequestAction } from '../../../../store/theMovieDB/myLists/actions';

import ListsComponent from './component';

class ListsContainer extends Component {
  showModalDelete = () => {
    const { deleteListRequest, listId } = this.props;
    Modal.confirm({
      title: 'Do you want to delete list?',
      onOk() {
        deleteListRequest({ listId });
      },
    });
  };

  render() {
    return <ListsComponent {...this.props} showModalDelete={this.showModalDelete} />;
  }
}

const mapDispatchToProps = {
  deleteListRequest: deleteListRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(ListsContainer);
