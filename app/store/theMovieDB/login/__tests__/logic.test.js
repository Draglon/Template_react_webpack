import Cookies from 'js-cookie';
import { httpClientMock, multiHttpClientMock } from '../../../../helpers/httpClientMock';
import { createSessionLogic, deleteSessionLogic } from '../logic';

import { createSessionSuccess, deleteSessionSuccess } from '../actions';

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

      it('Should return correct URL', () => {
        expect(apiClient.get).toHaveBeenCalledWith('authentication/token/new');
      });

      describe('Create session with login SUCCESS', () => {
        it('Should return correct URL', () => {
          expect(apiClient.post).toHaveBeenCalledWith('authentication/token/validate_with_login', {
            username,
            password,
            request_token: requestToken,
          });
        });

        describe('Create new session SUCCESS', () => {
          it('Should return correct URL', () => {
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
      });
    });

    describe('CREATE_SESSION_FAILURE', () => {
      const apiClient = httpClientMock({
        method: 'get',
        response: {},
        reject: true,
      });

      createSessionLogic.process({ apiClient, action }, dispatch, done);

      it('Should throw an Error', () => {
        expect(() => {
          throw new Error();
        }).toThrow();
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
      const apiClient = httpClientMock({
        method: 'delete',
        response: {},
        reject: true,
      });

      deleteSessionLogic.process({ apiClient }, dispatch, done);

      it('Should throw an Error', () => {
        expect(() => {
          throw new Error();
        }).toThrow();
      });
    });
  });
});
