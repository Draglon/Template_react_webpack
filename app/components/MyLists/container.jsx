import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createdListsRequest, createListRequest } from '../../store/theMovieDB/myLists/actions';
import { getCreatedListsById } from '../../store/theMovieDB/myLists/selectors';

import MyListsComponent from './component';

class MyListsContainer extends Component {
  componentDidMount() {
    const { createdLists } = this.props;
    createdLists({ page: 1 });
  }

  getPage = page => {
    const { createdLists } = this.props;
    createdLists({ page });
  };

  render() {
    return <MyListsComponent {...this.props} page={this.getPage} />;
  }
}

const mapStateToProps = state => ({
  myLists: getCreatedListsById(state),
});

const mapDispatchToProps = {
  createdLists: createdListsRequest,
  createList: createListRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyListsContainer);
