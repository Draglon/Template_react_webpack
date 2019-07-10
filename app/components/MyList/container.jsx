import React, { Component } from 'react';
import { connect } from 'react-redux';

import { detailsListRequest as detailsListRequestAction } from '../../store/theMovieDB/myLists/actions';
import { getDetailsList } from '../../store/theMovieDB/myLists/selectors';

import MyListComponent from './component';

class MyListContainer extends Component {
  componentDidMount() {
    const {
      detailsListRequest,
      match: {
        params: { id },
      },
    } = this.props;
    detailsListRequest({ listId: id });
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
  myList: getDetailsList(state),
});

const mapDispatchToProps = {
  detailsListRequest: detailsListRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyListContainer);
