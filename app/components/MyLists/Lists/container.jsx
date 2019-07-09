import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteListRequest as deleteListRequestAction } from '../../../store/theMovieDB/myLists/actions';

import ListsComponent from './component';

class ListsContainer extends Component {
  render() {
    const { deleteListRequest } = this.props;
    return <ListsComponent {...this.props} onConfirm={deleteListRequest} />;
  }
}

const mapDispatchToProps = {
  deleteListRequest: deleteListRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(ListsContainer);
