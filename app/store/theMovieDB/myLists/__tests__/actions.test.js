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
      const expectedAction = {
        type: t.CREATED_LISTS_REQUEST,
        payload: ['some data'],
      };
      expect(createdListsRequest(expectedAction.payload)).toEqual(expectedAction);
    });

    it('createdListsSuccess', () => {
      const expectedAction = {
        type: t.CREATED_LISTS_SUCCESS,
        payload: ['some data'],
      };
      expect(createdListsSuccess(expectedAction.payload)).toEqual(expectedAction);
    });

    it('createdListsFailure', () => {
      const expectedAction = {
        type: t.CREATED_LISTS_FAILURE,
        payload: ['some data'],
      };
      expect(createdListsFailure(expectedAction.payload)).toEqual(expectedAction);
    });
  });

  describe('MyLists - create list actions', () => {
    it('createListRequest', () => {
      const expectedAction = {
        type: t.CREATE_LIST_REQUEST,
        payload: ['some data'],
      };
      expect(createListRequest(expectedAction.payload)).toEqual(expectedAction);
    });

    it('createListSuccess', () => {
      const expectedAction = {
        type: t.CREATE_LIST_SUCCESS,
        payload: ['some data'],
      };
      expect(createListSuccess(expectedAction.payload)).toEqual(expectedAction);
    });

    it('createListFailure', () => {
      const expectedAction = {
        type: t.CREATE_LIST_FAILURE,
        payload: ['some data'],
      };
      expect(createListFailure(expectedAction.payload)).toEqual(expectedAction);
    });
  });

  describe('MyLists - get details list actions', () => {
    it('detailsListRequest', () => {
      const expectedAction = {
        type: t.DETAILS_LIST_REQUEST,
        payload: ['some data'],
      };
      expect(detailsListRequest(expectedAction.payload)).toEqual(expectedAction);
    });

    it('detailsListSuccess', () => {
      const expectedAction = {
        type: t.DETAILS_LIST_SUCCESS,
        payload: ['some data'],
      };
      expect(detailsListSuccess(expectedAction.payload)).toEqual(expectedAction);
    });

    it('detailsListFailure', () => {
      const expectedAction = {
        type: t.DETAILS_LIST_FAILURE,
        payload: ['some data'],
      };
      expect(detailsListFailure(expectedAction.payload)).toEqual(expectedAction);
    });
  });

  describe('MyLists - add movie list actions', () => {
    it('addMovieListRequest', () => {
      const expectedAction = {
        type: t.ADD_MOVIE_LIST_REQUEST,
        payload: ['some data'],
      };
      expect(addMovieListRequest(expectedAction.payload)).toEqual(expectedAction);
    });

    it('addMovieListSuccess', () => {
      const expectedAction = {
        type: t.ADD_MOVIE_LIST_SUCCESS,
        payload: ['some data'],
      };
      expect(addMovieListSuccess(expectedAction.payload)).toEqual(expectedAction);
    });

    it('addMovieListFailure', () => {
      const expectedAction = {
        type: t.ADD_MOVIE_LIST_FAILURE,
        payload: ['some data'],
      };
      expect(addMovieListFailure(expectedAction.payload)).toEqual(expectedAction);
    });
  });

  describe('MyLists - remove movie list actions', () => {
    it('removeMovieListRequest', () => {
      const expectedAction = {
        type: t.REMOVE_MOVIE_LIST_REQUEST,
        payload: ['some data'],
      };
      expect(removeMovieListRequest(expectedAction.payload)).toEqual(expectedAction);
    });

    it('removeMovieListSuccess', () => {
      const expectedAction = {
        type: t.REMOVE_MOVIE_LIST_SUCCESS,
        payload: ['some data'],
      };
      expect(removeMovieListSuccess(expectedAction.payload)).toEqual(expectedAction);
    });

    it('removeMovieListFailure', () => {
      const expectedAction = {
        type: t.REMOVE_MOVIE_LIST_FAILURE,
        payload: ['some data'],
      };
      expect(removeMovieListFailure(expectedAction.payload)).toEqual(expectedAction);
    });
  });

  describe('MyLists - delete list actions', () => {
    it('deleteListRequest', () => {
      const expectedAction = {
        type: t.DELETE_LIST_REQUEST,
        payload: ['some data'],
      };
      expect(deleteListRequest(expectedAction.payload)).toEqual(expectedAction);
    });

    it('deleteListSuccess', () => {
      const expectedAction = {
        type: t.DELETE_LIST_SUCCESS,
        payload: ['some data'],
      };
      expect(deleteListSuccess(expectedAction.payload)).toEqual(expectedAction);
    });

    it('deleteListFailure', () => {
      const expectedAction = {
        type: t.DELETE_LIST_FAILURE,
        payload: ['some data'],
      };
      expect(deleteListFailure(expectedAction.payload)).toEqual(expectedAction);
    });
  });
});
