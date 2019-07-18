import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchRequest as searchRequestAction } from '../../../../store/theMovieDB/search/actions';
import { getSearch } from '../../../../store/theMovieDB/search/selectors';

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

SearchPageComponent.propTypes = {
  searchRequest: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  search: getSearch(state),
});

const mapDispatchToProps = {
  searchRequest: searchRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPageContainer);
