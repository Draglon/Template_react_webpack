import * as t from './actionTypes';

export const createdListsRequest = payload => ({ type: t.CREATED_LISTS_REQUEST, payload });
export const createdListsSuccess = payload => ({ type: t.CREATED_LISTS_SUCCESS, payload });
export const createdListsFailure = payload => ({ type: t.CREATED_LISTS_FAILURE, payload });

export const createListRequest = payload => ({ type: t.CREATE_LIST_REQUEST, payload });
export const createListSuccess = payload => ({ type: t.CREATE_LIST_SUCCESS, payload });
export const createListFailure = payload => ({ type: t.CREATE_LIST_FAILURE, payload });

export const deleteListRequest = payload => ({ type: t.DELETE_LIST_REQUEST, payload });
export const deleteListSuccess = payload => ({ type: t.DELETE_LIST_SUCCESS, payload });
export const deleteListFailure = payload => ({ type: t.DELETE_LIST_FAILURE, payload });

export const clearListRequest = payload => ({ type: t.CLEAR_LIST_REQUEST, payload });
export const clearListSuccess = payload => ({ type: t.CLEAR_LIST_SUCCESS, payload });
export const clearListFailure = payload => ({ type: t.CLEAR_LIST_FAILURE, payload });

export const addMovieListRequest = payload => ({ type: t.ADD_MOVIE_LIST_REQUEST, payload });
export const addMovieListSuccess = payload => ({ type: t.ADD_MOVIE_LIST_SUCCESS, payload });
export const addMovieListFailure = payload => ({ type: t.ADD_MOVIE_LIST_FAILURE, payload });

export const removeMovieListRequest = payload => ({ type: t.REMOVE_MOVIE_LIST_REQUEST, payload });
export const removeMovieListSuccess = payload => ({ type: t.REMOVE_MOVIE_LIST_SUCCESS, payload });
export const removeMovieListFailure = payload => ({ type: t.REMOVE_MOVIE_LIST_FAILURE, payload });

export const checkMovieListRequest = payload => ({ type: t.CHECK_MOVIE_LIST_REQUEST, payload });
export const checkMovieListSuccess = payload => ({ type: t.CHECK_MOVIE_LIST_SUCCESS, payload });
export const checkMovieListFailure = payload => ({ type: t.CHECK_MOVIE_LIST_FAILURE, payload });
