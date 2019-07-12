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
      const expectedAction = {
        type: t.FAVORITE_REQUEST,
        payload: ['some data'],
      };
      expect(favoriteRequest(expectedAction.payload)).toEqual(expectedAction);
    });

    it('favoriteSuccess', () => {
      const expectedAction = {
        type: t.FAVORITE_SUCCESS,
        payload: ['some data'],
      };
      expect(favoriteSuccess(expectedAction.payload)).toEqual(expectedAction);
    });

    it('favoriteFailure', () => {
      const expectedAction = {
        type: t.FAVORITE_FAILURE,
        payload: ['some data'],
      };
      expect(favoriteFailure(expectedAction.payload)).toEqual(expectedAction);
    });
  });

  describe('Favorite - add to favorite list actions', () => {
    it('addToFavoriteRequest', () => {
      const expectedAction = {
        type: t.ADD_TO_FAVORITE_REQUEST,
        payload: ['some data'],
      };
      expect(addToFavoriteRequest(expectedAction.payload)).toEqual(expectedAction);
    });

    it('addToFavoriteSuccess', () => {
      const expectedAction = {
        type: t.ADD_TO_FAVORITE_SUCCESS,
        payload: ['some data'],
      };
      expect(addToFavoriteSuccess(expectedAction.payload)).toEqual(expectedAction);
    });

    it('addToFavoriteFailure', () => {
      const expectedAction = {
        type: t.ADD_TO_FAVORITE_FAILURE,
        payload: ['some data'],
      };
      expect(addToFavoriteFailure(expectedAction.payload)).toEqual(expectedAction);
    });
  });
});
