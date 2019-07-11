import React from 'react';

import Search from '../Search';
import MovieList from '../../../../shared/lists/MovieList';
import Pagination from '../../../../shared/Pagination';

const DashboardComponent = ({ trending, onSearch, page }) => (
  <>
    <Search onSearch={onSearch} />
    <MovieList movies={trending.results} />
    <Pagination currentPage={trending.page} page={page} totalPages={trending.totalPages} />
  </>
);

export default DashboardComponent;
