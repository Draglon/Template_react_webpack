import React from 'react';

import MyListTitle from './MyListTitle';
import MovieList from '../../shared/lists/MovieList';

const MyListComponent = ({ myList, modalParams }) => (
  <>
    {myList && (
      <>
        <MyListTitle myList={myList} />
        <MovieList movies={myList.results} modalParams={modalParams} />
      </>
    )}
  </>
);

export default MyListComponent;
