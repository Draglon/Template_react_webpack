import { movieReducer } from '../reducers';
import * as t from '../actionTypes';

describe('Movie - reducers', () => {
  it('state is undefined', () => {
    expect(movieReducer(undefined, {})).toEqual({
      isLoading: false,
      error: null,
    });
  });

  it('MOVIE_REQUEST', () => {
    const state = {
      isLoading: false,
      error: 'some error',
    };

    const action = {
      type: t.MOVIE_REQUEST,
    };

    expect(movieReducer(state, action)).toEqual({
      isLoading: true,
      error: null,
    });
  });

  it('MOVIE_FAILURE', () => {
    const state = {
      isLoading: true,
      error: null,
    };

    const action = {
      type: t.MOVIE_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(movieReducer(state, action)).toEqual({
      isLoading: false,
      error: action.payload.message,
    });
  });
});
