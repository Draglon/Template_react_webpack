import {
  createWatchlistListReducer,
  initialState,
  addToWatchlistReducer,
  addWatchlistInitialState,
} from '../reducers';
import * as t from '../actionTypes';

describe('Watchlist - reducers', () => {
  describe('Watchlist - createWatchlistListReducer', () => {
    it('state is undefined', () => {
      expect(createWatchlistListReducer(undefined, {})).toEqual(initialState);
    });

    it('WATCHLIST_REQUEST', () => {
      const action = {
        type: t.WATCHLIST_REQUEST,
      };

      expect(createWatchlistListReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: true,
        error: null,
      });
    });

    it('WATCHLIST_SUCCESS', () => {
      const stateBefore = {
        ...initialState,
        isLoading: true,
      };

      const action = {
        type: t.WATCHLIST_SUCCESS,
        payload: {
          page: 1,
          results: [],
          totalPages: 0,
          totalResults: 0,
        },
      };

      expect(createWatchlistListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
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
      const stateBefore = {
        ...initialState,
        isLoading: true,
      };

      const action = {
        type: t.WATCHLIST_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(createWatchlistListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        error: action.payload.message,
      });
    });
  });

  describe('Watchlist - addToWatchlistReducer', () => {
    it('state is undefined', () => {
      expect(addToWatchlistReducer(undefined, {})).toEqual(addWatchlistInitialState);
    });

    it('ADD_TO_WATCHLIST_REQUEST', () => {
      const action = {
        type: t.ADD_TO_WATCHLIST_REQUEST,
      };

      expect(addToWatchlistReducer(addWatchlistInitialState, action)).toEqual({
        ...addWatchlistInitialState,
        isLoading: true,
        error: null,
      });
    });

    it('ADD_TO_WATCHLIST_SUCCESS', () => {
      const stateBefore = {
        ...addWatchlistInitialState,
        isLoading: true,
      };

      const action = {
        type: t.ADD_TO_WATCHLIST_SUCCESS,
        payload: {
          message: '',
        },
      };

      expect(addToWatchlistReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        data: {
          message: action.payload.status_message,
        },
      });
    });

    it('ADD_TO_WATCHLIST_FAILURE', () => {
      const stateBefore = {
        ...addWatchlistInitialState,
        isLoading: true,
      };

      const action = {
        type: t.ADD_TO_WATCHLIST_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(addToWatchlistReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        error: action.payload.message,
      });
    });
  });
});
