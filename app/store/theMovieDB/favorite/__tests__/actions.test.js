import {
  favoriteRequest,
  favoriteSuccess,
  favoriteFailure,
  addToFavoriteRequest,
  addToFavoriteSuccess,
  addToFavoriteFailure,
} from '../actions';
import * as t from '../actionTypes';

describe('Favorite - actions', () => {
  describe('Favorite - create favorite list actions', () => {
    it('favoriteRequest', () => {
      const payload = { page: 1 };
      expect(favoriteRequest(payload)).toEqual({
        type: t.FAVORITE_REQUEST,
        payload,
      });
    });

    it('favoriteSuccess', () => {
      const payload = {
        page: 1,
        results: [1, 2, 3],
        totalPages: 10,
        totalResults: 100,
      };
      expect(favoriteSuccess(payload)).toEqual({
        type: t.FAVORITE_SUCCESS,
        payload,
      });
    });

    it('favoriteFailure', () => {
      const payload = { message: 'message error' };
      expect(favoriteFailure(payload)).toEqual({
        type: t.FAVORITE_FAILURE,
        payload,
      });
    });
  });

  describe('Favorite - add to favorite list actions', () => {
    it('addToFavoriteRequest', () => {
      const payload = {
        movieId: 9999,
        favorite: true,
      };
      expect(addToFavoriteRequest(payload)).toEqual({
        type: t.ADD_TO_FAVORITE_REQUEST,
        payload,
      });
    });

    it('addToFavoriteSuccess', () => {
      const payload = { message: 'message success' };
      expect(addToFavoriteSuccess(payload)).toEqual({
        type: t.ADD_TO_FAVORITE_SUCCESS,
        payload,
      });
    });

    it('addToFavoriteFailure', () => {
      const payload = { message: 'message error' };
      expect(addToFavoriteFailure(payload)).toEqual({
        type: t.ADD_TO_FAVORITE_FAILURE,
        payload,
      });
    });
  });
});
