import { loginReducer } from '../reducers';
import * as t from '../actionTypes';

describe('Authentication - reducers', () => {
  describe('Authentication - create session reducers', () => {
    it('state is undefined', () => {
      expect(loginReducer(undefined, {})).toEqual({
        isLoading: false,
        sessionId: '',
        error: null,
      });
    });

    it('CREATE_SESSION_REQUEST', () => {
      const state = {
        isLoading: false,
        error: 'some error',
      };

      const action = {
        type: t.CREATE_SESSION_REQUEST,
      };

      expect(loginReducer(state, action)).toEqual({
        isLoading: true,
        error: null,
      });
    });

    it('CREATE_SESSION_SUCCESS', () => {
      const state = {
        isLoading: true,
        sessionId: '',
      };

      const action = {
        type: t.CREATE_SESSION_SUCCESS,
        payload: 'session _id key',
      };

      expect(loginReducer(state, action)).toEqual({
        isLoading: false,
        sessionId: action.payload,
      });
    });

    it('CREATE_SESSION_FAILURE', () => {
      const state = {
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.CREATE_SESSION_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(loginReducer(state, action)).toEqual({
        isLoading: false,
        error: action.payload,
      });
    });
  });

  describe('Authentication - delete session reducers', () => {
    it('DELETE_SESSION_REQUEST', () => {
      const state = {
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.DELETE_SESSION_REQUEST,
      };

      expect(loginReducer(state, action)).toEqual({
        isLoading: true,
        error: null,
      });
    });

    it('DELETE_SESSION_SUCCESS', () => {
      const state = {
        isLoading: true,
        sessionId: null,
      };

      const action = {
        type: t.DELETE_SESSION_SUCCESS,
        payload: 'session _id key',
      };

      expect(loginReducer(state, action)).toEqual({
        isLoading: false,
        sessionId: action.payload,
      });
    });

    it('DELETE_SESSION_FAILURE', () => {
      const state = {
        isLoading: true,
        error: null,
      };

      const action = {
        type: t.DELETE_SESSION_FAILURE,
        payload: {
          message: 'error message',
        },
      };

      expect(loginReducer(state, action)).toEqual({
        isLoading: false,
        error: action.payload,
      });
    });
  });
});
