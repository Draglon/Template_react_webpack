import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  detailsListRequest as detailsListRequestAction,
  removeMovieListRequest as removeMovieListRequestAction,
} from '../../store/theMovieDB/myLists/actions';
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

  render() {
    const {
      removeMovieListRequest,
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <MyListComponent
        {...this.props}
        modalParams={{
          title: 'Do you want to delete movie from this list?',
          params: { listId: id },
          onConfirm: removeMovieListRequest,
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  myList: getDetailsList(state),
});

const mapDispatchToProps = {
  detailsListRequest: detailsListRequestAction,
  removeMovieListRequest: removeMovieListRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyListContainer);
