import { movieRequest, movieFailure } from '../actions';
import * as t from '../actionTypes';

describe('Movie - actions', () => {
  it('movieRequest', () => {
    const payload = { movieId: 999 };
    expect(movieRequest(payload)).toEqual({
      type: t.MOVIE_REQUEST,
      payload,
    });
  });

  it('movieFailure', () => {
    const payload = { message: 'message error' };
    expect(movieFailure(payload)).toEqual({
      type: t.MOVIE_FAILURE,
      payload,
    });
  });
});
