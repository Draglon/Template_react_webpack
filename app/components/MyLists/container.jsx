import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createdListsRequest as createdListsRequestAction } from '../../store/theMovieDB/myLists/actions';
import { getCreatedLists } from '../../store/theMovieDB/myLists/selectors';

import MyListsComponent from './component';

class MyListsContainer extends Component {
  componentDidMount() {
    const { createdListsRequest } = this.props;
    createdListsRequest({ page: 1 });
  }

  getPage = page => {
    const { createdListsRequest } = this.props;
    createdListsRequest({ page });
  };

  render() {
    return <MyListsComponent {...this.props} page={this.getPage} />;
  }
}

MyListsContainer.propTypes = {
  createdListsRequest: PropTypes.func.isRequired,
  myLists: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  myLists: getCreatedLists(state),
});

const mapDispatchToProps = {
  createdListsRequest: createdListsRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyListsContainer);
