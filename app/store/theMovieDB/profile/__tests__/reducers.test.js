import { profileReducer, initialState } from '../reducers';
import * as t from '../actionTypes';

describe('Profile - reducer', () => {
  it('state is undefined', () => {
    expect(profileReducer(undefined, {})).toEqual(initialState);
  });

  it('PROFILE_REQUEST after situation without error', () => {
    const action = {
      type: t.PROFILE_REQUEST,
    };

    expect(profileReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      error: null,
    });
  });

  it('PROFILE_SUCCESS', () => {
    const stateBefore = {
      isLoading: true,
      data: {
        id: null,
      },
      error: null,
    };

    const action = {
      type: t.PROFILE_SUCCESS,
      payload: {
        id: 'some id',
      },
    };

    expect(profileReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      data: {
        id: action.payload.id,
      },
    });
  });

  it('PROFILE_FAILURE', () => {
    const stateBefore = {
      isLoading: true,
      data: {
        id: null,
      },
      error: null,
    };

    const action = {
      type: t.PROFILE_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(profileReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      error: action.payload.message,
    });
  });
});
