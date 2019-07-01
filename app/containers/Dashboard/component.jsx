import React, { Component } from 'react';

import Search from '../Search';
import MovieList from '../MovieList';
import Pagination from '../Pagination';

class DashboardComponent extends Component {
  componentDidMount() {
    const { trendingRequest } = this.props;
    trendingRequest({ page: 1 });
  }

  render() {
    const { trending, search, searchRequest, trendingRequest } = this.props;

    return (
      <>
        <Search onSearch={searchRequest} />
        <MovieList movies={search.query ? search.results : trending.results} />
        <Pagination
          query={search.query}
          currentPage={search.query ? search.page : trending.page}
          getPage={search.query ? searchRequest : trendingRequest}
          totalPages={search.query ? search.total_pages : trending.total_pages}
        />
      </>
    );
  }
}

export default DashboardComponent;
