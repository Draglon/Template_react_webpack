import { profileReducer } from '../reducers';
import * as t from '../actionTypes';

describe('Profile - reducer', () => {
  it('state is undefined', () => {
    expect(profileReducer(undefined, {})).toEqual({
      isLoading: false,
      data: {
        id: '',
      },
      error: null,
    });
  });

  it('PROFILE_REQUEST after situation without error', () => {
    const state = {
      isLoading: false,
      error: 'some error',
    };

    const action = {
      type: t.PROFILE_REQUEST,
    };

    expect(profileReducer(state, action)).toEqual({
      isLoading: true,
      error: null,
    });
  });

  it('PROFILE_SUCCESS', () => {
    const state = {
      isLoading: true,
      data: { id: '' },
    };

    const action = {
      type: t.PROFILE_SUCCESS,
      payload: {
        id: 'some id',
      },
    };

    expect(profileReducer(state, action)).toEqual({
      isLoading: false,
      data: {
        id: action.payload.id,
      },
    });
  });

  it('PROFILE_FAILURE', () => {
    const state = {
      isLoading: true,
      error: null,
    };

    const action = {
      type: t.PROFILE_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(profileReducer(state, action)).toEqual({
      isLoading: false,
      error: action.payload.message,
    });
  });
});
