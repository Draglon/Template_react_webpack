import React from 'react';
import PropTypes from 'prop-types';

import SearchPage from './SearchPage';
import DashboardPage from './DashboardPage';

const DashboardComponent = ({ searchQuery }) => (
  <>{searchQuery ? <SearchPage /> : <DashboardPage />}</>
);

DashboardComponent.defaultTypes = {
  search: '',
};

DashboardComponent.propTypes = {
  search: PropTypes.string,
};

export default DashboardComponent;
