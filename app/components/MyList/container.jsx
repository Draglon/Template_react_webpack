import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  detailsListRequest as detailsListRequestAction,
  removeMovieListRequest as removeMovieListRequestAction,
} from '../../store/theMovieDB/myLists/actions';
import { getDetailsListById } from '../../store/theMovieDB/myLists/selectors';

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

MyListContainer.propTypes = {
  detailsListRequest: PropTypes.func.isRequired,
  removeMovieListRequest: PropTypes.func.isRequired,
  myList: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  myList: getDetailsListById(state),
});

const mapDispatchToProps = {
  detailsListRequest: detailsListRequestAction,
  removeMovieListRequest: removeMovieListRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyListContainer);
