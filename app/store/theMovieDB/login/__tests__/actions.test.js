import {
  createSessionRequest,
  createSessionSuccess,
  createSessionFailure,
  deleteSessionRequest,
  deleteSessionSuccess,
  deleteSessionFailure,
} from '../actions';
import * as t from '../actionTypes';

describe('Authentication - actions', () => {
  describe('Authentication - create session actions', () => {
    it('createSessionRequest', () => {
      const payload = {
        values: {
          username: 'login',
          password: 'password',
        },
        actions: {
          setSubmitting: true,
        },
      };
      expect(createSessionRequest(payload)).toEqual({
        type: t.CREATE_SESSION_REQUEST,
        payload,
      });
    });

    it('createSessionSuccess', () => {
      const payload = { sessionId: 'sessionId' };
      expect(createSessionSuccess(payload)).toEqual({
        type: t.CREATE_SESSION_SUCCESS,
        payload,
      });
    });

    it('createSessionFailure', () => {
      const payload = { message: 'message error' };
      expect(createSessionFailure(payload)).toEqual({
        type: t.CREATE_SESSION_FAILURE,
        payload,
      });
    });
  });

  describe('Authentication - delete session actions', () => {
    it('deleteSessionRequest', () => {
      expect(deleteSessionRequest()).toEqual({
        type: t.DELETE_SESSION_REQUEST,
      });
    });

    it('deleteSessionSuccess', () => {
      expect(deleteSessionSuccess('')).toEqual({
        type: t.DELETE_SESSION_SUCCESS,
        payload: '',
      });
    });

    it('deleteSessionFailure', () => {
      const payload = { message: 'message error' };
      expect(deleteSessionFailure(payload)).toEqual({
        type: t.DELETE_SESSION_FAILURE,
        payload,
      });
    });
  });
});
