import type from './list.actionTypes';

// Create list
export const createListTypeRequest = () => type.CREATE_LIST_REQUEST;
export const createListTypeSuccess = () => type.CREATE_LIST_SUCCESS;
export const createListTypeFailure = () => type.CREATE_LIST_FAILURE;

export const createListRequest = payload => ({ type: type.CREATE_LIST_REQUEST, payload });
export const createListSuccess = payload => ({ type: type.CREATE_LIST_SUCCESS, payload });
export const createListFailure = payload => ({ type: type.CREATE_LIST_FAILURE, payload });

// Add movie
export const addMovieTypeRequest = () => type.ADD_MOVIE_REQUEST;
export const addMovieTypeSuccess = () => type.ADD_MOVIE_SUCCESS;
export const addMovieTypeFailure = () => type.ADD_MOVIE_FAILURE;

export const addMovieRequest = payload => ({ type: type.ADD_MOVIE_REQUEST, payload });
export const addMovieSuccess = payload => ({ type: type.ADD_MOVIE_SUCCESS, payload });
export const addMovieFailure = payload => ({ type: type.ADD_MOVIE_FAILURE, payload });
