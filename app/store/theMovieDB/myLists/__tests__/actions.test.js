import {
  createListRequest,
  createListSuccess,
  createListFailure,
  createdListsRequest,
  createdListsSuccess,
  createdListsFailure,
  detailsListRequest,
  detailsListSuccess,
  detailsListFailure,
  addMovieListRequest,
  addMovieListSuccess,
  addMovieListFailure,
  removeMovieListRequest,
  removeMovieListSuccess,
  removeMovieListFailure,
  deleteListRequest,
  deleteListSuccess,
  deleteListFailure,
} from '../actions';
import * as t from '../actionTypes';

describe('MyLists - actions', () => {
  describe('MyLists - get created lists actions', () => {
    it('createdListsRequest', () => {
      const payload = { page: 1 };
      expect(createdListsRequest(payload)).toEqual({
        type: t.CREATED_LISTS_REQUEST,
        payload,
      });
    });

    it('createdListsSuccess', () => {
      const payload = {
        page: 1,
        results: [],
        totalPages: 0,
      };
      expect(createdListsSuccess(payload)).toEqual({
        type: t.CREATED_LISTS_SUCCESS,
        payload,
      });
    });

    it('createdListsFailure', () => {
      const payload = { message: 'message error' };
      expect(createdListsFailure(payload)).toEqual({
        type: t.CREATED_LISTS_FAILURE,
        payload,
      });
    });
  });

  describe('MyLists - create list actions', () => {
    it('createListRequest', () => {
      const payload = {
        values: {
          name: 'list name',
          description: 'some description',
        },
        actions: {
          isSubmitting: true,
        },
        hideModal: true,
      };
      expect(createListRequest(payload)).toEqual({
        type: t.CREATE_LIST_REQUEST,
        payload,
      });
    });

    it('createListSuccess', () => {
      const payload = {
        list_id: 'list id',
        message: 'message success',
      };
      expect(createListSuccess(payload)).toEqual({
        type: t.CREATE_LIST_SUCCESS,
        payload,
      });
    });

    it('createListFailure', () => {
      const payload = { message: 'message error' };
      expect(createListFailure(payload)).toEqual({
        type: t.CREATE_LIST_FAILURE,
        payload,
      });
    });
  });

  describe('MyLists - get details list actions', () => {
    it('detailsListRequest', () => {
      const payload = { listId: 999 };
      expect(detailsListRequest(payload)).toEqual({
        type: t.DETAILS_LIST_REQUEST,
        payload,
      });
    });

    it('detailsListSuccess', () => {
      const payload = {
        id: 'id',
        title: 'title',
        description: 'description',
        results: [1, 2, 3],
        total: 10,
      };
      expect(detailsListSuccess(payload)).toEqual({
        type: t.DETAILS_LIST_SUCCESS,
        payload,
      });
    });

    it('detailsListFailure', () => {
      const payload = { message: 'message error' };
      expect(detailsListFailure(payload)).toEqual({
        type: t.DETAILS_LIST_FAILURE,
        payload,
      });
    });
  });

  describe('MyLists - add movie list actions', () => {
    it('addMovieListRequest', () => {
      const payload = { listId: 999, movieId: 999 };
      expect(addMovieListRequest(payload)).toEqual({
        type: t.ADD_MOVIE_LIST_REQUEST,
        payload,
      });
    });

    it('addMovieListSuccess', () => {
      const payload = { message: 'message success' };
      expect(addMovieListSuccess(payload)).toEqual({
        type: t.ADD_MOVIE_LIST_SUCCESS,
        payload,
      });
    });

    it('addMovieListFailure', () => {
      const payload = { message: 'message error' };
      expect(addMovieListFailure(payload)).toEqual({
        type: t.ADD_MOVIE_LIST_FAILURE,
        payload,
      });
    });
  });

  describe('MyLists - remove movie list actions', () => {
    it('removeMovieListRequest', () => {
      const payload = { listId: 999, movieId: 999 };
      expect(removeMovieListRequest(payload)).toEqual({
        type: t.REMOVE_MOVIE_LIST_REQUEST,
        payload,
      });
    });

    it('removeMovieListSuccess', () => {
      const payload = { message: 'message success' };
      expect(removeMovieListSuccess(payload)).toEqual({
        type: t.REMOVE_MOVIE_LIST_SUCCESS,
        payload,
      });
    });

    it('removeMovieListFailure', () => {
      const payload = { message: 'message error' };
      expect(removeMovieListFailure(payload)).toEqual({
        type: t.REMOVE_MOVIE_LIST_FAILURE,
        payload,
      });
    });
  });

  describe('MyLists - delete list actions', () => {
    it('deleteListRequest', () => {
      const payload = { listId: 999 };
      expect(deleteListRequest(payload)).toEqual({
        type: t.DELETE_LIST_REQUEST,
        payload,
      });
    });

    it('deleteListSuccess', () => {
      const payload = { message: 'message success' };
      expect(deleteListSuccess(payload)).toEqual({
        type: t.DELETE_LIST_SUCCESS,
        payload,
      });
    });

    it('deleteListFailure', () => {
      const payload = { message: 'message error' };
      expect(deleteListFailure(payload)).toEqual({
        type: t.DELETE_LIST_FAILURE,
        payload,
      });
    });
  });
});
