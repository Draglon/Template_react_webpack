import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createdListsRequest as createdListsRequestAction } from '../../store/theMovieDB/myLists/actions';

import MyListsComponent from './component';

class MyListsContainer extends Component {
  componentDidMount() {
    const { createdListsRequest } = this.props;
    createdListsRequest();
  }

  render() {
    return <MyListsComponent />;
  }
}

const mapDispatchToProps = {
  createdListsRequest: createdListsRequestAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(MyListsContainer);
