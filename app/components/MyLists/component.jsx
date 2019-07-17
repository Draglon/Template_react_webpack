import React from 'react';
import PropTypes from 'prop-types';

import MyListsTitle from './MyListsTitle';
import Lists from './Lists';
import Pagination from '../../shared/Pagination';

const MyListsComponent = ({ myLists, page }) => (
  <>
    {myLists && (
      <>
        <MyListsTitle />
        <Lists lists={myLists.results} />
        <Pagination currentPage={myLists.page} page={page} totalPages={myLists.totalPages} />
      </>
    )}
  </>
);

MyListsComponent.propTypes = {
  page: PropTypes.func.isRequired,
  myLists: PropTypes.object.isRequired,
};

export default MyListsComponent;
