import { createFavoriteListReducer, addToFavoriteReducer } from '../reducers';
import * as t from '../actionTypes';

describe('Favorite - reducers', () => {
  describe('Favorite - createFavoriteListReducer', () => {
    it('state is undefined', () => {
      expect(createFavoriteListReducer(undefined, {})).toEqual({
        isLoading: false,
        data: {
          page: 1,
          results: [],
          totalPages: 0,
          totalResults: 0,
        },
        error: null,
      });
    });

    it('FAVORITE_REQUEST', () => {
      const state = {
        isLoading: false,
        error: 'some error',
      };
      const action = {
        type: t.FAVORITE_REQUEST,
      };

      expect(createFavoriteListReducer(state, action)).toEqual({
        isLoading: true,
        error: null,
      });
    });

    it('FAVORITE_SUCCESS', () => {
      const state = {
        isLoading: true,
        data: {
          page: 1,
          results: [],
          totalPages: 0,
          totalResults: 0,
        },
      };

      const action = {
        type: t.FAVORITE_SUCCESS,
        payload: {
          page: 1,
          results: [1, 2, 3],
          totalPages: 10,
          totalResults: 100,
        },
      };

      expect(createFavoriteListReducer(state, action)).toEqual({
        isLoading: false,
        data: {
          page: action.payload.page,
          results: action.payload.results,
          totalPages: action.payload.total_pages,
          totalResults: action.payload.total_results,
        },
      });
    });

    it('FAVORITE_FAILURE', () => {
      const state = {
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.FAVORITE_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(createFavoriteListReducer(state, action)).toEqual({
        isLoading: false,
        error: action.payload.message,
      });
    });
  });

  describe('Favorite - addToFavoriteReducer', () => {
    it('state is undefined', () => {
      expect(addToFavoriteReducer(undefined, {})).toEqual({
        isLoading: false,
        data: {
          message: '',
        },
        error: null,
      });
    });

    it('ADD_TO_FAVORITE_REQUEST', () => {
      const state = {
        isLoading: false,
        error: 'some error',
      };

      const action = {
        type: t.ADD_TO_FAVORITE_REQUEST,
      };

      expect(addToFavoriteReducer(state, action)).toEqual({
        isLoading: true,
        error: null,
      });
    });

    it('ADD_TO_FAVORITE_SUCCESS', () => {
      const state = {
        isLoading: true,
        data: {
          message: '',
        },
      };

      const action = {
        type: t.ADD_TO_FAVORITE_SUCCESS,
        payload: {
          message: '',
        },
      };

      expect(addToFavoriteReducer(state, action)).toEqual({
        isLoading: false,
        data: {
          message: action.payload.status_message,
        },
      });
    });

    it('ADD_TO_FAVORITE_FAILURE', () => {
      const state = {
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.ADD_TO_FAVORITE_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(addToFavoriteReducer(state, action)).toEqual({
        isLoading: false,
        error: action.payload.message,
      });
    });
  });
});
