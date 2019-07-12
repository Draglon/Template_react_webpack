import React from 'react';
import PropTypes from 'prop-types';

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

MyListComponent.propTypes = {
  modalParams: PropTypes.object.isRequired,
  myList: PropTypes.object.isRequired,
};

export default MyListComponent;
