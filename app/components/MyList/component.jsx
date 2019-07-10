import React from 'react';

import MyListTitle from './MyListTitle';
import MovieList from '../../shared/lists/MovieList';
// import Pagination from '../../shared/Pagination';

const MyListComponent = ({ myList, page }) => (
  <>
    {myList && (
      <>
        {console.log(myList)}
        <MyListTitle />
        <MovieList lists={myList.results} />
        {/* <Pagination currentPage={myLists.page} page={page} totalPages={myLists.totalPages} /> */}
      </>
    )}
  </>
);

export default MyListComponent;
