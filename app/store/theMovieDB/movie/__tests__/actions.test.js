import { movieRequest, movieFailure } from '../actions';
import * as t from '../actionTypes';

describe('Profile actions', () => {
  it('movieRequest', () => {
    const expectedAction = {
      type: t.MOVIE_REQUEST,
      payload: ['some data'],
    };
    expect(movieRequest(expectedAction.payload)).toEqual(expectedAction);
  });

  it('movieFailure', () => {
    const expectedAction = {
      type: t.MOVIE_FAILURE,
      payload: ['some data'],
    };
    expect(movieFailure(expectedAction.payload)).toEqual(expectedAction);
  });
});
