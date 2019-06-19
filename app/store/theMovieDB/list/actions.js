import type from './actionTypes';

// Create list
export const createListRequest = payload => ({ type: type.CREATE_LIST_REQUEST, payload });
export const createListSuccess = payload => ({ type: type.CREATE_LIST_SUCCESS, payload });
export const createListFailure = payload => ({ type: type.CREATE_LIST_FAILURE, payload });

// Add movie
export const addMovieRequest = payload => ({ type: type.ADD_MOVIE_REQUEST, payload });
export const addMovieSuccess = payload => ({ type: type.ADD_MOVIE_SUCCESS, payload });
export const addMovieFailure = payload => ({ type: type.ADD_MOVIE_FAILURE, payload });
