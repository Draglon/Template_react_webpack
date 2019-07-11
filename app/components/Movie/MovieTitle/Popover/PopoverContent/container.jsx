import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  createdListsRequest as createdListsRequestAction,
  addMovieListRequest as addMovieListRequestAction,
} from '../../../../../store/theMovieDB/myLists/actions';
import { getCreatedListsById } from '../../../../../store/theMovieDB/myLists/selectors';

import PopoverContentComponent from './component';

class PopoverContentContainer extends Component {
  componentDidMount() {
    const { createdListsRequest } = this.props;
    createdListsRequest({ page: 1 });
  }

  addMovieToList = listId => {
    const { addMovieListRequest, movieId } = this.props;
    addMovieListRequest({ listId, movieId });
  };

  render() {
    return <PopoverContentComponent {...this.props} addMovieToList={this.addMovieToList} />;
  }
}

PopoverContentContainer.propTypes = {
  createdListsRequest: PropTypes.func.isRequired,
  addMovieListRequest: PropTypes.func.isRequired,
  myLists: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  myLists: getCreatedListsById(state),
});

const mapDispatchToProps = {
  createdListsRequest: createdListsRequestAction,
  addMovieListRequest: addMovieListRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopoverContentContainer);
