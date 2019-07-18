import React from 'react';
import PropTypes from 'prop-types';

import Search from '../Search';
import MovieList from '../../../../shared/lists/MovieList';
import Pagination from '../../../../shared/Pagination';

const DashboardPageComponent = ({ trending, onSearch, page }) => (
  <>
    <Search onSearch={onSearch} />
    <MovieList movies={trending.results} />
    <Pagination currentPage={trending.page} page={page} totalPages={trending.totalPages} />
  </>
);

DashboardPageComponent.propTypes = {
  page: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  trending: PropTypes.object.isRequired,
};

export default DashboardPageComponent;
