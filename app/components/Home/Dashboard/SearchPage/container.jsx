import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchRequest as searchRequestAction } from '../../../../store/theMovieDB/search/actions';
import { getSearchById } from '../../../../store/theMovieDB/search/selectors';

import SearchPageComponent from './component';

class SearchPageContainer extends Component {
  onSearch = value => {
    const { searchRequest } = this.props;
    searchRequest({ query: value, page: 1 });
  };

  getPage = page => {
    const { searchRequest, search } = this.props;
    searchRequest({ query: search.query, page });
  };

  render() {
    return <SearchPageComponent {...this.props} onSearch={this.onSearch} page={this.getPage} />;
  }
}

const mapStateToProps = state => ({
  search: getSearchById(state),
});

const mapDispatchToProps = {
  searchRequest: searchRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPageContainer);
