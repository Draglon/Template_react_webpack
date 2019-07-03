import { profileReducer, initialState } from '../reducers';
import * as t from '../actionTypes';

describe('Account profile reducer', () => {
  it('state is undefined', () => {
    expect(profileReducer(undefined, {})).toEqual(initialState);
  });

  // PROFILE_REQUEST
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

  // PROFILE_SUCCESS
  it('PROFILE_SUCCESS', () => {
    const stateBefore = {
      isLoading: true,
      data: {
        id: null,
        avatar: null,
        name: null,
        username: null,
      },
      error: null,
    };

    const action = {
      type: t.PROFILE_SUCCESS,
      payload: {
        id: 'some id',
        avatar: 'some image hash',
        name: 'some name',
        username: 'some username',
      },
    };

    expect(profileReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      data: {
        id: action.payload.id,
        avatar: action.payload.avatar,
        name: action.payload.name,
        username: action.payload.username,
      },
    });
  });

  // PROFILE_FAILURE
  it('PROFILE_FAILURE', () => {
    const stateBefore = {
      isLoading: true,
      data: {
        id: null,
        avatar: null,
        name: null,
        username: null,
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
