import { movieRequest, movieSuccess, movieFailure } from '../actions';
import * as t from '../actionTypes';

describe('Account - profile actions', () => {
  it('movieRequest', () => {
    const expectedAction = {
      type: t.MOVIE_REQUEST,
      payload: ['some data'],
    };
    expect(movieRequest(expectedAction.payload)).toEqual(expectedAction);
  });

  it('movieSuccess', () => {
    const expectedAction = {
      type: t.MOVIE_SUCCESS,
      payload: ['some data'],
    };
    expect(movieSuccess(expectedAction.payload)).toEqual(expectedAction);
  });

  it('movieFailure', () => {
    const expectedAction = {
      type: t.MOVIE_FAILURE,
      payload: ['some data'],
    };
    expect(movieFailure(expectedAction.payload)).toEqual(expectedAction);
  });
});
