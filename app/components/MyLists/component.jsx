import React from 'react';

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

export default MyListsComponent;
