import { loginReducer, loginInitialState } from '../reducers';
import * as t from '../actionTypes';

describe('Authentication - reducers', () => {
  describe('Authentication - create session reducers', () => {
    it('state is undefined', () => {
      expect(loginReducer(undefined, {})).toEqual(loginInitialState);
    });

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
        sessionId: null,
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

    it('CREATE_SESSION_SUCCESS', () => {
      const stateBefore = {
        isLoading: true,
        sessionId: null,
        error: null,
      };

      const action = {
        type: t.CREATE_SESSION_SUCCESS,
        payload: 'session _id key',
      };

      expect(loginReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        sessionId: action.payload,
      });
    });

    it('CREATE_SESSION_FAILURE', () => {
      const stateBefore = {
        isLoading: true,
        sessionId: null,
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
  });

  describe('Authentication - delete session reducers', () => {
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

    it('DELETE_SESSION_SUCCESS', () => {
      const stateBefore = {
        isLoading: true,
        sessionId: null,
        error: null,
      };

      const action = {
        type: t.DELETE_SESSION_SUCCESS,
        payload: 'session _id key',
      };

      expect(loginReducer(stateBefore, action)).toEqual({
        ...stateBefore,
        isLoading: false,
        sessionId: action.payload,
      });
    });

    it('DELETE_SESSION_FAILURE', () => {
      const stateBefore = {
        isLoading: true,
        sessionId: null,
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
});
