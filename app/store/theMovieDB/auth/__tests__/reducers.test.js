import reducer, { initialState } from '../reducers';
import * as t from '../actionTypes';

describe('Authentication reducer', () => {
  it('state is undefined', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  // ACCESS_REQUEST
  it('ACCESS_REQUEST after situation without error', () => {
    const action = {
      type: t.ACCESS_REQUEST,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      error: null,
    });
  });

  it('ACCESS_REQUEST after error', () => {
    const initialStateWithError = {
      isLoading: false,
      session_id: null,
      error: 'Unknown error',
    };

    const action = {
      type: t.ACCESS_REQUEST,
    };

    expect(reducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isLoading: true,
      error: null,
    });
  });

  // ACCESS_SUCCESS
  it('ACCESS_SUCCESS', () => {
    const stateBefore = {
      isLoading: true,
      session_id: null,
      error: null,
    };

    const action = {
      type: t.ACCESS_SUCCESS,
      payload: 'session _id key',
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      session_id: action.payload,
    });
  });

  // ACCESS_FAILURE
  it('ACCESS_FAILURE', () => {
    const stateBefore = {
      isLoading: true,
      session_id: null,
      error: null,
    };

    const action = {
      type: t.ACCESS_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      error: action.payload,
    });
  });

  // ACCESS_REMOVE
  it('ACCESS_REMOVE', () => {
    const action = {
      type: t.ACCESS_REMOVE,
    };

    expect(reducer(initialState, action)).toEqual({
      isLoading: false,
      session_id: null,
      error: null,
    });
  });
});
