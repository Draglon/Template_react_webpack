import { createLogic } from 'redux-logic';
import { getSessionId } from '../login/selectors';
import { getAccountId } from '../profile/selectors';

import {
  createdListsRequest,
  createdListsSuccess,
  createdListsFailure,
  createListSuccess,
  createListFailure,
  detailsListRequest,
  detailsListSuccess,
  detailsListFailure,
  deleteListSuccess,
  deleteListFailure,
  clearListSuccess,
  clearListFailure,
  addMovieListSuccess,
  addMovieListFailure,
  removeMovieListSuccess,
  removeMovieListFailure,
  checkMovieListSuccess,
  checkMovieListFailure,
  deleteListRequest,
} from './actions';
import * as t from './actionTypes';

export const myListsLogic = createLogic({
  type: t.CREATED_LISTS_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const sessionId = getSessionId(getState());
    const accountId = getAccountId(getState());
    const page = action.payload.page;
    apiClient
      .get(`account/${accountId}/lists?session_id=${sessionId}&page=${page}&language=en-US`)
      .then(response => {
        dispatch(createdListsSuccess(response.data));
      })
      .catch(error => dispatch(createdListsFailure(error)))
      .then(() => done());
  },
});

export const detailsListLogic = createLogic({
  type: t.DETAILS_LIST_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    const listId = action.payload.listId;
    apiClient
      .get(`list/${listId}?language=en-US`)
      .then(response => {
        dispatch(detailsListSuccess(response.data));
      })
      .catch(error => dispatch(detailsListFailure(error)))
      .then(() => done());
  },
});

export const createList = createLogic({
  type: t.CREATE_LIST_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const sessionId = getSessionId(getState());
    apiClient
      .post(`list?session_id=${sessionId}`, { ...action.payload, language: 'en' })
      .then(response => {
        dispatch(createListSuccess(response.data));
        dispatch(createdListsRequest({ page: 1 }));
      })
      .catch(error => dispatch(createListFailure(error)))
      .then(() => done());
  },
});

export const deleteListLogic = createLogic({
  type: t.DELETE_LIST_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const listId = action.payload.listId;
    const sessionId = getSessionId(getState());
    apiClient
      .delete(`list/${listId}?session_id=${sessionId}`)
      .then(response => {
        dispatch(deleteListSuccess(response.data));
        dispatch(createdListsRequest({ page: 1 }));
      })
      .catch(error => {
        dispatch(deleteListFailure(error));
        dispatch(createdListsRequest({ page: 1 }));
      })
      .then(() => done());
  },
});

export const clearListLogic = createLogic({
  type: t.CLEAR_LIST_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const listId = action.payload.listId;
    const sessionId = getSessionId(getState());
    apiClient
      .post(`list/${listId}/clear?session_id=${sessionId}`)
      .then(response => {
        dispatch(clearListSuccess(response.data));
      })
      .catch(error => {
        dispatch(clearListFailure(error));
      })
      .then(() => done());
  },
});

export const addMovieListLogic = createLogic({
  type: t.ADD_MOVIE_LIST_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const listId = action.payload.listId;
    const mediaId = action.payload.movieId;
    const sessionId = getSessionId(getState());
    apiClient
      .post(`list/${listId}/add_item?session_id=${sessionId}`, {
        media_id: mediaId,
      })
      .then(response => {
        dispatch(addMovieListSuccess(response.data));
      })
      .catch(error => {
        dispatch(addMovieListFailure(error));
      })
      .then(() => done());
  },
});

export const removeMovieListLogic = createLogic({
  type: t.REMOVE_MOVIE_LIST_REQUEST,

  process({ apiClient, getState, action }, dispatch, done) {
    const listId = action.payload.listId;
    const mediaId = action.payload.movieId;
    const sessionId = getSessionId(getState());
    apiClient
      .post(`list/${listId}/remove_item?session_id=${sessionId}`, {
        media_id: mediaId,
      })
      .then(response => {
        dispatch(removeMovieListSuccess(response.data));
        dispatch(detailsListRequest({ listId }));
      })
      .catch(error => {
        dispatch(removeMovieListFailure(error));
      })
      .then(() => done());
  },
});

export const checkMovieListLogic = createLogic({
  type: t.CHECK_MOVIE_LIST_REQUEST,

  process({ apiClient, action }, dispatch, done) {
    const listId = action.payload.listId;
    const mediaId = action.payload.mediaId;
    apiClient
      .get(`list/${listId}/item_status?movie_id=${mediaId}`)
      .then(response => {
        dispatch(checkMovieListSuccess(response.data));
      })
      .catch(error => {
        dispatch(checkMovieListFailure(error));
      })
      .then(() => done());
  },
});
