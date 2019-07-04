import React from 'react';

import Search from '../Search';
import MovieList from '../MovieList';
import Pagination from '../Pagination';

const DashboardComponent = ({ trending, search, searchRequest, trendingRequest }) => (
  <>
    <Search onSearch={searchRequest} />
    <MovieList movies={search.query ? search.results : trending.results} />
    <Pagination
      query={search.query}
      currentPage={search.query ? search.page : trending.page}
      getPage={search.query ? searchRequest : trendingRequest}
      totalPages={search.query ? search.totalPages : trending.totalPages}
    />
  </>
);

export default DashboardComponent;
