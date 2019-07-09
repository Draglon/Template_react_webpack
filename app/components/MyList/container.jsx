import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { createdListsRequest, createListRequest } from '../../store/theMovieDB/myLists/actions';
// import { getCreatedLists } from '../../store/theMovieDB/myLists/selectors';

import MyListComponent from './component';

class MyListContainer extends Component {
  componentDidMount() {
    // const { createdLists } = this.props;
    // createdLists({ page: 1 });
  }

  getPage = page => {
    // const { createdLists } = this.props;
    // createdLists({ page });
  };

  render() {
    return <MyListComponent {...this.props} page={this.getPage} />;
  }
}

const mapStateToProps = state => ({
  // myLists: getCreatedLists(state),
});

const mapDispatchToProps = {
  // createdLists: createdListsRequest,
  // createList: createListRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyListContainer);
