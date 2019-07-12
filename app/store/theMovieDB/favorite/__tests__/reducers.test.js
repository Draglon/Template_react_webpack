import {
  createFavoriteListReducer,
  initialState,
  addToFavoriteReducer,
  addFavoriteInitialState,
} from '../reducers';
import * as t from '../actionTypes';

describe('Favorite - reducers', () => {
  describe('Favorite - createFavoriteListReducer', () => {
    it('state is undefined', () => {
      expect(createFavoriteListReducer(undefined, {})).toEqual(initialState);
    });

    it('FAVORITE_REQUEST', () => {
      const action = {
        type: t.FAVORITE_REQUEST,
      };

      expect(createFavoriteListReducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: true,
        error: null,
      });
    });

    it('FAVORITE_SUCCESS', () => {
      const stateBefore = {
        ...initialState,
        isLoading: true,
      };

      const action = {
        type: t.FAVORITE_SUCCESS,
        payload: {
          page: 1,
          results: [],
          totalPages: 0,
          totalResults: 0,
        },
      };

      expect(createFavoriteListReducer(stateBefore, action)).toEqual({
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

    it('FAVORITE_FAILURE', () => {
      const stateBefore = {
        ...initialState,
        isLoading: true,
      };

      const action = {
        type: t.FAVORITE_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(createFavoriteListReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        error: action.payload.message,
      });
    });
  });

  describe('Favorite - addToFavoriteReducer', () => {
    it('state is undefined', () => {
      expect(addToFavoriteReducer(undefined, {})).toEqual(addFavoriteInitialState);
    });

    it('ADD_TO_FAVORITE_REQUEST', () => {
      const action = {
        type: t.ADD_TO_FAVORITE_REQUEST,
      };

      expect(addToFavoriteReducer(addFavoriteInitialState, action)).toEqual({
        ...addFavoriteInitialState,
        isLoading: true,
        error: null,
      });
    });

    it('ADD_TO_FAVORITE_SUCCESS', () => {
      const stateBefore = {
        ...addFavoriteInitialState,
        isLoading: true,
      };

      const action = {
        type: t.ADD_TO_FAVORITE_SUCCESS,
        payload: {
          message: '',
        },
      };

      expect(addToFavoriteReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        data: {
          message: action.payload.status_message,
        },
      });
    });

    it('ADD_TO_FAVORITE_FAILURE', () => {
      const stateBefore = {
        ...addFavoriteInitialState,
        isLoading: true,
      };

      const action = {
        type: t.ADD_TO_FAVORITE_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(addToFavoriteReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        error: action.payload.message,
      });
    });
  });
});
