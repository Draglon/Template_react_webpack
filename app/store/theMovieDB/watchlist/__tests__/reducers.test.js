import { createWatchlistListReducer, addToWatchlistReducer } from '../reducers';
import * as t from '../actionTypes';

describe('Watchlist - reducers', () => {
  describe('Watchlist - createWatchlistListReducer', () => {
    it('state is undefined', () => {
      expect(createWatchlistListReducer(undefined, {})).toEqual({
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

    it('WATCHLIST_REQUEST', () => {
      const state = {
        isLoading: false,
        error: 'some error',
      };
      const action = {
        type: t.WATCHLIST_REQUEST,
      };

      expect(createWatchlistListReducer(state, action)).toEqual({
        isLoading: true,
        error: null,
      });
    });

    it('WATCHLIST_SUCCESS', () => {
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
        type: t.WATCHLIST_SUCCESS,
        payload: {
          page: 1,
          results: [1, 2, 3],
          totalPages: 10,
          totalResults: 100,
        },
      };

      expect(createWatchlistListReducer(state, action)).toEqual({
        isLoading: false,
        data: {
          page: action.payload.page,
          results: action.payload.results,
          totalPages: action.payload.total_pages,
          totalResults: action.payload.total_results,
        },
      });
    });

    it('WATCHLIST_FAILURE', () => {
      const state = {
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.WATCHLIST_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(createWatchlistListReducer(state, action)).toEqual({
        isLoading: false,
        error: action.payload.message,
      });
    });
  });

  describe('Watchlist - addToWatchlistReducer', () => {
    it('state is undefined', () => {
      expect(addToWatchlistReducer(undefined, {})).toEqual({
        isLoading: false,
        data: {
          message: '',
        },
        error: null,
      });
    });

    it('ADD_TO_WATCHLIST_REQUEST', () => {
      const state = {
        isLoading: false,
        error: 'some error',
      };

      const action = {
        type: t.ADD_TO_WATCHLIST_REQUEST,
      };

      expect(addToWatchlistReducer(state, action)).toEqual({
        isLoading: true,
        error: null,
      });
    });

    it('ADD_TO_WATCHLIST_SUCCESS', () => {
      const state = {
        isLoading: true,
        data: {
          message: '',
        },
      };

      const action = {
        type: t.ADD_TO_WATCHLIST_SUCCESS,
        payload: {
          message: 'message success',
        },
      };

      expect(addToWatchlistReducer(state, action)).toEqual({
        isLoading: false,
        data: {
          message: action.payload.status_message,
        },
      });
    });

    it('ADD_TO_WATCHLIST_FAILURE', () => {
      const state = {
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.ADD_TO_WATCHLIST_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(addToWatchlistReducer(state, action)).toEqual({
        isLoading: false,
        error: action.payload.message,
      });
    });
  });
});
