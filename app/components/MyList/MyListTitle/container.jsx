import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { deleteListRequest as deleteListRequestAction } from '../../../store/theMovieDB/myLists/actions';

import MyListComponent from './component';

class MyListContainer extends Component {
  redirectToLists = () => {
    const { history } = this.props;
    return history.push('/myLists');
  };

  onConfirm = () => {
    const { deleteListRequest, myList } = this.props;
    deleteListRequest({ listId: myList.id });
    this.redirectToLists();
  };

  render() {
    return (
      <MyListComponent
        {...this.props}
        modalParams={{
          title: 'Do you want to delete list?',
          onConfirm: this.onConfirm,
        }}
      />
    );
  }
}

const mapDispatchToProps = {
  deleteListRequest: deleteListRequestAction,
};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withRouter,
)(MyListContainer);
