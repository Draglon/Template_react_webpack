import React from 'react';
import PropTypes from 'prop-types';

import Search from '../Search';
import MovieList from '../../../../shared/lists/MovieList';
import Pagination from '../../../../shared/Pagination';

const SearchPageComponent = ({ search, onSearch, page }) => (
  <>
    <Search onSearch={onSearch} />
    <MovieList movies={search.results} />
    <Pagination currentPage={search.page} page={page} totalPages={search.totalPages} />
  </>
);

SearchPageComponent.propTypes = {
  page: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
};

export default SearchPageComponent;
