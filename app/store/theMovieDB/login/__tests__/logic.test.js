import Cookies from 'js-cookie';
import { httpClientMock, multiHttpClientMock } from '../../../../helpers/httpClientMock';
import { createSessionLogic, deleteSessionLogic } from '../logic';

import {
  createSessionSuccess,
  createSessionFailure,
  deleteSessionSuccess,
  deleteSessionFailure,
} from '../actions';

describe('Delete - logic', () => {
  const dispatch = jest.fn();
  const done = jest.fn();

  describe('CREATE_SESSION_REQUEST', () => {
    const action = {
      payload: {
        values: {
          username: 'username',
          password: 'password',
        },
        actions: {
          setSubmitting: jest.fn(),
        },
      },
    };

    describe('Create Request Token SUCCESS', () => {
      const requests = [
        { method: 'get', response: { data: { request_token: 'token' } } },
        { method: 'post', response: { data: { request_token: 'new token' } } },
        { method: 'post', response: { data: { session_id: '465sdc3awa' } } },
      ];
      const apiClient = multiHttpClientMock(requests);

      createSessionLogic.process({ apiClient, action }, dispatch, done);
      const { username, password } = action.payload.values;
      const requestToken = requests[0].response.data.request_token;
      const requestTokenWithLogin = requests[1].response.data.request_token;
      const requestSessionId = requests[2].response.data.session_id;

      it('Should return correct URL - create token', () => {
        expect(apiClient.get).toHaveBeenCalledWith('authentication/token/new');
      });

      it('Should return correct URL - create session with login', () => {
        expect(apiClient.post).toHaveBeenCalledWith('authentication/token/validate_with_login', {
          username,
          password,
          request_token: requestToken,
        });
      });

      it('Should return correct URL - create new session', () => {
        expect(apiClient.post).toHaveBeenCalledWith('authentication/session/new', {
          request_token: requestTokenWithLogin,
        });
      });

      it('dispatches createSessionSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(createSessionSuccess(requestSessionId));
      });

      it('calls formik setSubmitting()', () => {
        expect(action.payload.actions.setSubmitting).toHaveBeenCalledWith(false);
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('CREATE_SESSION_FAILURE', () => {
      const error = {
        status_message: 'error message',
      };
      const apiClient = httpClientMock({
        method: 'get',
        response: error,
        reject: true,
      });

      createSessionLogic.process({ apiClient, action }, dispatch, done);

      it('dispatches createSessionFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(createSessionFailure(error));
      });
    });
  });

  describe('DELETE_SESSION_REQUEST', () => {
    Cookies.get = jest.fn();
    const sessionId = Cookies.get('sessionId');

    describe('Delete session SUCCESS', () => {
      const request = {
        method: 'delete',
        response: {
          data: {
            success: true,
          },
        },
      };
      const apiClient = httpClientMock(request);

      deleteSessionLogic.process({ apiClient }, dispatch, done);

      it('Should return correct URL', () => {
        expect(apiClient.delete).toHaveBeenCalledWith('authentication/session', {
          data: { session_id: sessionId },
        });
      });

      it('dispatches deleteSessionSuccess()', () => {
        expect(dispatch).toHaveBeenCalledWith(deleteSessionSuccess(''));
      });

      it('calls done', () => {
        expect(done).toHaveBeenCalled();
      });
    });

    describe('Delete session FAILURE', () => {
      const error = {
        status_message: 'error message',
      };
      const apiClient = httpClientMock({
        method: 'delete',
        response: error,
        reject: true,
      });

      deleteSessionLogic.process({ apiClient }, dispatch, done);

      it('dispatches deleteSessionFailure()', () => {
        expect(dispatch).toHaveBeenCalledWith(deleteSessionFailure(error));
      });
    });
  });
});
