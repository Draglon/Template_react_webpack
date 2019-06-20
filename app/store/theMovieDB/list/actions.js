import * as t from './actionTypes';

// Create list
export const createListRequest = payload => ({ type: t.CREATE_LIST_REQUEST, payload });
export const createListSuccess = payload => ({ type: t.CREATE_LIST_SUCCESS, payload });
export const createListFailure = payload => ({ type: t.CREATE_LIST_FAILURE, payload });

// Add movie
// export const addMovieRequest = payload => ({ type: t.ADD_MOVIE_REQUEST, payload });
// export const addMovieSuccess = payload => ({ type: t.ADD_MOVIE_SUCCESS, payload });
// export const addMovieFailure = payload => ({ type: t.ADD_MOVIE_FAILURE, payload });
