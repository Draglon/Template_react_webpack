import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trendingRequest as trendingRequestAction } from '../../store/theMovieDB/trending/actions';
import { getTrendingById } from '../../store/theMovieDB/trending/selectors';
import { searchRequest as searchRequestAction } from '../../store/theMovieDB/search/actions';
import { getSearchById } from '../../store/theMovieDB/search/selectors';

import DashboardComponent from './component';

class DashboardContainer extends Component {
  componentDidMount() {
    const { trendingRequest } = this.props;
    trendingRequest({ page: 1 });
  }

  onSearch = value => {
    const { searchRequest, trendingRequest } = this.props;

    if (value) {
      searchRequest({ query: value, page: 1 });
    } else {
      searchRequest({ query: value, page: 1 });
      trendingRequest({ page: 1 });
    }
  };

  setMovies = () => {
    const {
      search: { query, results },
      trending,
    } = this.props;
    return query ? results : trending.results;
  };

  getPage = page => {
    const {
      searchRequest,
      trendingRequest,
      search: { query },
    } = this.props;
    query ? searchRequest({ query, page }) : trendingRequest({ page });
  };

  currentPage = () => {
    const {
      search: { query, page },
      trending,
    } = this.props;
    return query ? page : trending.page;
  };

  totalPages = () => {
    const {
      search: { query, totalPages },
      trending,
    } = this.props;
    return query ? totalPages : trending.totalPages;
  };

  render() {
    const {
      search: { query },
    } = this.props;

    return (
      <DashboardComponent
        {...this.props}
        query={query}
        onSearch={this.onSearch}
        movies={this.setMovies()}
        page={this.getPage}
        currentPage={this.currentPage()}
        totalPages={this.totalPages()}
      />
    );
  }
}

const mapStateToProps = state => ({
  trending: getTrendingById(state),
  search: getSearchById(state),
});

const mapDispatchToProps = {
  searchRequest: searchRequestAction,
  trendingRequest: trendingRequestAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardContainer);
