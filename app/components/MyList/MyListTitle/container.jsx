import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteListRequest as deleteListRequestAction } from '../../../store/theMovieDB/myLists/actions';

import MyListsTitleComponent from './component';

class MyListsTitleContainer extends Component {
  redirectToLists = () => {
    const { history } = this.props;
    return history.push('/myLists');
  };

  onConfirm = () => {
    const { deleteListRequest, myList } = this.props;
    deleteListRequest({ listId: myList.id });
    this.redirectToLists();
  };

  modalParams = () => ({
    title: 'Do you want to delete list?',
    onConfirm: this.onConfirm,
  });

  render() {
    return <MyListsTitleComponent {...this.props} modalParams={this.modalParams()} />;
  }
}

MyListsTitleContainer.propTypes = {
  deleteListRequest: PropTypes.func.isRequired,
  myList: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  deleteListRequest: deleteListRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(MyListsTitleContainer));
