import { loginReducer, loginInitialState } from '../reducers';
import * as t from '../actionTypes';

describe('Authentication reducer', () => {
  it('state is undefined', () => {
    expect(loginReducer(undefined, {})).toEqual(loginInitialState);
  });

  // CREATE_SESSION_REQUEST
  it('CREATE_SESSION_REQUEST after situation without error', () => {
    const action = {
      type: t.CREATE_SESSION_REQUEST,
    };

    expect(loginReducer(loginInitialState, action)).toEqual({
      ...loginInitialState,
      isLoading: true,
      error: null,
    });
  });

  it('CREATE_SESSION_REQUEST after error', () => {
    const initialStateWithError = {
      isLoading: false,
      session_id: null,
      error: 'Unknown error',
    };

    const action = {
      type: t.CREATE_SESSION_REQUEST,
    };

    expect(loginReducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isLoading: true,
      error: null,
    });
  });

  // CREATE_SESSION_SUCCESS
  it('CREATE_SESSION_SUCCESS', () => {
    const stateBefore = {
      isLoading: true,
      session_id: null,
      error: null,
    };

    const action = {
      type: t.CREATE_SESSION_SUCCESS,
      payload: 'session _id key',
    };

    expect(loginReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      session_id: action.payload,
    });
  });

  // CREATE_SESSION_FAILURE
  it('CREATE_SESSION_FAILURE', () => {
    const stateBefore = {
      isLoading: true,
      session_id: null,
      error: null,
    };

    const action = {
      type: t.CREATE_SESSION_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(loginReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      error: action.payload,
    });
  });

  // DELETE_SESSION_REQUEST
  it('DELETE_SESSION_REQUEST', () => {
    const action = {
      type: t.DELETE_SESSION_REQUEST,
    };

    expect(loginReducer(loginInitialState, action)).toEqual({
      ...loginInitialState,
      isLoading: true,
      error: null,
    });
  });

  // DELETE_SESSION_SUCCESS
  it('DELETE_SESSION_SUCCESS', () => {
    const stateBefore = {
      isLoading: true,
      session_id: null,
      error: null,
    };

    const action = {
      type: t.DELETE_SESSION_SUCCESS,
      payload: 'session _id key',
    };

    expect(loginReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      session_id: action.payload,
    });
  });

  // DELETE_SESSION_FAILURE
  it('DELETE_SESSION_FAILURE', () => {
    const stateBefore = {
      isLoading: true,
      session_id: null,
      error: null,
    };

    const action = {
      type: t.DELETE_SESSION_FAILURE,
      payload: {
        message: 'error message',
      },
    };

    expect(loginReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      error: action.payload,
    });
  });
});
