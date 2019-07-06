import { movieReducer, initialState } from '../reducers';
import * as t from '../actionTypes';

describe('Profile reducer', () => {
  it('state is undefined', () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });

  it('MOVIE_REQUEST after situation without error', () => {
    const action = {
      type: t.MOVIE_REQUEST,
    };

    expect(movieReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      error: null,
    });
  });

  it('MOVIE_FAILURE', () => {
    const stateBefore = {
      ...initialState,
      isLoading: true,
    };

    const action = {
      type: t.MOVIE_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(movieReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      error: action.payload.message,
    });
  });
});
