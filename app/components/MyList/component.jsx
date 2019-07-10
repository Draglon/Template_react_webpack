import React from 'react';

import MyListTitle from './MyListTitle';
import MovieList from '../../shared/lists/MovieList';
import Pagination from '../../shared/Pagination';

const MyListComponent = ({ myList, page, modalParams }) => (
  <>
    {myList && (
      <>
        <MyListTitle myList={myList} />
        <MovieList movies={myList.results} modalParams={modalParams} />
        <Pagination currentPage={1} page={page} totalPages={myList.total / 20} />
      </>
    )}
  </>
);

export default MyListComponent;
