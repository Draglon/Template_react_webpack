import React from 'react';

import Search from '../Search';
import MovieList from '../../../../shared/lists/MovieList';
import Pagination from '../../../../shared/Pagination';

const SearchPageComponent = ({ search, onSearch, page }) => (
  <>
    {search && (
      <>
        <Search onSearch={onSearch} />
        <MovieList movies={search.results} />
        <Pagination currentPage={search.page} page={page} totalPages={search.totalPages} />
      </>
    )}
  </>
);

export default SearchPageComponent;
