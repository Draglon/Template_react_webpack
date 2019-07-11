import { createLogic } from 'redux-logic';
import { normalize } from 'normalizr';
import { movies, lists } from '../../schema';
import { getSessionId } from '../login/selectors';
import { getAccountId } from '../profile/selectors';

import { addEntities } from '../data/actions';
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
  addMovieListSuccess,
  addMovieListFailure,
  removeMovieListSuccess,
  removeMovieListFailure,
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
        const normalizeData = normalize(response.data.results, [lists]);
        dispatch(addEntities(normalizeData.entities));
        dispatch(
          createdListsSuccess({
            ...response.data,
            results: normalizeData.result,
          }),
        );
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
        const normalizeData = normalize(response.data.items, [movies]);
        dispatch(addEntities(normalizeData.entities));
        dispatch(
          detailsListSuccess({
            ...response.data,
            items: normalizeData.result,
          }),
        );
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
      .post(`list?session_id=${sessionId}`, { ...action.payload.values, language: 'en' })
      .then(response => {
        dispatch(createListSuccess(response.data));
        dispatch(createdListsRequest({ page: 1 }));
        action.payload.actions.setSubmitting(false);
        action.payload.hideModal();
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
