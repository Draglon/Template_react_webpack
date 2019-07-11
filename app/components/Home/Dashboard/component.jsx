import React from 'react';

import SearchPage from './SearchPage';
import DashboardPage from './DashboardPage';

const DashboardComponent = ({ searchQuery }) => (
  <>{searchQuery ? <SearchPage /> : <DashboardPage />}</>
);

export default DashboardComponent;
