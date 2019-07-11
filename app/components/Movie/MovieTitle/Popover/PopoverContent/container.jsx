import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createdListsRequest as createdListsRequestAction } from '../../../../../store/theMovieDB/myLists/actions';
import { getCreatedLists } from '../../../../../store/theMovieDB/myLists/selectors';

import PopoverContentComponent from './component';

class PopoverContentContainer extends Component {
  componentDidMount() {
    const { createdListsRequest } = this.props;
    createdListsRequest({ page: 1 });
  }

  render() {
    return <PopoverContentComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  myLists: getCreatedLists(state),
});

const mapDispatchToProps = {
  createdListsRequest: createdListsRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopoverContentContainer);
